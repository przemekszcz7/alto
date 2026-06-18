import { useState, useEffect } from 'react';

export type RoutePath = 
  | '/' 
  | '/blog' 
  | '/audyt' 
  | '/polityka-prywatnosci' 
  | '/polityka-cookies' 
  | '/regulamin'
  | '/blog/jak-bez-budzetu-reklamowego-zwiekszyc-zasieg'
  | '/blog/czy-twoja-strona-odstrasza-klientow'
  | '/blog/ile-kosztuje-prowadzenie-social-mediow';

export function getRouteFromPath(): RoutePath {
  const path = window.location.pathname;
  const hash = window.location.hash;
  
  // Handle fallback hash routing if any user still uses those
  if (hash.startsWith('#/')) {
    const hashPath = hash.substring(1) as RoutePath;
    const validRoutes: RoutePath[] = [
      '/', 
      '/blog', 
      '/audyt', 
      '/polityka-prywatnosci', 
      '/polityka-cookies', 
      '/regulamin',
      '/blog/jak-bez-budzetu-reklamowego-zwiekszyc-zasieg',
      '/blog/czy-twoja-strona-odstrasza-klientow',
      '/blog/ile-kosztuje-prowadzenie-social-mediow'
    ];
    if (validRoutes.includes(hashPath)) {
      return hashPath;
    }
  }

  if (path.includes('/blog/jak-bez-budzetu-reklamowego-zwiekszyc-zasieg')) return '/blog/jak-bez-budzetu-reklamowego-zwiekszyc-zasieg';
  if (path.includes('/blog/czy-twoja-strona-odstrasza-klientow')) return '/blog/czy-twoja-strona-odstrasza-klientow';
  if (path.includes('/blog/ile-kosztuje-prowadzenie-social-mediow')) return '/blog/ile-kosztuje-prowadzenie-social-mediow';
  if (path.includes('/blog')) return '/blog';
  if (path.includes('/audyt')) return '/audyt';
  if (path.includes('/polityka-prywatnosci')) return '/polityka-prywatnosci';
  if (path.includes('/polityka-cookies')) return '/polityka-cookies';
  if (path.includes('/regulamin')) return '/regulamin';
  
  return '/';
}

const listeners = new Set<() => void>();

export function useHashRoute() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(getRouteFromPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRouteFromPath());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    listeners.add(handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    
    // Call once to ensure correct initial state
    handleLocationChange();

    return () => {
      listeners.delete(handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (path: RoutePath) => {
    // Detect if we are on GitHub Pages subpath (e.g. /repo-name/blog/)
    const segments = window.location.pathname.split('/').filter(Boolean);
    let targetPath: string = path;

    // If the first segment is not one of our routes, we assume it's a repository subpath (e.g., /alto-agency)
    const possibleRepoSeg = segments[0];
    const systemSegs = ['blog', 'audyt', 'polityka-prywatnosci', 'polityka-cookies', 'regulamin', 'index.html'];
    
    if (possibleRepoSeg && !systemSegs.includes(possibleRepoSeg)) {
      targetPath = `/${possibleRepoSeg}${path === '/' ? '' : path}`;
    }

    window.history.pushState({}, '', targetPath);
    listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error(err);
      }
    });
  };

  return { currentRoute, navigate };
}

