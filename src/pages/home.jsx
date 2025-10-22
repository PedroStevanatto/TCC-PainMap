import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className='fade-slide-up'>
                <Navbar />

                <header>
                    <h1 className="titlepage">“Dor na mandíbula, estalos ou dores de cabeça constantes?”</h1>
                    <p>Isso pode ser DTM. Descubra o que é e como cuidar.</p>
                </header>

                <main>
                    <section className="sectionb">
                        <h2 className="title">Bem-vindo ao site do PainMap, nosso site informativo sobre DTM</h2>
                        <p className="text">
                            A Disfunção Temporomandibular afeta milhões de pessoas e pode comprometer a qualidade de vida.
                            Aqui, você encontrará informações detalhadas sobre sintomas, causas, prevenção e tratamento.
                            Nosso objetivo é informar e conectar você a profissionais especializados.
                        </p>
                        <div className="div-botao">
                            <Link to="/dtm" className="button">Descubra o que é DTM e seus sintomas</Link>
                        </div>
                    </section>

                    <section className="section2">
                        <h2 className="important">Por que este site é importante?</h2>
                        <div className="cards">
                            <img src="/cards/informacao.png" className="img" alt="Informação" />
                            <img src="/cards/saude.png" className="img" alt="Saúde" />
                            <img src="/cards/conexao.png" className="img" alt="Conexão" />
                            <img src="/cards/bem-estar.png" className="img" alt="Bem-estar" />
                        </div>
                    </section>

                    <section className="sectionb">
                        <h2 className="title">Cuide-se hoje mesmo</h2>
                        <p className="text">
                            Quanto mais cedo você entender a DTM, maiores são as chances de prevenção e qualidade de vida.
                            Explore nossos conteúdos e cuide melhor de você.
                        </p>
                        <div className="div-botao">
                            <Link to="/dtm" className="button">Começar agora</Link>
                            <Link to="/especialistas" className="button">Ver especialistas disponíveis</Link>
                        </div>
                    </section>

                    <section className="sectionbh">
                        <h2 className="titlex">Explore nossos conteúdos</h2>
                        <div className="cards2">
                            <div>
                                <Link to="/dtm">
                                    <img src="/imgs/dtm.png" className="cardimg" alt="O que é DTM" />
                                </Link>
                            </div>
                            <div>
                                <Link to="/dicas">
                                    <img src="/imgs/prevencao.png" className="cardimg" alt="Prevenção e Hábitos Saudáveis" />
                                </Link>
                            </div>
                            <div>
                                <Link to="/especialistas">
                                    <img src="/imgs/especialistas.png" className="cardimg" alt="Especialistas" />
                                </Link>
                            </div>
                            <div>
                                <Link to="/sobre">
                                    <img src="/imgs/informacoes.png" className="cardimg" alt="Informacoes" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}