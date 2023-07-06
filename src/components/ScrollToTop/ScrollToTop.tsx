import ArrowTop from "@/assets/Icons/ArrowTop";
import { ScrollContainer, ScrollWrapper } from "./ScrollToTop.styles";
import { useHandleScroll } from "@/hooks/useHandleScroll";
import { IconStyle } from "../Shared/Interfaces/iconStyle.interface";
import { animateScroll } from "react-scroll";

const ScrollToTop = () => {
  const style = useHandleScroll({ isTargetIcon: true }) as IconStyle;

  return (
    <ScrollWrapper
      display={style?.display}
      onClick={() => animateScroll.scrollToTop()}
    >
      <ScrollContainer>
        <ArrowTop />
      </ScrollContainer>
    </ScrollWrapper>
  );
};

export default ScrollToTop;
