// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame4Icon(props: Frame4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.466 6.202A1.2 1.2 0 003.6 7.2v9.6a1.2 1.2 0 001.866.998L12 13.442V16.8a1.2 1.2 0 001.866.998l7.2-4.8a1.201 1.201 0 000-1.996l-7.2-4.8A1.2 1.2 0 0012 7.2v3.358L5.466 6.202z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */
