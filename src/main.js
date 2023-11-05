// Icons
import { IoIosArrowRoundDown } from "react-icons/io";

// Estilos
import './mainTwo.css';
import './mainThree.css';
import './mainFour.css';
import './mainFive.css';

// Images
import backgroundMain from './images/images-backgroundRemoving/background-pageTwo-removebg-preview.png';
import imageGirl from './images/images-backgroundRemoving/backgroundGirl-pageThree-removebg-preview.png';
import imageBoy from './images/images-backgroundRemoving/backgroundMan-pageThree-removebg-preview.png';
import imgDesktop from './images/images-backgroundRemoving/background-pageFour-removebg-preview.png';
import imgPhone from './images/images-backgroundRemoving/background-pageFive-removebg-preview.png';

function Main() {
    return ( 
        <main className='containerMain'>
            <section className='containerDescription'>
                <article className='contentDescription'>
                    <h2 className='titleMain'>Como ?</h2>
                    <div className='boxDescription'>
                        <p>
                            Com nosso aplicativo Web Order inteligente, uma empresa<br></br>
                            a vida digital do proprietário se torna mais fácil.
                        </p>
                        <p>
                            Imagine um chatbot inteligente no WhatsApp,<br></br>
                            coleta e organização automática de pedidos<br></br>
                            tudo ordenadamente em uma página da web.
                        </p>
                        <p>
                            Você poderá se concentrar na demanda do cliente em<br></br>
                            seu negócio enquanto nós cuidamos de tudo<br></br>
                            mundo virtual. Com atendimento otimizado a entrega será mais rápida!
                        </p>
                        <p>
                            Mais tempo, menos dores de cabeça e clientes satisfeitos.<br></br>
                            É assim que simplificamos a vida empresarial.
                        </p>
                    </div>
                </article>
                <article className='contentImage'>
                    <img className='img imgMain' src={backgroundMain} alt="Background imagem" />
                </article>
            </section>

            <section className='containerBeneficts'>
                <article className='containerBoy'>
                    <img className='img imgBoy' src={imageBoy} alt='Imagem do card boy' />
                    <article className='card cardboy'>
                        <hr></hr>
                        <h2>Organização Simplificada</h2>
                        <h3>PEDIDOS FORMATADOS EM UM SNAP</h3>
                        <p>
                            Todos os detalhes do pedido são apresentados de forma clara e organizada,
                            em uma página web. Tomar decisões e gerenciar pedidos nunca foi tão fácil.
                        </p>
                    </article>
                </article>
                <article className='containerGirl'>
                    <article className='card cardGirl'>
                        <hr></hr>
                        <h2>Pedidos sem esforço</h2>
                        <h3>DEIXE O CHATBOT FAZER O TRABALHO</h3>
                        <p>
                            O chatbot AI automaticamente
                            coleta pedidos, economizando seu tempo
                            e eliminando a necessidade de
                            tarefas manuais. Apenas relaxe enquanto ele
                            cuida de tudo.
                        </p>
                    </article>
                    <img className='img imgGirl' src={imageGirl} alt='Imagem do card Girl' />
                </article>
            </section>

            <section className='containerCallToAction'>
                <article className='contentCTA'>
                    <artcle className='boxDescription'>
                        <h2>
                            Deixe nosso chatbot para
                            o trabalho e o foco
                            sobre o que você faz de melhor.
                        </h2>
                        <button className='btn btn-cta'>Tente agora!</button>
                    </artcle>
                    <article className='boxImage'>
                        <img className='img imgDesktop' src={imgDesktop} alt='Desktop imagem' />
                    </article>
                </article>
                < IoIosArrowRoundDown className="arrowIcon" size={75}/>
            </section>

            <section className="containerVantagens">
                <article className="contentVantagens">
                    <div className="vantagensDescription">
                        <h2>Inovação que facilita a vida</h2>
                        <p>
                            "Smart Order" facilita a vida digital do empresário
                            simples, economizando tempo e proporcionando uma melhor
                            experiência de atendimento ao cliente.
                        </p>
                    </div>
                    <div className="vantagensImage">
                        <img className="img imgPhone" src={imgPhone} alt="Phone imagem" />
                    </div>
                </article>
                <article className="boxVantagens">
                    <div className="vantagensDescription blockBorder">
                        <h2>CONECTADO EM TODO LUGAR</h2>
                        <p>
                            Integre com WhatsApp, Facebook, Messenger e muito mais.
                        </p>
                    </div>
                    <div className="vantagensDescription">
                        <h2>MANTENHA-SE SEMPRE INFORMADO</h2>
                        <p>
                            Receba notificações em tempo real sempre que um novo pedido for
                            colocada. Mantenha o controle total, esteja você no The
                            escritório ou em trânsito e nunca perca um pedido importante.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Main;