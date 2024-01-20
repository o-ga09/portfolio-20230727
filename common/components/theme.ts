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
        bg: mode("#1A202C", "#E2E8F0")(props), // ダークモード時の背景色
        color: mode("#ffffff", "#000000")(props)
      },
    }),
  },
});

export default customTheme;
