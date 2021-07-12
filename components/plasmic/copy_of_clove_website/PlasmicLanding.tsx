// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eV7Xi9hgseajGR8GcVFgnT
// Component: Q7JAreKlD_imW
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
import * as sty from "./PlasmicLanding.module.css"; // plasmic-import: Q7JAreKlD_imW/css

import DownArrowsvgIcon from "./icons/PlasmicIcon__DownArrowsvg"; // plasmic-import: SjIeMEwt2LxX7p/icon

export type PlasmicLanding__VariantMembers = {};

export type PlasmicLanding__VariantsArgs = {};
type VariantPropType = keyof PlasmicLanding__VariantsArgs;
export const PlasmicLanding__VariantProps = new Array<VariantPropType>();

export type PlasmicLanding__ArgsType = {
  bottomAction?: React.ReactNode;
  action?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLanding__ArgsType;
export const PlasmicLanding__ArgProps = new Array<ArgPropType>(
  "bottomAction",
  "action"
);

export type PlasmicLanding__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultLandingProps {
  bottomAction?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

function PlasmicLanding__RenderFunc(props: {
  variants: PlasmicLanding__VariantsArgs;
  args: PlasmicLanding__ArgsType;
  overrides: PlasmicLanding__OverridesType;
  dataFetches?: PlasmicLanding__Fetches;
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
      id={"landing_page_container" as const}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__nph6)}
      >
        {true ? (
          <div className={classNames(defaultcss.all, sty.box__heKkj)} />
        ) : null}

        <div className={classNames(defaultcss.all, sty.box__gLxNt)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Lead the world to carbon neutrality with your brand. ",
            value: args.action,
            className: classNames(sty.slotAction)
          })}
        </div>

        <div className={classNames(defaultcss.all, sty.box__lGnOs)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.p__lnXy9
                  )}
                >
                  {"Find out how you can help"}
                </p>

                <DownArrowsvgIcon
                  className={classNames(defaultcss.all, sty.svg__w1Eyj)}
                  role={"img"}
                />
              </React.Fragment>
            ),
            value: args.bottomAction
          })}
        </div>
      </p.Stack>
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
  PlasmicLanding__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLanding__VariantsArgs;
    args?: PlasmicLanding__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLanding__Fetches;
  } & Omit<PlasmicLanding__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLanding__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLanding__ArgProps,
      internalVariantPropNames: PlasmicLanding__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLanding__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLanding";
  } else {
    func.displayName = `PlasmicLanding.${nodeName}`;
  }
  return func;
}

export const PlasmicLanding = Object.assign(
  // Top-level PlasmicLanding renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLanding
    internalVariantProps: PlasmicLanding__VariantProps,
    internalArgProps: PlasmicLanding__ArgProps
  }
);

export default PlasmicLanding;
/* prettier-ignore-end */
