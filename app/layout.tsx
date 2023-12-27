import Link from 'next/link'
import './globals.css'
import Button from './components/button'
import Opcoes from './components/opcoes'

export const metadata = {
  title: 'O Que Assistir?',
  description: 'Sugestões de filmes e séries para pessoas indecisas.',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className='font-roboto min-h-screen justify-center justify-items-center py-6 bg-customColor-dark text-white'>
        <header className='text-center'>
          <h1 className='font-rokkitt uppercase font-bold'><Link href="/">{metadata.title}</Link></h1>
          <h6 className='italic font-light mt-4'>{metadata.description}</h6>
        </header>

        {children}
        
        <footer className='text-center self-end fixed bottom-0 p-6 bg-customColor-dark opacity-90 w-screen'>
          <nav className='navlinks'>
            <Link className="navlink" href="/">Home</Link>
            <Link className="navlink" href="/lancamentos">Lançamentos</Link>
            <Link className="navlink" href="/login">Login</Link>
          </nav>
        </footer>
      </body>
    </html>
  )
}
