import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dtm from './pages/dtm';
import Sintomas from './pages/sintomas';
import Sobre from './pages/sobre';
import Dicas from './pages/dicas';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dtm" element={<Dtm />} />
                <Route path="/sintomas" element={<Sintomas />} />
                <Route path="/dicas" element={<Dicas />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </Router>
    );
}
