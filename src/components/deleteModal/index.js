import { observer } from "mobx-react-lite";
import { ModalDiv } from "./style";
import Button from "react-bootstrap/Button";

const DeletModal = observer(({ setShow, handleClckDelete, uuid }) => {
  return (
    <ModalDiv className="d-flex flex-column align-items-center justify-content-center">
      <div className="text">Are you sure want to delete</div>
      <div>
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
          variant="danger"
          className="btn"
          onClick={() => {
            handleClckDelete(uuid);
          }}
        >
          Delete
        </Button>{" "}
      </div>
    </ModalDiv>
  );
});

export default DeletModal;
