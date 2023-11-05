// Icons
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";

// Styles
import './footer.css';

// Images
import imageLogo from './images/images-backgroundRemoving/backgroundLogo-pageSix-removebg-preview.png';
import imageFooter from './images/images-backgroundRemoving/background-pageSix-removebg-preview.png';

function Footer() {
    return (
        <footer className='containerFooter' id="section6">
            <section className="contentFooter">
                <article className='footerLogo'>
                    <div className='footerImage'>
                        <img className='img imageLogo' src={imageLogo} alt="Logo imagem" />
                    </div>
                    <div className='footerTitle'>
                        <h2>Pedido Inteligente</h2>
                    </div>
                </article>
                <article className='footerContact'>
                    <div className='boxContact'>
                        <div className='contentContact'>
                            <div className='titleContat'>
                                <h3>Inove connosco</h3>
                            </div>
                            <div className='descriptionContact'>
                            <p>
                                Sua empresa merece estar à frente da
                                competição, e otimizaremos seu
                                serviços para tornar isso possível.
                            </p>
                            </div>
                        </div>
                        <div className='footerButton'>
                            <button className='btn btnFooter'>Eu não quero perder!</button>
                        </div>
                    </div>
                    <div className='socialBox'>
                        <div className='socialTitle'>
                            <p>SOCIAL MEDIA</p>
                        </div>
                        <div className='socialContent'>
                            <a className='iconFace' href="https://#">
                                < BiLogoFacebook className="icon" size={50} color="#000" />
                            </a>
                            <a className='iconTwit' href="https://#">
                                < BiLogoTwitter className="icon" size={50} color="#000" />
                            </a>
                            <a className='iconInsta' href="https://#">
                                < BiLogoInstagramAlt className="icon" size={50} color="#000" />
                            </a>
                        </div>
                    </div>
                </article>
            </section>
            <section className="contentImage">
                <img className="img imgArt-girl" src={imageFooter} alt='Imagem art footer' />
            </section>
        </footer>
    )
}

export default Footer;