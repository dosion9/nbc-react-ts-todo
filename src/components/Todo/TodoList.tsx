import styled from "styled-components";
import Todo from "./Todo";
import { TodoType } from "types";

type PropsType = {
  todoList: TodoType[];
};

function TodoList({ todoList }: PropsType) {
  return (
    <StTodoTypeList>
      {todoList.map((n) => (
        <Todo data={n} key={n.id} />
      ))}
    </StTodoTypeList>
  );
}

const StTodoTypeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.base};
`;

export default TodoList;
