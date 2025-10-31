import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
};

// Título princiapl
export function Heading({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`font-['Roboto'] text-2xl font-bold text-gray-900 ${className}`}>
      {children}
    </h1>
  );
}

// Título de seção
export function Subheading({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`font-['Roboto'] text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </h2>
  );
}

// Texto normal
export function BodyText({ children, className = '' }: TypographyProps) {
  return (
    <p className={`font-['Roboto'] text-base text-gray-600 ${className}`}>
      {children}
    </p>
  );
}