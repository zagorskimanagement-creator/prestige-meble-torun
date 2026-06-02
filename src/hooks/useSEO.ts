import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  ogTitle?: string;
  ogImage?: string;
}

export function useSEO({ title, description, ogTitle, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [key, val] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(key, val.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    if (ogTitle || title) {
      setMeta('meta[property="og:title"]', 'content', ogTitle ?? title);
    }
    if (ogImage) {
      setMeta('meta[property="og:image"]', 'content', ogImage);
    }
  }, [title, description, ogTitle, ogImage]);
}
