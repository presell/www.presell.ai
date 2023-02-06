// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.906.168a.65.65 0 00-.581.361L6.429 4.367l-4.239.615a.649.649 0 00-.358 1.105l3.066 2.988-.723 4.218a.647.647 0 00.94.682l3.791-1.99V.167z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M4.802 13.563c.03.002.06-.004.087-.018l3.791-1.99.226-.12.226.12 3.792 1.99a.162.162 0 00.235-.17l-.724-4.218-.043-.252.183-.178 3.067-2.988a.162.162 0 00-.008-.24M4.802 13.563l-.035.485m.035-.485a.162.162 0 01-.148-.189l.723-4.217.044-.252-.184-.178L2.171 5.74a.162.162 0 01.089-.276l4.239-.615.253-.037.113-.229L8.76.744a.162.162 0 01.29 0l1.897 3.838.113.229.253.037 4.239.615c.03.005.058.017.08.036m0 0l.314-.371"
        }
        stroke={"currentColor"}
        strokeWidth={"1.113"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
