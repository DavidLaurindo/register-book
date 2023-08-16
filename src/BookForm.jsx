import React, { useState } from 'react';
import { Button } from './styles';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && genre) {
      onAdd({ title, author, genre })
      setTitle('')
      setAuthor('')
      setGenre('')
    }
  }

  return (
    <div>
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Autor:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <label>
          Gênero:
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <br />
        <Button type="submit">Adicionar</Button>
      </form>
    </div>
  )
}

export default BookForm
