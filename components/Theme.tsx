"use client";
import {
  useColorMode,
  Switch,
  SwitchProps,
  MoonIcon,
  SunIcon,
} from "../common/components/index";

const ToggleDarkMode: React.FC<SwitchProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Switch
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
        {...props}
      />
      {colorMode == "dark" ? (
        <>
          <MoonIcon style={{ marginLeft: "1rem" }} />
        </>
      ) : (
        <>
          <SunIcon style={{ marginLeft: "1rem" }} />
        </>
      )}
    </>
  );
};

export default ToggleDarkMode;
