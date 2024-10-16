import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook({ addNewBookRef }) {
    const navigate = useNavigate();
    const [book, setBook] = useState(
        {
            titre: '',
            auteur: ''
        }
    );
    const inputChangeHandler = ({target})=>{
        setBook({...book, [target.name] : target.value})
    }
    return (
        <>
            <div>
                <h1>Ajouter un livre</h1>
            </div>
            <form className="ui form" onSubmit={(evt) => {
                evt.preventDefault();
                addNewBookRef(book);
                navigate('/ListBooks');
            }}
            >
                <div className="field">
                    <label>Titre</label>
                    <input type="text" name="titre" placeholder="titre" value={book.titre} onChange={(evt)=>inputChangeHandler(evt)} />
                </div>
                <div className="field">
                    <label>Auteur</label>
                    <input type="text" name="auteur" placeholder="auteur" value={book.auteur} onChange={(evt)=>inputChangeHandler(evt)} />
                </div>
                <button className="ui button" type="submit" to='/ListBooks'>Ajouter</button>
            </form>
        </>
    );
}

export default AddBook;