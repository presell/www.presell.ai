// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: heif9h_Z_o
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
import BlogLogo from "../../BlogLogo"; // plasmic-import: IYhoFvuKHi/component
import Button from "../../Button"; // plasmic-import: CnJoQKF1JUjMXv/component
import TextInput from "../../TextInput"; // plasmic-import: whnP1U9nG_tYGg/component

import { useScreenVariants as useScreenVariantscvQoPsTOivAmc4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CVQoPsTOivAmc4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicBlogNavbar.module.css"; // plasmic-import: heif9h_Z_o/css

import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: GqlQDoqakuGAAn/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1JO1GFRPkcbBU/icon

export type PlasmicBlogNavbar__VariantMembers = {};
export type PlasmicBlogNavbar__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogNavbar__VariantsArgs;
export const PlasmicBlogNavbar__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogNavbar__ArgsType = {};
type ArgPropType = keyof PlasmicBlogNavbar__ArgsType;
export const PlasmicBlogNavbar__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogNavbar__OverridesType = {
  root?: p.Flex<"div">;
  blogLogo?: p.Flex<typeof BlogLogo>;
  form?: p.Flex<"form">;
  emailInput?: p.Flex<"input">;
  textInput?: p.Flex<typeof TextInput>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultBlogNavbarProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicBlogNavbar__RenderFunc(props: {
  variants: PlasmicBlogNavbar__VariantsArgs;
  args: PlasmicBlogNavbar__ArgsType;
  overrides: PlasmicBlogNavbar__OverridesType;

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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__tAxQg)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lKuz5)}
        >
          <BlogLogo
            data-plasmic-name={"blogLogo"}
            data-plasmic-override={overrides.blogLogo}
            className={classNames("__wab_instance", sty.blogLogo)}
          />

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___4Q05U)}
            >
              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__urkEr)}
                  color={"navLink" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__pKh5R)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__x031H)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qgKrQ
                    )}
                  >
                    {"How it Work"}
                  </div>
                </Button>
              ) : null}
              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__eqLfb)}
                  color={"navLink" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__juC7G)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__jhdqb)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tb8Ot
                    )}
                  >
                    {"Pricing"}
                  </div>
                </Button>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <Button
                  className={classNames("__wab_instance", sty.button__bjBaF)}
                  color={"navLink" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__c7Hi4)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__vnFuv)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3LAw2
                    )}
                  >
                    {"FAQs"}
                  </div>
                </Button>
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={"form"}
              data-plasmic-name={"form"}
              data-plasmic-override={overrides.form}
              hasGap={true}
              action={
                "https://hook.us1.make.com/7rngccg63x48p7pfdbvoub43nkrpfvdt" as const
              }
              className={classNames(projectcss.all, sty.form)}
              method={"post" as const}
            >
              <input
                data-plasmic-name={"emailInput"}
                data-plasmic-override={overrides.emailInput}
                className={classNames(
                  projectcss.all,
                  projectcss.input,
                  sty.emailInput
                )}
                placeholder={"📧 Enter Email Address Here" as const}
                size={undefined}
                type={"email" as const}
                value={"" as const}
              />

              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
                name={"Email" as const}
                placeholder={"📧 Enter Email Address Here" as const}
              />

              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <Button
                  className={classNames("__wab_instance", sty.button__h9Qvo)}
                  color={"navLink" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__g2Oqo)}
                      role={"img"}
                    />
                  }
                  link={"#" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__cdFjL)}
                      role={"img"}
                    />
                  }
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tAtVv
                    )}
                    link={"https://app.presell.ai/" as const}
                  >
                    {"Log in"}
                  </div>
                </Button>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobile") ? true : true
              ) ? (
                <Button
                  className={classNames("__wab_instance", sty.button__rEaM)}
                  color={"navLinkBlue" as const}
                  endIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__fStLn)}
                      role={"img"}
                    />
                  }
                  link={"https://app.presell.ai/" as const}
                  startIcon={
                    <svg
                      className={classNames(projectcss.all, sty.svg__q7IUm)}
                      role={"img"}
                    />
                  }
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Watch Demo"
                    : "Join Newsletter"}
                </Button>
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "blogLogo", "form", "emailInput", "textInput", "textbox"],
  blogLogo: ["blogLogo"],
  form: ["form", "emailInput", "textInput", "textbox"],
  emailInput: ["emailInput"],
  textInput: ["textInput", "textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  blogLogo: typeof BlogLogo;
  form: "form";
  emailInput: "input";
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogNavbar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogNavbar__VariantsArgs;
    args?: PlasmicBlogNavbar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogNavbar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogNavbar__ArgsType,
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
          internalArgPropNames: PlasmicBlogNavbar__ArgProps,
          internalVariantPropNames: PlasmicBlogNavbar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBlogNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogNavbar";
  } else {
    func.displayName = `PlasmicBlogNavbar.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogNavbar = Object.assign(
  // Top-level PlasmicBlogNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    blogLogo: makeNodeComponent("blogLogo"),
    form: makeNodeComponent("form"),
    emailInput: makeNodeComponent("emailInput"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicBlogNavbar
    internalVariantProps: PlasmicBlogNavbar__VariantProps,
    internalArgProps: PlasmicBlogNavbar__ArgProps
  }
);

export default PlasmicBlogNavbar;
/* prettier-ignore-end */
