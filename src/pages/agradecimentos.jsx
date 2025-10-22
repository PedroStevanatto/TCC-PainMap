import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/tcc.css';

export default function Agradecimentos() {
  return (
    <div className="fade-slide-up">
      <Navbar />

      <header>
        <h1 className="titlepage">Agradecimentos</h1>
        <p>Um agradecimento especial a todos que contribuíram para tornar o PainMap possível.</p>
      </header>

      <main>
        <section className="sectionb">
            <h2 className="title">Agradecimento aos profisisonais.</h2>
            <p className="text">
            A concretização deste projeto só foi possível graças ao apoio, 
            à dedicação e ao incentivo de profissionais que contribuíram de
             forma essencial em cada etapa de seu desenvolvimento.
          </p>
          <p className="text">
            Manifestamos nossa profunda gratidão ao Prof. Dr. Antonio Sérgio Guimarães, 
            coordenador do Curso de Pós-Graduação em Disfunção Temporomandibular (DTM) e 
            Dor Orofacial, pela liderança inspiradora e pelo compromisso com a formação 
            de excelência na área da dor orofacial. Sua orientação e incentivo à pesquisa 
            foram fundamentais para o fortalecimento deste trabalho e para o aprimoramento 
            científico e humano de toda a equipe, em especial das professoras Adriana Domingues, 
            Andrea Meneguette e Yolanda Camargo, pautadas no conhecimento, na ética 
            e na busca constante pela qualidade do cuidado em saúde.
          </p>
          <p className="text">
            Um agradecimento muito especial à Profa. Dra. Luciane Lacerda Franco Rocha Rodrigues, cuja sabedoria, 
            paciência e dedicação foram pilares fundamentais para a realização deste projeto. 
            Sua orientação teórica precisa, aliada ao fornecimento de vídeos educativos e 
            materiais de grande valor didático, enriqueceu de forma notável o desenvolvimento 
            desta proposta. Sua sensibilidade e compromisso com a educação em saúde inspiraram 
            todo o processo.
          </p>
          <div className='agdprofs'>
          <div className='imagemnomes'>
              <img src="/lucianeesergio.png" alt="lueseimg" className='lueseimg' />
              <h2 className='luese'>Prof. Dr. Antonio Sérgio Guimarães e <br></br>
                 Profa. Dra. Luciane L. F. Rocha Rodrigues</h2>
          </div>
          <div className='imagemnomes'>
              <img src="/equipe.png" alt="lueseimg" className='lueseimg' />
              <h2 className='luese'>Prof Dr Antonio Sérgio Guimarães e equipe <br></br>
              do Curso de pós graduação em DTM e Dor Orofacial. </h2>
          </div>
          </div>
        </section>

        <section className="section">
          <h2 className="title"> Agradecimento à ETEC Bento Quirino e professores.</h2>
          <p className="text">
            A concretização deste projeto foi possível graças ao apoio institucional e à 
            estrutura oferecida pela ETEC Bento Quirino, cuja dedicação ao ensino 
            técnico de qualidade foi essencial para o desenvolvimento deste Trabalho de 
            Conclusão de Curso.
          </p>
          <p className="text">
            Manifestamos nossa sincera gratidão à instituição por disponibilizar os recursos necessários, 
            os laboratórios de informática e o suporte tecnológico indispensável para a 
            execução deste projeto. 
            Agradecemos, igualmente, ao corpo docente do Curso 
            Técnico em Desenvolvimento de Sistemas, 
            composto por professores que, com competência, 
            paciência e comprometimento, transmitiram conhecimento e 
            stimularam a inovação e o trabalho em equipe.
          </p>
          <p className="text">
            Em especial, expressamos nossos agradecimentos aos professores Rafael Anderson Cruz, 
            Tiago Jesus de Souza e Simone dos Santos Medeiros Lacerda, pelo apoio constante,
            pelas orientações técnicas e pelo incentivo à aplicação prática dos conhecimentos 
            adquiridos, que foram fundamentais para o êxito desta proposta.
          </p>
          <p className="text">
            Deixamos também um reconhecimento especial ao Prof. Marcos Amaral, que, mesmo não sendo 
            nosso professor direto, atuou como parceiro essencial na construção e no 
            aprimoramento do projeto físico, contribuindo com sua experiência e disponibilidade 
            exemplar. Agradecemos ainda ao Prof. Marcelus Guirardello, cuja colaboração e sugestões 
            precisas foram determinantes para o pleno funcionamento do projeto físico, demonstrando 
            generosidade e verdadeiro espírito colaborativo.
          </p>

          <div className='agdprofs2'>
          <div className='imagemnomes2'>
              <img src="/etec.png" alt="bentao" className='bentao' />
              <h2 className='luese'>ETEC Bento Quirino.</h2>
          </div>
          </div>
        </section>

        <section className="sectionb">
          <h2 className="title"> Agradecimento aos familiares e colegas.</h2>
          <p className="text">
            Estendemos nossos agradecimentos à família, pelo amor incondicional, paciência e incentivo em todos os momentos, 
            oferecendo apoio emocional e compreensão durante cada etapa deste trabalho. Aos amigos, pela presença constante, pelas palavras de encorajamento e pela parceria nos momentos de desafio, deixamos nossa sincera gratidão.
          </p>
        </section>

        <section className="section">
          <h2 className="title"> Agradecimento final.</h2>
          <p className="text">
            A todos que, direta ou indiretamente, contribuíram para a execução deste trabalho, expressamos o nosso mais profundo e sincero agradecimento.
          </p>
          <div className='agdprofs2'>
          <div className='imagemnomes2'>
              <img src="/equipepainmap.png" alt="equipep" className='equipep' />
              <h2 className='luese'>Equipe PainMap.</h2>
          </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
