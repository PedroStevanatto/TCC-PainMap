import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dtm from './pages/dtm';
import Agradecimentos from './pages/agradecimentos';
import Sobre from './pages/sobre';
import Dicas from './pages/dicas';
import Detalhes from './pages/detalhes';
import Especialistas from './pages/especialistas';
import ScrollToTop from '../ScrollToTop';
import "./App.css";

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dtm" element={<Dtm />} />
                <Route path="/Agradecimentos" element={<Agradecimentos />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/especialistas" element={<Especialistas />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
            </Routes>
        </Router>
    );
}
