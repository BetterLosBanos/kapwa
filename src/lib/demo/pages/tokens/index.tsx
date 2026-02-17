import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import KapwaTokens from './kapwa-tokens';

const Tokens: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-gray-900 mb-8'>
          Token Guidelines
        </h1>

        {/* Kapwa Design System Section */}
        <Card className='mb-8'>
          <CardHeader>
            <h2 className='text-2xl font-semibold'>Kapwa Design System</h2>
            <p className='text-gray-800'>
              Our comprehensive design token system built with Tailwind CSS v4
            </p>
          </CardHeader>
          <CardContent>
            <KapwaTokens />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tokens;
