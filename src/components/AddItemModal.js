import {useEffect, useState} from 'react';
import {Modal, Button, InputGroup } from 'react-bootstrap';
import axios from 'axios';

import React from 'react';

export default function AddItemModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [item, setItem] = useState({});

  const addItem= async() => {
    try {
      console.log(item);
      alert("ITEM ADDED");
      handleClose();
    } catch (error) {
      console.log(`Error in addItem: ${error}`);
    }
  }

  useEffect(() => {}, []);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add New Item
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={(e)=>{ setItem({...item, name: e.target.value})}} placeholder='Item Name'/><br />
          <input type="text" onChange={(e)=>{ setItem({...item, price: e.target.value})}} placeholder='Price ($)'/><br />
          <input type="text-box" onChange={(e)=>{ setItem({...item, deicription: e.target.value})}} placeholder='Description'/><br />
          <input type="text" onChange={(e)=>{ setItem({...item, category: e.target.value})}} placeholder="Category ['ELECTRONICS', 'CLOTHES', 'BOOKS', 'OTHERS']"/><br />
          <input type="text" onChange={(e)=>{ setItem({...item, units_available: e.target.value})}} placeholder="Initial Quantity"/><br />
          <input type="text" onChange={(e)=>{ setItem({...item, threshold: e.target.value})}} placeholder="Threshold (Report low stock under this number)"/><br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=> addItem()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
