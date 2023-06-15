import { useState } from "react";
import { Input } from "./RegulatInput.styles";

const RegularInput = ({
  placeholder,
  data,
  setData,
}: {
  placeholder: string;
  data: any;
  setData: (T: any) => void;
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Input
      clicked={clicked}
      placeholder={placeholder}
      value={data}
      onClick={() => setClicked(true)}
      onMouseLeave={() => setClicked(false)}
      onChange={(e) =>
        setData ? setData(e.target.value) : console.log("Attach input handler")
      }
    />
  );
};

export default RegularInput;
