import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

//hook
import { useAuthentication } from "../../hooks/useAuthentication";



const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { createUser, error: authError,  loading } = useAuthentication();

  const handleSubmit = (e) =>{

    e.preventDefault();
  };
 
  return (
    <div className={ styles.create_post}>
       <h2>Criar Post</h2>
       <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
       <form onSubmit={ handleSubmit }>
          <label>
            <span>Título:</span>
            <input type="text"
            name="title"
            required
            placeholder="Pense em um bom título..."
            onChange={ (e) => setTitle(e.target.value) }
            value={ title }
            />
          </label>

          <label>
            <span>URL da imagem:</span>
            <input type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post"
            onChange={ (e) => setImage(e.target.value) }
            value={ image }
            />
          </label>

          <label>
            <span>Conteúdo:</span>
            <textarea 
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={ (e) => setBody(e.target.value) }
              value={ body }>
            </textarea>
          </label>

          <label>
            <span>Tags:</span>
            <input type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={ (e) => setTags(e.target.value) }
            value={ tags }
            />
          </label>

          {/*Se  não estiver em loading */}
          {!loading && <button className="btn">Enviar</button>}

          {/*se estiver em loading */}
          {loading && <button className="btn" disabled>Aguarde...</button>}

          {/*se o erro existir */}
          { /*error && <p className="error">{error}</p>*/}
       </form>
    </div>
  )
}

export default CreatePost