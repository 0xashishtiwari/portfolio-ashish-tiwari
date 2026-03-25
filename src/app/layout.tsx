// For adding custom fonts with other frameworks, see:
// https://tailwindcss.com/docs/font-family
import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/store/ThemeProvider";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Quote from "@/components/Quote";
import CursorGlow from "@/components/CursorGlow";

const fontSerif = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ashish Tiwari Portfolio",
  description: "Personal portfolio of Ashish Tiwari, showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 

  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning  >
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
(function() {
  try {
    const stored = localStorage.getItem('theme-store');
    if (stored) {
      const parsed = JSON.parse(stored);
      const theme = parsed.state?.theme;

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  } catch (e) {}
})();
`,
    }}
  />
</head>
      <body className={`${geist.variable} ${fontSerif.variable} ${fontMono.variable} antialiased transition-colors duration-400 ease-in-out `} >
        <ThemeProvider>
          <TooltipProvider>
            <CursorGlow/>
            <Navbar/>
            {children}
            <Quote/>
            <Footer/>
          </TooltipProvider>
        </ThemeProvider> 
      </body>
    </html>
  );
}