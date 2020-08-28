import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import '/Users/alex/babyapp_front/src/componets/CSS/About.css'
import { Media } from 'reactstrap';
import GoogleMapReact from 'google-map-react';




class About extends Component {
  render() {
    // return musi zwracać środek 
    return( <>
    <link src="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css"/>
    
    <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="title title-center">OUR MANAGEMENT <span>TEAM</span></h2>
          </div>
          
          <div class="col-md-3 col-sm-6">
            <div  class="team">
              <div class="team-image">
                <img class="img-responsive" style={{ width: 'auto', height: 'auto' }}   object src={require('../componets/images/IMG_0403.JPG')} alt="team image" />
                <div class="social-icons">
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                </div>
              </div>
              <h3>Dwayne Johnson</h3>
              <p>CEO / FOUNDER EVENTO</p>
            </div>
          </div>
          
          <div class="col-md-3 col-sm-6">
            <div class="team">
              <div class="team-image">
                <img class="img-responsive" style={{ width: 'auto', height: 'auto' }}   object src={require('../componets/images/IMG_0406.JPG')} alt="team image"/>
                <div class="social-icons">
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                </div>
              </div>
              <h3>Dwayne Johnson</h3>
              <p>CEO / FOUNDER EVENTO</p>
            </div>
          </div>
         
          <div class="col-md-3 col-sm-6">
            <div class="team">
              <div class="team-image">
                <img style={{ width: 'auto', height: 'auto' }}   object src={require('../componets/images/IMG_0416.JPG')} alt="team image" class="img-responsive" />
                <div class="social-icons">
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                </div>
              </div>
              <h3>Dwayne Johnson</h3>
              <p>CEO / FOUNDER EVENTO</p>
            </div>
          </div>
          
          <div class="col-md-3 col-sm-6">
            <div class="team">
              <div class="team-image">
                <img className="img-about" style={{ width: 'auto', height: 'auto' }}   object src={require('./images/IMG_0389.JPG')} alt="team image"/>
                <div class="social-icons">
                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                </div>
              </div>
              <h3>Dwayne Johnson</h3>
              <p>CEO / FOUNDER EVENTO</p>
            </div>
          </div>
        </div>
        </div>
        <div> <br/>

      <Media>
        <Media left top href="#">
          <Media className="img-about" object src={require('./images/IMG_0410.png')} alt="" />
        </Media>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
          <Media className="img-about" object src={require('./images/IMG_0389.JPG')} alt="" />
        </Media>
        <Media body>
          <Media heading>
            Middle aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media className="img-about"  object src={require('./images/IMG_0416.JPG')} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Bottom aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>




    </div>
        </>
    )

  }
}

export default About;
