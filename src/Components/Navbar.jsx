import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
        <a style={{textAlign:"center"}} className="navbar-brand m-4" href="#">Total
        <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
        </a>
      </nav> );
    }
}
 
export default Navbar;