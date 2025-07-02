import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Inter } from "next/font/google"
const inter = Inter({
  subsets:['latin']
})

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
        <div className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="ligth"
            enableSystem
            disableTransitionOnChange
          >
            <div className="[--header-height:calc(--spacing(14))]">
              <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                  <AppSidebar />
                  <SidebarInset>
                    <div className="flex flex-1 flex-col gap-4 p-6 bg-(--muted)">
                      {children}
                    </div>
                  </SidebarInset>
                </div>
              </SidebarProvider>
            </div>
          </ThemeProvider>
        </div>
  );
}
