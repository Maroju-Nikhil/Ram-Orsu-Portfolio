import { type ReactNode, type ElementType } from 'react';
import { useReveal } from '@/hooks';

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  variant?: 'up' | 'clip';
  threshold?: number;
};

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  variant = 'up',
  threshold = 0.15,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold });
  const base = variant === 'clip' ? 'reveal-clip' : 'reveal';
  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
