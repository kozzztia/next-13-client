import '../public/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/Main";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Main>
          {children}
        </Main>
        <Footer/>
      </body>
    </html>
  )
}
