// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: T6V8rQtdf7
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

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
import sty from "./PlasmicForm.module.css"; // plasmic-import: T6V8rQtdf7/css

import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: GqlQDoqakuGAAn/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1JO1GFRPkcbBU/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: Yq9TX85itfl8Tl/icon

export type PlasmicForm__VariantMembers = {};
export type PlasmicForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicForm__VariantsArgs;
export const PlasmicForm__VariantProps = new Array<VariantPropType>();

export type PlasmicForm__ArgsType = {};
type ArgPropType = keyof PlasmicForm__ArgsType;
export const PlasmicForm__ArgProps = new Array<ArgPropType>();

export type PlasmicForm__OverridesType = {
  urlForm?: p.Flex<"form">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFormProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicForm__RenderFunc(props: {
  variants: PlasmicForm__VariantsArgs;
  args: PlasmicForm__ArgsType;
  overrides: PlasmicForm__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

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
        <TextInput
          data-plasmic-name={"textInput"}
          data-plasmic-override={overrides.textInput}
          aria-label={"url" as const}
          className={classNames("__wab_instance", sty.textInput)}
          defaultValue={undefined}
          name={"url" as const}
          required={true}
        />

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          color={"blue" as const}
          endIcon={
            <ChevronRightIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
          showEndIcon={
            hasVariant(globalVariants, "screen", "mobile") ? true : true
          }
          showStartIcon={
            hasVariant(globalVariants, "screen", "mobile") ? true : undefined
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
      </form>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  urlForm: ["urlForm", "textInput", "textbox", "button", "link", "svg"],
  textInput: ["textInput", "textbox"],
  button: ["button", "link", "svg"],
  link: ["link"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  urlForm: "form";
  textInput: typeof TextInput;
  button: typeof Button;
  link: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForm__VariantsArgs;
    args?: PlasmicForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForm__ArgsType,
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
          internalArgPropNames: PlasmicForm__ArgProps,
          internalVariantPropNames: PlasmicForm__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "urlForm") {
    func.displayName = "PlasmicForm";
  } else {
    func.displayName = `PlasmicForm.${nodeName}`;
  }
  return func;
}

export const PlasmicForm = Object.assign(
  // Top-level PlasmicForm renders the root element
  makeNodeComponent("urlForm"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicForm
    internalVariantProps: PlasmicForm__VariantProps,
    internalArgProps: PlasmicForm__ArgProps
  }
);

export default PlasmicForm;
/* prettier-ignore-end */
