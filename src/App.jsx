import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/templates/Layout'
import NaoEncontrada from './pages/NaoEncontrada'
import Produtos from './pages/Produtos'
import DetalheProduto from './pages/DetalheProduto'
import Carrinho from './pages/Carrinho'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>

      <Route path="/" element={<Navigate to="/produtos" replace />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/:id" element={<DetalheProduto />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
        
    </BrowserRouter>

  )
}
export default App