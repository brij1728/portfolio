'use client';

import * as React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui';
import { Monitor, Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false); // Close the dropdown menu
  };

  const renderThemeIcon = (currentTheme: string | undefined) => {
    switch (currentTheme) {
      case 'light':
        return <Sun className='h-[1.2rem] w-[1.2rem]' />;
      case 'dark':
        return <Moon className='h-[1.2rem] w-[1.2rem]' />;
      default:
        return <Monitor className='h-[1.2rem] w-[1.2rem]' />;
    }
  };

  return (
    <div className='fixed top-4 left-4'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={() => setIsOpen(!isOpen)}>
          <button
            type='button'
            className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            {renderThemeIcon(theme)}
            <span className='sr-only'>Toggle theme</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='start'
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DropdownMenuItem
            onClick={() => handleThemeChange('system')}
            selected={theme === 'system'}
          >
            <Monitor className='mr-2 h-4 w-4' />
            <span>System</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange('light')}
            selected={theme === 'light'}
          >
            <Sun className='mr-2 h-4 w-4' />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange('dark')}
            selected={theme === 'dark'}
          >
            <Moon className='mr-2 h-4 w-4' />
            <span>Dark</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
