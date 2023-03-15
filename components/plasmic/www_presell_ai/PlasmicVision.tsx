// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: ln45Q3LMau
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import Button2 from "../../Button2"; // plasmic-import: eMJ9owakU9i/component

import { useScreenVariants as useScreenVariantscvQoPsTOivAmc4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CVQoPsTOivAmc4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicVision.module.css"; // plasmic-import: ln45Q3LMau/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1JO1GFRPkcbBU/icon

export type PlasmicVision__VariantMembers = {};
export type PlasmicVision__VariantsArgs = {};
type VariantPropType = keyof PlasmicVision__VariantsArgs;
export const PlasmicVision__VariantProps = new Array<VariantPropType>();

export type PlasmicVision__ArgsType = {};
type ArgPropType = keyof PlasmicVision__ArgsType;
export const PlasmicVision__ArgProps = new Array<ArgPropType>();

export type PlasmicVision__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  _1529?: p.Flex<"div">;
  div?: p.Flex<"div">;
  div2?: p.Flex<"div">;
  header?: p.Flex<"div">;
  div3?: p.Flex<"div">;
  div4?: p.Flex<"div">;
  div5?: p.Flex<"div">;
  div6?: p.Flex<"div">;
  div7?: p.Flex<"div">;
  workingstudioByHtmltodesignFreeVersion16022023204558Gmt5?: p.Flex<"div">;
  div8?: p.Flex<"div">;
  div9?: p.Flex<"div">;
  header2?: p.Flex<"div">;
  div10?: p.Flex<"div">;
  div11?: p.Flex<"div">;
  div12?: p.Flex<"div">;
  div13?: p.Flex<"div">;
  div14?: p.Flex<"div">;
};

