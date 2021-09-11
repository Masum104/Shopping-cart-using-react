import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Counters from './Components/counters';

class App extends Component {
  state={
    counters:[
      {id:1,value:4},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:0}
    ]
  };

  handleDelete=(id)=>
  {
    console.log(id);
    const counters=this.state.counters.filter(counter=>counter.id!=id);
    this.setState({counters:counters})
  };

  handleIncrement=(counter)=>
  {
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     counters[index].value++;
     this.setState({counters});
  };
  handleDecrement=(counter)=>
  {
     const counters=[...this.state.counters];
     const index=counters.indexOf(counter);
     counters[index]={...counter};
     if(counters[index].value>0){
      counters[index].value--;
     }   
     this.setState({counters});
  };

  handleReset=()=>
  {
    const counters=this.state.counters.map(counter=>{
      counter.value=0;
      return counter;
    });
    this.setState({counters})
  }

  addCounter=()=>
  {
    const counters=this.state.counters;
    const length=counters.length;
    counters.push({id:counters[length-1].id+1,value:0})
    this.setState({counters});
  }


  render() { 
    return (
      <React.Fragment> 
        <Navbar 
        totalCounters={this.state.counters.filter(counter=>counter.value>0).length}
        />
        <main className="container">
        <button onClick={this.handleReset} className="btn btn-primary m-2">Reset</button>
        <button onClick={this.addCounter} className="btn btn-primary m-2">ADD Counter</button>
        <Counters
        counters={this.state.counters}
        onDelete={this.handleDelete}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        
        />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
