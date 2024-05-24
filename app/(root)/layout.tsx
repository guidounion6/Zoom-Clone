
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import StreamVideoProvider from '@/providers/streamClientProvider'

export const metadata: Metadata = {
    title: "Yoom",
    description: "Video calling app",
    icons: "icons/logo.svg"
  };

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider> 
            {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout