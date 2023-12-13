'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from './redux/store';

export const metadata: Metadata = {
    title: 'Quizzes',
    description: 'Generated by create next app',
    icons: '/assets/images/logoApp.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>Quizzes</title>
                <link rel='icon' href='/assets/images/logoApp.png' />
            </head>
            <body>
                <Provider store={store}>
                    <SessionProvider>{children}</SessionProvider>
                </Provider>
                <ToastContainer />
            </body>
        </html>
    );
}
