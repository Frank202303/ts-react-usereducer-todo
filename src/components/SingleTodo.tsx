import React, { useEffect, useReducer, useRef, useState } from "react";
import { Todo } from "../models/Todo";
import {
  IconsWrapper,
  SingleIconWrapper,
  SingleTodoEditInput,
  SingleTodoForm,
  SingleTodoSpan,
} from "../style";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";
interface Props {
  todo: Todo;
  todos: Todo[];
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

// 1 State type
interface State {
  todos: Todo[];
}
// 2 Action type
type Actions =
  | { type: "edit"; payload: string; id: number }
  | { type: "delete"; payload: number }
  | { type: "done"; payload: number };

// 4 use State type and Action type
// define todoReducer
function todoReducer(state: State, action: Actions) {
  switch (action.type) {
    case "edit":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, todo: action.payload } : todo
        ),
      };
    case "delete":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "done":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    default:
      throw new Error();
  }
}

const SingleTodo = ({ todo, todos, id, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  // const handleDone = (id: number) => {
  //   // do not forget to call setTodos
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, isDone: !todo.isDone };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };
  // const handleDelete = (id: number) => {
  //   // do not forget to call setTodos
  //   // Filter
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setEdit(false);
    dispatch({ type: "edit", payload: editTodo, id: id });
  };
  const inputRef = useRef<HTMLInputElement>(null);
  // when [edit] changed, triger: inputRef.current?.focus();
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  // 3 use State type
  const initialState: State = { todos: todos };

  // reducer is a function
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // !!
  // ！！！！
  // use useEffect listen state.todos，
  // when state.todos changed，pass new *state.todos* to setTodos。
  useEffect(() => {
    setTodos(state.todos);
  }, [state.todos, setTodos]);
  return (
    <SingleTodoForm onSubmit={(e) => handleEditSubmit(e, todo.id)}>
      {edit ? (
        <SingleTodoEditInput
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        ></SingleTodoEditInput>
      ) : (
        <SingleTodoSpan className={todo.isDone ? "isDone" : "notDone"}>
          {todo.todo}
        </SingleTodoSpan>
      )}

      <IconsWrapper>
        <SingleIconWrapper
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </SingleIconWrapper>
        <SingleIconWrapper
          onClick={() => dispatch({ type: "delete", payload: todo.id })}
        >
          <MdDelete />
        </SingleIconWrapper>
        <SingleIconWrapper
          onClick={() => dispatch({ type: "done", payload: todo.id })}
        >
          <MdDownloadDone />
        </SingleIconWrapper>
      </IconsWrapper>
    </SingleTodoForm>
  );
};

export default SingleTodo;
