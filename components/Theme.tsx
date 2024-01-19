"use client";
import { useColorMode, Switch, SwitchProps } from "../common/components/index";

const ToggleDarkMode: React.FC<SwitchProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
      {...props}
    />
  );
};

export default ToggleDarkMode;
