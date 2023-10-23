import './globals.css'
// import { Inter } from 'next/font/google'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  icons: {
    // other: {
    //   rel: 'stylesheet',
    //   url: 'https://use.typekit.net/szq0tzq.css',
    // },
  },
}

//https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
        <Head>
          {/* IMPORTANTE
          Como la tipografía no se añade correctamente, hay que pegar este link
          en el head del html de forma manual */}
          {/* <link rel="stylesheet" href="https://use.typekit.net/szq0tzq.css" key="typekit"/> */}
        </Head>
        {children}
    </html>
  )
}
