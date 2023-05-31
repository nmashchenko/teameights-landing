import { Button } from "./RegularButton.styles";

const RegularButton = ({
  text,
  icon,
  color,
  background,
}: {
  text: string;
  icon?: any;
  color?: string;
  background?: string;
}) => {
  return (
    <Button color={color} background={background}>
      {icon && icon}
      {text}
    </Button>
  );
};

export default RegularButton;
