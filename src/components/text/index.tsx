import React from "react";
import { TypographyProps } from "models/layouts";
import { Typography } from "@mui/material";
import { white } from 'styles/palette';

const TextItem : React.FC<TypographyProps> = ({
  text,
  children,
  align = 'inherit',
  paragraph = false,
  variant = 'subtitle2',
  color = white[200],
  noWrap = false,
  fontWeight = "regular",
  onClick = () => {},
  sx = {}
}) => {
  const innerText = text

  return (
    <Typography
      align={align}
      paragraph={paragraph}
      variant={variant}
      color={color}
      noWrap={noWrap}
      onClick={onClick}
      fontWeight={fontWeight}
      sx={{...sx}}
    >
      {children ? children : innerText}
    </Typography>
  );
};

export default TextItem;