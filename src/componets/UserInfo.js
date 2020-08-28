import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


class UserInfo extends Component {
  render() {
    // return musi zwracać środek 
    return <div className="Admin">

      <Table striped bordered hover variant="dark" responsive>
        <thead responsive>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Child Name</th>
            <th>Child Birth Day</th>
            <th>Telephone</th>
            <th>Gender</th>
            <th>Food Type</th>
            <th>Growth</th>
            <th>Weight</th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.info.id}</td>
            <td>{this.props.info.name}</td>
            <td>{this.props.info.email}</td>
            <td>{this.props.info.childName}</td>
            <td>{this.props.info.childBirthDay}</td>
            <td>{this.props.info.telephone}</td>
            <td>{this.props.info.gender}</td>
            <td>{this.props.info.foodType}</td>
            <td>{this.props.info.growth}</td>
            <td>{this.props.info.weight}</td>
            <td><Button variant="outline-success" >EDIT</Button>{' '}</td>
            <td> <Button variant="outline-danger" >DELETE</Button>{' '}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  }
}

export default UserInfo;
