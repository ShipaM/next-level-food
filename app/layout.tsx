import MainHeader from "@/components/main-header";
import "./globals.css";
import { Quicksand, Montserrat } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${montserrat.className}`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
