import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import '../componets/CSS/Footer.css'


class Footer extends Component {
  render() {
    // return musi zwracać środek 
    return (
      <div>
        <>
          <Card>
            <Card.Body>
              <Card.Text >
               <div className="Footer"> A.V info@alexandervorobiov.com </div>
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
