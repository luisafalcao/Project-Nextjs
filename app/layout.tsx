import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'O Que Assistir?',
  description: 'Sugestões de filmes e séries para pessoas indecisas.',
}

export default function RootLayout({ children }: any) {

  return (
    <html lang="en">
      <body className='grid font-roboto min-h-screen justify-center justify-items-center pt-6 bg-customColor-dark text-white'>
        <header className='text-center p-8 h-fit'>
          <h1 className='font-rokkitt uppercase font-bold'><Link href="/">{metadata.title}</Link></h1>
          <h6 className='italic font-light mt-4 lowercase'>{metadata.description}</h6>
          <nav className='navlinks mt-10'>
            <Link className="navlink" href="/">Home</Link>
            <Link className="navlink" href="/lancamentos">Lançamentos</Link>
            <Link className="navlink" href="/login">Login</Link>
          </nav>
        </header>

        {children}
        
        <footer className='text-center self-end fixed bottom-0 p-6'>
          <small>Luisa Falcão 2023</small>
        </footer>
      </body>
    </html>
  )
}
