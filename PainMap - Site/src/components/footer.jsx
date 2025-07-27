import '../styles/tcc.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 PainMap. Todos os direitos reservados.</p>
            <div className="nav-links">
                <Link to="/sobre">Sobre</Link> 
            </div>
        </footer>
    );
}