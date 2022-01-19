import {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import UndoDeletionModel from './UndoDeletionModal';

import React from 'react';

export default function Home() {
  var [items, setItems] = useState([]);
  useEffect(() => {} , []);
  return (
    <div>
      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Available Units</th>
            <th>Units Sold/Destroyed</th>
            <th>Low Stock?</th>
            <th>Deletion Timestamp</th>
            <th>Undo deletion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Qwerty</td>
            <td>96</td>
            <td>70</td>
            <td>56</td>
            <td>No</td>
            <td>2019-01-01</td>
            <td><UndoDeletionModel name="Qwerty" id="123"/></td>
          </tr>
        </tbody>
      </Table>
      
    </div>
    
  );
}
