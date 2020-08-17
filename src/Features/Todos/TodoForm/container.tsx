import React, { useState } from 'react';
import { TodoFormContainerInterface } from './interfases';

const TodoFormContainer: React.FC<TodoFormContainerInterface> = ({ onFormSubmit }) => {
  const [title, setTitle] = useState<string>('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setTitle(target.value);
  }

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    const { key } = e;
    if (key === 'Enter') {
      if (!title.trim()) return;
      onFormSubmit(title)
      setTitle('')
    }
  }

  return (
    <div className="todo-form p1">
      <div className="row">
        <div className="input-field col-12">
          <input
            onChange={handleInputChange}
            onKeyPress={handleOnKeyPress}
            value={title}
            placeholder="Enter title"
            id="title"
            type="text"
            className="validate"
          />
          <label htmlFor="title" className="active">Title</label>
        </div>
      </div>
    </div>
  )
}

export default TodoFormContainer;