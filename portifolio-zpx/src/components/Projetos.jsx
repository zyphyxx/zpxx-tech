

export default function Projetos({nome,descricao}) {
  return (
    <div>
      
      <p><strong>Nome do Projeto:</strong> <a href="https://decode-alura.vercel.app/">{nome}</a></p>
      <p><strong>Descrição:</strong> {descricao}</p>
    </div>
    
  )

}