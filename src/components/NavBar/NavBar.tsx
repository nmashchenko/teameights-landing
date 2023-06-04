import React, { useState, useEffect } from "react";
import { Link, animateScroll } from "react-scroll";
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
import SideNav from "./SideNav/SideNav";
import Ukraine from "@/assets/Flags/Ukraine";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const wn = window.scrollY;
      if (wn > 20) {
        setNavbarStyle({
          borderBottom: "thin solid rgba(255, 255, 255, 0.055)",

          transitionDuration: "0.3s",
        });
      } else {
        setNavbarStyle({
          borderBottom: "thin solid rgba(255, 255, 255, 0)",
          transitionDuration: "0.3s",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBarWrapper style={navbarStyle}>
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