export interface DefaultVisionProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicVision__RenderFunc(props: {
  variants: PlasmicVision__VariantsArgs;
  args: PlasmicVision__ArgsType;
  overrides: PlasmicVision__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicVision.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicVision.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicVision.pageMetadata.title}
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
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <div
              data-plasmic-name={"_1529"}
              data-plasmic-override={overrides._1529}
              className={classNames(projectcss.all, sty._1529)}
            >
              <div
                data-plasmic-name={"div"}
                data-plasmic-override={overrides.div}
                className={classNames(projectcss.all, sty.div)}
              >
                <div
                  data-plasmic-name={"div2"}
                  data-plasmic-override={overrides.div2}
                  className={classNames(projectcss.all, sty.div2)}
                >
                  <div
                    data-plasmic-name={"header"}
                    data-plasmic-override={overrides.header}
                    className={classNames(projectcss.all, sty.header)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ok2Hg
                      )}
                    >
                      {"Programmatic AI Marketing."}
                    </div>

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"div3"}
                      data-plasmic-override={overrides.div3}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.div3)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__nFS
                        )}
                      >
                        <React.Fragment>
                          <span
                            className={
                              "plasmic_default__all plasmic_default__span"
                            }
                            style={{ fontStyle: "italic" }}
                          >
                            {"Generative AI x Prompt Engineering "}
                          </span>
                        </React.Fragment>
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zBs3W
                        )}
                      >
                        {
                          "Equipping growth marketers of all shapes and sizes with an environment to produce repeatable results at scale. "
                        }
                      </div>
                    </p.Stack>
                  </div>

                  <div
                    data-plasmic-name={"div4"}
                    data-plasmic-override={overrides.div4}
                    className={classNames(projectcss.all, sty.div4)}
                  >
                    <div
                      data-plasmic-name={"div5"}
                      data-plasmic-override={overrides.div5}
                      className={classNames(projectcss.all, sty.div5)}
                    >
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"div6"}
                        data-plasmic-override={overrides.div6}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.div6)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__nNSkd
                          )}
                        >
                          {"Reinventing Programmatic"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__nkBF
                          )}
                        >
                          {
                            "Orchestrate a symphony of brands, funnels, and ad accounts from a single self-serve growth platform.\n\nGenerate marketing assets and media buys programmatically without ever leaving Presell.AI."
                          }
                        </div>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"div7"}
                        data-plasmic-override={overrides.div7}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.div7)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mkEg
                          )}
                        >
                          {"Fine-tuned Models"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__hFf0A
                          )}
                        >
                          {
                            "Brunson. Ogilvy. Sugerman. Timeless marketing frameworks morphed into dynamic prompts. \n\nReiterative machine learning autonomously drives conversion optimization across every aspect of the customer journey."
                          }
                        </div>
                      </p.Stack>

                      <Button2
                        className={classNames(
                          "__wab_instance",
                          sty.button2__cU176
                        )}
                        link={`/signup`}
                      >
                        {"Get Started"}
                      </Button2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {(hasVariant(globalVariants, "screen", "mobile") ? true : false) ? (
            <div
              data-plasmic-name={
                "workingstudioByHtmltodesignFreeVersion16022023204558Gmt5"
              }
              data-plasmic-override={
                overrides.workingstudioByHtmltodesignFreeVersion16022023204558Gmt5
              }
              className={classNames(
                projectcss.all,
                sty.workingstudioByHtmltodesignFreeVersion16022023204558Gmt5
              )}
            >
              <div
                data-plasmic-name={"div8"}
                data-plasmic-override={overrides.div8}
                className={classNames(projectcss.all, sty.div8)}
              >
                <div
                  data-plasmic-name={"div9"}
                  data-plasmic-override={overrides.div9}
                  className={classNames(projectcss.all, sty.div9)}
                >
                  <div
                    data-plasmic-name={"header2"}
                    data-plasmic-override={overrides.header2}
                    className={classNames(projectcss.all, sty.header2)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qXb5L
                      )}
                    >
                      {"Instant. Structured. Growth."}
                    </div>

                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"div10"}
                      data-plasmic-override={overrides.div10}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.div10)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__r0Qf
                        )}
                      >
                        {"A new category of Conversion-Technology."}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6ZTfy
                        )}
                      >
                        {
                          "We specialize in the World Wide Web + Brand Strategy. Our clients tell us we’re easy to work with and funny."
                        }
                      </div>
                    </p.Stack>
                  </div>

                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"div11"}
                    data-plasmic-override={overrides.div11}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.div11)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"div12"}
                      data-plasmic-override={overrides.div12}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.div12)}
                    >
                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"div13"}
                        data-plasmic-override={overrides.div13}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.div13)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___4F9Be
                          )}
                        >
                          {"Reinventing Programmatic"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ouaXj
                          )}
                        >
                          {
                            "Orchestrate a symphony of brands, funnels, and ad accounts from a single self-serve growth platform.\n\nGenerate marketing assets and media buys programmatically without ever leaving Presell AI."
                          }
                        </div>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        data-plasmic-name={"div14"}
                        data-plasmic-override={overrides.div14}
                        hasGap={true}
                        className={classNames(projectcss.all, sty.div14)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__aL9U9
                          )}
                        >
                          {"Brand"}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ugbsR
                          )}
                        >
                          {
                            "Brunson. Ogilvy. Sugerman. Timeless marketing frameworks morphed into dynamic prompts. \n\nReiterative machine learning autonomously drives conversion optimization across every aspect of the customer journey"
                          }
                        </div>
                      </p.Stack>
                    </p.Stack>

                    {(
                      hasVariant(globalVariants, "screen", "mobile")
                        ? true
                        : true
                    ) ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___89DyK
                        )}
                      >
                        {"Get Started"}
                      </div>
                    ) : null}
                  </p.Stack>
                </div>

                <Button2
                  className={classNames("__wab_instance", sty.button2__ld62D)}
                  link={`/signup`}
                >
                  {"Get Started"}
                </Button2>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "_1529",
    "div",
    "div2",
    "header",
    "div3",
    "div4",
    "div5",
    "div6",
    "div7",
    "workingstudioByHtmltodesignFreeVersion16022023204558Gmt5",
    "div8",
    "div9",
    "header2",
    "div10",
    "div11",
    "div12",
    "div13",
    "div14"
  ],
  navbar: ["navbar"],
  _1529: [
    "_1529",
    "div",
    "div2",
    "header",
    "div3",
    "div4",
    "div5",
    "div6",
    "div7"
  ],
  div: ["div", "div2", "header", "div3", "div4", "div5", "div6", "div7"],
  div2: ["div2", "header", "div3", "div4", "div5", "div6", "div7"],
  header: ["header", "div3"],
  div3: ["div3"],
  div4: ["div4", "div5", "div6", "div7"],
  div5: ["div5", "div6", "div7"],
  div6: ["div6"],
  div7: ["div7"],
  workingstudioByHtmltodesignFreeVersion16022023204558Gmt5: [
    "workingstudioByHtmltodesignFreeVersion16022023204558Gmt5",
    "div8",
    "div9",
    "header2",
    "div10",
    "div11",
    "div12",
    "div13",
    "div14"
  ],
  div8: [
    "div8",
    "div9",
    "header2",
    "div10",
    "div11",
    "div12",
    "div13",
    "div14"
  ],
  div9: ["div9", "header2", "div10", "div11", "div12", "div13", "div14"],
  header2: ["header2", "div10"],
  div10: ["div10"],
  div11: ["div11", "div12", "div13", "div14"],
  div12: ["div12", "div13", "div14"],
  div13: ["div13"],
  div14: ["div14"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  _1529: "div";
  div: "div";
  div2: "div";
  header: "div";
  div3: "div";
  div4: "div";
  div5: "div";
  div6: "div";
  div7: "div";
  workingstudioByHtmltodesignFreeVersion16022023204558Gmt5: "div";
  div8: "div";
  div9: "div";
  header2: "div";
  div10: "div";
  div11: "div";
  div12: "div";
  div13: "div";
  div14: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVision__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVision__VariantsArgs;
    args?: PlasmicVision__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVision__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicVision__ArgsType,
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
          internalArgPropNames: PlasmicVision__ArgProps,
          internalVariantPropNames: PlasmicVision__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicVision__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVision";
  } else {
    func.displayName = `PlasmicVision.${nodeName}`;
  }
  return func;
}

export const PlasmicVision = Object.assign(
  // Top-level PlasmicVision renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    _1529: makeNodeComponent("_1529"),
    div: makeNodeComponent("div"),
    div2: makeNodeComponent("div2"),
    header: makeNodeComponent("header"),
    div3: makeNodeComponent("div3"),
    div4: makeNodeComponent("div4"),
    div5: makeNodeComponent("div5"),
    div6: makeNodeComponent("div6"),
    div7: makeNodeComponent("div7"),
    workingstudioByHtmltodesignFreeVersion16022023204558Gmt5: makeNodeComponent(
      "workingstudioByHtmltodesignFreeVersion16022023204558Gmt5"
    ),
    div8: makeNodeComponent("div8"),
    div9: makeNodeComponent("div9"),
    header2: makeNodeComponent("header2"),
    div10: makeNodeComponent("div10"),
    div11: makeNodeComponent("div11"),
    div12: makeNodeComponent("div12"),
    div13: makeNodeComponent("div13"),
    div14: makeNodeComponent("div14"),

    // Metadata about props expected for PlasmicVision
    internalVariantProps: PlasmicVision__VariantProps,
    internalArgProps: PlasmicVision__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Presell Vision",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicVision;
/* prettier-ignore-end */
