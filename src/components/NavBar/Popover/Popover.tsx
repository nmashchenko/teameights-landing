import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IPopover } from "./Popover.interface";
import { colors } from "@/constants/colors";

export default function Hover({
  open,
  handlePopoverClose,
  anchorEl,
}: IPopover) {
  return (
    <div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
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
        disableRestoreFocus
      >
        <Typography sx={{ padding: "8px 12px" }}>
          If you have any issues, please email
          <br /> us at{" "}
          <span style={{ color: colors.GREEN_BRIGHT }}>
            help@teameights.com
          </span>
        </Typography>
      </Popover>
    </div>
  );
}
