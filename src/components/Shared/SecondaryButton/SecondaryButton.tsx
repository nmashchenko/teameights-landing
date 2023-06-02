import { Button } from "./SecondaryButton.styles";

const SecondaryButton = ({
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

export default SecondaryButton;
