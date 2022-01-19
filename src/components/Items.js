import {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import AddItemModal from './AddItemModal';
import axios from 'axios';

import React from 'react';

export default function Items() {
  var [items, setItems] = useState([]);
  var [page, setPage] = useState(0);
  useEffect(() => {
    
  } , [page]);
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Qwerty</td>
            <td>69</td>
            <td>good keyboard</td>
            <td>ELECTRONICS</td>
          </tr>
        </tbody>
      </Table>
      <input type= "number" onChange={(e)=>setPage(e.target.value)} placeholder="Enter Page number (0 by default)" />
      <AddItemModal />
    </div>
  );
}
