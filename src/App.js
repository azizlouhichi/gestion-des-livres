import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBooks from './books/ListBooks';
import AddBook from './books/AddBook';
import EditBook from './books/EditBook';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      titre: "Atomic Habits",
      auteur: "James Clear"
    },
    {
      id: 2,
      titre: "The Slight edge",
      auteur: "Jeff Olsen"
    },
    {
      id: 3,
      titre: "La gloire de mon père",
      auteur: "Marcel Pagnol"
    }
  ]); 
  const addNewBook = (newBook)=>{
    newBook.id = books[books.length - 1].id + 1;
    setBooks([...books, newBook]);
  };
  const updateBook = (id, updatedBook)=>{
    books.map(book => {
      if(book.id === id){
        book.titre = updatedBook.titre;
        book.auteur = updatedBook.auteur;
      }
    })
  };
  const deleteBook = (id) => {
    setBooks(books.filter(book=>book.id !== id))
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListBooks books = {books}/>} />
        <Route path="/ListBooks" element={<ListBooks books = {books} deleteBookRef = {deleteBook}/>} />
        <Route path="/AddBook" element={<AddBook addNewBookRef = {addNewBook}/>} />
        <Route path="/EditBook" element={<EditBook updateBookRef={updateBook}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
