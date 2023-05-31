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

const NavBar = () => {
  return (
    <NavBarWrapper>
      {/* Desktop width >= 1024 */}
      <DesktopLogoWrapper>
        <Logo />
      </DesktopLogoWrapper>

      {/* Desktop width < 1024 */}
      <MobileLogoWrapper>
        <MobileLogo />
      </MobileLogoWrapper>

      {/* Desktop width >= 1024 */}
      <DesktopIconsWrapper>
        <SectionWrapper gap="24px">
          {sections.map((section, index) => (
            <SectionButton text={section.name} key={index} />
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
