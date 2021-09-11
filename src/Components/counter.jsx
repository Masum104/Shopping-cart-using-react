import React, { Component } from 'react';
class Counter extends Component {
getBadge(){
    let classes="badge m-2 badge-";
    return classes+=this.props.counter.value===0?"warning":"primary";
}


formatCounter()
{
    return this.props.counter.value===0?"Zero":this.props.counter.value;
}

setStyle()
{
    return {
        padding:10,
        width:60,
        
    }
}
    render() { 
        return ( 
            <div>
                <span style={this.setStyle()} className={this.getBadge()}>{this.formatCounter()}</span>
                <button style={this.setStyle()} onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-sm btn-primary m-2">+</button>
                <button style={this.setStyle()} onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-sm btn-secondary m-2">-</button>
                <button style={this.setStyle()} onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger">Delete</button>
            </div>
         );
    }
}
 
export default Counter;