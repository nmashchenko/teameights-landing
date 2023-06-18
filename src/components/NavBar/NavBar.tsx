import React, { useState } from "react";
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
import { useHandleScroll } from "@/hooks/useHandleScroll";
import Hover from "./Popover/Popover";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navbarStyle = useHandleScroll();

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <NavBarWrapper style={navbarStyle}>
      <SideNav open={open} setOpen={setOpen} />
      {/* Desktop width >= 1024 */}
      <DesktopLogoWrapper onClick={() => animateScroll.scrollToTop()}>
        <Logo />
        <Ukraine />
      </DesktopLogoWrapper>

      {/* Desktop width < 1024 */}
      <MobileLogoWrapper onClick={() => animateScroll.scrollToTop()}>
        <MobileLogo />
        <Ukraine />
      </MobileLogoWrapper>

      {/* Desktop width >= 1024 */}
      <DesktopIconsWrapper>
        {/* This is poppover that is displayed when we click on "Help" */}
        <Hover
          anchorEl={anchorEl}
          handlePopoverClose={handleClose}
          open={openPopover}
          id={id}
        />
        <SectionWrapper gap="24px">
          {sections.map((section, index) => (
            <div key={index}>
              {section.name === "Help" ? (
                <div onClick={handleClick} aria-describedby={id}>
                  <SectionButton text={section.name} />
                </div>
              ) : (
                <Link
                  to={section.name}
                  smooth={true}
                  duration={1200}
                  offset={-80}
                >
                  <SectionButton text={section.name} />
                </Link>
              )}
            </div>
          ))}
        </SectionWrapper>
        <LinkButtonsWrapper>
          {links.map((link) => (
            <LinkButton icon={link.icon} key={link.name} link={link?.link} />
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
