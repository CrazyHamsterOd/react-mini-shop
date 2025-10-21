import './App.css'
import ProductList from './components/product-list/product-list.tsx';

function App() {
  return (
    <div style={{ padding: '20px'}} className="bg-red-500">
      <h1>Mini-shop React</h1>
      <ProductList />
    </div>
  )
}
export default App
