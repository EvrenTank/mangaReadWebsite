'use client'
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const CustomTooltip = styled(({ className, ...props }: any) => (
    <Tooltip arrow placement='bottom' {...props} classes={{ popper: className }} />
  ))({
    

    [`& .${tooltipClasses.tooltip}`]: {
      width: '30vw',
      maxWidth:'450px',
      minWidth:'280px',
      padding: '0px',
      borderRadius: '5px',
      textAlign: 'center',

    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'white',
      }

  });
  export default CustomTooltip;