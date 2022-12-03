import styles from "./Login.module.css";
import { useState, useEffect } from "react";

//hook
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError,  loading } = useAuthentication();

    //envio do form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(""); //no envio do form os erros são zerados

    const user = {
      email,
      password
    }

    const res = await login(user);
  };

    useEffect( () => {

      if(authError){
        setError(authError);

      }

    },[authError]);


  return (
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Crie seu usuário e compartilhe suas histórias!</p>
        <form onSubmit={ handleSubmit }>

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

          {/*Se  não estiver em loading */}
          {!loading && <button className="btn">Entrar</button>}

          {/*se estiver em loading */}
          {loading && <button className="btn" disabled>Aguarde...</button>}

          {/*se o erro existir */}
          { error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login