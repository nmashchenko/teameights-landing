import { randomUUID } from "crypto";
import { Button } from "./LinkButton.styles";
import { toast } from "react-hot-toast";

const LinkButton = ({ icon }: { icon: any }) => {
  return (
    <Button
      onClick={() =>
        toast("Coming soon!", {
          id: "1",
          duration: 700,
          style: { background: "#2F3239", color: "white" },
          icon: "⚡️",
        })
      }
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
