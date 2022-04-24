import React from 'react'
import CatBreeds from '../../components/CatBreeds/CatBreeds'
import meowSong from '../../assets/meow-cut.mp3';

const HomePage = ({searchQuery}) => {
  // Hompage components

  return (
    <React.Fragment>
      <audio
        controls
        autoplay
        style={{
            position:'fixed',
            bottom:'0',
            right:'0',
            width:"16rem",
            background:"pink"
          }}
        >
        <source
          src={meowSong}
          type="audio/ogg" />
          Your browser does not support the audio element.
      </audio>
      <CatBreeds searchQuery={searchQuery} />
    </React.Fragment>
  )
}

export default HomePage