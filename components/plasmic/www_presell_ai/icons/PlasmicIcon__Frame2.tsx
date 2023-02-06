// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2Icon(props: Frame2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.906 11.984l-3.791 1.991a.648.648 0 01-.94-.682l.723-4.218-3.066-2.988a.648.648 0 01.358-1.105l4.239-.615L8.325.529a.648.648 0 011.163 0l1.896 3.838 4.239.615a.65.65 0 01.359 1.105l-3.067 2.988.724 4.218a.647.647 0 01-.941.682l-3.792-1.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
