// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Checkmarksvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Checkmarksvg2Icon(props: Checkmarksvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 14"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6 11.17L1.83 7 .41 8.41 6 14 18 2 16.59.59 6 11.17z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Checkmarksvg2Icon;
/* prettier-ignore-end */
