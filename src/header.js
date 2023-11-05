// Estilos
import './header.css';

// Imagens
import backgroundHeader from './images/images-backgroundRemoving/background-pageOne-removebg-preview.png';

function Header() {
  return (
    <header className="containerHeader" id="section1">
      <img className='img imgHeader' src={backgroundHeader} alt="Simplify digital imagem" />
      <section className="boxHeaderTitle">
        <h1>Simplifique <br></br>o digital</h1>
        <button className="btn btnHeader">Saber mais!</button>
      </section>
    </header>
  );
}

export default Header;
