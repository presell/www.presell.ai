// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLoginee285B38SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLoginee285B38SvgIcon(props: IconLoginee285B38SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M7.697 11.089l3.276-2.88a.275.275 0 000-.417l-5.4-4.747c-.192-.168-.502-.039-.502.209v3.05H1.625a.291.291 0 00-.292.291v2.75c0 .162.131.292.292.292h3.446v3.11c0 .248.31.377.502.209l.912-.802 1.212-1.065zm-.611-8.422L8.603 4h4.851v8H8.603l-1.517 1.333h7.277c.167 0 .303-.149.303-.333V3c0-.184-.135-.333-.303-.333H7.086z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLoginee285B38SvgIcon;
/* prettier-ignore-end */
