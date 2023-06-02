import { useState } from "react";
import {
  BottomWrapper,
  CloseBtn,
  Copyrights,
  LinkButtonsWrapper,
  LinkText,
  MobileLogoWrapper,
  SideNavWrapper,
} from "./SideNav.styles";
import Close from "@/assets/Icons/Close";
import Ukraine from "@/assets/Flags/Ukraine";
import MobileLogo from "@/assets/Platform/MobileLogo";
import { sections } from "@/constants/sections";
import { links } from "@/constants/links";
import LinkButton from "@/components/Shared/LinkButton/LinkButton";
import { Link } from "react-scroll";

const SideNav = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  return (
    <SideNavWrapper open={open}>
      <MobileLogoWrapper open={open}>
        <MobileLogo />
        <Ukraine />
      </MobileLogoWrapper>
      <CloseBtn onClick={() => setOpen(false)} open={open}>
        <Close />
      </CloseBtn>
      {sections.map((section, index) => (
        <Link
          to={section.name}
          smooth={true}
          duration={500}
          key={index}
          onClick={() => setOpen(false)}
        >
          <LinkText key={index} open={open}>
            {section.name}
          </LinkText>
        </Link>
      ))}
      <BottomWrapper open={open}>
        <LinkButtonsWrapper>
          {links.map((link) => (
            <LinkButton icon={link.icon} key={link.name} />
          ))}
        </LinkButtonsWrapper>
        <Copyrights open={open}>Copyright© 2023 Teameights</Copyrights>
      </BottomWrapper>
    </SideNavWrapper>
  );
};

export default SideNav;
