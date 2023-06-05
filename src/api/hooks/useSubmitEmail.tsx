import axios from "axios";
import { toast } from "react-hot-toast";
import { colors } from "@/constants/colors";

export const useSubmitEmail = (email: string, setEmail: (T: any) => void) => {
  const handleSubmit = () => {
    toast.promise(
      axios.post(
        "https://teameights-server.herokuapp.com/api/users/beta/sign-up",
        { email }
      ),
      {
        loading: "Loading",
        success: () => {
          // Clear the email input field
          setEmail("");
          return "Welcome to Team8s!";
        },
        error: (err) => {
          if (err?.response?.status === 400) {
            return `${err.response?.data[0]?.split("-")[1]?.toString()}`;
          } else if (err?.response?.status === 429) {
            return `${err.response?.data?.message?.toString()}`;
          }

          return `Something wrong happened, try again later!`;
        },
      },
      {
        id: "beta/sign-up",
        style: { background: colors.GREY_BORDER, color: colors.WHITE },
        success: {
          duration: 3000,
        },
      }
    );
  };

  return handleSubmit;
};
