import React from "react";

const BookList = ({books, onDelete}) => {
    return(
        <div>
            <h2>Lista de Livros</h2>
            <ul>
                {books.map((book) =>(
                    <li key={book.id}>
                        {book.title} ({book.author})
                        <button onClick={() => onDelete(book.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList