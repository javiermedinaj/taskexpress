import logo from './logo.svg';
import './App.css';
import { CompShowBlogs } from './components/ShowBlogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateBlog } from './components/CreateBlog';
import { EditBlog } from './components/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
      </header>
      <button className="btn btn-primary"> <a href="/"> hola </a></button>
      <button className="btn btn-dark"  > <a href="/create">crear</a></button>
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
