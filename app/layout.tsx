import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'O Que Assistir?',
  description: 'Sugestões de filmes e séries para pessoas indecisas.',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <h1>{metadata.title}</h1>
        <h2>{metadata.description}</h2>
        <hr />
        {children}
        <hr />
        <Link href="/">Home</Link>
        <Link href="/lancamentos">Lançamentos</Link>
        <Link href="/sugestoes">Sugestões</Link>
      </body>
    </html>
  )
}
