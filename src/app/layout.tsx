// src/app/layout.tsx
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Travis Adams – Fullstack Engineer",
  description: "Portfolio site for Travis Adams",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-white min-h-screen">
        <div className="flex">
          {/* Sidebar is rendered once here */}
          <Sidebar />

          {/* Main scrollable content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

