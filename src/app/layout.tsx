import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ProtoPilot AI",
    description: "Advanced Prototyping and Project Management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Toaster position="top-right" richColors />
                {children}
            </body>
        </html>
    );
}
