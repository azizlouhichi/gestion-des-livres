import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EditBook({ updateBookRef }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { book } = location.state;

  const [updatedBook, setUpdatedBook] = useState({
    titre: book.titre,
    auteur: book.auteur
  });

  const inputChangeHandler = ({ target }) => {
    setUpdatedBook({ ...updatedBook, [target.name]: target.value });
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    updateBookRef(book.id, updatedBook);
    navigate('/ListBooks'); 
  };

  return (
    <div>
      <h1>Editer le livre</h1>
      <form className="ui form" onSubmit={formSubmitHandler}>
        <div className="field">
          <label>Titre</label>
          <input
            type="text"
            name="titre"
            value={updatedBook.titre}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="field">
          <label>Auteur</label>
          <input
            type="text"
            name="auteur"
            value={updatedBook.auteur}
            onChange={inputChangeHandler}
          />
        </div>
        <button className="ui button" type="submit">
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

export default EditBook;
