// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: fDgvfEDbw_
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
import TextInput from "../../TextInput"; // plasmic-import: whnP1U9nG_tYGg/component
import Button from "../../Button"; // plasmic-import: CnJoQKF1JUjMXv/component

import { useScreenVariants as useScreenVariantscvQoPsTOivAmc4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CVQoPsTOivAmc4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicForm2.module.css"; // plasmic-import: fDgvfEDbw_/css

import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: GqlQDoqakuGAAn/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1JO1GFRPkcbBU/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: Yq9TX85itfl8Tl/icon

export type PlasmicForm2__VariantMembers = {};
export type PlasmicForm2__VariantsArgs = {};
type VariantPropType = keyof PlasmicForm2__VariantsArgs;
export const PlasmicForm2__VariantProps = new Array<VariantPropType>();

export type PlasmicForm2__ArgsType = {};
type ArgPropType = keyof PlasmicForm2__ArgsType;
export const PlasmicForm2__ArgProps = new Array<ArgPropType>();

export type PlasmicForm2__OverridesType = {
  urlForm?: p.Flex<"form">;
  freeBox?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultForm2Props {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicForm2__RenderFunc(props: {
  variants: PlasmicForm2__VariantsArgs;
  args: PlasmicForm2__ArgsType;
  overrides: PlasmicForm2__OverridesType;

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

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscvQoPsTOivAmc4()
  });

  return (
    (hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
      <form
        data-plasmic-name={"urlForm"}
        data-plasmic-override={overrides.urlForm}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        action={
          "https://hook.us1.make.com/6qf8ii7ozfbui45pc1a0hp2ypwbret9o" as const
        }
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.urlForm
        )}
        method={"post" as const}
      >
        {(hasVariant(globalVariants, "screen", "footer") ? true : true) ? (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <TextInput
              aria-label={
                hasVariant(globalVariants, "screen", "footer")
                  ? ("life_insurance" as const)
                  : ("life_insurance" as const)
              }
              aria-labelledby={
                hasVariant(globalVariants, "screen", "footer")
                  ? ("" as const)
                  : undefined
              }
              className={classNames("__wab_instance", sty.textInput__ssr6)}
              defaultValue={undefined}
              name={
                hasVariant(globalVariants, "screen", "footer")
                  ? ("life_insurance" as const)
                  : ("life_insurance" as const)
              }
              placeholder={
                hasVariant(globalVariants, "screen", "footer")
                  ? ("Enter A Product or Service (Life Insurance)" as const)
                  : ("State Your Product (Life Insurance)" as const)
              }
              required={true}
            />

            {(hasVariant(globalVariants, "screen", "footer") ? true : true) ? (
              <TextInput
                aria-label={"email" as const}
                className={classNames("__wab_instance", sty.textInput__rp4T)}
                defaultValue={undefined}
                name={"email" as const}
                placeholder={"Enter Your Email Address" as const}
                required={true}
                showStartIcon={
                  hasVariant(globalVariants, "screen", "footer")
                    ? undefined
                    : undefined
                }
                startIcon={
                  (
                    hasVariant(globalVariants, "screen", "footer") ? true : true
                  ) ? (
                    <Searchsvg2Icon
                      className={classNames(projectcss.all, sty.svg__yO8Dw)}
                      role={"img"}
                    />
                  ) : null
                }
              />
            ) : null}

            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"blue" as const}
              endIcon={
                <ChevronRightIcon
                  className={classNames(projectcss.all, sty.svg___2Gif6)}
                  role={"img"}
                />
              }
              showEndIcon={
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              }
              showStartIcon={
                hasVariant(globalVariants, "screen", "mobile")
                  ? true
                  : undefined
              }
            >
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                platform={"nextjs"}
              >
                {hasVariant(globalVariants, "screen", "mobile")
                  ? "Generate"
                  : "Generate"}
              </p.PlasmicLink>
            </Button>
          </div>
        ) : null}
      </form>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  urlForm: ["urlForm", "freeBox", "button", "link"],
  freeBox: ["freeBox", "button", "link"],
  button: ["button", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  urlForm: "form";
  freeBox: "div";
  button: typeof Button;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForm2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForm2__VariantsArgs;
    args?: PlasmicForm2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForm2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForm2__ArgsType,
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
          internalArgPropNames: PlasmicForm2__ArgProps,
          internalVariantPropNames: PlasmicForm2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicForm2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "urlForm") {
    func.displayName = "PlasmicForm2";
  } else {
    func.displayName = `PlasmicForm2.${nodeName}`;
  }
  return func;
}

export const PlasmicForm2 = Object.assign(
  // Top-level PlasmicForm2 renders the root element
  makeNodeComponent("urlForm"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicForm2
    internalVariantProps: PlasmicForm2__VariantProps,
    internalArgProps: PlasmicForm2__ArgProps
  }
);

export default PlasmicForm2;
/* prettier-ignore-end */
