import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      arr2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    };
  }

  render() {
    const arr1 = this.state.arr1;
    console.log(arr1);
    const arr2 = this.state.arr2;
    return (
      <table>
        
        {arr1.map((n1, i) => (
          <tr >
            {arr2.map((n2, j) =>{ 
              
                let couleur;
                n1===n2?couleur="red":couleur="black" 
              
              return(
             
              <td 
              className="border m-1 p-1 text-center"
              style={
                {
                  minWidth:"40px",
                  color: `${couleur}`
              }
               
              }
              >{`${n1 * n2}  `}</td>
            )})}
          </tr>
        ))}
      </table>
    );
  }
}

export default App;
