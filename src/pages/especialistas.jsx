import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/tcc.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Especialistas() {
    const [profissionais, setProfissionais] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(1);
    const profissionaisPorPagina = 4;

    useEffect(() => {
        const carregarProfissionais = async () => {
            const { data, error } = await supabase
                .from('profissionais')
                .select('id, nome, cidade, estado, foto, conselho, email, telefone, endereco')
                .order('id', { ascending: true });

            if (error) {
                console.error('Erro ao carregar dados:', error);
            } else {
                setProfissionais(data);
            }
        };
        carregarProfissionais();
    }, []);

    const indiceUltimo = paginaAtual * profissionaisPorPagina;
    const indicePrimeiro = indiceUltimo - profissionaisPorPagina;
    const profissionaisAtuais = profissionais.slice(indicePrimeiro, indiceUltimo);
    const totalPaginas = Math.ceil(profissionais.length / profissionaisPorPagina);

    return (
        <div className='fade-slide-up'>
            <Navbar />

            <header>
                <h1 className="titlepage">Precisa de ajuda?</h1>
                <p>Entre em contato com profissionais especializados em DTM.</p>
            </header>

            <main>
                <section className="section">
                    <h2 className="titleprof">Profissionais disponíveis</h2>

                    <div className='divcardsprof'>
                        {profissionaisAtuais.map((p) => (
                            <Link
                                key={p.id}
                                to={`/detalhes/${p.id}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <div className='cardprof'>
                                    <img
                                        src={p.foto}
                                        alt={`Foto de ${p.nome}`}
                                        className='imgprof'
                                    />
                                    <p className='profnome'>{p.nome}</p>
                                    <p className='profcep'>
                                        {p.cidade} - {p.estado}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className='divpaginacao'>
                        <button
                            className="button"
                            onClick={() => setPaginaAtual((p) => Math.max(p - 1, 1))}
                            disabled={paginaAtual === 1}
                        >
                            Anterior
                        </button>

                        <span className='spanp'>
                            Página {paginaAtual} de {totalPaginas}
                        </span>

                        <button
                            className="button"
                            onClick={() => setPaginaAtual((p) => Math.min(p + 1, totalPaginas))}
                            disabled={paginaAtual === totalPaginas}
                        >
                            Próxima
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
