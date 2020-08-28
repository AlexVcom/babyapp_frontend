import React, { Component } from 'react'
import { Carousel, Card, CardColumns, Button } from 'react-bootstrap'


class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item className="About">
            <img
              className="d-block w-100"
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
        <Card >
          <Card.Img />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>

        <br />
        <Card>
        </Card>


        <br />

        <CardColumns>
          <Card border="warning"  >
            <Card.Img variant="top" object src={require('../componets/images/IMG_0414.JPG')} alt="Generic placeholder image" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card border="warning" className="p-3">
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
          <Card border="warning"  >
            <Card.Img variant="top" object src={require('/Users/alex/babyapp_front/src/componets/images/IMG_0398.JPG')} alt="Generic placeholder image" />
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
          <Card bg="warning" text="white" className="text-center p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p>
                2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
      </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card border="warning" className="text-center">
            <Card.Body>
              <Card.Title>1 Card title</Card.Title>
              <Card.Img object src={require('../componets/images/IMG_0412.JPG')} alt="Generic placeholder image" />
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
        content.{' '}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img object src={require('../componets/images/IMG_0393.JPG')} alt="Generic placeholder image" />
          </Card>
          <Card border="warning" className="text-right">
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
          <Card border="warning">
            <Card.Body>
              <Card.Img object src={require('../componets/images/IMG_0394.JPG')} alt="Generic placeholder image" />
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
