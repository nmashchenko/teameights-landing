import { colors } from "@/constants/colors";
import { Button } from "./LinkButton.styles";
import { toast } from "react-hot-toast";

const LinkButton = ({ icon }: { icon: any }) => {
  return (
    <Button
      onClick={() =>
        toast("Coming soon!", {
          id: "1",
          duration: 700,
          style: { background: colors.GREY_BORDER, color: colors.WHITE },
          icon: "⚡️",
        })
      }
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
