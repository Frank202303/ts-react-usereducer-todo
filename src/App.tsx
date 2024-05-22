import React, { useState } from "react";

import "./App.css";

import InputField from "./components/InputField";
import { Todo } from "./models/Todo";
import { AppContainer, GlobalStyle, TitleSpan } from "./style";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <AppContainer>
      <GlobalStyle />
      <TitleSpan>Taskify</TitleSpan>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      {/* <StyledButton>My self defined button</StyledButton> */}
    </AppContainer>
  );
}

export default App;
