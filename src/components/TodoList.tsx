import React from "react";
import { Todo } from "../models/Todo";
import { TodoListWrapper } from "../style";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          id={todo.id}
          setTodos={setTodos}
        ></SingleTodo>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
