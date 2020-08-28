import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import './CSS/UserProfile.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class UserProfile extends Component {

    emptyItem = {
        name: '',
        password: '',
        email: '',
        telephone: '',
        childName: '',
        childBirthDay: '',
        gender: '',
        weight: '',
        growth: '',
        foodType: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            children: []

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== '/api/registration') {
            const details = await (await fetch(`/api/user/${this.props.match.params.id}`)).json();
            this.setState({ item: details, children: details.children });
            console.log(details);
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

        await fetch('/api/user' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/api/edit');  // redirect po zapisaniu na strone admina
    }


    render() {
        const { item, children } = this.state;
        const userName = <center><b>{'Hello ' + item.parentName}</b><br /></center>;

        return <>

            <div>
                <Container>
                    <div class="container emp-profile">
                        {/* imie uzytkownika */}
                        {userName}<br />


                        <form method="post">
                            <div class="row">
                                <div class="col-md-4">
                                    <div className="profile-img">
                                        <img className="img"  object src={require('./images/IMG_0389.JPG')} />
                                        <div class="file btn btn-lg btn-primary">
                                            Change Photo
                                        <input type="file" name="file" />
                                        </div>
                                    </div>
                                </div>


                                {children.map((child) => {
                                    return <div class="col-md-6">
                                        <div class="profile-head">
                                            <h6>
                                                Your baby has {child.age} mounts
                                            </h6>
                                            <p class="proile-rating">WEIGHT IS : <span>{child.weight + ' kg'}</span></p>
                                            <p class="proile-rating">GROWTH IS : <span>{child.growth + ' cm'}</span></p>

                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Your Info</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">TIPS</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                })}

                                <ButtonGroup  className="row align-items-start">
                                    <Button  color="warning" tag={Link} to={"/api/edit/1"}>Edit profile</Button>
                                </ButtonGroup>
                            </div>
                            <div class="row">
                                {/* HINT TIPS  */}
                                <div class="col-md-4">
                                    <div class="profile-work">

                                        {children.map((value, index) => {
                                            return <>
                                                <p key={index}>From this moment {value.name} can eat</p>

                                                {value.tips.map((tips, index) => {
                                                    return <b><div key={index}>{tips.description} </div></b>
                                                }
                                                )}
                                            </>
                                        })}

                                        {/* {children.map((value, index)=>{
                                            return<>
                                            <p key={index}> From now {value.name} should:</p>
                                            {value.hint.map((tips, index)=>{
                                                return <h8><b><div key={index}>{tips.description} </div></b></h8>
                                            }
                                            )}
                                            </>
                                        })} */}
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="tab-content profile-tab" id="myTabContent">
                                        {/* Your info  */}
                                        {children.map((child) => {
                                            return <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row">
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Baby Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{child.name}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{item.email}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{item.telephone}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Food Type</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{child.foodType}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Child Birth Day</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{child.birthDate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        })}

                                        {/* TIPS */}
                                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    {children.map((value, index) => {
                                                        return <>
                                                            <p key={index}> On this age {value.name} :</p>
                                                            {value.hint.map((tips) => {
                                                                return <div>{tips.description} </div>
                                                            }
                                                            )}
                                                        </>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </>
    }
}
export default withRouter(UserProfile);
