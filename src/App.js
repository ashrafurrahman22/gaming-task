import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './Pages/ErrorPage/Error';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div> 
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<Error></Error>}  ></Route>
        </Routes>
    </div>
  );
}

export default App;
