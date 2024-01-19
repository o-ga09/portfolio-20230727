import { extendTheme } from "@chakra-ui/react";
import { mode } from "../components/index";

const customBreakpoints = {
  sm: "25em",
  md: "40em",
  lg: "64em",
  xl: "90em",
};

const customTheme = extendTheme({
  breakpoints: customBreakpoints,
  config: {
    initialColorMode: "light", 
    useSystemColorMode: false,
  },
  colors: {
    brand:{
      ml: "#26a99e",
      md: "#1f427a",
    }
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#ffffff", "#1A202C")(props), // ダークモード時の背景色
        color: mode("#000000", "#718096")(props)
      },
    }),
  },
});

export default customTheme;
