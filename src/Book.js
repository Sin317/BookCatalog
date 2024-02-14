export function Book({
  completed,
  id,
  title,
  author,
  year,
  pages,
  toggleBook,
  deleteBook,
}) {
  // render each book
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleBook(id, e.target.checked)}
        />
        <p>
          {title} {author} {year} {pages}
        </p>
      </label>
      <button onClick={() => deleteBook(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
