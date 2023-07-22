import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <h1>Registro de Livros</h1>
      <BookList books={books} onDelete={handleDeleteBook} />
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default App;
