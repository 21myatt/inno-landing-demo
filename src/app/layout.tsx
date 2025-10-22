import "./globals.css";
import { LangProvider } from "@/app/context/LangContext";

export const metadata = {
  title: "Inno House — Digital Skills for Migrant Youth",
  description:
    "Empowering migrant youth with modern digital skills through blended learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
