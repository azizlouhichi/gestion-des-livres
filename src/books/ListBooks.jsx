import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ListBooks({books, deleteBookRef}) {
    const navigate = useNavigate();
    return (
        <div>
      <div>
        <h1>Application de gestion des livres électroniques :</h1>
        <Link className="ui blue button" to= "/AddBook">Ajouter un livre</Link>
      </div>
      <table className="ui basic table">
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Editer</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {books.map(
            book => (
                <tr>
                <td>{book.id}</td>
                <td>{book.titre}</td>
                <td>{book.auteur}</td>
                <td><button className="ui green button" onClick={()=> {navigate('/EditBook', { state: { book } })}}>Editer</button></td>
                <td><button className="ui red button" onClick={() => { deleteBookRef(book.id) }}>Supprimer</button></td>
            </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    )
}

export default ListBooks;