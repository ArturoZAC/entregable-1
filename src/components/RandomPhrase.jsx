import React from 'react'

const RandomPhrase = ({quote}) => {

    const { author, phrase} = quote

  return (
    <div className='phraseAuthor'>
      <div className='fondo'>
        <p>{phrase}</p>
      </div>
        <p className='pa'>Fuente: {author}</p>
    </div>
  )
}

export default RandomPhrase