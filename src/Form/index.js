import { useState, useRef } from 'react';
import { StyledFormContainer, StyledFormAddButton, StyledFormInput }
  from './styled';

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const handleTaskContentChange = (event) => setNewTaskContent(event.target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = newTaskContent.trim();

    if (!trimmedTaskContent) {
      return;
    }

    addNewTask(trimmedTaskContent);
    setNewTaskContent("");
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
        onChange={handleTaskContentChange}
      />
      <StyledFormAddButton>Dodaj zadanie</StyledFormAddButton>
    </StyledFormContainer>
  )
};

export default Form;