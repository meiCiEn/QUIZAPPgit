// MUI slider component
import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';


const QuizSlider = styled(Slider)({

    color: '#090088',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
  
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 16,
      background: 'unset',
      padding: 0,
      width: 50,
      height: 50,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#ff5722',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        backgroundColor: '#ff8a65',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  })
  ;

  

const QuizSliderApp = (props) => {
  const { defaultValue, min, max, onChange, onChangeCommitted, disabled, questions } = props;
console.log(questions);

  return (
    <>
    
  <Box display="flex" flexDirection="column" m={10}>
    <QuizSlider 
    valueLabelDisplay='auto'
    defaultValue={defaultValue}
    min={min}
    max={max}
    onChange={onChange}
    onChangeCommitted={onChangeCommitted}
    disabled={disabled}
    questions={questions}

    />
    
  </Box>
  </>
    )
  
}

QuizSliderApp.defaultProps = {

  defaultValue:50,
  min:1,
  max:100,
  disabled:false
};

export default QuizSliderApp;