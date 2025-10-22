import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Dicas() {
    return (
        <>
            <div className='fade-slide-up'>
                <Navbar />

                <header>
                    <h1 className="titlepage">Educação sobre a DTM.</h1>
                    <p>Veja aqui materiais e vídeos educativos sobre a DTM.</p>
                </header>

                <main>
                    <section className="section">
                        <h2 className="title">DTM e dor de cabeça: uma relação mais próxima do que parece</h2>
                        <p className="text">
                            A Disfunção Temporomandibular (DTM) é um distúrbio que afeta a articulação temporomandibular (ATM) — a articulação que liga a mandíbula ao crânio —,
                            além dos músculos da mastigação e estruturas associadas.
                            Ela é uma das causas mais comuns de dor crônica na face, cabeça e pescoço, principalmente em mulheres entre 20 e 50 anos.
                        </p>
                        <p className="text">
                            Entre os sintomas mais frequentes estão:
                        </p>
                        <p className="text">
                            • Dor na face, mandíbula ou têmporas.<p></p>
                            • Estalos ou ruídos ao abrir a boca.<p></p>
                            • Dificuldade para mastigar ou falar.<p></p>
                            • Dor de cabeça frequente — muitas vezes confundida com enxaqueca ou cefaleia tensional.
                        </p>

                        <h3 className="title2">Quando a dor de cabeça vem da mandíbula</h3>
                        <p className="text">
                            Nem toda dor de cabeça tem origem no cérebro. Em muitos casos, ela pode vir dos músculos da mastigação ou da articulação da mandíbula,
                            especialmente quando há tensão, apertamento dos dentes (bruxismo) ou inflamação local.
                            Essas dores são chamadas de cefaleias secundárias, porque surgem como consequência de outra condição — neste caso, a DTM.
                            Já as cefaleias primárias (como a enxaqueca e a cefaleia tipo tensional) não são causadas por outro problema: são doenças por si só.
                        </p>
                        <p className="text">
                            Estudos mostram que pacientes com DTM têm mais dor de cabeça do que a população em geral — cerca de 67% das pessoas com DTM relatam esse sintoma,
                            contra 46% entre quem não tem o distúrbio.
                        </p>

                        <h3 className="title2">O nervo que conecta as duas dores</h3>
                        <p className="text">
                            A explicação para essa ligação está no nervo trigêmeo, responsável pela sensibilidade da face e parte da cabeça.
                            Quando há inflamação ou sobrecarga nos músculos da mastigação ou na ATM, esse nervo pode ser ativado, gerando dor que se espalha pela cabeça —
                            o que chamamos de dor referida.
                            É por isso que muitas pessoas com DTM sentem dor de cabeça na testa, nas têmporas ou na nuca, mesmo que o problema principal esteja na mandíbula.
                        </p>

                        <h3 className="title2">Tipos mais comuns de dor de cabeça</h3>
                        <p className="text">
                            • <strong>Cefaleia tipo tensional:</strong> é a mais frequente. Provoca sensação de aperto ou pressão nos dois lados da cabeça,
                            geralmente de intensidade leve a moderada. Pode durar horas e não costuma piorar com atividade física.<p></p>
                            • <strong>Enxaqueca (migrânea):</strong> é uma dor pulsátil, geralmente em um lado da cabeça, que pode durar de 4 a 72 horas.
                            Costuma vir acompanhada de náusea, sensibilidade à luz (fotofobia) e aos sons (fonofobia).<p></p>
                            Pacientes com DTM podem apresentar características mistas, com dor muscular e cefaleia ao mesmo tempo, o que exige atenção especial no diagnóstico.
                        </p>

                        <h3 className="title2">DTM, dor miofascial e cefaleia: uma combinação difícil</h3>
                        <p className="text">
                            Quando a dor de cabeça está associada à dor miofascial — causada por pontos de tensão nos músculos —, o desconforto tende a ser mais intenso.
                            Essas duas condições se potencializam, ou seja, uma piora a outra.
                            Por isso, é essencial que o profissional saiba diferenciar a origem da dor: se vem do músculo, da articulação ou se é uma cefaleia primária.
                        </p>

                        <h3 className="title2">Tratamento e cuidado integrados</h3>
                        <p className="text">
                            O tratamento deve ser individualizado e pode incluir:
                        </p>
                        <p className="text">
                            • Terapias manuais e fisioterapia para relaxar a musculatura.<p></p>
                            • Controle do bruxismo e ajustes nos hábitos de mastigação.<p></p>
                            • Alongamentos e calor local para aliviar a tensão.<p></p>
                            • Orientação sobre postura e autocuidado.<p></p>
                            • Em alguns casos, tratamento médico para dor de cabeça crônica.<p></p>
                            Quando há associação entre DTM e cefaleia, o trabalho conjunto entre dentista, fisioterapeuta e neurologista traz os melhores resultados.
                        </p>

                        <h3 className="title2">Em resumo</h3>
                        <p className="text">
                            DTM e dor de cabeça estão intimamente ligadas.
                            A tensão nos músculos da mandíbula pode gerar ou piorar crises de cefaleia.
                            Diagnóstico correto é essencial para escolher o tratamento adequado.
                            Abordagens combinadas — físicas, odontológicas e médicas — são as mais eficazes.
                        </p>

                        <div className='divvideo'>
                            <p className='videop2'>Vídeo explicativo sobre DTM x Dor de cabeça</p>
                            <iframe
                                src="https://www.instagram.com/reel/C7OecaZu-65/embed"
                                width="100%"
                                height='300'
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                                title="Instagram Reel"
                            ></iframe>
                        </div>
                    </section>


                    <section className="sectionb">
                        <h2 className="title">DTM x Dor Referida</h2>
                        <h3 className="title2">Síndrome da Dor Miofascial (SDM): quando o músculo é a origem da dor</h3>
                        <p className="text">
                            A Síndrome da Dor Miofascial (SDM) é uma das causas mais comuns de dor muscular crônica, podendo afetar diferentes partes do corpo — inclusive a face e a mandíbula.
                            Ela ocorre quando há regiões do músculo chamadas pontos gatilho miofasciais (PGM), pequenas áreas tensas e doloridas que podem causar dor local e também dor referida, isto é, dor percebida em outra região do corpo.
                        </p>

                        <h3 className="title2">O que é um ponto gatilho?</h3>
                        <p className="text">
                            Um ponto gatilho é como um “nó” dentro do músculo, sensível ao toque e capaz de gerar dor, sensação de peso, formigamento ou rigidez.
                            Quando pressionado, ele pode reproduzir a dor que o paciente sente no dia a dia — por exemplo, dor de cabeça, na face, na mandíbula ou no pescoço.
                        </p>
                        <p className="text">
                            Existem dois tipos principais: <p></p>
                            • <strong>Ativo:</strong> provoca dor mesmo em repouso.<p></p>
                            • <strong>Latente:</strong> não causa dor espontânea, mas gera desconforto ao toque e pode limitar o movimento.
                        </p>

                        <h3 className="title2">Relação com a DTM</h3>
                        <p className="text">
                            Nos músculos da mastigação, especialmente o masseter e o temporal, esses pontos gatilho são bastante comuns em pessoas com Disfunção Temporomandibular (DTM).
                            Eles podem causar:<p></p>
                            • Dor ao mastigar ou abrir a boca.<p></p>
                            • Dor na face, têmporas ou próximo ao ouvido.<p></p>
                            • Dores de cabeça tensionais.<p></p>
                            • Zumbido ou sensação de ouvido tampado.
                        </p>

                        <h3 className="title2">Por que os pontos gatilho aparecem?</h3>
                        <p className="text">
                            A origem exata ainda não é totalmente conhecida, mas diversos fatores aumentam o risco de desenvolvimento:<p></p>
                            • Posturas incorretas e tensão muscular constante.<p></p>
                            • Bruxismo (ranger ou apertar os dentes).<p></p>
                            • Estresse emocional e ansiedade.<p></p>
                            • Falta de atividade física.<p></p>
                            • Lesões ou sobrecarga muscular.
                        </p>
                        <p className="text">
                            Quando o músculo permanece contraído por muito tempo, o fluxo de sangue e oxigênio diminui, o que dificulta o relaxamento das fibras.
                            Isso leva à inflamação, acúmulo de toxinas e dor persistente.
                        </p>

                        <h3 className="title2">Diagnóstico</h3>
                        <p className="text">
                            O diagnóstico é clínico e deve ser realizado por um profissional capacitado, por meio da palpação dos músculos.
                            Durante o exame, o especialista busca áreas tensas e doloridas, observando a presença de resposta contrátil (pequeno espasmo muscular) e dor irradiada.
                        </p>

                        <h3 className="title2">Tratamento</h3>
                        <p className="text">
                            O tratamento deve ser individualizado e, muitas vezes, multidisciplinar. As principais abordagens incluem:<p></p>
                            • Alongamentos e exercícios de relaxamento.<p></p>
                            • Terapias manuais (digito-pressão e liberação miofascial).<p></p>
                            • Termoterapia (uso de calor local).<p></p>
                            • Agulhamento seco (realizado por profissional habilitado).<p></p>
                            • Correção de hábitos e posturas que perpetuam a dor.
                        </p>
                        <p className="text">
                            Além disso, o equilíbrio emocional é fundamental, já que o estresse e a ansiedade podem manter a musculatura em constante tensão.
                            Em alguns casos, o acompanhamento psicológico é recomendado.
                        </p>

                        <h3 className="title2">Importância do diagnóstico precoce</h3>
                        <p className="text">
                            Reconhecer e tratar a Síndrome da Dor Miofascial de forma precoce é essencial para evitar que a dor se torne crônica e de difícil controle.
                            A informação, o autocuidado e a busca por ajuda profissional são grandes aliados na melhora da qualidade de vida e no alívio da dor.
                        </p>

                        <div className='divvideo'>
                            <p className='videop2'>Vídeo explicativo sobre DTM x Dor referida </p>
                            <iframe
                                src="https://www.youtube.com/embed/WhwbehBPzQ4"
                                width="100%"
                                height='300'
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                                title="YouTube Video DTM"
                            ></iframe>
                        </div>
                    </section>

                    <section className="section">
                        <h2 className="title">DTM e fatores emocionais: quando o corpo fala através da dor</h2>
                        <p className="text">
                            A Disfunção Temporomandibular (DTM) é uma condição que afeta a articulação temporomandibular (ATM) — responsável por conectar a mandíbula ao crânio — e também os músculos e ligamentos que participam dos movimentos de mastigação e fala.
                        </p>
                        <p className="text">
                            Quem tem DTM pode sentir dor na face, dificuldade para abrir a boca, estalos articulares ou desconforto ao mastigar e falar.
                            Embora existam várias causas possíveis, hoje sabemos que as emoções têm um papel muito importante na origem e na manutenção dessa dor.
                        </p>

                        <h3 className="title2">O impacto do estresse e das emoções na DTM</h3>
                        <p className="text">
                            O estresse, a ansiedade e a depressão são fatores que podem aumentar a tensão nos músculos da face e do pescoço, levando a sobrecarga na articulação e, consequentemente, à dor.
                        </p>
                        <p className="text">
                            Quando vivemos períodos de tensão emocional, é comum apertar os dentes, contrair os músculos da mandíbula ou ranger os dentes — comportamento conhecido como bruxismo.
                            Esse hábito pode piorar os sintomas da DTM e até desencadear novas crises de dor.
                        </p>
                        <p className="text">
                            Durante a pandemia, por exemplo, muitos estudos mostraram um aumento das queixas de dor facial e de DTM.
                            A ansiedade, o isolamento social e a incerteza sobre o futuro fizeram com que mais pessoas percebessem tensão muscular, dor na mandíbula e dificuldade para mastigar.
                        </p>

                        <h3 className="title2">O cérebro e a percepção da dor</h3>
                        <p className="text">
                            As emoções também influenciam a forma como o cérebro interpreta a dor.
                            Quando estamos sob estresse constante, o sistema nervoso fica em “alerta” e pode aumentar a sensibilidade à dor — fenômeno chamado de sensibilização central.
                        </p>
                        <p className="text">
                            Isso significa que o corpo pode reagir com dor mesmo a estímulos leves, tornando o desconforto mais persistente.
                            Por isso, a DTM não deve ser vista apenas como um problema físico, mas como uma condição que envolve corpo e mente.
                        </p>

                        <h3 className="title2">Um olhar integrado sobre o tratamento</h3>
                        <p className="text">
                            Pode-se concluir que:<p></p>
                            • Emoções como ansiedade, tensão e estresse podem contribuir para o aparecimento e agravamento da DTM.<p></p>
                            • O bruxismo e a tensão muscular são formas pelas quais o corpo expressa essa sobrecarga emocional.<p></p>
                            • O tratamento deve ser integrado, envolvendo profissionais da odontologia, fisioterapia e psicologia.
                        </p>

                        <div className='divvideo'>
                            <p className='videop2'>Vídeo explicativo sobre DTM x Fatores emocionais</p>
                            <iframe
                                src="https://www.instagram.com/reel/DOosUB0EWuC/embed"
                                width="100%"
                                height='400'
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                                title="Instagram Reel DTM"
                            ></iframe>
                        </div>
                    </section>

                    <section className="sectionb">
                        <h2 className="title">Antidepressivos, Bruxismo e Disfunção Temporomandibular (DTM)</h2>

                        <h3 className="title2">O que são antidepressivos?</h3>
                        <p className="text">
                            Os antidepressivos são medicamentos amplamente utilizados em países ocidentais e indicados para tratar diversos problemas de saúde, como:<p></p>
                            • Depressão.<p></p>
                            • Ansiedade.<p></p>
                            • Transtornos obsessivo-compulsivos.<p></p>
                            • Dor crônica.<p></p>
                            • Transtornos alimentares.
                        </p>
                        <p className="text">
                            Os inibidores seletivos de recaptação de serotonina (ISRSs), como <strong>fluoxetina</strong>, <strong>sertralina</strong> e <strong>citalopram</strong>, atuam aumentando os níveis de serotonina no cérebro, ajudando a regular o humor e a aliviar sintomas depressivos e ansiosos.
                        </p>

                        <h3 className="title2">Depressão, ansiedade e estresse</h3>
                        <p className="text">
                            Segundo a Organização Mundial da Saúde (OMS):<p></p>
                            • <strong>Depressão:</strong> humor baixo, perda de prazer ou interesse em atividades por períodos prolongados.<p></p>
                            • <strong>Ansiedade:</strong> sensação constante de preocupação e tensão física.<p></p>
                            • <strong>Estresse:</strong> estado de tensão mental provocado por situações desafiadoras, que, quando excessivo, prejudica a saúde física e mental.
                        </p>
                        <p className="text">
                            Esses fatores podem impactar significativamente a qualidade de vida e até estar relacionados a distúrbios musculares, como aqueles que afetam a mandíbula.
                        </p>

                        <h3 className="title2">O que é bruxismo?</h3>
                        <p className="text">
                            O bruxismo é a atividade excessiva dos músculos da mastigação e pode ocorrer de duas formas principais:<p></p>
                            • <strong>Bruxismo do sono:</strong> ocorre durante o sono, podendo ser rítmico ou tônico.<p></p>
                            • <strong>Bruxismo em vigília:</strong> ocorre enquanto estamos acordados, com apertos ou ranger dos dentes e movimentos involuntários da mandíbula.
                        </p>
                        <p className="text">
                            Mesmo pessoas sem dentes podem apresentar bruxismo. O uso de antidepressivos ISRSs pode aumentar o risco dessa condição, devido à influência da serotonina na regulação dos músculos da mandíbula.
                        </p>

                        <h3 className="title2">Por que é importante saber disso?</h3>
                        <p className="text">
                            Compreender a relação entre antidepressivos, bruxismo e DTM é essencial para:<p></p>
                            • Reconhecer sinais precoces de problemas na mandíbula.<p></p>
                            • Procurar ajuda profissional antes que os sintomas se agravem.<p></p>
                            • Evitar complicações e promover uma melhor qualidade de vida.
                        </p>
                        <p className="text">
                            Profissionais de saúde podem desenvolver estratégias personalizadas para cada paciente, integrando cuidados médicos, odontológicos e psicológicos.
                        </p>
                        <p className="text">
                            Se você faz uso de antidepressivos — ou conhece alguém que faça —, fique atento a sinais de <strong>aperto ou ranger dos dentes</strong> e <strong>desconforto na mandíbula</strong>.
                            Compartilhar essas informações é uma forma de prevenir a DTM e promover saúde bucal e mental.
                        </p>

                        <div className='divvideo'>
                            <p className='videop2'>Vídeo explicativo sobre DTM x Uso de antidepressivos</p>
                            <iframe
                                src="https://www.instagram.com/reel/DC2WU3WTqCc/embed"
                                width="100%"
                                height='300'
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                                title="Instagram Reel DTM"
                            ></iframe>
                        </div>

                    </section>

                    <section className="section">
                        <h2 className="title">A Relação entre DTM e Zumbido</h2>
                        <p className="text">
                            O <strong>zumbido</strong> — aquele som incômodo no ouvido sem uma fonte externa — pode estar diretamente relacionado à <strong>Disfunção Temporomandibular (DTM)</strong>.
                            Estudos indicam que até <strong>52% dos pacientes com DTM</strong> apresentam zumbido, e essa conexão ocorre devido à interação entre os nervos da mandíbula e o sistema auditivo.
                        </p>
                        <p className="text">
                            Quando há tensão muscular ou disfunção na articulação temporomandibular, o sistema nervoso pode enviar sinais alterados ao cérebro,
                            modificando a forma como os sons são percebidos.
                            Por isso, tratar a DTM frequentemente ajuda a <strong>reduzir ou até eliminar o zumbido</strong>.
                        </p>

                        <h3 className="title2">Quando procurar ajuda?</h3>
                        <p className="text">
                            Se você sente <strong>dor na mandíbula</strong>, <strong>dificuldade para abrir a boca</strong>,
                            <strong>estalos frequentes</strong> ou sofre com <strong>zumbido persistente</strong>, procure um profissional especializado.
                            O diagnóstico precoce e o tratamento adequado podem evitar complicações e melhorar significativamente a qualidade de vida.
                        </p>

                        <div className='divvideo'>
                            <p className='videop2'>Vídeo explicativo sobre DTM x Zumbido</p>
                            <iframe
                                src="https://www.instagram.com/reel/C-X9iqCu5VF/embed"
                                width="100%"
                                height='300'
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                                title="Instagram Reel"
                            ></iframe>
                        </div>
                    </section>

                    <section className="sectionb">
                        <h2 className="title">DTM em crianças e adolescentes: atenção desde cedo</h2>

                        <h3 className="title2">Sinais e sintomas nas crianças</h3>
                        <p className="text">
                            Alguns sintomas comuns que podem aparecer em crianças e adolescentes incluem:
                        </p>
                        <p className="text">
                            • Dor de cabeça, dor perto da orelha ou na face.<p></p>
                            • Sensibilidade ao toque nos músculos da mastigação.<p></p>
                            • Fadiga ao mastigar.<p></p>
                            • Estalos ou ruídos na mandíbula.<p></p>
                            • Limitação da abertura da boca.<p></p>
                            • Zumbido, sensação de ouvido tampado ou vertigem.
                        </p>
                        <p className="text">
                            Além disso, estudos mostram que alterações posturais e tensões nos músculos do pescoço e das costas podem aumentar o risco de DTM.
                        </p>

                        <h3 className="title2">Impacto da DTM na infância</h3>
                        <p className="text">
                            A DTM não afeta apenas a saúde física. Ela pode influenciar:
                        </p>
                        <p className="text">
                            • Sono: dificuldade para dormir devido à dor.<p></p>
                            • Aprendizado: concentração prejudicada em atividades escolares.<p></p>
                            • Emoções: ansiedade, irritabilidade e mudanças no comportamento.<p></p>
                            • Relações sociais: desconforto ao falar ou mastigar na presença de colegas.
                        </p>
                        <p className="text">
                            Por isso, identificar sinais de DTM desde cedo é essencial para prevenir complicações e garantir o bem-estar da criança.
                        </p>

                        <h3 className="title2">Educação em saúde através de histórias em quadrinhos</h3>
                        <p className="text">
                            Veja aqui uma história em quadrinhos que mostra de forma ilustrativa, o que é DTM:
                        </p>
                        <p className="text">
                            <div className="div-botao3" style={{ marginTop: '0.5rem' }}>
                                <a href="/graphic FINAL.pdf" download className="button">História em quadrinhos sobre DTM (PDF)</a>
                            </div>
                        </p>

                        <h3 className="title2">Por que a informação é importante</h3>
                        <p className="text">
                            • Crianças não estão livres de apresentar DTM, mesmo sem sintomas graves inicialmente.<p></p>
                            • Pais, cuidadores e professores desempenham papel crucial na identificação precoce.<p></p>
                            • Intervenções conservadoras e não invasivas ajudam a prevenir dores e complicações futuras.<p></p>
                            • Educação em saúde bem planejada, com HQs e outros recursos visuais, facilita a compreensão e o autocuidado.
                        </p>

                        <p className="text">
                            Ensinar sobre DTM desde cedo é um passo importante para promover saúde, prevenir dores e melhorar a qualidade de vida das crianças.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="title">Tratamento e cuidados</h2>
                        <p className="text">
                            O manejo da DTM costuma começar com educação do paciente e autocuidado, destacando hábitos que podem sobrecarregar a mandíbula, como roer unhas ou mascar chiclete. Outros cuidados incluem:
                        </p>
                        <p className="text">
                            • Exercícios terapêuticos para relaxar os músculos, melhorar a mobilidade e reduzir a dor.<p></p>
                            • Terapias manuais aplicadas por profissionais especializados.<p></p>
                            • Farmacoterapia com analgésicos, anti-inflamatórios, relaxantes musculares ou antidepressivos, quando necessário.<p></p>
                            • Terapias reversíveis, como aparelhos interoclusais e técnicas de relaxamento ou terapia cognitivo-comportamental.
                        </p>
                        <p className="text">
                            O objetivo principal é reduzir a dor, melhorar a função da mandíbula e fortalecer os músculos, sempre com abordagem não invasiva e incentivando o paciente a participar ativamente do tratamento.
                        </p>

                        <h3 className="title2">Exercícios e autocuidado</h3>
                        <p className="text">
                            Os exercícios podem ser feitos em casa (auto-exercício) ou com ajuda de um profissional. Eles ajudam a:
                        </p>
                        <p className="text">
                            • Diminuir a dor e o desconforto muscular.<p></p>
                            • Relaxar músculos tensos e reduzir espasmos.<p></p>
                            • Restaurar a mobilidade da mandíbula.<p></p>
                            • Melhorar a postura e coordenação muscular.
                        </p>
                        <p className="text">
                            O autocuidado fortalece a confiança do paciente, promove responsabilidade sobre a própria saúde e aumenta a eficácia do tratamento. Os exercícios foram planejados para aliviar a dor, melhorar a função da mandíbula e fortalecer os músculos.
                        </p>

                        <div className='divvideo'>
                            <p className='videop2'>Vídeo sobre Auto Exercícios para o controle da DTM</p>
                            <iframe
                                src="https://www.instagram.com/reel/C7w5JkNvk8_/embed"
                                width="100%"
                                height='300'
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                                title="Instagram Reel DTM"
                            ></iframe>
                        </div>

                    </section>


                    <section className="sectionb">
                        <h2 className="title">Ainda não sabe como lidar com a DTM? Procure um profissional.</h2>
                        <p className="text">
                            Se caso precise de ajuda para lidar com a DTM, separamos o contato de alguns profissionais especializados na área para te ajudar. Lembre-se que um diagnóstico correto é o primeiro passo para um tratamento
                            eficaz e uma melhor qualidade de vida.
                        </p>
                        <div className="div-botao2">
                            <Link to="/especialistas" className="button">Veja aqui os profissionais disponíveis</Link>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}