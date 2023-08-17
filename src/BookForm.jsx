import React, { useState } from 'react';
import { Button, Formulario } from './styles';

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
    <Formulario>
      <h2>Adicionar Livro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input type="text" placeholder='Autor' value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br />
        <input type="text" placeholder='Gênero' value={genre} onChange={(e) => setGenre(e.target.value)} />
        <br />
        <Button isOn={title && author && genre} type="submit">Adicionar</Button>
      </form>
    </Formulario>
  )
}

export default BookForm
