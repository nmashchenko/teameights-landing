import { Link } from "./ContactLink.styles";

const ContactLink = ({
  text,
  icon,
  color,
  background,
  width,
  height,
  href,
}: {
  text: string;
  href: string;
  icon?: any;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <Link
      color={color}
      background={background}
      width={width}
      height={height}
      href={href}
    >
      {icon && icon}
      {text}
    </Link>
  );
};

export default ContactLink;
