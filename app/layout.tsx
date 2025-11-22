import type { Metadata, Viewport } from "next";
import { Playfair } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import QueryProvider from "@/components/providers/query-provider";




const playfair = Playfair({
  subsets: ['latin'],
  // weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "Bitume News",
  description: "Your daily dose of news",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bitume News",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.className} space-y-8  antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            <div className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>

  );
}
