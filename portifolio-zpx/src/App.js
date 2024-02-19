import './App.css';
import Header  from './components/Header';
import SobreMim from './components/Sobre-mim';
import JornadaProfissional from './components/Jornada-Profissional';
import Habilidades from './components/Habilidades';
import Objetivos from './components/Objetivos';


function App() {
  return (
    <body>
      <header>
        <Header></Header>
      </header>

      <main>
      <section class="main-content">
        <article class="text">
        
          <SobreMim></SobreMim>
          <JornadaProfissional></JornadaProfissional>
          <Habilidades></Habilidades>
          <Objetivos></Objetivos>
        </article>
      </section>
      </main>
    </body>
  );
}

export default App;
