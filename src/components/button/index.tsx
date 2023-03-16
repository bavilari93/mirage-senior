import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonProps } from 'models/layouts';


const DynamicButton : React.FC<ButtonProps> = ({ 
  variant, 
  foreColor, 
  containerWidth = 'inherit',
  spacing, 
  spacingY, 
  spacingX,
  marginTop, 
  alignment, 
  buttonAlignment = 'center',
  onPress, 
  text, 
  className,
  sx = {}, 
}) => {
  return (
  <Box
      textAlign={alignment}
      p={spacing}
      py={spacingY}
      px={spacingX}
      sx={{alignItems: buttonAlignment, width: containerWidth}}
      mt={marginTop}
    >
      <Button
        onClick={
          onPress
        }
        variant={variant}
        color={foreColor}
        sx={{...sx, fontWeight:'bold'}}
        className={className}
      >
        
         {
         text
        }
      </Button>
    </Box>
  );
}

export default DynamicButton;
