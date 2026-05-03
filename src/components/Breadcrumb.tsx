import { Link } from "@tanstack/react-router";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-cream/60">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-cream/30">›</span>}
          {item.to ? (
            <Link to={item.to} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
