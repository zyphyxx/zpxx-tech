import './App.css';
import Header  from './components/Header';
import SobreMim from './components/Sobre-mim';
import JornadaProfissional from './components/Jornada-Profissional';
import Habilidades from './components/Habilidades';
import Objetivos from './components/Objetivos';
import Projetos from './components/Projetos';
import { DADOS } from './components/data.js';


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
          <Projetos {...DADOS[0]} ></Projetos>
          </div>
          
        </article>
      </section>
      </main>
    </body>
  );
}

export default App;
