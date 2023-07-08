import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IPopover } from "./Popover.interface";
import { colors } from "@/constants/colors";

export default function Hover({
  id,
  open,
  handlePopoverClose,
  anchorEl,
}: IPopover) {
  return (
    <div>
      <Popover
        id={id}
        sx={{
          marginTop: "17px",
          borderRadius: "5px",
          "& .MuiPopover-paper": {
            background: colors.GREY_BORDER,
            color: "white",
          },
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
      >
        <Typography sx={{ padding: "8px 12px" }}>
          If you have any issues, please email
          <br /> us at{" "}
          <a
            href="mailto:help@teameights.com"
            style={{ color: colors.GREEN_BRIGHT }}
          >
            help@teameights.com
          </a>
        </Typography>
      </Popover>
    </div>
  );
}
