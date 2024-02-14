import { Book } from "./Book";
export function BookList({ books, toggleBook, deleteBook }) {
  return (
    <ul className="list">
      {books.length === 0 && "No Books Added Yet!"}
      {books.map((book) => {
        return (
          <Book
            {...book}
            key={book.id}
            toggleBook={toggleBook}
            deleteBook={deleteBook}
          />
        );
      })}
    </ul>
  );
}
