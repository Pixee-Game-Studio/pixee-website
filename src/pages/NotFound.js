import React from 'react';

export default function NotFound() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center px-4 text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you're looking for doesn’t exist.</p>
    </div>
  );
}
