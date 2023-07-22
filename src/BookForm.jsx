import React, { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      onAdd({ title, author });
      setTitle('');
      setAuthor('');
    }
  };

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
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default BookForm;
