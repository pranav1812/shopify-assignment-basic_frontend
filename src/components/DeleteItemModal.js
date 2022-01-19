import {useEffect, useState} from 'react';
import {Modal, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

import React from 'react';

export default function DeleteItemModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [item, setItem] = useState({});

  const deleteItem= async() => {
    try {
      console.log("Item deleted", props.id, props.name);
      handleClose();
    } catch (error) {
      console.log(`Error in topupItem: ${error}`);
    }
  }

  useEffect(() => {}, []);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Delete
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item (: {props.name})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          are you sure you want to delete this item? You can undo the deletion by going to deleted items page
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> deleteItem()}>
            Confirm Deletion
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
