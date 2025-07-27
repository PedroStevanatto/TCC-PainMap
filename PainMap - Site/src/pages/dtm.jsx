import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Dtm() {
    return (
        <>
            <Navbar />
            <header>
                <h1 className="title">Descubra o que é DTM e como funciona.</h1>
            </header>

            <section className="section">
                <h2 className="title">O que é DTM?</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lorem lectus. Nullam maximus velit vel
                    est facilisis, nec convallis risus tincidunt. Proin rhoncus nisl felis, ac lacinia nibh tempor vitae. Sed eu
                    elit eu nisi suscipit fermentum. Ut sit amet quam pellentesque, fermentum sapien nec, bibendum lorem. Nunc
                    consequat est ac dui gravida porttitor. Mauris rhoncus, nisl vel tincidunt blandit, purus lacus volutpat
                    nulla, in porttitor leo odio ac sem.
                </p>
                <p className="text">
                    Quisque elementum tincidunt lacus ac lorem. Praesent quam quam, sollicitudin sed libero in, auctor sagittis
                    lacus. Suspendisse eu libero eu nunc rutrum blandit. Vestibulum tristique fermentum sapien, eget aliquet
                    lorem viverra in. Aenean vel convallis velit. Nullam dapibus faucibus facilisis. Sed non quam ac justo
                    tincidunt faucibus.
                </p>
                <p className="text">
                    Vestibulum at risus ornare, placerat est ut, consequat elit. Integer nec porttitor purus, quis congue diam.
                    Ut id iaculis nibh. Phasellus volutpat, sapien ut aliquam fermentum, leo nunc dapibus turpis, vitae
                    pellentesque magna elit et eros. Donec in semper augue, non aliquet risus. Mauris ut lorem nunc. Praesent
                    porta dolor vitae est lobortis rhoncus. Praesent laoreet malesuada laoreet. Aenean turpis urna, fermentum a
                    dignissim et, efficitur et nulla. Nunc imperdiet, sapien a hendrerit tincidunt, urna urna blandit sem, ut
                    vulputate enim enim eu sem.
                </p>
            </section>

            <section className="section">
                <h2 className="title">Estrutura da ATM.</h2>
                <div className="foto">
                    *Foto sobre DTM/ATM*
                </div>

                <p className="text">
                    Sed non pretium felis, et dictum ex. Pellentesque vestibulum gravida purus euismod dignissim. Integer
                    posuere diam id tortor imperdiet, a commodo magna eleifend. Fusce in dui nec urna tincidunt tincidunt sed
                    sit amet erat. Integer vel massa quis metus ultrices tincidunt. Nullam laoreet neque vitae felis eleifend,
                    eget aliquam arcu bibendum. Aliquam a odio non ex tempor porttitor. Duis et posuere justo. Mauris ultricies
                    tincidunt lectus, ac condimentum libero accumsan nec.
                </p>
                <p className="text">
                    Cras finibus scelerisque mi, id egestas sapien bibendum in. Nulla eget tortor turpis. Sed sapien tellus,
                    pulvinar a sapien ac, accumsan vulputate libero. Nunc euismod neque vitae mattis pharetra. Nulla facilisi.
                    Vivamus dignissim quam ac lectus rutrum, sed scelerisque purus luctus. Curabitur eget tellus lorem. Nullam
                    eget nunc nec lorem accumsan bibendum.
                </p>
            </section>

            <section className="section">
                <h2 className="title">Tipos de DTM.</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed finibus turpis. Suspendisse eget sapien
                    ex. Sed ante tellus, volutpat id feugiat non, varius at ligula. Donec feugiat sollicitudin hendrerit. Donec
                    venenatis bibendum ornare. Donec et condimentum mauris, eu interdum enim. Sed lobortis quis sem vel maximus.
                    Sed quis euismod mauris. In tempus dui rhoncus mollis convallis. Curabitur suscipit tellus quis ex molestie,
                    vulputate fermentum erat interdum. Sed accumsan finibus tincidunt. Aliquam urna ante, bibendum quis quam at,
                    egestas dictum arcu.
                </p>
                <p className="text">
                    Nam commodo non odio sit amet convallis. Nam lacinia laoreet aliquet. Donec libero nisi, convallis ornare
                    urna ut, tempor lobortis erat. Cras id odio leo. Vivamus sit amet urna sed augue interdum commodo. Donec
                    eget imperdiet justo, id dapibus augue. Proin at massa et nulla malesuada molestie. Donec sapien nunc,
                    suscipit sed egestas non, accumsan a lorem. Suspendisse ac velit at erat luctus blandit. Nullam fermentum
                    blandit ante, et posuere eros imperdiet sed. In ultrices ultricies hendrerit.
                </p>
                <p className="text">
                    Nam auctor, magna ut interdum pellentesque, purus enim imperdiet leo, ac vulputate orci turpis quis odio.
                    Pellentesque sodales auctor augue, non suscipit tellus aliquet vitae. Sed quis pretium nisl. Aliquam erat
                    volutpat. Morbi id ipsum auctor, accumsan nisi ut, tempor turpis. Morbi feugiat varius laoreet. Duis at
                    cursus purus, sed commodo turpis. Nulla facilisi.
                </p>
            </section>

            <section className="section">
                <h2 className="title">Entenda agora os sintomas e causas associadas.</h2>
                <p className="text">
                    Reconhecer os sinais da DTM é o primeiro passo para buscar tratamento. Saiba quais são os
                    principais sintomas e o que pode estar por trás desse problema tão comum.
                </p>
                <div className="div-botao">
                    <Link to="/sintomas" className="button">Veja aqui os principais sintomas e causas</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}