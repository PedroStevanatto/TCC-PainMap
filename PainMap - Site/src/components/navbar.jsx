import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="divlogo"><img src="/logo.png" alt="Logo PainMap" className="logo" /></div>
            <div className="menu">
                <Link to="/" className="a">Home</Link>
                <Link to="/dtm" className="a">O que é DTM</Link>
                <Link to="/sintomas" className="a">Sintomas</Link>
                <Link to="/dicas" className="a">Dicas</Link>
                <Link to="#especialistas" className="a">Especialistas</Link>
                <Link to="/sobre" className="a">Sobre</Link>
            </div>
        </nav>
    );
}