import { Link } from "./ContactLink.styles";

const ContactLink = ({
  text,
  icon,
  color,
  background,
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
    <Link color={color} background={background} href={href}>
      {icon}
      {text}
    </Link>
  );
};

export default ContactLink;
