import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Header from "@/components/header";


export const metadata = {
  title: "Digital Publishing System",
  description: "Powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: shadesOfPurple,
            }}
          >
             <ConvexClientProvider>
              <Header />
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">

                {children}
              </main>
              <footer className="relative z-10 border-t py-8 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto text-center">
                  <p className="text-muted-foreground">
                    Made with ❤️ by{" "}
                    <span className="text-foreground font-semibold">R &amp; S</span>
                  </p>
                </div>
              </footer>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
