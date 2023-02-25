import { useState, useRef } from 'react';
import './style.css';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const addNewTaskContent = (event) => setNewTaskContent(event.target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim().length > 0) {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
    return null;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <form
      className="form__container form__container--input"
      onSubmit={onFormSubmit}>
      <input
        className="form__input"
        autoFocus
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={addNewTaskContent}
      />
      <button
        onClick={focusInput}
        className="form__addButton">Dodaj zadanie</button>
    </form>
  )
};

export default Form;