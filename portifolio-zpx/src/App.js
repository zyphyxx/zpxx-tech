import './App.css';
import Header  from './components/Header';
import SobreMim from './components/Sobre-mim';
import JornadaProfissional from './components/Jornada-Profissional';
import Habilidades from './components/Habilidades';


function App() {
  return (
    <body>
      <header>
        <Header></Header>
      </header>

      <main>
      <section class="main-content">
        <article class="text">
        <h2>Sobre mim</h2>
          <SobreMim></SobreMim>
        <h2>Jornada Profissional</h2>
          <JornadaProfissional></JornadaProfissional>
        <h2>Habilidades e Tecnologias</h2> 
          <Habilidades></Habilidades>
        </article>
      </section>
      </main>
    </body>
  );
}

export default App;
