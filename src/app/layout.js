import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter ,Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import {BsWhatsapp} from 'react-icons/bs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'] ,weight: '700' })

export const metadata = {
  title: 'Sallu Air Service',
  description: 'A Renowned Travel Agency in Bangladesh',
}
export const revalidate = 10
export default function RootLayout({ children }) {
  return (
    <>

    <html lang="en" suppressHydrationWarning={true}>
      {/* <head>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</head> */}
      <body className={`${roboto.className} + "bg-white" `}   >
      <Navbar/>
        {children}
        <Link href="https://wa.me/+8801779652600" rel="noopener noreferrer" target="_blank" className="fixed bottom-10 right-10 text-6xl text-green-600"> <BsWhatsapp/></Link>
        <Footer/>
        </body>
    </html>
    </>
  )
}
