// MUI slider component
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
// import useSlider from '@mui/base/useSlider';
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

export default QuizSlider;