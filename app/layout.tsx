import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google"
const inter = Inter({
  subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={inter.className}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="ligth"
            enableSystem
            disableTransitionOnChange
          >
                      {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
