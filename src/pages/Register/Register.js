import styles from "./Register.module.css";

import { useState, useEffect } from "react";

//hook
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {

  const [displayName, setDisplayName]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError,  loading } = useAuthentication();

    //envio do form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); //no envio do form os erros são zerados

    const user = {
      displayName,
      email,
      password
    }

    //se a senha for diferente da confirmação de senha
    if (password !== confirmPassword){
     return setError("As senhas precisam ser iguais!");
      
    }

    const res = await createUser(user);
  };

    useEffect( () => {

      if(authError){
        setError(authError);

      }

    },[authError])
  return (
    <div className={ styles.register }>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias!</p>
        <form onSubmit={ handleSubmit }>

          <label>
              <span>Nome:</span>
              <input type="text"  
              name="displayName" 
              required 
              placeholder="Nome do usuário"
              value={ displayName }
              onChange={ (e) => setDisplayName(e.target.value) }
              />
          </label>

          <label>
            <span>E-mail:</span>
            <input type="email"
            name="email" 
            required
            placeholder="E-mail do usuário"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            />
          </label>

          <label>
            <span>Senha:</span>
            <input type="password"
            name="password"
            required
            placeholder="Insira a sua senha"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            />
            
          </label>

          <label>
            <span>Confirmação de senha:</span>
            <input type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha" 
            value={ confirmPassword }
            onChange={ (e) => setComfirmPassword(e.target.value) }
            />
          </label>


          {/*Se  não estiver em loading */}
          {!loading && <button className="btn">Cadastrar</button>}

          {/*se estiver em loading */}
          {loading && <button className="btn" disabled>Aguarde...</button>}

          {/*se o erro existir */}
          { error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register