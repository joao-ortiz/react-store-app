import Navbar from './components/Navigation/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Shopping from './components/Shopping'
import ProductsContextProvider from './context/ProductsContex'
import ShoppingCartContexProvider from './context/ShoppingCartContext'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ShoppingCartContexProvider>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <ProductsContextProvider>
            <Route path="/shop/:section" component={Shopping}/>
          </ProductsContextProvider>
        </ShoppingCartContexProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
