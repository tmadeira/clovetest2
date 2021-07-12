// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedinLogosvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedinLogosvgIcon(props: LinkedinLogosvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 97.75 97.75"}
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
          "M48.875 0C21.882 0 0 21.882 0 48.875S21.882 97.75 48.875 97.75 97.75 75.868 97.75 48.875 75.868 0 48.875 0zM30.562 81.966h-13.74V37.758h13.74v44.208zm-6.867-50.251a7.968 7.968 0 01-7.969-7.968 7.968 7.968 0 017.969-7.964c4.392 0 7.962 3.57 7.962 7.964 0 4.399-3.571 7.968-7.962 7.968zm58.328 50.251H68.294V60.467c0-5.127-.095-11.721-7.142-11.721-7.146 0-8.245 5.584-8.245 11.35v21.869H39.179V37.758h13.178v6.041h.185c1.835-3.476 6.315-7.14 13-7.14 13.913 0 16.481 9.156 16.481 21.059v24.248z"
        }
      ></path>
    </svg>
  );
}

export default LinkedinLogosvgIcon;
/* prettier-ignore-end */
