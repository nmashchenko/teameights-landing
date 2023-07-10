import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IPopover } from "./Popover.interface";
import { colors } from "@/constants/colors";
import { emailAction } from "@/constants/mailAction";

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
            href={emailAction.href}
            style={{ color: colors.GREEN_BRIGHT, textDecoration: "none" }}
          >
            help@teameights.com
          </a>
        </Typography>
      </Popover>
    </div>
  );
}
