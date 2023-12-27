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
        <header className='text-center'>
          <h1 className='font-rokkitt uppercase font-bold'>{metadata.title}</h1>
          <h6 className='italic font-light mt-4'>{metadata.description}</h6>
        </header>

        {children}
        
        <footer className='uppercase font-light text-center gap-4 flex self-end fixed bottom-0 p-6 bg-customColor-dark opacity-90 text-white w-screen justify-center'>
          <Link href="/">Home</Link>
          <Link href="/lancamentos">Lançamentos</Link>
          <Link href="/sugestoes">Sugestões</Link>
          <Link href="/login">Login</Link>
        </footer>
      </body>
    </html>
  )
}
