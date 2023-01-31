// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: QCEWr9pYu1
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
import Navbar from "../../Navbar"; // plasmic-import: 1Ua3Zd0YazUX91/component
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: whnP1U9nG_tYGg/component
import FooterSection from "../../FooterSection"; // plasmic-import: RmQnVGl7OA9pJb/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicSignUp.module.css"; // plasmic-import: QCEWr9pYu1/css

import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: GqlQDoqakuGAAn/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1JO1GFRPkcbBU/icon

export type PlasmicSignUp__VariantMembers = {};
export type PlasmicSignUp__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUp__VariantsArgs;
export const PlasmicSignUp__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUp__ArgsType = {};
type ArgPropType = keyof PlasmicSignUp__ArgsType;
export const PlasmicSignUp__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUp__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
  form?: p.Flex<"form">;
  button?: p.Flex<"button">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultSignUpProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicSignUp__RenderFunc(props: {
  variants: PlasmicSignUp__VariantsArgs;
  args: PlasmicSignUp__ArgsType;
  overrides: PlasmicSignUp__OverridesType;

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

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />

        <meta
          key="description"
          name="description"
          content={PlasmicSignUp.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicSignUp.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicSignUp.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div className={classNames(projectcss.all, sty.freeBox__o7DYt)}>
            <Navbar
              data-plasmic-name={"navbar"}
              data-plasmic-override={overrides.navbar}
              className={classNames("__wab_instance", sty.navbar)}
            />

            <DataFetcher
              data-plasmic-name={"httpApiFetcher"}
              data-plasmic-override={overrides.httpApiFetcher}
              className={classNames("__wab_instance", sty.httpApiFetcher)}
              dataName={"fetchedData" as const}
              errorDisplay={
                <ph.DataCtxReader>
                  {$ctx => "Error fetching data"}
                </ph.DataCtxReader>
              }
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer keyVDvhyVSx5Ntbl3"
              }}
              loadingDisplay={
                <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
              }
              method={"GET" as const}
              noLayout={false}
              url={
                "https://api.airtable.com/v0/appmM1mMqcDvugXhY/Requests" as const
              }
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___0BmFq)}
                  >
                    <form
                      data-plasmic-name={"form"}
                      data-plasmic-override={overrides.form}
                      action={
                        "https://hook.us1.make.com/ew5qeooxawx6nmu4619qxk1lg7b3xvq7" as const
                      }
                      className={classNames(projectcss.all, sty.form)}
                      method={"post" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__x8Bi9
                        )}
                      >
                        {"Instantly Generate Assets 🪄"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hpMju
                        )}
                      >
                        {"Multi-Step Funnel & Ads"}
                      </div>

                      <input
                        className={classNames(
                          projectcss.all,
                          projectcss.input,
                          sty.textInput__shVgl
                        )}
                        placeholder={"Your Product Page URL" as const}
                        size={1 as const}
                        type={"text" as const}
                        value={undefined}
                      />

                      <TextInput
                        className={classNames(
                          "__wab_instance",
                          sty.textInput__otR9H
                        )}
                      />

                      <button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames(
                          projectcss.all,
                          projectcss.button,
                          projectcss.__wab_text,
                          sty.button
                        )}
                      >
                        {"GENERATE"}
                      </button>
                    </form>
                  </div>
                )}
              </ph.DataCtxReader>
            </DataFetcher>

            <FooterSection
              data-plasmic-name={"footerSection"}
              data-plasmic-override={overrides.footerSection}
              className={classNames("__wab_instance", sty.footerSection)}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "httpApiFetcher", "form", "button", "footerSection"],
  navbar: ["navbar"],
  httpApiFetcher: ["httpApiFetcher", "form", "button"],
  form: ["form", "button"],
  button: ["button"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  httpApiFetcher: typeof DataFetcher;
  form: "form";
  button: "button";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUp__VariantsArgs;
    args?: PlasmicSignUp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignUp__ArgsType,
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
          internalArgPropNames: PlasmicSignUp__ArgProps,
          internalVariantPropNames: PlasmicSignUp__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignUp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUp";
  } else {
    func.displayName = `PlasmicSignUp.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUp = Object.assign(
  // Top-level PlasmicSignUp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicSignUp
    internalVariantProps: PlasmicSignUp__VariantProps,
    internalArgProps: PlasmicSignUp__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description:
        "Skip the guesswork. Generate proven to convert marketing campaigns.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignUp;
/* prettier-ignore-end */
