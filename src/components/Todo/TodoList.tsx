import styled from "styled-components";
import Todo from "./Todo";
import { ModalContent, TodoType } from "types";

type PropsType = {
  todoList: TodoType[];
  updateTodo: ({ id }: Pick<TodoType, "id">) => void;
  deleteTodo: ({ id }: Pick<TodoType, "id">) => void;
  updateModal: (content: ModalContent, onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined) => void;
};

function TodoList({ todoList, updateTodo, deleteTodo, updateModal }: PropsType) {
  return (
    <STodoTypeList>
      {todoList.map((n) => (
        <Todo data={n} updateTodo={updateTodo} deleteTodo={deleteTodo} updateModal={updateModal} key={n.id} />
      ))}
    </STodoTypeList>
  );
}

const STodoTypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.base};
`;

export default TodoList;
