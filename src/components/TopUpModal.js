import {useEffect, useState} from 'react';
import {Modal, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

import React from 'react';

export default function TopupItemModel(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [item, setItem] = useState({});

  const topupItem= async() => {
    try {
      console.log(item);
      alert("Item reduced", props.id, props.name);
      handleClose();
    } catch (error) {
      console.log(`Error in topupItem: ${error}`);
    }
  }

  useEffect(() => {}, []);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Top-up Item
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Top-up Item (: {props.name})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={(e)=>{ setItem({...item, units_topped_up: e.target.value})}}placeholder="eq. 1" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> topupItem()}>
            Add To Inventory
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
