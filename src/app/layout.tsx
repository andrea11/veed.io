import './globals.css'
import Banner from "@/app/Banner";
import Header from "@/app/Header";

export const metadata = {
  title: 'Github Repos',
  description: 'A simple app to search for Github repos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full"><Banner/><Header/>{children}</body>
    </html>
  )
}
