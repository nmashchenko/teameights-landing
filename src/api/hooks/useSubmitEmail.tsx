import axios from "axios";
import { toast } from "react-hot-toast";
import { colors } from "@/constants/colors";
import { useCallback, useRef } from "react";

export const useSubmitEmail = (email: string, setEmail: (T: any) => void) => {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  const handleSubmit = () => {
    const params = { email: email };

    const s3EmailPromise = axios
      .post("https://teameights-server.herokuapp.com/api/users/beta/sign-up", {
        email,
      })
      .then((response) => {
        console.log(response);
        // The first request succeeded
        axios.post("/api/send", params).then((res) => console.log(res));
      });

    toast.promise(
      // new Promise((r) => setTimeout(r, 2000)),
      s3EmailPromise,
      {
        loading: "Loading",
        success: () => {
          // Clear the email input field
          setEmail("");
          fire();
          return "Welcome email sent!";
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

  return { handleSubmit, getInstance };
};
