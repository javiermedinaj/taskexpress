
import './App.css';
import { CompShowBlogs } from './components/ShowBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateBlog } from './components/CreateBlog';
import { EditBlog } from './components/EditBlog';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <button> <a href="/" className="btn btn-dark"> Recargar Pagina </a></button>
      <button > <a href="/create" className="btn btn-dark">Crear</a></button>
      <BrowserRouter>

        <Routes>
          <Route path="/edit/:id" element={<EditBlog />}></Route>
          <Route path="/" element={<CompShowBlogs />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
