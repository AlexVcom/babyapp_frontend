import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'react-bootstrap'; //ract-bootstrap
import DatePicker from "react-datepicker";
import NumericInput from 'react-numeric-input';
import "react-datepicker/dist/react-datepicker.css";

class UserEdit extends Component {
    emptyUser = {
        parentName: '',
        password: '',
        email: '',
        telephone: '',
        name: '',
        birthDate: '',
        gender: '',
        weight: '',
        growth: '',
        foodType: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyUser,
            children: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== '/api/registration') {
            const details = await (await fetch(`/api/user/${this.props.match.params.id}`)).json();
            this.setState({ item: details, children: details.children });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const { item } = this.state;

        await fetch('/api/user', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/admin');  // redirect po zapisaniu na strone admina
    }

    render() {
        const { item, children } = this.state;
        const title = <center><h2>{item.id ? 'Edit User ' + "ID " + item.id + " " + item.parentName : 'Add User'}</h2></center>;

        return <div className="Registration">
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group >
                            <Form.Label for="name" >Name</Form.Label>
                            <Form.Control autoFocus name="name" placeholder="Name" type="text" id="name" value={item.parentName || ''}
                                onChange={this.handleChange} autoComplete="name" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label for="email">Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" id="email" value={item.email || ''}
                                onChange={this.handleChange} autoComplete="email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group  >
                            <Form.Label for="password">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" id="password" value={item.password || ''}
                                onChange={this.handleChange} autoComplete="password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group  >
                        <Form.Label for="telephone">Telephone number</Form.Label>
                        <Form.Control autoFocus name="telephone" placeholder="number" type="text" id="telephone" value={item.telephone || ''}
                            onChange={this.handleChange} autoComplete="telephone" />
                    </Form.Group>

                    
                    <Form.Group>
                         {children.map((child)=>{
                             return <>
                         <Form.Label for="name">Child name</Form.Label>
                        <Form.Control  autoFocus name="name" placeholder="Child name" type="text" id="name" value={child.name || ''}
                            onChange={this.handleChange} autoComplete="name"/>
                        <Form.Label for="childBirthDay">Child Birth Day</Form.Label><br />
                        <DatePicker value={child.birthDate}
                            onChange={this.handleChange} name="childBirthDay"/>
                            </>
                         })}
                    </Form.Group>
                    <Form.Row>
                    {children.map((child)=>{
                             return <>
                        {/* sex */}
                        <Form.Group >
                            
                            <Form.Label for="gender">Gender</Form.Label>
                            <Form.Control autoFocus name="gender" id="gender" value={child.gender || ' '}>
                            </Form.Control>
                        </Form.Group>
                        {/* food type */}
                        <Form.Group>
                            <Form.Label for="foodType">Food type</Form.Label>
                            <Form.Control autoFocus name="foodType" id="foodType" value={child.foodType || ' '}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label for="growth">Growth</Form.Label>
                            <Form.Control autoFocus name="growth" placeholder="Child growth" type="text" id="growth" value={child.growth || ''}
                                onChange={this.handleChange} autoComplete="growth" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label for="weight">Weight</Form.Label>
                            <NumericInput autoFocus name="weight" className="form-control"
                                step={0.1} precision={1} value={child.weight || 4.1} snap id="weight" //value={4.1} by defolt
                                onChange={this.handleChange} autoComplete="weight" />

                        </Form.Group>
                        </>
                         })}
                    </Form.Row>
                    <FormGroup>
                        <Button variant="warning" type="submit">Save</Button>{' '}
                        <Button variant="secondary" href="/api/admin">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}


export default withRouter(UserEdit);
