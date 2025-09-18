import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../themes/ThemeProvider";

export const metadata: Metadata = {
  title: 'Minera San Cristobal S.A.',
  description: 'Líder en extracción responsable y desarrollo sostenible de recursos minerales',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ margin: 0, padding: 0 }}>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
