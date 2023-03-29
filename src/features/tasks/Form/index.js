import { nanoid } from '@reduxjs/toolkit';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';
import { StyledFormContainer, StyledFormAddButton, StyledFormInput }
  from './styled';

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const handleTaskContentChange = (event) => setNewTaskContent(event.target.value);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = newTaskContent.trim();

    if (!trimmedTaskContent) {
      return inputRef.current.focus();
    }

    dispatch(addTask({      
      content: trimmedTaskContent,
      done: false,
      id: nanoid(),
    }));
    
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