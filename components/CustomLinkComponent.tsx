import { styled } from "@mui/material";
import Link, { LinkProps } from "next/link";
import * as React from "react";

interface IProps extends LinkProps, React.PropsWithChildren {
  sx: React.CSSProperties;
}

const CustomLinkComponent: React.FC<IProps> = ({ sx, ...props }) => {
  return (
    <Link style={{ textDecoration: "none", ...sx }} {...props}>
      {props.children}
    </Link>
  );
};

export default CustomLinkComponent;
