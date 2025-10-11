"use client";
import { clsx } from 'clsx';
import React, { createContext, useContext, useState, useEffect, useRef, ReactNode, ButtonHTMLAttributes, HTMLAttributes, forwardRef, LiHTMLAttributes } from 'react';

interface DropdownContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropdownContext = createContext<DropdownContextType>({
  open: false,
  setOpen: () => {},
});

interface DropdownProps {
  children: ReactNode;
}

export function Dropdown({ children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function close(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    
    if (open) {
      window.addEventListener("click", close);
    }
    
    return function removeListener() {
      window.removeEventListener("click", close);
    };
  }, [open]);
  
  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className="relative m-1">
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

interface DropdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const DropdownButton = forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ children, className, onClick, ...props }, ref) => {
    const { open, setOpen } = useContext(DropdownContext);
    
    function toggleOpen(e: React.MouseEvent<HTMLButtonElement>) {
      setOpen(!open);
      onClick?.(e);
    }
    
    const defaultClassName = "rounded px-4 py-2 font-bold text-white bg-secondary flex items-center";
    
    return (
      <button 
        ref={ref}
        onClick={toggleOpen} 
        className={clsx(className, defaultClassName)}
        {...props}
      >
        {children}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          width={15} 
          height={15} 
          strokeWidth={4} 
          stroke="currentColor" 
          className={`ml-2 transition ${open ? "rotate-180" : "rotate-0"}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    );
  }
);

DropdownButton.displayName = 'DropdownButton';

interface DropdownContentProps {
  children: ReactNode;
}

export function DropdownContent({ children }: DropdownContentProps) {
  const { open } = useContext(DropdownContext);
  
  return (
    <div 
      className={`absolute z-20 rounded border border-gray-300 bg-white overflow-hidden my-1 overflow-y-auto ${open ? "shadow-md" : "hidden"}`}
    >
      {children}
    </div>
  );
}

interface DropdownListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export function DropdownList({ children, ...props }: DropdownListProps) {
  const { setOpen } = useContext(DropdownContext);
  
  return (
    <ul 
      onClick={() => setOpen(false)} 
      className="divide-y divide-gray-200 text-gray-700" 
      {...props}
    >
      {children}
    </ul>
  );
}

interface DropdownItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

export function DropdownItem({ children, ...props }: DropdownItemProps) {
  return (
    <li className='px-4 py-2 md:hover:bg-dimmed transition' {...props}>
        {children}
    </li>
  );
}

