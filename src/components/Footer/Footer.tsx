import { Copyrights, FooterWrapper, LinkButtonsWrapper } from "./Footer.styles";
import Logo from "@/assets/Platform/Logo";
import { links } from "@/constants/links";
import LinkButton from "../Shared/LinkButton/LinkButton";
import { animateScroll } from "react-scroll";

const Footer = () => {
  return (
    <FooterWrapper>
      <div
        onClick={() => animateScroll.scrollToTop()}
        style={{ cursor: "pointer" }}
      >
        <Logo />
      </div>
      <Copyrights>Copyright© 2023 Teameights</Copyrights>

      {/* Desktop width >= 768 */}
      <LinkButtonsWrapper>
        {links.map((link) => (
          <LinkButton icon={link.icon} key={link.name} link={link?.link} />
        ))}
      </LinkButtonsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
