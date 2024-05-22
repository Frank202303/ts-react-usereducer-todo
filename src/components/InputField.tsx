import React, { useRef } from "react";
import { Button, Input, InputWrapper } from "../style";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <InputWrapper
      action=""
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <Input
        type="input"
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
      />
      <Button type="submit">Go</Button>
    </InputWrapper>
  );
};

export default InputField;
