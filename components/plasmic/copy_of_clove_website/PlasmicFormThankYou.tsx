// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eV7Xi9hgseajGR8GcVFgnT
// Component: -HcGzCHHRJliz
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_clove_website.module.css"; // plasmic-import: eV7Xi9hgseajGR8GcVFgnT/projectcss
import * as sty from "./PlasmicFormThankYou.module.css"; // plasmic-import: -HcGzCHHRJliz/css

export type PlasmicFormThankYou__VariantMembers = {};

export type PlasmicFormThankYou__VariantsArgs = {};
type VariantPropType = keyof PlasmicFormThankYou__VariantsArgs;
export const PlasmicFormThankYou__VariantProps = new Array<VariantPropType>();

export type PlasmicFormThankYou__ArgsType = {};
type ArgPropType = keyof PlasmicFormThankYou__ArgsType;
export const PlasmicFormThankYou__ArgProps = new Array<ArgPropType>();

export type PlasmicFormThankYou__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultFormThankYouProps {
  className?: string;
}

function PlasmicFormThankYou__RenderFunc(props: {
  variants: PlasmicFormThankYou__VariantsArgs;
  args: PlasmicFormThankYou__ArgsType;
  overrides: PlasmicFormThankYou__OverridesType;
  dataFetches?: PlasmicFormThankYou__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, defaultcss.__wab_text, sty.box)}
      >
        {"Thank you!"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFormThankYou__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFormThankYou__VariantsArgs;
    args?: PlasmicFormThankYou__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFormThankYou__Fetches;
  } & Omit<PlasmicFormThankYou__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFormThankYou__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFormThankYou__ArgProps,
      internalVariantPropNames: PlasmicFormThankYou__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFormThankYou__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFormThankYou";
  } else {
    func.displayName = `PlasmicFormThankYou.${nodeName}`;
  }
  return func;
}

export const PlasmicFormThankYou = Object.assign(
  // Top-level PlasmicFormThankYou renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicFormThankYou
    internalVariantProps: PlasmicFormThankYou__VariantProps,
    internalArgProps: PlasmicFormThankYou__ArgProps
  }
);

export default PlasmicFormThankYou;
/* prettier-ignore-end */