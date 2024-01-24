import './App.css'
import phrases from './utils/phrases.json';
import RandomPhrase from './components/RandomPhrase';
import randomIndex from './services/randomIndex';
import { useState } from 'react';
import ButtonPhrase from './components/ButtonPhrase';
import bgArray from './utils/bgArray.json'

function App() {


  const sentence = randomIndex(phrases);
  const bgapp = randomIndex(bgArray)

  const [quote, setQuote] = useState(sentence)
  const [bgApp, setBgApp] = useState(bgapp)

  const bgStyle = {
    backgroundImage: `url('../public/assets/fondo${bgApp}.png')`
  }


  return (
    <div className='app' style={bgStyle}>
      <div className='container'>
        <h1>Galletas de la Fortuna</h1>

        <ButtonPhrase 
          setQuote = {setQuote}
          setBgApp = {setBgApp}
        />

        <RandomPhrase 
          quote = {quote}
        />

      </div>
    </div>
  )
}

export default App
