import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const App = () => {
  const [books, setBooks] = useState([])

  const handleAddBook = (book) => {
    const newBook = { ...book, id: Date.now() }
    const newBooks = [...books, newBook]
    setBooks(newBooks)
    localStorage.setItem('books', JSON.stringify(newBooks))
  }

  const handleEditBook = (id, editedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === id ? { ...book, ...editedBook } : book))
    )
    localStorage.setItem('books', JSON.stringify(books))
  }

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    localStorage.setItem('books', JSON.stringify(books.filter((book) => book.id !== id)))
  }

  useEffect(() => {
    const storedBooks = localStorage.getItem('books')
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks))
    }
  }, [])

  return (
    <div>
      <h1>Registro de Livros</h1>
      {books.length > 0 ? (
        <BookList books={books} onDelete={handleDeleteBook} onEdit={handleEditBook} />
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
      <BookForm onAdd={handleAddBook} />
    </div>
  )
}

export default App
