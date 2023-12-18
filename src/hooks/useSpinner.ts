import { useTodoQuery } from "./useTodoQuery";
import { useEffect, useState } from "react";

export const useSpinner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { query: todoQuery } = useTodoQuery();

  useEffect(() => {
    setIsOpen(todoQuery.isLoading);
  }, [todoQuery]);

  return { isOpen };
};
