import { type ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="bg-navy pt-32 pb-16 px-4">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          {children}
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream mt-4">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-cream/60 text-lg max-w-2xl">{subtitle}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
