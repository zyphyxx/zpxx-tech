export default function Projetos(props) {
  return (
    <div>
      
      <p><strong>Nome do Projeto:</strong> <a href="https://decode-alura.vercel.app/">{props.nomeProjeto}</a></p>
      <p><strong>Descrição:</strong> {props.descricao}</p>
    </div>
    
  )

}