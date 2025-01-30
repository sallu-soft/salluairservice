import Navbar from '@/components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link'

const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export const metadata = {
  title: 'Sallu Air Service',
  description: 'A Renowned Travel Agency in Bangladesh',
}

export const revalidate = 10

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${roboto.className} bg-white`}>
        <Navbar />
        {children}
        <Link
          href="https://wa.me/+8801812215760"
          rel="noopener noreferrer"
          target="_blank"
          className="fixed bottom-10 right-10 text-6xl text-green-600"
        >
          <BsWhatsapp />
        </Link>
        <Footer />
      </body>
    </html>
  )
}