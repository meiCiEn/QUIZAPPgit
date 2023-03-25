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
      padding: 0,
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
        // '#090088', '#6b66b8',

      },
      // '&.Mui-disabled':
      // {
      //   backgroundColor: '#6b66b8',
      // },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  })
  ;

  

const QuizSliderApp = (props) => {
  const { defaultValue, min, max, onChange, onChangeCommitted, disabled, questions, getAriaValueText, unit, valueLabelFormat, track, thumb, item, step } = props;
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
    
  <Box display="flex" flexDirection="column" mt={8}>
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
    track={false}
    valueLabelFormat={valueLabelFormat}
    // thumb={thumb}
   

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