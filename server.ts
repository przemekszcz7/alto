import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

// Support ES modules paths inside custom server if needed
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if we are running in production or development
const isProduction =
  process.env.NODE_ENV === "production" ||
  (!process.argv.some(arg => arg.includes("server.ts")) &&
   !process.argv.some(arg => arg.includes("dev")));

if (isProduction) {
  process.env.NODE_ENV = "production";
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development or fallback static configuration in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");

    // Serve hashed assets (compiled js, css, etc.) with aggressive immutable caching (1 year)
    app.use(
      "/assets",
      express.static(path.join(distPath, "assets"), {
        maxAge: 31536000000, // 1 year in ms
        immutable: true,
        fallthrough: false,
        setHeaders: (res) => {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        },
      })
    );

    // Serve static files (HTML, favicon, manifest, assets in root) with special cache rules
    app.use(
      express.static(distPath, {
        maxAge: 7200000, // 2h in ms
        setHeaders: (res, pathHeader) => {
          if (pathHeader.endsWith(".html")) {
            // HTML files must always revalidate to avoid serving stale layouts
            res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
          } else if (pathHeader.match(/\.(png|jpg|jpeg|gif|svg|ico|webp)$/)) {
            // Media assets can be safely cached for 30 days
            res.setHeader("Cache-Control", "public, max-age=2592000");
          } else if (pathHeader.match(/\.(js|css)$/)) {
            // Any other JS/CSS outside /assets can be cached for 1 year
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }
        },
      })
    );

    // Precise subfolder HTML page routing mappings in production
    app.get("/blog", (req, res) => {
      res.sendFile(path.join(distPath, "blog/index.html"));
    });

    app.get("/audyt", (req, res) => {
      res.sendFile(path.join(distPath, "audyt/index.html"));
    });

    app.get("/polityka-prywatnosci", (req, res) => {
      res.sendFile(path.join(distPath, "polityka-prywatnosci/index.html"));
    });

    app.get("/polityka-cookies", (req, res) => {
      res.sendFile(path.join(distPath, "polityka-cookies/index.html"));
    });

    app.get("/regulamin", (req, res) => {
      res.sendFile(path.join(distPath, "regulamin/index.html"));
    });

    // Root page fallback
    app.get("/", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });

    // Wildcard fallback
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
});
