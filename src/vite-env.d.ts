/// <reference types="vite/client" />

declare module '*.png?width=256&format=webp' {
  const content: string;
  export default content;
}

declare module '*.png?width=320&format=webp' {
  const content: string;
  export default content;
}

declare module '*.jpg?width=1200&format=webp' {
  const content: string;
  export default content;
}

declare module '*?url' {
  const content: string;
  export default content;
}

