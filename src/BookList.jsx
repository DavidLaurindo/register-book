import React, { useState } from "react";
import { Tabela, TableRow, TextoH2 } from "./styles";
import { FaPenSquare, FaTrashAlt, FaCheck, FaTimes } from 'react-icons/fa';

const BookList = ({ books, onDelete, onEdit }) => {
  const [editedBookId, setEditedBookId] = useState(null);
  const [editedBookData, setEditedBookData] = useState({ title: "", author: "", genre: "" })

  const handleEditClick = (book) => {
    setEditedBookId(book.id);
    setEditedBookData({ title: book.title, author: book.author, genre: book.genre })
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedBookData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    if (editedBookData.title && editedBookData.author && editedBookData.genre) {
      onEdit(editedBookId, editedBookData)
      setEditedBookId(null)
      setEditedBookData({ title: "", author: "", genre: "" })
    }
  }

  return (
    <div>
      <TextoH2>Lista de Livros</TextoH2>
      <Tabela>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Gênero</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <TableRow key={book.id} isEven={index % 2 === 0} >
              {editedBookId === book.id ? (
                <td colSpan='5'>
                  <form onSubmit={handleEditSubmit}>
                    <input type="text" name="title" value={editedBookData.title} onChange={handleEditChange} />
                    <input type="text" name="author" value={editedBookData.author} onChange={handleEditChange} />
                    <input type="text" name="genre" value={editedBookData.genre} onChange={handleEditChange} />
                    <button type="submit"><FaCheck /></button>
                    <button  onClick={() => setEditedBookId(null)}><FaTimes /></button>
                  </form>
                </td>
              ) : (
                <>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>
                    <button className="editar" onClick={() => handleEditClick(book)}><FaPenSquare /></button>
                  </td>
                  <td>
                    <button className="apagar" onClick={() => onDelete(book.id)}><FaTrashAlt /></button>
                  </td>
                </>
              )}
            </TableRow>
          ))}
        </tbody>
      </Tabela>
    </div>
  );
};

export default BookList