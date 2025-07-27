import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Dicas() {
    return (
        <>
            <Navbar />
            
            <header>
                <h1 className="title">Veja dicas e bons hábitos para lidar com a DTM.</h1>
            </header>

            <section className="section">
                <h2 className="title">Dicas de como lidar com a DTM.</h2>
                <h3 className="titlem">Dica 1:</h3>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lorem lectus. Nullam maximus velit vel
                    est facilisis, nec convallis risus tincidunt. Proin rhoncus nisl felis, ac lacinia nibh tempor vitae. Sed eu
                    elit eu nisi suscipit fermentum. Ut sit amet quam pellentesque, fermentum sapien nec, bibendum lorem. Nunc
                    consequat est ac dui gravida porttitor. Mauris rhoncus, nisl vel tincidunt blandit, purus lacus volutpat
                    nulla, in porttitor leo odio ac sem.
                </p>
                <h3 className="titlem">Dica 2:</h3>
                <p className="text">
                    Quisque elementum tincidunt lacus ac lorem. Praesent quam quam, sollicitudin sed libero in, auctor sagittis
                    lacus. Suspendisse eu libero eu nunc rutrum blandit. Vestibulum tristique fermentum sapien, eget aliquet
                    lorem viverra in. Aenean vel convallis velit. Nullam dapibus faucibus facilisis. Sed non quam ac justo
                    tincidunt faucibus.
                </p>
                <h3 className="titlem">Dica 3:</h3>
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
                <h2 className="title">Bons hábitos para lidar com a DTM.</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus, magna vitae dictum imperdiet,
                    mauris nisi accumsan libero, id aliquet magna purus scelerisque felis. Donec molestie luctus orci sit amet
                    sagittis. Nullam risus leo, lobortis non placerat in, tincidunt sit amet nulla. Morbi aliquet felis quis
                    erat dapibus, nec ornare ligula eleifend. Praesent auctor augue vestibulum justo hendrerit, nec lacinia purus
                    convallis. Pellentesque sodales sagittis dapibus. Etiam quis lobortis leo. Fusce imperdiet tortor nec placerat
                    luctus. Phasellus est mauris, tempus vitae egestas sed, elementum eget tortor.
                </p>
                <p className="text">
                    Praesent eget leo vel purus mattis lobortis. In commodo, lorem eget ornare faucibus, tellus nulla consectetur
                    nulla, eu imperdiet urna ligula et ipsum. Morbi scelerisque ante finibus turpis posuere, eu consequat nibh
                    pretium. Cras sed hendrerit nisl. Cras consequat scelerisque efficitur. Nam mattis suscipit ullamcorper.
                    Aliquam erat volutpat. Aliquam feugiat, sapien vel feugiat porta, elit arcu finibus leo, eget interdum ante
                    arcu ac lorem.
                </p>
                <p className="text">
                    Duis non ex at odio accumsan pellentesque. Sed sed lectus nec ex dictum tempus vitae non risus. Phasellus
                    vulputate congue tellus, vestibulum pulvinar nulla ultricies sit amet. Maecenas ut arcu dui. Praesent venenatis
                    erat ut diam rutrum, a aliquam lectus volutpat. Suspendisse laoreet diam non finibus accumsan. Donec molestie
                    vel tortor in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas. Morbi tempus fringilla leo, nec feugiat orci interdum non. Suspendisse convallis, nisi tincidunt
                    elementum pharetra, dui velit accumsan mauris, vel laoreet odio metus sodales risus. Curabitur nec egestas dolor,
                    quis sagittis augue. Pellentesque posuere in sem non convallis. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus.
                </p>
                <p className="text">
                    Donec lacinia eget eros quis aliquet. Vivamus lorem ligula, feugiat a pharetra id, egestas sit amet turpis.
                    Pellentesque vulputate luctus hendrerit. Nullam auctor neque ac sem porta, ac lacinia lacus dictum. Etiam porta
                    quam a erat laoreet luctus. Donec vehicula, sem quis iaculis feugiat, dolor arcu accumsan odio, at rhoncus libero
                    nisi in arcu. Donec sit amet finibus erat, sodales ultrices libero. Mauris ultrices pretium ante, et vehicula sem
                    ornare id. Nam vestibulum congue lacus, vel suscipit sem faucibus id. Cras lectus nisi, lobortis nec porttitor at,
                    fringilla ut elit. Sed at est placerat, aliquam purus in, dignissim arcu.
                </p>
                <p className="text">
                    Nullam ultricies vehicula eleifend. Vestibulum congue ipsum vitae odio imperdiet, quis malesuada nunc consequat.
                    Duis urna nulla, vestibulum vitae orci quis, tincidunt suscipit arcu. Vestibulum dignissim risus sit amet tempor
                    hendrerit. Nulla suscipit nec leo id consectetur. Maecenas ac ex venenatis, egestas odio et, tincidunt justo. In
                    non augue id tellus gravida laoreet non in turpis. Donec mi nunc, ultrices ut metus ut, luctus lacinia orci.
                </p>
            </section>

            <section className="section">
                <h2 className="title">As dicas não ajudaram? Procure um profissional.</h2>
                <p className="text">
                    A persistência dos sintomas pode indicar algo mais sério. Um diagnóstico correto é o primeiro passo para um tratamento 
                    eficaz e uma melhor qualidade de vida.
                </p>
                <div className="div-botao">
                    <Link to="" className="button">Veja aqui os profissionais disponíveis</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}