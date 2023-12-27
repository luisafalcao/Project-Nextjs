import './page.css'

export default function Home() {
  return (
    <main className='grid text-center'>
      <span>IMAGEM AQUI</span>
        <h5>O que você quer ver agora?</h5>
      <div className='flex gap-4 justify-center items-center'>
        <button className="button">Série</button>
        ou
        <button className="button">Filme</button>
      </div>
    </main>
  )
}
