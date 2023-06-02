import { Button } from "./RegularButton.styles";

const RegularButton = ({
  text,
  icon,
  color,
  background,
  width,
  height,
}: {
  text: string;
  icon?: any;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <Button color={color} background={background} width={width} height={height}>
      {icon && icon}
      {text}
    </Button>
  );
};

export default RegularButton;
