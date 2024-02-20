import './App.css';
import Header  from './components/Header';
import SobreMim from './components/Sobre-mim';
import JornadaProfissional from './components/Jornada-Profissional';
import Habilidades from './components/Habilidades';
import Objetivos from './components/Objetivos';
import Projetos from './components/Projetos';


function App() {
  return (
    <body>
      <header>
        <Header nome='Edgar'></Header>
      </header>

      <main>
      <section class="main-content">
        <article class="text">
        
          <SobreMim></SobreMim>
          <JornadaProfissional></JornadaProfissional>
          <Habilidades></Habilidades>
          <Objetivos></Objetivos>
          <h2>Projetos Destacados</h2>
          <div class='bac'>
          <Projetos nomeProjeto='Decodificador de Texto - Alura Challenges Oracle ONE' 
          descricao='Aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.'></Projetos>
          </div>
          
        </article>
      </section>
      </main>
    </body>
  );
}

export default App;
