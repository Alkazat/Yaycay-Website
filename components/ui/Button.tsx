import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type Variant = 'cta' | 'primary' | 'ghost';
type Size = 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes(variant: Variant, size: Size, extra?: string) {
  return [styles.btn, styles[variant], styles[size], extra].filter(Boolean).join(' ');
}

/** Chunky, outlined, glossy CTA button. Min tap target enforced in CSS. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const cls = classes(variant, size, className);

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const isInternal = href.startsWith('/') || href.startsWith('#');
    if (isInternal) {
      return (
        <Link href={href} className={cls} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
