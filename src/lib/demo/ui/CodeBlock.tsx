import React, { useState } from 'react';
import { cn } from '@kapwa/utils';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The command to display and copy
   */
  children: string;
}

const CodeBlock = ({ children, className, ...props }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  return (
    <div
      className={cn(
        'relative flex items-center justify-between gap-2',
        'px-4 py-3 rounded-lg',
        'kapwa-bg-gray-50 border kapwa-border-gray-200',
        'font-mono text-sm kapwa-text-gray-900',
        className
      )}
      {...props}
    >
      <code className='flex-1 overflow-x-auto whitespace-nowrap'>
        {children}
      </code>
      <button
        type='button'
        onClick={handleCopy}
        className={cn(
          'shrink-0 inline-flex items-center gap-1.5',
          'px-2.5 py-1.5 rounded-md text-xs',
          'transition-colors duration-200',
          'hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500',
          copied
            ? 'kapwa-bg-success-weak kapwa-text-success'
            : 'bg-transparent kapwa-text-gray-600'
        )}
        aria-label={copied ? 'Copied!' : 'Copy command to clipboard'}
      >
        {copied ? (
          <>
            <Check className='h-3.5 w-3.5' />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className='h-3.5 w-3.5' />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

export { CodeBlock };
export type { CodeBlockProps };
