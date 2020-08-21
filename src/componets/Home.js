import React, { Component } from 'react'
import { Carousel, Card, CardColumns } from 'react-bootstrap'


class Home extends Component {
  render() {
    return (
      <div>
      <br/>

        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
      </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
        </Card>

        <br />

        <Carousel>
          <Carousel.Item className="About">
            <img
              className="d-block w-100"
              //   src="holder.js/800x400?text=First slide&bg=373940"
              src="./images/IMG_0404.JPG"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/IMG_0402.JPG"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/IMG_0392.JPG"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br />



        <br />

        <CardColumns>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
      </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card bg="warning" text="black" className="text-center p-3">
            <blockquote   className="blockquote mb-0 card-body">
              <p>
                3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                2 This card has supporting text below as a natural lead-in to additional
        content.{' '}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src="holder.js/100px160" />
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
      </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
      </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    )
  }
}
export default Home;
