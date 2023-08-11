import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>home page</h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
       
      </Routes>
     
    </BrowserRouter>
  )
}
