export interface IPopover {
  open: boolean;
  id: "simple-popover" | undefined;
  handlePopoverClose: () => void;
  anchorEl: HTMLDivElement | null;
}
