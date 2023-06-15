import { colors } from "@/constants/colors";
import { Button } from "./LinkButton.styles";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const LinkButton = ({
  icon,
  link,
  dimensions = "32px",
}: {
  icon: any;
  link?: string;
  dimensions?: string;
}) => {
  const router = useRouter();
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
          : router.push(link)
      }
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
