import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Sintomas() {
    return (
        <>
            <Navbar />

            <header>
                <h1 className="title">Entenda os principais sintomas e causas da DTM</h1>
            </header>

            <section className="section">
                <h2 className="title">Importância de reconhecer os sintomas.</h2>
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
                <h2 className="title">Sintomas mais comuns</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus, magna vitae dictum imperdiet,
                    mauris nisi accumsan libero, id aliquet magna purus scelerisque felis. Donec molestie luctus orci sit amet
                    sagittis. Nullam risus leo, lobortis non placerat in, tincidunt sit amet nulla. Morbi aliquet felis quis
                    erat dapibus, nec ornare ligula eleifend. Praesent auctor augue vestibulum justo hendrerit, nec lacinia
                    purus convallis. Pellentesque sodales sagittis dapibus. Etiam quis lobortis leo. Fusce imperdiet tortor nec
                    placerat luctus. Phasellus est mauris, tempus vitae egestas sed, elementum eget tortor.
                </p>
                <p className="text">
                    Praesent eget leo vel purus mattis lobortis. In commodo, lorem eget ornare faucibus, tellus nulla
                    consectetur nulla, eu imperdiet urna ligula et ipsum. Morbi scelerisque ante finibus turpis posuere, eu
                    consequat nibh pretium. Cras sed hendrerit nisl. Cras consequat scelerisque efficitur. Nam mattis suscipit
                    ullamcorper. Aliquam erat volutpat. Aliquam feugiat, sapien vel feugiat porta, elit arcu finibus leo, eget
                    interdum ante arcu ac lorem.
                </p>
                <p className="text">
                    Duis non ex at odio accumsan pellentesque. Sed sed lectus nec ex dictum tempus vitae non risus. Phasellus
                    vulputate congue tellus, vestibulum pulvinar nulla ultricies sit amet. Maecenas ut arcu dui. Praesent
                    venenatis erat ut diam rutrum, a aliquam lectus volutpat. Suspendisse laoreet diam non finibus accumsan.
                    Donec molestie vel tortor in ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Morbi tempus fringilla leo, nec feugiat orci interdum non. Suspendisse convallis,
                    nisi tincidunt elementum pharetra, dui velit accumsan mauris, vel laoreet odio metus sodales risus.
                    Curabitur nec egestas dolor, quis sagittis augue. Pellentesque posuere in sem non convallis. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus.
                </p>
                <p className="text">
                    Donec lacinia eget eros quis aliquet. Vivamus lorem ligula, feugiat a pharetra id, egestas sit amet turpis.
                    Pellentesque vulputate luctus hendrerit. Nullam auctor neque ac sem porta, ac lacinia lacus dictum. Etiam
                    porta quam a erat laoreet luctus. Donec vehicula, sem quis iaculis feugiat, dolor arcu accumsan odio, at
                    rhoncus libero nisi in arcu. Donec sit amet finibus erat, sodales ultrices libero. Mauris ultrices pretium
                    ante, et vehicula sem ornare id. Nam vestibulum congue lacus, vel suscipit sem faucibus id. Cras lectus
                    nisi, lobortis nec porttitor at, fringilla ut elit. Sed at est placerat, aliquam purus in, dignissim arcu.
                </p>
                <p className="text">
                    Nullam ultricies vehicula eleifend. Vestibulum congue ipsum vitae odio imperdiet, quis malesuada nunc
                    consequat. Duis urna nulla, vestibulum vitae orci quis, tincidunt suscipit arcu. Vestibulum dignissim risus
                    sit amet tempor hendrerit. Nulla suscipit nec leo id consectetur. Maecenas ac ex venenatis, egestas odio et,
                    tincidunt justo. In non augue id tellus gravida laoreet non in turpis. Donec mi nunc, ultrices ut metus ut,
                    luctus lacinia orci.
                </p>
                <p className="text">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam turpis
                    est, aliquet id tincidunt ac, euismod at velit. In hac habitasse platea dictumst. Sed eu pellentesque lorem.
                    In sodales felis sed porta dignissim. Nam ut egestas ipsum. Nullam sed nulla eu metus porta accumsan id et
                    nisi. Mauris tincidunt mauris eu tortor condimentum, nec tincidunt augue condimentum. Donec id turpis auctor
                    eros congue tempus sed et leo. Nulla interdum turpis non neque efficitur efficitur. Integer vehicula ante
                    augue, vitae convallis est congue et. Vestibulum id magna augue.
                </p>
            </section>

            <section className="section">
                <h2 className="title">Principais causas da DTM.</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque eget quam et feugiat. Sed
                    bibendum sit amet leo id commodo. In nec consequat eros. Sed at mi porttitor, pretium erat vitae, finibus
                    tortor. Sed enim lectus, dictum non pretium vel, varius ac eros. Quisque gravida ut nisi ut suscipit.
                    Quisque eu justo posuere, maximus massa mattis, condimentum justo. Curabitur quam nunc, auctor in imperdiet
                    in, consectetur eget turpis. Integer vitae mattis turpis. Integer iaculis lorem est. Duis vehicula
                    pellentesque metus, at gravida dui tempus vitae. Duis lacinia eros et suscipit dignissim.
                </p>
                <p className="text">
                    Phasellus ut nibh aliquam, ullamcorper sapien sed, vestibulum erat. Donec quis bibendum purus. Suspendisse
                    ultrices massa quis dapibus consequat. Sed congue mattis dolor sit amet finibus. Vivamus fermentum eros at
                    mauris ullamcorper, a convallis leo posuere. Phasellus feugiat ac diam vel dignissim. Curabitur condimentum
                    dolor dictum elit dignissim, sit amet faucibus nulla ullamcorper. Proin sit amet sem sed ante sagittis
                    dictum. Pellentesque luctus elementum augue dapibus ornare. Sed augue nulla, iaculis vitae consectetur
                    commodo, eleifend ac mauris.
                </p>
                <p className="text">
                    Fusce in hendrerit magna. Curabitur rutrum ligula vitae viverra congue. Aenean quam est, laoreet in congue
                    nec, blandit at mauris. Fusce porttitor tincidunt sapien ac dictum. Etiam a nibh non ante vehicula viverra.
                    Duis auctor, elit nec porttitor rhoncus, ex dolor elementum purus, a eleifend orci nulla ut urna. Duis
                    aliquam magna cursus enim sagittis, et fringilla magna vehicula. In dictum sapien eu eleifend gravida.
                    Mauris mi massa, cursus eget tortor sit amet, molestie convallis felis. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Integer rhoncus quam eget libero cursus,
                    at ullamcorper massa hendrerit.
                </p>
                <p className="text">
                    Pellentesque at turpis at quam hendrerit interdum nec ut eros. Vivamus fringilla placerat mi, nec malesuada
                    odio tempor at. Nunc et odio dui. Nullam aliquam at leo sit amet posuere. Maecenas pretium elit arcu, ut
                    sagittis ex vulputate sit amet. Aenean metus metus, facilisis eget sollicitudin sit amet, dapibus suscipit
                    lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sit
                    amet viverra diam. Proin ac dapibus orci.
                </p>
            </section>

            <section className="section">
                <h2 className="title">Impacto dos sintomas no dia a dia.</h2>
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
                    eget imperdiet justo, id dapibus augue. Proin at massa et nulla malesuada molestie.
                    Donec sapien nunc, suscipit sed egestas non, accumsan a lorem. Suspendisse ac velit at erat luctus blandit.
                    Nullam fermentum blandit ante, et posuere eros imperdiet sed. In ultrices ultricies hendrerit.
                </p>
                <p className="text">
                    Nam auctor, magna ut interdum pellentesque, purus enim imperdiet leo, ac vulputate orci turpis quis odio.
                    Pellentesque sodales auctor augue, non suscipit tellus aliquet vitae. Sed quis pretium nisl. Aliquam erat
                    volutpat. Morbi id ipsum auctor, accumsan nisi ut, tempor turpis. Morbi feugiat varius laoreet. Duis at
                    cursus purus, sed commodo turpis. Nulla facilisi.
                </p>
            </section>

            <section className="section">
                <h2 className="title">Se identificou com os sintomas? Veja dicas de como lidar com a DTM ou procure um profissional.</h2>
                <p className="text">
                    O reconhecimento dos sintomas de disfunção temporomandibular é essencial para prevenir complicações. Medidas como tratamentos 
                    simples e hábitos posturais, podem ajudar no alívio. Entretanto, ainda assim, a avaliação de um especialista é recomendada 
                    para um diagnóstico e tratamento adequados.
                </p>
                <div className="div-botao">
                    <Link to="/dicas" className="button">Veja aqui dicas e bons hábitos</Link>
                    <Link to="" className="button">Veja aqui os profissionais disponíveis</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
