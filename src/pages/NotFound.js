import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center px-4 text-center text-white">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you're looking for doesn’t exist.</p>
    </div>
  );
}
