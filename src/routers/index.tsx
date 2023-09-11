import { Routes, Route } from 'react-router-dom';
import { Home, Colors, Pallette } from '../pages';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/colors/:colorPath" element={<Pallette />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default Routers;
