// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eV7Xi9hgseajGR8GcVFgnT
// Component: sCBjEr90b1mbPB
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
import Header from "../../Header"; // plasmic-import: y0PFOIKIN4jva/component
import Section from "../../Section"; // plasmic-import: iMtv5NCElk1PK/component
import Landing from "../../Landing"; // plasmic-import: Q7JAreKlD_imW/component
import Footer from "../../Footer"; // plasmic-import: npQMG1y3PU8M1/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: -L1czsd8IbhiAH/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_clove_website.module.css"; // plasmic-import: eV7Xi9hgseajGR8GcVFgnT/projectcss
import * as sty from "./PlasmicPage.module.css"; // plasmic-import: sCBjEr90b1mbPB/css

import DownArrowsvgIcon from "./icons/PlasmicIcon__DownArrowsvg"; // plasmic-import: SjIeMEwt2LxX7p/icon

export type PlasmicPage__VariantMembers = {
  businessPage: "businessPage";
};

export type PlasmicPage__VariantsArgs = {
  businessPage?: SingleBooleanChoiceArg<"businessPage">;
};

type VariantPropType = keyof PlasmicPage__VariantsArgs;
export const PlasmicPage__VariantProps = new Array<VariantPropType>(
  "businessPage"
);

export type PlasmicPage__ArgsType = {
  content?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPage__ArgsType;
export const PlasmicPage__ArgProps = new Array<ArgPropType>("content");

export type PlasmicPage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPageProps {
  content?: React.ReactNode;
  businessPage?: SingleBooleanChoiceArg<"businessPage">;
  className?: string;
}

function PlasmicPage__RenderFunc(props: {
  variants: PlasmicPage__VariantsArgs;
  args: PlasmicPage__ArgsType;
  overrides: PlasmicPage__OverridesType;
  dataFetches?: PlasmicPage__Fetches;
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
      <Header
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames("__wab_instance", sty.header, {
          [sty.header__businessPage]: hasVariant(
            variants,
            "businessPage",
            "businessPage"
          )
        })}
        desktop={
          hasVariant(globalVariants, "screen", "desktop")
            ? ("desktop" as const)
            : undefined
        }
        goBack={
          hasVariant(variants, "businessPage", "businessPage")
            ? ("goBack" as const)
            : undefined
        }
      />

      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <div className={classNames(defaultcss.all, sty.freeBox___92XX)}>
              <Section
                className={classNames("__wab_instance", sty.section___2Ch5B)}
                content={
                  <Landing
                    className={classNames("__wab_instance", sty.landing__iz2Z)}
                  />
                }
              />
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__yOMi)}>
              <Section
                className={classNames("__wab_instance", sty.section__vywgD)}
                content={
                  <React.Fragment>
                    <img
                      alt={""}
                      className={classNames(defaultcss.img, sty.img__h9Kfz)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.freeBox__kdsyp
                      )}
                    >
                      {
                        "Clove is a nonprofit helping you find sustainable products"
                      }
                    </div>
                  </React.Fragment>
                }
              />
            </div>
          </React.Fragment>
        ),
        value: args.content
      })}

      <Footer
        data-plasmic-name={"footer"}
        data-plasmic-override={overrides.footer}
        className={classNames("__wab_instance", sty.footer)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "footer"],
  header: ["header"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPage__VariantsArgs;
    args?: PlasmicPage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPage__Fetches;
  } & Omit<PlasmicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPage__ArgProps,
      internalVariantPropNames: PlasmicPage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPage";
  } else {
    func.displayName = `PlasmicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPage = Object.assign(
  // Top-level PlasmicPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPage
    internalVariantProps: PlasmicPage__VariantProps,
    internalArgProps: PlasmicPage__ArgProps
  }
);

export default PlasmicPage;
/* prettier-ignore-end */
