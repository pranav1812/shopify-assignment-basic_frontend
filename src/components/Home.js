import {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import ReduItemModel from './ReduceItemModal';
import TopupItemModel from './TopUpModal';
import DeleteItemModel from './DeleteItemModal';

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
            <th>Reduce Item</th>
            <th>Topup Item</th>
            <th>Delete Item</th>
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
            <td><ReduItemModel name="Qwerty" id="123"/></td>
            <td><TopupItemModel name="Qwerty" id="123"/></td>
            <td><DeleteItemModel name="Qwerty" id="123"/></td>
          </tr>
        </tbody>
      </Table>
      
    </div>
    
  );
}
