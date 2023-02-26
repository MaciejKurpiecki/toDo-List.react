import { useState, useRef } from 'react';
import { StyledFormContainer, StyledFormAddButton, StyledFormInput }
  from './styled';

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
    <StyledFormContainer
      onSubmit={onFormSubmit}>
      <StyledFormInput
        autoFocus
        ref={inputRef}
        placeholder="Co jest do zrobienia?"
        value={newTaskContent}
        onChange={addNewTaskContent}
      />
      <StyledFormAddButton
        onClick={focusInput}
      >Dodaj zadanie</StyledFormAddButton>
    </StyledFormContainer>
  )
};

export default Form;