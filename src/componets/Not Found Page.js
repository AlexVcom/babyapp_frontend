import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
// import Form from 'react-bootstrap/Form';


class NotFoundPage extends Component {
  render() {
    // return musi zwracać środek 
    return <div>

      <Card className="text-darck">
        <Card.Img src="./images/Baby-sleep-problems.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text>
            <centered>
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <h1 color="ligth">Upppps page not found 404...</h1>
            </centered>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  }
}

export default NotFoundPage;
