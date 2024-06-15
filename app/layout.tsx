import type { Metadata } from "next";
import "./globals.css"
import { ThemeProvider } from "@/components/theme"
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconBrandBlogger, IconInfoHexagon } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Hanan",
  description: "Hanan's Portfolio",
};


export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconInfoHexagon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: (
        <IconBrandBlogger className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary-50 dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
