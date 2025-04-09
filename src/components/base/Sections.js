import { cn } from '@/utils';

// Basic container - centered with max width
export const Container = ({ className, children }) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
  );
};

// Narrow container for content-focused sections
export const ContainerNarrow = ({ className, children }) => {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
  );
};

// Wide container for full-width sections
export const ContainerWide = ({ className, children }) => {
  return (
    <div className={cn('mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
  );
};

// Page container with responsive padding
export const PageContainer = ({ className, children }) => {
  return <div className={cn('w-full', className)}>{children}</div>;
};

// Section with standard padding
export const Section = ({ className, children }) => {
  return <section className={cn('py-12 md:py-16 lg:py-20', className)}>{children}</section>;
};

// Section with large vertical padding
export const SectionLarge = ({ className, children }) => {
  return <section className={cn('py-16 md:py-24 lg:py-32', className)}>{children}</section>;
};

// Section with small vertical padding
export const SectionSmall = ({ className, children }) => {
  return <section className={cn('py-8 md:py-12', className)}>{children}</section>;
};

// Section with no bottom padding
export const SectionNoBottom = ({ className, children }) => {
  return <section className={cn('pt-12 md:pt-16 lg:pt-20', className)}>{children}</section>;
};

// Section with no top padding
export const SectionNoTop = ({ className, children }) => {
  return <section className={cn('pb-12 md:pb-16 lg:pb-20', className)}>{children}</section>;
};

// Page section with nested container
export const PageSection = ({ className, children, containerClassName }) => {
  return (
    <section className={cn('py-12 md:py-16 lg:py-20', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

// Page section with small padding and nested container
export const PageSectionSmall = ({ className, children, containerClassName }) => {
  return (
    <section className={cn('py-8 md:py-12', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

// Page section with large padding and nested container
export const PageSectionLarge = ({ className, children, containerClassName }) => {
  return (
    <section className={cn('py-16 md:py-24 lg:py-32', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

// Hero section with responsive padding
export const HeroSection = ({ className, children }) => {
  return (
    <section className={cn('pt-20 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24', className)}>
      {children}
    </section>
  );
};

// Full-height section (100vh)
export const FullHeightSection = ({ className, children }) => {
  return (
    <section className={cn('min-h-screen flex flex-col justify-center py-10', className)}>
      {children}
    </section>
  );
};

// Divider section with subtle styling
export const DividerSection = ({ className, children }) => {
  return (
    <section className={cn('py-10 border-t border-gray-200 dark:border-gray-800', className)}>
      {children}
    </section>
  );
};

// Grid section with responsive columns
export const GridSection = ({ className, children, columns = 'md:grid-cols-2' }) => {
  return (
    <section className={cn('py-12 md:py-16 lg:py-20', className)}>
      <div className={cn('grid grid-cols-1 gap-8', columns)}>{children}</div>
    </section>
  );
};

// Card section with box shadow and rounded corners
export const CardSection = ({ className, children }) => {
  return (
    <section className={cn('bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 md:p-8', className)}>
      {children}
    </section>
  );
};

// Alternating background section
export const AlternatingSection = ({ className, children, isEven = false }) => {
  return (
    <section
      className={cn(
        'py-12 md:py-16',
        isEven ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900',
        className,
      )}
    >
      {children}
    </section>
  );
};
