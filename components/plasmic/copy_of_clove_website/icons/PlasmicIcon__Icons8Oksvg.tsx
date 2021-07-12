// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8OksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8OksvgIcon(props: Icons8OksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 480 480"}
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
        d={
          "M240 48C133.969 48 48 133.969 48 240s85.969 192 192 192 192-85.969 192-192S346.031 48 240 48zm107.313 155.313l-120.961 120.96a15.983 15.983 0 01-11.313 4.688c-4.238 0-8.32-1.68-11.312-4.688l-55.247-55.25c-6.257-6.253-6.257-16.367 0-22.625 6.254-6.253 16.368-6.253 22.625 0l43.934 43.938 109.649-109.649c6.257-6.253 16.367-6.253 22.625 0 6.253 6.258 6.253 16.368 0 22.625zm0 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons8OksvgIcon;
/* prettier-ignore-end */
