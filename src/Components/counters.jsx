import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {  }
    render() { 
        return (
            this.props.counters.map(counter=>
                <Counter
                counter={counter}
                key={counter.id}
                onDelete={this.props.onDelete}   
                onIncrement={this.props.onIncrement}  
                onDecrement={this.props.onDecrement}           
                />)
         );
    }
}
 
export default Counters;