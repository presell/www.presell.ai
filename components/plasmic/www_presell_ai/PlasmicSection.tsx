// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: RN0jn-odTg0QTC
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
import sty from "./PlasmicSection.module.css"; // plasmic-import: RN0jn-odTg0QTC/css

export type PlasmicSection__VariantMembers = {
  background: "dark" | "gray" | "darkBlue" | "blue";
  size:
    | "fullContentWidth"
    | "fullContentGallery"
    | "dashboardSection"
    | "faq"
    | "widthContent1140Px";
};
export type PlasmicSection__VariantsArgs = {
  background?: SingleChoiceArg<"dark" | "gray" | "darkBlue" | "blue">;
  size?: SingleChoiceArg<
    | "fullContentWidth"
    | "fullContentGallery"
    | "dashboardSection"
    | "faq"
    | "widthContent1140Px"
  >;
};
type VariantPropType = keyof PlasmicSection__VariantsArgs;
export const PlasmicSection__VariantProps = new Array<VariantPropType>(
  "background",
  "size"
);

export type PlasmicSection__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicSection__ArgsType;
export const PlasmicSection__ArgProps = new Array<ArgPropType>("children");

export type PlasmicSection__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultSectionProps {
  children?: React.ReactNode;
  background?: SingleChoiceArg<"dark" | "gray" | "darkBlue" | "blue">;
  size?: SingleChoiceArg<
    | "fullContentWidth"
    | "fullContentGallery"
    | "dashboardSection"
    | "faq"
    | "widthContent1140Px"
  >;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSection__RenderFunc(props: {
  variants: PlasmicSection__VariantsArgs;
  args: PlasmicSection__ArgsType;
  overrides: PlasmicSection__OverridesType;

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
        path: "background",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.background : undefined
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.size : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootbackground_blue]: hasVariant($state, "background", "blue"),
          [sty.rootbackground_darkBlue]: hasVariant(
            $state,
            "background",
            "darkBlue"
          ),
          [sty.rootbackground_dark]: hasVariant($state, "background", "dark"),
          [sty.rootbackground_gray]: hasVariant($state, "background", "gray"),
          [sty.rootsize_dashboardSection]: hasVariant(
            $state,
            "size",
            "dashboardSection"
          ),
          [sty.rootsize_faq]: hasVariant($state, "size", "faq"),
          [sty.rootsize_fullContentGallery]: hasVariant(
            $state,
            "size",
            "fullContentGallery"
          ),
          [sty.rootsize_fullContentWidth]: hasVariant(
            $state,
            "size",
            "fullContentWidth"
          ),
          [sty.rootsize_widthContent1140Px]: hasVariant(
            $state,
            "size",
            "widthContent1140Px"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxbackground_dark]: hasVariant(
            $state,
            "background",
            "dark"
          ),
          [sty.freeBoxsize_dashboardSection]: hasVariant(
            $state,
            "size",
            "dashboardSection"
          ),
          [sty.freeBoxsize_fullContentGallery]: hasVariant(
            $state,
            "size",
            "fullContentGallery"
          ),
          [sty.freeBoxsize_fullContentWidth]: hasVariant(
            $state,
            "size",
            "fullContentWidth"
          )
        })}
      >
        {(hasVariant($state, "background", "dark") ? true : true)
          ? p.renderPlasmicSlot({
              defaultContents: null,
              value: args.children
            })
          : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSection__VariantsArgs;
    args?: PlasmicSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSection__ArgsType,
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
          internalArgPropNames: PlasmicSection__ArgProps,
          internalVariantPropNames: PlasmicSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSection";
  } else {
    func.displayName = `PlasmicSection.${nodeName}`;
  }
  return func;
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps
  }
);

export default PlasmicSection;
/* prettier-ignore-end */
