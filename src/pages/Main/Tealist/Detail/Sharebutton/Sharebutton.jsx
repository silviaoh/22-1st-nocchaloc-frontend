import React from 'react';
import { Link } from 'react-router-dom';
import './Sharebutton.scss';

class Sharebutton extends React.Component {
  render() {
    return (
      <div className="sns">
        <Link className="share-btn">
          <i className="far fa-copy" />
          {/*<i class="fab fa-facebook-f"></i> */}
        </Link>
      </div>
    );
  }
}

export default Sharebutton;
