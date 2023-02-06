// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.998 5.707c-.192.365-.508.596-.876.78L4.686 9.232a.891.891 0 01-1.07-.138.66.66 0 01-.232-.517c.013-.918.015-1.84.026-2.757.004-.418.229-.642.618-.642.394 0 .607.22.607.646 0 .568-.002 1.133-.017 1.699-.005.202.022.268.242.156a323.1 323.1 0 013.137-1.522c.282-.135.583-.28.594-.61.007-.314-.284-.468-.548-.611l-5.315-2.94a3.68 3.68 0 00-.405-.204c-.44-.172-.798.044-.84.501-.007.08-.005.159-.005.236l-.048 5.81c0 .14-.011.286.04.431.114.326.345.447.686.348.114-.033.231-.075.352-.093.455-.059.783.333.63.748a.686.686 0 01-.282.374c-.579.322-1.127.704-1.804.834-.506.095-.85-.119-.986-.596C0 10.142 0 9.898 0 9.656l.068-8.358c0-.132 0-.273.022-.407A1.091 1.091 0 01.827 0l.614.004c.176.086.359.165.532.26l8.176 4.319c.37.195.682.446.851.831l-.002.293z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.657 4.028a.623.623 0 01-.633.612.645.645 0 01-.614-.636c.004-.345.282-.6.638-.594.363.007.616.266.61.618z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
