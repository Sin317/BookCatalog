import React, { useState } from "react";

export function Bookform({ onSubmit }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    date: "",
    pages: 0,
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(book);
    onSubmit(book);
    setBook({ title: "", author: "", date: "", pages: 0, completed: false });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <label htmlFor="title">Book Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <label htmlFor="date">Published Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={book.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="pages">Pages read</label>
        <input
          id="pages"
          type="number"
          name="pages"
          value={book.pages}
          onChange={handleChange}
          required
        />
        <label htmlFor="complete">Completed</label>
        <input
          id="complete"
          type="checkbox"
          name="complete"
          value={book.completed}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
