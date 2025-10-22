import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/tcc.css";
import { supabase } from "../supabaseClient";

export default function DetalhesProfissional() {
    const { id } = useParams();
    const [profissional, setProfissional] = useState(null);

    useEffect(() => {
        const carregarProfissional = async () => {
            const { data, error } = await supabase
                .from('profissionais')
                .select('id, nome, cidade, estado, telefone, endereco, conselho, email, foto')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Erro ao carregar detalhes:', error);
            } else {
                setProfissional(data);
            }
        };
        carregarProfissional();
    }, [id]);

    if (!profissional) {
        return (
            <div className='fade-slide-up'>
                <Navbar />
                <main className="loading">
                    <p>Carregando detalhes do profissional...</p>
                </main>
                <Footer />
            </div>
        );
    }

    const telefones = profissional.telefone
        ? profissional.telefone.split(';').map(t => t.trim()).filter(Boolean)
        : [];
    const enderecos = profissional.endereco
        ? profissional.endereco.split(';').map(e => e.trim()).filter(Boolean)
        : [];

    return (
        <div className='fade-slide-up'>
            <Navbar />

            <header>
                <h1 className="titlepage">Perfil do profissional.</h1>
            </header>

            <main className="detalhes-container">
                <div className="divdetalhes">
                    <Link to="/especialistas" className="btn-voltar">← Voltar</Link>
                    <div className="perfil-card">
                        <div className="perfil-foto">
                            <img
                                src={profissional.foto}
                                alt={`Foto de ${profissional.nome}`}
                                className="perfil-foto-img"
                            />
                            <h2 className="detalhesnome">{profissional.nome}</h2>
                        </div>

                        <div className="perfil-info">
                            <p><span>Cidade/Estado:</span> {profissional.cidade} - {profissional.estado}</p>
                            <p><span>Conselho:</span> {profissional.conselho}</p>
                            <p>
                                <span>Email:</span> {profissional.email}
                            </p>

                            {profissional.telefone ? (
                                profissional.telefone.split(";").map((t, i) => (
                                    <p key={i}>
                                        <span>{i === 0 ? "Telefone(s):" : ""}</span> {t.trim()}
                                    </p>
                                ))
                            ) : (
                                <p><span>Telefone:</span> Não informado</p>
                            )}

                            {profissional.endereco ? (
                                profissional.endereco.split(";").map((e, i) => (
                                    <p key={i}>
                                        <span>{i === 0 ? "Endereço(s):" : ""}</span> {e.trim()}
                                    </p>
                                ))
                            ) : (
                                <p><span>Endereço:</span> Não informado</p>
                            )}

                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
