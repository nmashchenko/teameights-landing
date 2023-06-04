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
  return (
    <Input
      placeholder={placeholder}
      value={data}
      onChange={(e) =>
        setData ? setData(e.target.value) : console.log("Attach input handler")
      }
    />
  );
};

export default RegularInput;
