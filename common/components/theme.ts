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
    initialColorMode: 'light',
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
        bg: mode("#E2E8F0", "#1A202C")(props), // mode(ダークモード時, ライトモード時) : 背景色
        color: mode("#000000", "#ffffff")(props) // mode(ダークモード時, ライトモード時) : 文字色
      },
    }),
  },
});

export default customTheme;
