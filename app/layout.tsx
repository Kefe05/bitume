import type { Metadata } from "next";
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
  title: "News Today",
  description: "Your no 1 news platform ",
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
