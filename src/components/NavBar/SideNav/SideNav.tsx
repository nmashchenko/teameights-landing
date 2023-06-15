import {
  BottomWrapper,
  CloseBtn,
  Copyrights,
  LinkButtonsWrapper,
  LinkText,
  SideNavWrapper,
} from "./SideNav.styles";
import Close from "@/assets/Icons/Close";
import { sections } from "@/constants/sections";
import { links } from "@/constants/links";
import LinkButton from "@/components/Shared/LinkButton/LinkButton";
import { Link } from "react-scroll";
import { useGetHeight } from "@/hooks/useGetHeight";

const SideNav = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (T: boolean) => void;
}) => {
  const height = useGetHeight();
  return (
    <SideNavWrapper open={open} height={height}>
      <CloseBtn onClick={() => setOpen(false)} open={open}>
        <Close />
      </CloseBtn>
      {sections.map((section, index) => (
        <Link
          to={section.name}
          smooth={true}
          duration={800}
          key={index}
          offset={-80}
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
            <LinkButton icon={link.icon} key={link.name} dimensions="40px" />
          ))}
        </LinkButtonsWrapper>
        <Copyrights open={open}>Copyright© 2023 Teameights</Copyrights>
      </BottomWrapper>
    </SideNavWrapper>
  );
};

export default SideNav;
