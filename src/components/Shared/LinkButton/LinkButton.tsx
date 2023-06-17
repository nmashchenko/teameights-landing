import { colors } from "@/constants/colors";
import { Button } from "./LinkButton.styles";
import { toast } from "react-hot-toast";

const LinkButton = ({
  icon,
  link,
  dimensions = "32px",
}: {
  icon: any;
  link?: string;
  dimensions?: string;
}) => {
  return (
    <Button
      dimensions={dimensions}
      onClick={() =>
        !link
          ? toast("Coming soon!", {
              id: "1",
              duration: 700,
              style: { background: colors.GREY_BORDER, color: colors.WHITE },
              icon: "⚡️",
            })
          : window.open(link, "_ blank")
      }
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
