import { useEffect } from 'react';

export function useMeta(meta = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const tags = Object.entries(meta).map(([key, content]) => {
      const metaTag = document.createElement('meta');
      if (key.startsWith('og:') || key.startsWith('twitter:')) {
        metaTag.setAttribute('property', key);
      } else {
        metaTag.setAttribute('name', key);
      }
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
      return metaTag;
    });

    return () => {
      tags.forEach(tag => document.head.removeChild(tag));
    };
  }, [meta]);
}
