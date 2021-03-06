import React from 'react';
import styled from 'styled-components';

function PlayButtonApp(props) {
  let playOrPause = props.isPaused ? 'play_arrow' : 'pause'
  return (
    <PlayPauseButton onClick={props.handlePlayPause}>
      <i className="material-icons" style={{ fontSize: 45, color: 'white', }}>{playOrPause}</i>
    </PlayPauseButton>
  );
}

//CSS Styled-components
const PlayPauseButton = styled.button`
height: 65px;
width: 65px;
background-color: #ff5722;
border-radius: 50%;
border: none;
outline: none;

&:hover {
  background: #f44336;
}
`;

export default PlayButtonApp;

