import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
  size?: 'small' | 'medium' | 'large' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles =
    variant === 'outline'
      ? 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
      : 'bg-blue-600 text-white hover:bg-blue-700';
  const sizeStyles =
    size === 'small'
      ? 'px-2.5 py-1.5 text-xs'
      : size === 'large'
        ? 'px-4 py-2 text-base'
        : size === 'icon'
          ? 'p-2'
          : 'px-3 py-1.5 text-sm';

  return (
    <button
      className={classNames(baseStyles, variantStyles, sizeStyles, className)}
      {...props}
    >
      {children}
    </button>
  );
};
