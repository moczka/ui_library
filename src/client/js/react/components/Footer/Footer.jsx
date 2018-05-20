import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import MediaAccounts from '_components/MediaAccounts/MediaAccounts';
import './footer.scss';

const Footer = props => {  
  return (
  <footer className="Footer page-footer font-small blue-grey lighten-5 pt-0">
    <div className="Footer-socialMediaBar">
      <Grid> 
        <Row>
          <Col xs={12} md={10} className="Footer-column">
            <p className="Footer-socialMediaBar-message">
              Follow our work on social media!
              <span className="Footer-socialMediaBar-submessage">
                "Fully Licensed and Insured..."
              </span>
            </p>
          </Col>
          <Col xs={12} md={2} className="Footer-column">
            <MediaAccounts accounts={props.mediaAccounts} />
          </Col>
        </Row>
      </Grid>
    </div>
    <div className="Footer-content">
      <Grid> 
        <Row>
          <Col md={3} lg={4} xl={3} className="Footer-column">
            <h6 className="Footer-content-title">
              <span className="Footer-content-title-text">
                Our Mission
              </span>
            </h6>
            <p className="Footer-content-description">{props.companyMission}</p>
          </Col>
          <Col md={5} lg={4} xl={5} className="Footer-column">
            <h6 className="Footer-content-title">
              <span className="Footer-content-title-text">
                Contanct Us
              </span>
            </h6>
            <ul className="Footer-contactList">
              <li><i className="glyphicon glyphicon-user" aria-label="Owner"></i>{props.ownerName}</li>
              <li><i className="glyphicon glyphicon-time" aria-label="Business Hours"></i>{props.businessHours}</li>
              <li><i className="glyphicon glyphicon-envelope" aria-label="Email Address"></i><a href={`emailto:${props.email}`}>{props.email}</a></li>
              <li><i className="glyphicon glyphicon-phone-alt" aria-label="Phone Number"></i><a href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</a></li>
              {props.licenses.map(license => (
                <li key={license.licenseId}>
                  <i className="glyphicon glyphicon-ok" aria-label="Phone Number"></i>
                  {license.name} {license.licenseId}
                </li>
              ))}  
            </ul>
          </Col>
          <Col md={4} lg={2} xl={2} className="Footer-column">
            <h6 className="Footer-content-title">
              <span className="Footer-content-title-text">
                Quick Links
              </span>
            </h6>
            <ul className="Footer-navigation">
              {props.pages.map(page => (
                <li key={page.name}>
                  <Link to={page.url}>{page.name}</Link>
                </li>
              ))}
            </ul>
          </Col>   
        </Row>
      </Grid>
    </div>
    <div className="Footer-attribution">
      <Grid>
        <Col xs={12}>
          <p>
            Copyright © {props.currentYear}. New England Home Restoration. All Rights Reserved
          </p>
        </Col>
      </Grid>
    </div>
  </footer>
  );
}

export default Footer;