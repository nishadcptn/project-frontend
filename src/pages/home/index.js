import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { ContainerDiv } from "./elements/style";
import Button from "react-bootstrap/Button";
import TodoItem from "./components/item";
import CreateModal from "../../components/createModal";

const Home = observer(() => {
  const { todoStore } = useStore();
  const { isLoading, getAllTodos, todos, deleteTodos } = todoStore;

  const [show, setShow] = useState(false);
  const [mod, setMod] = useState("create");

  useEffect(() => {
    getAllTodos(
      () => {
        // console.log(todos);
      },
      (error) => {}
    );
  }, [getAllTodos]);

  const handleClckDelete = (uuid) => {
    deleteTodos(
      uuid,
      (data) => {
        if (data.msg === "success") {
          getAllTodos(
            () => {},
            (error) => {}
          );
        }
      },
      () => {}
    );
  };
  return (
    <ContainerDiv className="d-flex align-items-center justify-content-center">
      {show ? (
        <CreateModal setShow={setShow} mod={mod} setMod={setMod} />
      ) : (
        <></>
      )}
      <div className="container-div">
        <div className="head d-flex align-items-center justify-content-around">
          <h3>to-do list</h3>
          <Button variant="primary" onClick={() => setShow(true)}>
            Add New
          </Button>{" "}
        </div>
        <div className="content-body">
          <div className="d-flex  flex-row align-items-center justify-content-center wrapper">
            <input type="text" className="search" placeholder="Search ..." />
            <button className="filter">
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/000000/empty-filter.png"
                alt=""
              />
            </button>
          </div>
          <div className="item-list d-flex flex-column align-items-center justify-content-start">
            {!isLoading ? (
              todos?.todos?.map((item, index) => {
                return (
                  <TodoItem
                    item={item}
                    handleClckDelete={handleClckDelete}
                    key={index}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
});

export default Home;
