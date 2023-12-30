import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'O Que Assistir?',
  description: 'Sugestões de filmes e séries para pessoas indecisas.',
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className='font-roboto min-h-screen justify-center justify-items-center py-6 bg-customColor-dark text-white'>
        <header className='text-center pt-16'>
          <h1 className='text-customColor-accent font-rokkitt uppercase font-bold'><Link href="/">{metadata.title}</Link></h1>
          <h6 className='italic font-light mt-4'>{metadata.description}</h6>
        </header>

        {children}
        
        <footer className='text-center fixed bottom-14 flex justify-center w-full'>
          <nav className='navlinks bg-customColor-accent py-4 px-8 rounded-full flex justify-center'>
            <Link className="navlink" href="/">Home</Link>
            <Link className="navlink" href="/lancamentos">Lançamentos</Link>
            <Link className="navlink" href="/login">Login</Link>
            <Link className="navlink" href="/contato">Contato</Link>
          </nav>
        </footer>
      </body>
    </html>
  )
}
