// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eV7Xi9hgseajGR8GcVFgnT
// Component: HuPbUB6jaqsHQR
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -L1czsd8IbhiAH/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_clove_website.module.css"; // plasmic-import: eV7Xi9hgseajGR8GcVFgnT/projectcss
import * as sty from "./PlasmicDemoImage.module.css"; // plasmic-import: HuPbUB6jaqsHQR/css

export type PlasmicDemoImage__VariantMembers = {};

export type PlasmicDemoImage__VariantsArgs = {};
type VariantPropType = keyof PlasmicDemoImage__VariantsArgs;
export const PlasmicDemoImage__VariantProps = new Array<VariantPropType>();

export type PlasmicDemoImage__ArgsType = {};
type ArgPropType = keyof PlasmicDemoImage__ArgsType;
export const PlasmicDemoImage__ArgProps = new Array<ArgPropType>();

export type PlasmicDemoImage__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultDemoImageProps {
  className?: string;
}

function PlasmicDemoImage__RenderFunc(props: {
  variants: PlasmicDemoImage__VariantsArgs;
  args: PlasmicDemoImage__ArgsType;
  overrides: PlasmicDemoImage__OverridesType;
  dataFetches?: PlasmicDemoImage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(globalVariants, "screen", "desktop") ? true : false) ? (
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__a0Joe)}
          role={"img"}
          src={"/plasmic/copy_of_clove_website/images/cloveDemo1Png.png"}
        />
      ) : null}
      {(hasVariant(globalVariants, "screen", "desktop") ? false : true) ? (
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__yg59L)}
          role={"img"}
          src={
            "/plasmic/copy_of_clove_website/images/clovehomepageimage1Png.png"
          }
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDemoImage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDemoImage__VariantsArgs;
    args?: PlasmicDemoImage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicDemoImage__Fetches;
  } & Omit<PlasmicDemoImage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDemoImage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicDemoImage__ArgProps,
      internalVariantPropNames: PlasmicDemoImage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicDemoImage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDemoImage";
  } else {
    func.displayName = `PlasmicDemoImage.${nodeName}`;
  }
  return func;
}

export const PlasmicDemoImage = Object.assign(
  // Top-level PlasmicDemoImage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDemoImage
    internalVariantProps: PlasmicDemoImage__VariantProps,
    internalArgProps: PlasmicDemoImage__ArgProps
  }
);

export default PlasmicDemoImage;
/* prettier-ignore-end */