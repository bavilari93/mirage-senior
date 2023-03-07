import { SxProps } from '@mui/system';

export type LayoutProps = {
    children: JSX.Element | JSX.Element[];
    purpleCode?:50 | 100 | 200 | 300 | 400;
    headerTitle?:string;
    redirect?:()=>void;
  }

  export type TypographyProps = {
    text?: string;
    children?: JSX.Element | JSX.Element[];
    align?: 'center'| 'inherit'| 'justify'| 'left'| 'right';
    paragraph?: boolean;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    sx?: SxProps;
    noWrap?: boolean;
    onClick?:any;
    fontWeight?: 'light' | 'regular' | 'medium' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600;
  }
  
  export type ButtonProps = {
    containerWidth?: string | number;
    marginTop?: number | string;
    variant?: "text" | "outlined" | "contained" | undefined;
    foreColor?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    spacing?: number;
    spacingY?: number;
    spacingX?: number;
    gutterBottom?: boolean;
    alignment?: 'left' | 'right' | 'center' | 'justify' | undefined;
    buttonAlignment?:'flex-end' | 'flex-start' | 'center' | undefined;
    text: string; 
    onPress: () => void;
    sx?: SxProps;
    disabled?:boolean;
    withCoolDown?: boolean;
    numberOfClicks?:number;
  }