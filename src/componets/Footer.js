import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class Footer extends Component {
  render() {
    // return musi zwracać środek 
    return (
      <div>
        <>
          <Card>
            <Card.Body>
              <Card.Text>
                A.V info@alexandervorobiov.com
             </Card.Text>
            </Card.Body>
          </Card>
          <br />

        </>
      </div>
    );
  }
}

export default Footer;
