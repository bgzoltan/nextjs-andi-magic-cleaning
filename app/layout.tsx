import type { Metadata } from "next";
import { Ruda, Rubik_Glitch } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { ReviewProvider } from "../context/selectedReviewContext";

export const rudaFont = Ruda({
  subsets: ["latin"],
});

export const rubikGlitchFont = Rubik_Glitch({
  weight: "400",
});

// Metadata to improve SEO and provide information about the page.
// This metadata will be used in the head of the document, but can be overwritten in each page with a specific title or description
export const metadata: Metadata = {
  title: {
    default: "Magic Andi Cleaning",
    template: "%s | Magic Andi Cleaning",
  },
  description:
    "Professional Home and Office Cleaning Services in Gold Coast, Australia. Book Your Cleaning Today!",
};

// Root Layout pattern> This layout will be used in all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rudaFont.className}`}>
        {/* Provider Patter> */}
        <ReviewProvider>
          {/* Shell Pattern */}
          <Header />
          {/* Composition */}
          {children}
          <Footer />
        </ReviewProvider>
      </body>
    </html>
  );
}
