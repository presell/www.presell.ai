// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.195 15.718l-4.968 2.611a.848.848 0 01-1.232-.895l.948-5.532L.925 7.984a.85.85 0 01.47-1.45l5.554-.807L9.433.694a.85.85 0 011.524 0l2.485 5.033 5.554.808a.85.85 0 01.471 1.449l-4.02 3.918.95 5.532a.85.85 0 01-1.233.895l-4.969-2.611z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
