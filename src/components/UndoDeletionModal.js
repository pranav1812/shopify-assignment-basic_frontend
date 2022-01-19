import {useEffect, useState} from 'react';
import {Modal, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

import React from 'react';

export default function UndoDeletionModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [item, setItem] = useState({});

  const undoDelete= async() => {
    try {
      console.log("Item saved back to Inventory", props.id, props.name);
      handleClose();
    } catch (error) {
      console.log(`Error in undo Delete: ${error}`);
    }
  }

  useEffect(() => {}, []);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Undo Deletion
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Undo Deletion (: {props.name})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          are you sure you want to undo the deletion of this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> undoDelete()}>
            Confirm Undo deletion
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
