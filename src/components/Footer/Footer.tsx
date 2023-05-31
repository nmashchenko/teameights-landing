import MobileLogo from "@/assets/Platform/MobileLogo";
import {
  Copyrights,
  DesktopIconsWrapper,
  DesktopLogoWrapper,
  FooterWrapper,
  LinkButtonsWrapper,
  MobileCopyrightsWrapper,
  MobileLogoWrapper,
  RowWrapper,
  SectionWrapper,
} from "./Footer.styles";
import Logo from "@/assets/Platform/Logo";
import SectionButton from "../Shared/SectionButton/SectionButton";
import { sections } from "@/constants/sections";
import { links } from "@/constants/links";
import LinkButton from "../Shared/LinkButton/LinkButton";

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Desktop width >= 1024 */}
      <DesktopLogoWrapper>
        <MobileLogo />
        <Copyrights>Copyright© 2023 Teameights</Copyrights>
      </DesktopLogoWrapper>

      {/* Desktop width < 1024 */}
      <MobileLogoWrapper>
        <Logo />
      </MobileLogoWrapper>
      <MobileCopyrightsWrapper>
        <Copyrights>Copyright© 2023 Teameights</Copyrights>
      </MobileCopyrightsWrapper>

      <RowWrapper>
        {/* Desktop width >= 1024 */}
        <DesktopIconsWrapper>
          <SectionWrapper gap="24px">
            {sections.map((section, index) => (
              <SectionButton text={section.name} key={index} />
            ))}
          </SectionWrapper>
        </DesktopIconsWrapper>

        {/* Desktop width >= 768 */}
        <LinkButtonsWrapper>
          {links.map((link) => (
            <LinkButton icon={link.icon} key={link.name} />
          ))}
        </LinkButtonsWrapper>
      </RowWrapper>
    </FooterWrapper>
  );
};

export default Footer;
