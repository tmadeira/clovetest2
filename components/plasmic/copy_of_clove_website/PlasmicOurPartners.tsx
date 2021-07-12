// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eV7Xi9hgseajGR8GcVFgnT
// Component: Ppuf_8_k0yWN4
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
import Page from "../../Page"; // plasmic-import: sCBjEr90b1mbPB/component
import Section from "../../Section"; // plasmic-import: iMtv5NCElk1PK/component
import PartnerCard from "../../PartnerCard"; // plasmic-import: L0jfkkzI6NSWde/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_clove_website.module.css"; // plasmic-import: eV7Xi9hgseajGR8GcVFgnT/projectcss
import * as sty from "./PlasmicOurPartners.module.css"; // plasmic-import: Ppuf_8_k0yWN4/css

export type PlasmicOurPartners__VariantMembers = {};

export type PlasmicOurPartners__VariantsArgs = {};
type VariantPropType = keyof PlasmicOurPartners__VariantsArgs;
export const PlasmicOurPartners__VariantProps = new Array<VariantPropType>();

export type PlasmicOurPartners__ArgsType = {};
type ArgPropType = keyof PlasmicOurPartners__ArgsType;
export const PlasmicOurPartners__ArgProps = new Array<ArgPropType>();

export type PlasmicOurPartners__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  section?: p.Flex<typeof Section>;
  title?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  partnerCard?: p.Flex<typeof PartnerCard>;
  img?: p.Flex<"img">;
};

export interface DefaultOurPartnersProps {
  dataFetches: PlasmicOurPartners__Fetches;
}

function PlasmicOurPartners__RenderFunc(props: {
  variants: PlasmicOurPartners__VariantsArgs;
  args: PlasmicOurPartners__ArgsType;
  overrides: PlasmicOurPartners__OverridesType;
  dataFetches?: PlasmicOurPartners__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{"Our Partners"}</title>
        <meta key="og:title" property="og:title" content={"Our Partners"} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Page
            data-plasmic-name={"page"}
            data-plasmic-override={overrides.page}
            className={classNames("__wab_instance", sty.page)}
            content={
              <Section
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                className={classNames("__wab_instance", sty.section)}
                content={
                  <div className={classNames(defaultcss.all, sty.box___23KFh)}>
                    <div
                      data-plasmic-name={"title"}
                      data-plasmic-override={overrides.title}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.title
                      )}
                    >
                      {"Our Partners"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__bPrgu
                      )}
                    >
                      {"Clove Partners"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__c6S2O
                      )}
                    >
                      {
                        "We are in the process of measuring the environmental impact of our first businesses!"
                      }
                    </div>

                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.link
                      )}
                      component={Link}
                      href={"/#help" as const}
                      platform={"nextjs"}
                    >
                      {
                        "Connect with us to be the first to know when this process is complete."
                      }
                    </p.PlasmicLink>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box___3WrNi
                      )}
                    >
                      {"Incoming Clove partners"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__uJyYa
                      )}
                    >
                      {
                        "These partners are in the process of getting assessed and will soon launch our label on their site."
                      }
                    </div>

                    <PartnerCard
                      data-plasmic-name={"partnerCard"}
                      data-plasmic-override={overrides.partnerCard}
                      className={classNames("__wab_instance", sty.partnerCard)}
                      dest={"https://shop1301.com/" as const}
                    >
                      <img
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(defaultcss.img, sty.img)}
                        role={"img"}
                        src={
                          "/plasmic/copy_of_clove_website/images/shop1301Logopng.png"
                        }
                      />
                    </PartnerCard>
                  </div>
                }
              />
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "page", "section", "title", "link", "partnerCard", "img"],
  page: ["page", "section", "title", "link", "partnerCard", "img"],
  section: ["section", "title", "link", "partnerCard", "img"],
  title: ["title"],
  link: ["link"],
  partnerCard: ["partnerCard", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
  section: typeof Section;
  title: "div";
  link: "a";
  partnerCard: typeof PartnerCard;
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOurPartners__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOurPartners__VariantsArgs;
    args?: PlasmicOurPartners__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicOurPartners__Fetches;
  } & Omit<PlasmicOurPartners__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOurPartners__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOurPartners__ArgProps,
      internalVariantPropNames: PlasmicOurPartners__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicOurPartners__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOurPartners";
  } else {
    func.displayName = `PlasmicOurPartners.${nodeName}`;
  }
  return func;
}

export const PlasmicOurPartners = Object.assign(
  // Top-level PlasmicOurPartners renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    section: makeNodeComponent("section"),
    title: makeNodeComponent("title"),
    link: makeNodeComponent("link"),
    partnerCard: makeNodeComponent("partnerCard"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicOurPartners
    internalVariantProps: PlasmicOurPartners__VariantProps,
    internalArgProps: PlasmicOurPartners__ArgProps
  }
);

export default PlasmicOurPartners;
/* prettier-ignore-end */
