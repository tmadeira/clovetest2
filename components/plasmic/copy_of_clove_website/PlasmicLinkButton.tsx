// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eV7Xi9hgseajGR8GcVFgnT
// Component: SV009CwcClwU7
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
import * as sty from "./PlasmicLinkButton.module.css"; // plasmic-import: SV009CwcClwU7/css

export type PlasmicLinkButton__VariantMembers = {};

export type PlasmicLinkButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicLinkButton__VariantsArgs;
export const PlasmicLinkButton__VariantProps = new Array<VariantPropType>();

export type PlasmicLinkButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLinkButton__ArgsType;
export const PlasmicLinkButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicLinkButton__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultLinkButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicLinkButton__RenderFunc(props: {
  variants: PlasmicLinkButton__VariantsArgs;
  args: PlasmicLinkButton__ArgsType;
  overrides: PlasmicLinkButton__OverridesType;
  dataFetches?: PlasmicLinkButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__hnhda
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"FOR BUSINESS"}
          </p.PlasmicLink>
        ),

        value: args.children
      })}
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
  PlasmicLinkButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinkButton__VariantsArgs;
    args?: PlasmicLinkButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLinkButton__Fetches;
  } & Omit<PlasmicLinkButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLinkButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLinkButton__ArgProps,
      internalVariantPropNames: PlasmicLinkButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
