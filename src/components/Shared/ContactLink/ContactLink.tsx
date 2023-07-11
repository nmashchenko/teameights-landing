import { Link } from "./ContactLink.styles";

const ContactLink = ({
  text,
  icon,
  color,
  background,
  href,
  width,
  height,
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
      href={href}
      width={width}
      height={height}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {text}
    </Link>
  );
};

export default ContactLink;
