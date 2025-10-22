import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/tcc.css';

export default function Sobre() {
    return (
        <>
            <div className='fade-slide-up'>
                <Navbar />

                <header>
                    <h1 className="titlepage">Informações do projeto.</h1>
                    <p>Veja aqui informações extras sobre o PainMap.</p>
                </header>

                <main>
                    <section className="sectionb">
                        <h2 className="title">O que é o PainMap?</h2>
                        <p className="text">
                            O PainMap é um projeto desenvolvido pelos alunos do curso Técnico em Desenvolvimento de Sistemas da
                            ETEC Bento Quirino, turma do 3° ano, no ano de 2025, tendo como tema central a
                            Disfunção Temporomandibular (DTM), condição clínica de alta relevância devido à sua frequência na
                            população e ao impacto que provoca na qualidade de vida dos pacientes. O objetivo do projeto é disponibilizar
                            informações confiáveis e acessíveis sobre a DTM, conscientizando a sociedade a respeito de seus sintomas, fatores
                            de risco e formas de manejo, além de incentivar a procura por acompanhamento profissional especializado.
                        </p>
                        <p className="text">
                            Para alcançar esse propósito, o projeto contempla três recursos integrados. O primeiro é um
                            site informativo, que reúne conteúdos detalhados sobre a DTM e inclui ainda contatos de
                            especialistas aptos a oferecer atendimento clínico. O segundo é um aplicativo mobile,
                            que apresenta as mesmas informações em versão resumida e adaptada para dispositivos móveis, trazendo como diferencial
                            um formulário de autotriagem. Esse recurso, baseado em perguntas simples, oferece um resultado preliminar sobre a
                            possibilidade de a pessoa apresentar sinais da disfunção, funcionando como apoio inicial à triagem e estímulo à busca
                            por diagnóstico adequado. Por fim, o projeto também conta com um modelo físico interativo: um crânio
                            produzido em impressão 3D, equipado com botões e LEDs que destacam pontos anatômicos relacionados à DTM. Esse protótipo
                            tem caráter didático e contribui para a visualização prática da condição.
                        </p>
                        <p className="text">
                            Assim, o PainMap se apresenta como uma iniciativa que une tecnologia, educação em saúde e inovação,
                            contribuindo para ampliar o conhecimento sobre a Disfunção Temporomandibular e favorecendo o acesso a informações de
                            qualidade, essenciais para a prevenção e o manejo adequado da disfunção.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="title">Por que escolhemos esse tema?</h2>
                        <p className="text">
                            A ideia de trabalhar com o tema da Disfunção Temporomandibular (DTM) 
                            surgiu de uma forma bem natural. Dois integrantes do grupo tinham interesse 
                            pela área da odontologia, e isso acabou levando a ideia de fazer um projeto de 
                            TCC voltado para essa área. E além disso, a mãe de uma das integrantes é uma 
                            especialista na área de DTM e Dor Orofacial, o que ajudou muito na escolha do 
                            tema e também no desenvolvimento do projeto.
                        </p>
                        <p className="text">
                            Com esse contato mais próximo com a área, percebemos o quanto a DTM é 
                            comum e, ao mesmo tempo, pouco conhecida pelas pessoas. Muita gente 
                            sente dores relacionadas a ela sem nem imaginar o que está acontecendo. 
                            Assim, vimos uma oportunidade de juntar os nossos interesses em tecnologia 
                            e saúde em um projeto só, para criar algo que pudesse realmente ajudar as 
                            pessoas a entenderem melhor o problema e buscarem o tratamento certo.
                        </p>
                    </section>
                    <section className="sectionb">
                        <h2 className="title">Qual nossos objetivos com esse projeto?</h2>
                        <p className="text">
                            1) Conscientizar a população em geral, especialmente os adolescentes que responderão a pesquisa, sobre sintomas de DTM e
                            terapias conservadoras para o controle dos mesmos,  por meio da elaboração de um site  voltado para a educação do paciente que
                            podem contribuir significativamente para uma melhor qualidade de vida.
                        </p>
                        <p className="text">
                            2) Demonstrar por meio do sistema  embarcado um molde de cabeça o que é a dor referida, ou seja, uma dor localizada longe de
                            sua origem, muito comum para quem tem DTM.
                        </p>
                        <p className="text">
                            3) Desenvolver  um aplicativo com as 4 perguntas do questionário de rastreamento de dor por DTM. Para todos aqueles que responderem afirmativamente
                            para pelo menos uma pergunta, será sugerido que visite o site e que deixe perguntas em caso de dúvidas para profissionais da área responderem no próprio site.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="title">Qual a justificativa do projeto?</h2>
                        <p className="text">
                            O número de casos de DTM aumentou significativamente durante a pandemia e continua aumentando, especialmente, em jovens. Esse aumento possui relação direta com níveis mais altos de ansiedade e
                            depressão devido às incertezas que os adolescentes vivem. Em alguns casos, quando é necessário tomar medicação, o antidepressivo gera como efeito colateral, um aumento no apertamento dentário e, consequentemente, dor, especialmente dor de cabeça.
                            Sendo assim, é de suma importância pesquisar a frequência de sintomas de DTM em uma amostra de adolescentes dos terceiros anos integrados ao técnico do Bento Quirino, para que esses jovens, ao
                            relatarem sintomas, recebam orientação para que haja controle dessa dor.
                        </p>
                        <p className="text">
                            Foi desenvolvido um instrumento de autorrelato na triagem de pacientes com sintomas de dor orofacial, relacionadas à dor (GONZALEZ et al., 2011). Entretanto,
                            somente especialistas da área utilizam essa ferramenta, visto que esse questionário faz parte do critério diagnóstico para possível diagnóstico de DTM. Nesse
                            sentido, a ideia de criar um site e um aplicativo que pudesse contemplar outros profissionais e a população em geral é de grande valia para uma melhora na
                            qualidade de vida das pessoas acometidas por esses sintomas.
                        </p>
                    </section>

                    <section className="sectionb">
                        <h2 className="title">Qual o diferencial do projeto?</h2>
                        <p className="text">
                            Apesar de frequente, a DTM é uma doença pouco conhecida e, por mais curioso que pareça, uma grande parte dos profissionais de saúde tem pouco conhecimento sobre ela ou a desconhecem. Nesse sentido, é muito importante que as pessoas em geral possam ter acesso aos principais sintomas
                            e às terapias para o controle da dor, especialmente porque após a pandemia, o número de indivíduos acometidos por sintomas de DTM aumentou consideravelmente.
                        </p>
                    </section>

                    <h2 className="titlei">Nossos integrantes</h2>

                    <section className="sectionp">

                        <div className="divfoto">
                            <section className="sectionf">
                                <img src="/perfils/viana.jpeg" className="perfil" alt="Vinicius Viana Alves" />
                            </section>
                            <div className="nome">
                                <p className="textp">Vinicius Viana Alves<br />Designer e Programador</p>
                            </div>
                        </div>

                        <div className="divfoto">
                            <section className="sectionf">
                                <img src="/perfils/pijas.png" className="perfil" alt="Pedro Henrique" />
                            </section>
                            <p className="textp">Pedro Henrique Stevanatto<br />Desenvolvedor Sist. Embarcados</p>
                        </div>

                        <div className="divfoto">
                            <section className="sectionf">
                                <img src="/perfils/carol.png" className="perfil" alt="Caroline Rocha Rodrigues" />
                            </section>
                            <p className="textp">Caroline Rocha Rodrigues<br />Idealizadora</p>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
