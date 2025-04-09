import { cn } from '@/utils';

// Landing page
export const TypographyH1 = ({ className, children }) => {
  return (
    <h1 className={cn('scroll-m-20 text-6xl tracking-tight text-primary first:mt-0', className)}>
      {children}
    </h1>
  );
};

export const TypographyH2 = ({ className, children }) => {
  return (
    <h2 className={cn('scroll-m-20 text-5xl tracking-tight text-primary first:mt-0', className)}>
      {children}
    </h2>
  );
};

export const TypographyH3 = ({ className, children }) => {
  return (
    <h3 className={cn('scroll-m-20 text-4xl tracking-tight text-primary first:mt-0', className)}>
      {children}
    </h3>
  );
};

export const TypographyH4 = ({ className, children }) => {
  return (
    <h4 className={cn('scroll-m-20 text-3xl tracking-tight text-primary first:mt-0', className)}>
      {children}
    </h4>
  );
};

export const TypographyH5 = ({ className, children }) => {
  return (
    <h5 className={cn('scroll-m-20 text-2xl tracking-tight text-primary first:mt-0', className)}>
      {children}
    </h5>
  );
};

export const TypographyH6 = ({ className, children }) => {
  return (
    <h5 className={cn('scroll-m-20 text-xl tracking-tight text-primary first:mt-0', className)}>
      {children}
    </h5>
  );
};

export const TypographyP = ({ className, children }) => {
  return <p className={cn('scroll-m-20 leading-7 text-primary', className)}>{children}</p>;
};

// App pages

export const TypographyHero = ({ className, children }) => {
  return (
    <h1 className={cn('scroll-m-20 text-7xl tracking-tight text-primary', className)}>
      {children}
    </h1>
  );
};

export const TypographyTitle = ({ className, children }) => {
  return (
    <h2 className={cn('scroll-m-20 text-5xl tracking-tight text-primary', className)}>
      {children}
    </h2>
  );
};

export const TypographySubtitle = ({ className, children }) => {
  return (
    <p
      className={cn(
        'sans-serif scroll-m-20 text-2xl tracking-tight text-muted-foreground',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const TypographySectionTitle = ({ className, children }) => {
  return (
    <h3 className={cn('scroll-m-20 text-4xl tracking-tight text-primary', className)}>
      {children}
    </h3>
  );
};

export const TypographySectionLabel = ({ className, children }) => {
  return (
    <h3 className={cn('scroll-m-20 text-xl font-normal tracking-tight text-primary', className)}>
      {children}
    </h3>
  );
};

export const TypographyLabel = ({ className, children }) => {
  return (
    <h3
      className={cn(
        'sans-serif scroll-m-20 text-sm font-normal tracking-tight text-muted-foreground text-primary',
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyText = ({ className, children }) => {
  return <p className={cn('scroll-m-20 font-normal text-primary', className)}>{children}</p>;
};

export const TypographyStatus = ({ className, children }) => {
  return (
    <p
      className={cn('text-md sans-serif scroll-m-20 font-normal text-muted-foreground', className)}
    >
      {children}
    </p>
  );
};
