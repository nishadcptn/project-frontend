import { observer } from "mobx-react-lite";
import { ModalDiv } from "./style";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useStore } from "../../store";
import { useEffect, useRef, useState } from "react";

const CreateModal = observer(({ uuid, setShow, mod, setMod }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { todoStore } = useStore();
  const { createTodoItem, getAllTodos, updateTodoItem, getSingleTodoItem } =
    todoStore;
  const [item, setItem] = useState({});
  const check = useRef();
  useEffect(() => {
    if (mod !== "create") {
      getSingleTodoItem(
        uuid,
        (data) => {
          setItem(data);
          check.current.checked = data.completed;
        },
        () => {}
      );
    }
    // eslint-disable-next-line
  }, []);

  const onSubmit = (data) => {
    if (mod === "create") {
      createTodoItem(
        data,
        (data) => {
          if (data.msg === "success") {
            getAllTodos(
              () => {
                setShow(false);
              },
              (error) => {}
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      data.completed = `${check.current.checked}`;
      updateTodoItem(
        uuid,
        data,
        (data) => {
          getAllTodos(
            () => {
              setShow(false);
            },
            (error) => {}
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  return (
    <ModalDiv className="d-flex flex-column align-items-center justify-content-center">
      <div className="text">
        {mod === "create" ? "Add New" : "Edit item"}
        {mod !== "create" && (
          <input type="checkbox" className="ch" ref={check} />
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="frm d-flex flex-column align-items-center justify-content-center"
      >
        <label htmlFor="title" className="align-self-start">
          Title
        </label>
        <input
          {...register("title")}
          defaultValue={item.title}
          className="form-control"
          id="title"
        />
        {errors.title && (
          <small className="form-text text-muted align-self-start">
            Title Required
          </small>
        )}
        <label htmlFor="des" className="align-self-start">
          Description
        </label>
        <textarea
          {...register("description")}
          className="form-control"
          id="des"
          defaultValue={item.description}
        ></textarea>

        <div className="btn-container d-flex justify-content-end">
          <Button
            variant="light"
            className="btn"
            onClick={() => {
              setShow(false);
            }}
          >
            Cansel
          </Button>{" "}
          <Button
            variant="primary"
            className="btn"
            onClick={() => {
              // handleClckDelete(uuid);
            }}
            type="submit"
          >
            create
          </Button>{" "}
        </div>
      </form>
    </ModalDiv>
  );
});

export default CreateModal;
