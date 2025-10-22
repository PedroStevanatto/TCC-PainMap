import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="divlogo"><Link to="/"><img src="/logo.png" alt="Logo PainMap" className="logo" /></Link></div>
            <div className="menu">
                <Link to="/" className="a">Página Inicial</Link>
                <Link to="/dtm" className="a">O que é DTM</Link>
                <Link to="/dicas" className="a">Educação sobre DTM</Link>
                <Link to="/especialistas" className="a">Especialistas</Link>
                <Link to="/sobre" className="a">Sobre</Link>
                <Link to="/agradecimentos" className="a">Agradecimentos</Link>
            </div>
        </nav>
    );
}