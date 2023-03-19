// MUI slider component
import React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';

// document.getElementsByClassName(classNames)

const QuizSlider = styled(Slider)({

    color: '#090088',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 30,
      width: 30,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-markLabel': {
    },
  
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 14,
      background: 'unset',
      padding: 10,
      width: 80,
      height: 80,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: ' #090088',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        backgroundColor: '#090088',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  })
  ;

  

const QuizSliderApp = (props) => {
  const { defaultValue, min, max, onChange, onChangeCommitted, disabled, questions, getAriaValueText, unit, valueLabelFormat, item, step } = props;
// console.log(questions);

const marks = [
  
  {
    value: min,
    label: `${min} ${unit}`
  },
  {
    value: max,
    label: `${max} ${unit}`
  }
];

  return (
    <>
    
  <Box display="flex" flexDirection="column" m={10}>
    <QuizSlider 
    valueLabelDisplay='on'
    defaultValue={defaultValue}
    min={min}
    max={max}
    onChange={onChange}
    onChangeCommitted={onChangeCommitted}
    disabled={disabled}
    questions={questions}
    getAriaValueText={getAriaValueText}
    marks={marks}
    unit={unit}
    valueLabelFormat={valueLabelFormat}

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