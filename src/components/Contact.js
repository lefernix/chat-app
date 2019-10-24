import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    };
  }
  
  render(){
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatarURL} ></img>
        <div>
          <h3 className="name">{this.props.name}</h3>
          <div className="status" onClick={() =>{
            const changeStatus = !this.state.online;
            this.setState({online : changeStatus});
          }}>
            <span className={ this.state.online ? "status-online" : "status-offline"}></span>
            <span className="status-text">{ this.state.online ? "Online" : "Offline"}</span>
          </div>
         </div>
      </div>
    );
  }
}
    

export default Contact;
