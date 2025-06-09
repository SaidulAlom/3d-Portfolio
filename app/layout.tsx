import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saidul - 3D Portfolio',
  description: 'Creative Developer & 3D Artist - Crafting immersive digital experiences',
  keywords: ['portfolio', '3D', 'developer', 'React', 'Three.js', 'web development'],
  authors: [{ name: 'Alex Johnson' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            <div className="relative min-h-screen overflow-x-hidden">
              <Header />
              <PageTransition>
                <main className="relative z-10">
                  {children}
                </main>
              </PageTransition>
              <Footer />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}