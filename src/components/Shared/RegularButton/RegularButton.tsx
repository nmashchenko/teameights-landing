import { Button } from "./RegularButton.styles";

const RegularButton = ({
  text,
  icon,
  color,
  background,
  width,
  height,
  handleClick,
}: {
  text: string;
  icon?: any;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
  handleClick?: () => void;
}) => {
  return (
    <Button
      color={color}
      background={background}
      width={width}
      height={height}
      onClick={() =>
        handleClick ? handleClick() : console.log("Attach button handler")
      }
    >
      {icon && icon}
      {text}
    </Button>
  );
};

export default RegularButton;
