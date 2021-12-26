import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";

const Home = observer(({ setTrigger }) => {
  const { todoStore } = useStore();
  const { isLoading, getAllTodos, todos } = todoStore;

  useEffect(() => {
    getAllTodos(
      () => {
        // console.log(todos);
      },
      (error) => {}
    );
  }, [getAllTodos]);

  return (
    <div>
      {!isLoading ? (
        todos?.todos?.map((item) => {
          return <div>{item.title}</div>;
        })
      ) : (
        <div>Loding ...</div>
      )}
    </div>
  );
});

export default Home;
