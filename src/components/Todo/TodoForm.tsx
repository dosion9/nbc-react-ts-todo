import Button from "components/common/Button";
import Input from "components/common/Input";
import { useState } from "react";
import styled from "styled-components";

type PropsType = {
  createTodo: (title: string, content: string) => void;
};

function TodoForm({ createTodo }: PropsType) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTitle("");
    setContent("");
    createTodo(title, content);
  };

  return (
    <StFormWrap>
      <Input labelTitle="제목" onChange={(e) => setTitle(e.target.value)} value={title} />
      <Input labelTitle="내용" onChange={(e) => setContent(e.target.value)} value={content} />

      <div>
        <Button onClick={handleCreate} disabled={!(Boolean(title) && Boolean(content))}>
          생성하기
        </Button>
      </div>
    </StFormWrap>
  );
}

const StFormWrap = styled.form`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base};
`;

export default TodoForm;
