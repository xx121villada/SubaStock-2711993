import { Routes, Route, HashRouter } from 'react-router-dom';
import Inicio from './App';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import { DetalleSubasta } from './components/detalleSubasta/DetalleSubasta';
import VisualizarAnimal from './pages/VisualizarAnimales/VisualizarAnimal';
import Animales from './pages/Animales/Animales';
import DetallesAnimal from './pages/DetalleAnimales/DetallesAnimal';
export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/registro" element={<Registro />} />
                <Route exact path='/detalle-subasta' element={<DetalleSubasta />} />
                <Route exact path="/detalle-animales" element={<DetallesAnimal />} />
                <Route exact path='/tipos-especie' element={<Animales />} />
                <Route exact path='/visualizar/:tipoAnimal' element={<VisualizarAnimal />} />
            </Routes>
        </HashRouter>
    );
}
