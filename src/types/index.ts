export type TodoType = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type ModalStateType = {
  isOpen: boolean;
  content: ModalContent;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export enum ModalContent {
  Default = "",
  DeleteTodo = "해당 TODO를 삭제하시겠습니까?"
}
