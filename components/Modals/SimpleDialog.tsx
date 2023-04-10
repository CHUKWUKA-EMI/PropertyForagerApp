import * as React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface IProps extends React.PropsWithChildren, DialogProps {
  modalTitle: string;
  open: boolean;
  handleClose: () => void;
}

const SimpleDialog: React.FC<IProps> = ({
  handleClose,
  modalTitle,
  open,
  children,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
