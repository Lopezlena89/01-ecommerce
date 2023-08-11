import {registerRequest}  from '../api/auth';
import { useForm } from '../hooks/useform';


export const RegisterPage = () => {

    
    
    const {onInputChange,nombre,apellido,correo,password,formState} = useForm({
        nombre:'',apellido:'',correo:'',password:''

    })

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log({nombre,apellido,correo,password});
        const res = await registerRequest(formState);
        console.log(res);
        
        }


   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='nombre' value={nombre}onChange={onInputChange} />    
            <input type="text" name='apellido' value={apellido}onChange={onInputChange} />    
            <input type="email" name='correo'value={correo}onChange={onInputChange}/>    
            <input type="password" name='password' value={password}onChange={onInputChange}/> 
            <button type='submit'>
                Register
            </button>   
        </form>
    </div>

  )
}
