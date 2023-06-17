export interface IPopover {
  open: boolean;
  handlePopoverClose: () => void;
  anchorEl: HTMLDivElement | null;
}
