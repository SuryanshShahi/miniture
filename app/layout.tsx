import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <div
          className="elfsight-app-55359b98-c5f3-4e4b-948e-1ef6970778fa"
          data-elfsight-app-lazy
        ></div>
      </body>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
    </html>
  );
}
