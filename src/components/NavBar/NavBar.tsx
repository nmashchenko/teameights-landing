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
import SideNav from "./SideNav/SideNav";
import { useEffect, useState } from "react";
import Ukraine from "@/assets/Flags/Ukraine";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavBarWrapper>
      <SideNav open={open} setOpen={setOpen} />
      {/* Desktop width >= 1024 */}
      <DesktopLogoWrapper onClick={() => animateScroll.scrollToBottom()}>
        <Logo />
        <Ukraine />
      </DesktopLogoWrapper>

      {/* Desktop width < 1024 */}
      <MobileLogoWrapper onClick={() => animateScroll.scrollToBottom()}>
        <MobileLogo />
        <Ukraine />
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
        <div onClick={() => setOpen(true)}>
          <BurgerMenu />
        </div>
      </MobileIconsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
