import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Bookform } from "./Bookform";
import { BookList } from "./BookList";
function App() {
  const [books, setBooks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(books));
  }, [books]);
  function deleteBook(id) {}
  function toggleBook(id) {}
  function addBook(item) {
    console.log("add book called", item);
    setBooks((currentBooks) => {
      return [...currentBooks, { id: crypto.randomUUID(), ...item }];
    });
  }
  return (
    <>
      <Bookform onSubmit={addBook} />
      <div className="App">
        <h1>Hello</h1>
        <BookList
          books={books}
          toggleBook={toggleBook}
          deleteBook={deleteBook}
        />
      </div>
    </>
  );
}

export default App;
