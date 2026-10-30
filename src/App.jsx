import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/templates/Layout'
import NaoEncontrada from './pages/NaoEncontrada'
import Produtos from './pages/Produtos'
import DetalheProduto from './pages/DetalheProduto'
import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Falha from './pages/Falha'
import RotaPrivada from './routes/RotaPrivada'






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>

      <Route path="/" element={<Navigate to="/produtos" replace />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/:id" element={<DetalheProduto />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route element={<RotaPrivada />}>
       <Route path="/pagamento" element={<Pagamento />} />
            </Route>
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/falha" element={<Falha />} />      
      <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
        
    </BrowserRouter>

  )
}
export default App