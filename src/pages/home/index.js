import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store";
import { ContainerDiv } from "./elements/style";
import Button from "react-bootstrap/Button";

const Home = observer(() => {
  const { todoStore } = useStore();
  const { isLoading, getAllTodos, todos, deleteTodos } = todoStore;

  useEffect(() => {
    getAllTodos(
      () => {
        // console.log(todos);
      },
      (error) => {}
    );
  }, [getAllTodos]);

  const handleDelete = (uuid)=>{
    deleteTodos(uuid, (data)=>{
      if(data.msg ==="success"){
        getAllTodos(
          () => {},
          (error) => {}
        );
      }
    },()=>{});
  }
  return (
    <ContainerDiv className="d-flex align-items-center justify-content-center">
      <div className="container-div">
        <div className="head d-flex align-items-center justify-content-around">
          <h3>to-do list</h3>
          <Button variant="primary">Add New</Button>{" "}
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
                  <div className="item" key={index}>
                    {/* <input type="checkbox" className="flag"/> */}
                    
                    <h4>
                      {item.title}
                      <div className="icon-div d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                        onClick={()=>handleDelete(item.uuid)}
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                      <div className="space">

                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </div>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                );
              })
            ) : (
              <>

              </>
            )}
          </div>
        </div>
      </div>
    </ContainerDiv>
  );
});

export default Home;
