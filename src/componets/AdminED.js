import React, { Component, Children } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class EditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      admin: [],
      children: [],
      isLoading: true

    };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('/api/admin')

      .then(response => response.json())
      .then(data => this.setState({ admin: data, isLoading: false }));
  }

  async remove(id) {
    await fetch(`/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }

    }).then(() => {
      let updatedUser = [...this.state.admin].filter(i => i.id !== id);
      this.setState({ user: updatedUser });
      window.location.reload();
    });
  }

  render() {
    const { admin, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    const userList = admin.map((value, index) => {
      return <> <tr>
        <td key={index}>{value.id}</td>
        <td key={index}>{value.creationDateTime}</td>
        <td key={index}>{value.parentName}</td>
        <td key={index}>{value.email}</td>
        <td key={index}>{value.telephone}</td>
        {value.children.map((value, index) => {
          return <td key={index}> {value.name}</td>
        })}
        <td></td>
        <td></td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="outline-success" tag={Link} to={"/api/edit/" + value.id}>Edit</Button>
            <Button size="sm" color="outline-danger" onClick={() => this.remove(value.id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
      </>
    });

    return (
      <div><br /><br />
        <Container fluid>
          <div className="float-right">
            <Button color="info" tag={Link} to="/api/registration">Add User</Button>
          </div>
          <center><h3>Admin profile</h3></center><br />
          <Table className="mt-4" responsive>
            <thead>
              <tr>
                <th width="20%"> Id</th>
                <th width="20%"> Create</th>
                <th width="20%"> User Name</th>
                <th width="20%">Email</th>
                <th width="20%">Telephone</th>
                <th width="20%">Kid Name</th>
                <th></th>
                <th></th>

                <th width="10%">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList}
            </tbody>
          </Table>
        </Container>

      </div>
    );
  }
}

export default EditUser;