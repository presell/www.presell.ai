// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: UygEFWd5l1hs69
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicLogo.module.css"; // plasmic-import: UygEFWd5l1hs69/css

export type PlasmicLogo__VariantMembers = {
  _50Opaque: "_50Opaque";
  largeLogo: "largeLogo";
};
export type PlasmicLogo__VariantsArgs = {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  largeLogo?: SingleBooleanChoiceArg<"largeLogo">;
};
type VariantPropType = keyof PlasmicLogo__VariantsArgs;
export const PlasmicLogo__VariantProps = new Array<VariantPropType>(
  "_50Opaque",
  "largeLogo"
);

export type PlasmicLogo__ArgsType = {};
type ArgPropType = keyof PlasmicLogo__ArgsType;
export const PlasmicLogo__ArgProps = new Array<ArgPropType>();

export type PlasmicLogo__OverridesType = {
  root?: p.Flex<"a"> & Partial<LinkProps>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultLogoProps {
  _50Opaque?: SingleBooleanChoiceArg<"_50Opaque">;
  largeLogo?: SingleBooleanChoiceArg<"largeLogo">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLogo__RenderFunc(props: {
  variants: PlasmicLogo__VariantsArgs;
  args: PlasmicLogo__ArgsType;
  overrides: PlasmicLogo__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "_50Opaque",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props._50Opaque : undefined
      },
      {
        path: "largeLogo",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.largeLogo : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque") }
      )}
      component={Link}
      href={`/`}
      platform={"nextjs"}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque"),
          [sty.imglargeLogo]: hasVariant($state, "largeLogo", "largeLogo")
        })}
        displayHeight={"100%" as const}
        displayMaxHeight={
          hasVariant($state, "largeLogo", "largeLogo")
            ? ("none" as const)
            : ("none" as const)
        }
        displayMaxWidth={
          hasVariant($state, "largeLogo", "largeLogo")
            ? ("none" as const)
            : ("none" as const)
        }
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={
          hasVariant($state, "largeLogo", "largeLogo")
            ? ("100%" as const)
            : ("100%" as const)
        }
        src={
          hasVariant($state, "largeLogo", "largeLogo")
            ? {
                src: "/plasmic/www_presell_ai/images/presellAiIconRightText172X31Svg.svg",
                fullWidth: 300,
                fullHeight: 54,
                aspectRatio: 5.580645
              }
            : hasVariant($state, "_50Opaque", "_50Opaque")
            ? {
                src: "/plasmic/www_presell_ai/images/presellAiIconRightText172X31Svg.svg",
                fullWidth: 300,
                fullHeight: 54,
                aspectRatio: 5.580645
              }
            : {
                src: "/plasmic/www_presell_ai/images/presellAiIconRightText172X31Svg.svg",
                fullWidth: 300,
                fullHeight: 54,
                aspectRatio: 5.580645
              }
        }
      />
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLogo__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLogo__VariantsArgs;
    args?: PlasmicLogo__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLogo__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLogo__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */
