import React, {Component} from "react";
import Board from "./components/Board";
//import Footer from "./components/Footer";
import Images from "./components/Images";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import simpsons from "./simpsons.json";
import "./App.css";



const App = () => {
  this.state = {
      currentID : -1,
      topScore : 0,
      currentScore : 0,
      status : ''    

    };
  this.Click = (id)=> {
    var currentScore = this.state.currentScore;
    var topScore = this.state.topScore;
    var status = '';
    if (this.state.currentID === id) {
      console.log("you lose ")
      currentScore = 0;
      status = 'Incorrect, game over!';
    } else {
      currentScore+=1;
      if (currentScore > topScore){
        topScore = currentScore;
      }
      status = "correct!";
    }
        this.setState({
          currentID: id,
          status: status,
          currentScore: currentScore,
          topScore: topScore
        })
    console.log("Img with id: " + id + " was clicked")
   };

  return(
   <Wrapper>
     <Nav
       top = {this.state.topScore}
       current = {this.state.currentScore}
       message = {this.state.status}
     />
     <Board/> 
     {
       simpsons.map( (item) => (

         <Images
            key={item.id} 
            id={item.id} 
            name={item.name}
            image={item.image}
            click = {this.Click}
        />
       ))
     }

  
     {/* <Footer/> */}
   </Wrapper>
  )
    
  }



export default App;
