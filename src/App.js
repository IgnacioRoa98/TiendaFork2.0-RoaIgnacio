import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemdetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
