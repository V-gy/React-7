import React from 'react';
import Navbar from "./components/Navbar"
import "./components/Navbar.css"
import QuoteCard from "./components/QuoteCard"
import QuoteList from "./components/QuoteList"
import QuoteForm from "./components/Quote-Form"
import QuoteCharacter from './components/QuoteCharacter';
import axios from "axios"

const SampleCharacter={
  quote:"By chilling my loins I increase the chances of impregnating my wife.",
  character:"Apu Nahasapeemapetilon",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection:"Left"
}

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
          characters:SampleCharacter
      }
      this.getCharacters = this.getCharacters.bind(this);
  }
  getCharacters(){
      axios.get("https://quests.wilders.dev/simpsons-quotes/quotes?count=num")
      .then(response => response.data)
      .then(data =>{
          this.setState({
              characters:data[0],
          })
      });
  }

  render(){
      return(
          <div className="App">
              <QuoteCharacter characters={this.state.characters}/>
              <button type="button" 
                  onClick={this.getCharacters}>
                  Get character
              </button>
          </div>
      )
  }
}
 
export default App;
