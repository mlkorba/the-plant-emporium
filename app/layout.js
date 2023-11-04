import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Plant Emporium | Nuture Nature",
  description:
    "The Plant Emporium is a vibrant plant shop in the heart of the city, offering a wide variety of indoor and outdoor plants, along with expert advice and stylish accessories for plant enthusiasts. It's a one-stop destination for all things green, fostering a delightful atmosphere for customers to explore and find their perfect plant companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
