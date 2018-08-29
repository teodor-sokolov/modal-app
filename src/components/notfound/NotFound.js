import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

class NotFound extends React.Component {
  componentWillUnmount() {
    if (this.props.history.location.pathname !== '/') {
      this.props.history.goBack(); // change the router history in order to function properly
    }
  }

  render() {
    return (
      <div>
        <h3>404 page not found</h3>
        <p id="info">The page you are looking for does not exist.</p>
        <Link to={'/'} style={{textDecoration: 'none'}}><button className="nav-button">Home</button></Link>
      </div>
    )
  }
}

export default NotFound;
