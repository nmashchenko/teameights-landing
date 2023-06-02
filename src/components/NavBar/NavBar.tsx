import { links } from "@/constants/links";
import {
  DesktopIconsWrapper,
  DesktopLogoWrapper,
  LinkButtonsWrapper,
  MobileIconsWrapper,
  MobileLogoWrapper,
  NavBarWrapper,
  SectionWrapper,
} from "./NavBar.styles";
import LinkButton from "../Shared/LinkButton/LinkButton";
import Logo from "@/assets/Platform/Logo";
import { sections } from "@/constants/sections";
import SectionButton from "../Shared/SectionButton/SectionButton";
import MobileLogo from "@/assets/Platform/MobileLogo";
import BurgerMenu from "@/assets/BurgerMenu/BurgerMenu";
import { Link, animateScroll } from "react-scroll";

const NavBar = () => {
  return (
    <NavBarWrapper>
      {/* Desktop width >= 1024 */}
      <DesktopLogoWrapper onClick={() => animateScroll.scrollToBottom()}>
        <Logo />
      </DesktopLogoWrapper>

      {/* Desktop width < 1024 */}
      <MobileLogoWrapper onClick={() => animateScroll.scrollToBottom()}>
        <MobileLogo />
      </MobileLogoWrapper>

      {/* Desktop width >= 1024 */}
      <DesktopIconsWrapper>
        <SectionWrapper gap="24px">
          {sections.map((section, index) => (
            <Link to={section.name} smooth={true} duration={500} key={index}>
              <SectionButton text={section.name} />
            </Link>
          ))}
        </SectionWrapper>
        <LinkButtonsWrapper>
          {links.map((link) => (
            <LinkButton icon={link.icon} key={link.name} />
          ))}
        </LinkButtonsWrapper>
      </DesktopIconsWrapper>

      <MobileIconsWrapper>
        <BurgerMenu />
      </MobileIconsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
