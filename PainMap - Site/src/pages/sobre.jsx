import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/tcc.css';

export default function Sobre() {
    return (
        <>
            <Navbar />

            <header>
                <h1 className="title">Informações do projeto.</h1>
            </header>

            <section className="section">
                <h2 className="title">O que é o PainMap?</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lorem lectus. Nullam ipsum velit,
                    sollicitudin et convallis eget, varius ut nibh. Nulla facilisi. Fusce ultricies ligula in ligula facilisis,
                    ut ultrices purus ullamcorper. Cras eros felis, rhoncus id tellus at, sagittis dictum mauris. Aenean
                    pharetra arcu mauris, in viverra metus volutpat eu. In eu dui vel quam pharetra aliquam. In id nunc at
                    lectus mollis elementum ut eget sapien.
                </p>
                <p className="text">
                    Quisque venenatis tristique libero nec lacinia. Praesent purus ipsum, sollicitudin sed libero sit amet,
                    placerat pulvinar ante. In consequat urna id neque faucibus, vel consectetur sem scelerisque. Fusce semper
                    eros viverra arcu dictum molestie. Curabitur tellus ligula, faucibus eget finibus ac, scelerisque eget
                    lectus. Morbi condimentum ultrices ligula, a feugiat nibh. Cras maximus maximus lacinia.
                </p>
            </section>
            <section className="section">
                <h2 className="title">Por que escolhemos esse tema?</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lorem lectus. Nullam ipsum velit,
                    sollicitudin et convallis eget, varius ut nibh. Nulla facilisi. Fusce ultricies ligula in ligula facilisis,
                    ut ultrices purus ullamcorper. Cras eros felis, rhoncus id tellus at, sagittis dictum mauris. Aenean
                    pharetra arcu mauris, in viverra metus volutpat eu. In eu dui vel quam pharetra aliquam. In id nunc at
                    lectus mollis elementum ut eget sapien.
                </p>
                <p className="text">
                    Quisque venenatis tristique libero nec lacinia. Praesent purus ipsum, sollicitudin sed libero sit amet,
                    placerat pulvinar ante. In consequat urna id neque faucibus, vel consectetur sem scelerisque. Fusce semper
                    eros viverra arcu dictum molestie. Curabitur tellus ligula, faucibus eget finibus ac, scelerisque eget
                    lectus. Morbi condimentum ultrices ligula, a feugiat nibh. Cras maximus maximus lacinia.
                </p>
            </section>
            <section className="section">
                <h2 className="title">Qual nosso objetivo com esse projeto?</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in lorem lectus. Nullam ipsum velit,
                    sollicitudin et convallis eget, varius ut nibh. Nulla facilisi. Fusce ultricies ligula in ligula facilisis,
                    ut ultrices purus ullamcorper. Cras eros felis, rhoncus id tellus at, sagittis dictum mauris. Aenean
                    pharetra arcu mauris, in viverra metus volutpat eu. In eu dui vel quam pharetra aliquam. In id nunc at
                    lectus mollis elementum ut eget sapien.
                </p>
                <p className="text">
                    Quisque venenatis tristique libero nec lacinia. Praesent purus ipsum, sollicitudin sed libero sit amet,
                    placerat pulvinar ante. In consequat urna id neque faucibus, vel consectetur sem scelerisque. Fusce semper
                    eros viverra arcu dictum molestie. Curabitur tellus ligula, faucibus eget finibus ac, scelerisque eget
                    lectus. Morbi condimentum ultrices ligula, a feugiat nibh. Cras maximus maximus lacinia.
                </p>
            </section>

            <section className="sectionp">
                <h2 className="titlei">Nossos integrantes</h2>

                <div className="divfoto">
                    <section className="sectionf">
                        <img src="/perfils/viana.jpeg" className="perfil" alt="Vinicius Viana Alves" />
                    </section>
                    <div className="nome">
                        <p className="textp">Vinicius Viana Alves<br />Designer e Programador</p>
                    </div>
                </div>

                <div className="divfoto">
                    <p className="textp">Pedro Henrique Stevanatto<br />Desenvolvedor Sist. Embarcados</p>
                    <section className="sectionf">
                        <img src="/perfils/pijas.jpeg" className="perfil" alt="Pedro Henrique" />
                    </section>
                </div>

                <div className="divfoto">
                    <section className="sectionf">
                        <img src="/perfils/carol.jpeg" className="perfil" alt="Caroline Rocha Rodrigues" />
                    </section>
                    <p className="textp">Caroline Rocha Rodrigues<br />Idealizadora</p>
                </div>
            </section>

            <Footer />
        </>
    );
}
