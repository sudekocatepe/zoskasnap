// src/components/AuthWrapper.tsx

"use client";

import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

// AuthWrapper Component to manage authentication session
const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      {/* Render child components within the session provider */}
      {children}
    </SessionProvider>
  );
};

export default AuthWrapper;
