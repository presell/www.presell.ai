// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: P3Vxk3Pxyz
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
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import BlogNavbar from "../../BlogNavbar"; // plasmic-import: heif9h_Z_o/component
import FooterSection from "../../FooterSection"; // plasmic-import: RmQnVGl7OA9pJb/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicBlogDynamic.module.css"; // plasmic-import: P3Vxk3Pxyz/css

export type PlasmicBlogDynamic__VariantMembers = {};
export type PlasmicBlogDynamic__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogDynamic__VariantsArgs;
export const PlasmicBlogDynamic__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogDynamic__ArgsType = {};
type ArgPropType = keyof PlasmicBlogDynamic__ArgsType;
export const PlasmicBlogDynamic__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogDynamic__OverridesType = {
  root?: p.Flex<"div">;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
  blogNavbar?: p.Flex<typeof BlogNavbar>;
  heroImage?: p.Flex<typeof p.PlasmicImg>;
  paragraph1?: p.Flex<"div">;
  image1?: p.Flex<typeof p.PlasmicImg>;
  paragraph2?: p.Flex<"div">;
  image2?: p.Flex<typeof p.PlasmicImg>;
  paragraph3?: p.Flex<"div">;
  image3?: p.Flex<typeof p.PlasmicImg>;
  paragraph4?: p.Flex<"div">;
  image4?: p.Flex<typeof p.PlasmicImg>;
  paragraph5?: p.Flex<"div">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultBlogDynamicProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicBlogDynamic__RenderFunc(props: {
  variants: PlasmicBlogDynamic__VariantsArgs;
  args: PlasmicBlogDynamic__ArgsType;
  overrides: PlasmicBlogDynamic__OverridesType;

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
      <Head></Head>

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
          <div className={classNames(projectcss.all, sty.freeBox__m6As)}>
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
              url={(() => {
                try {
                  return (
                    "https://api.airtable.com/v0/appmM1mMqcDvugXhY/wwwBlog/" +
                    $ctx.params.slug
                  );
                } catch (e) {
                  if (e instanceof TypeError) {
                    return "https://api.airtable.com/v0/appmM1mMqcDvugXhY/wwwBlog?slug";
                  }
                  throw e;
                }
              })()}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <React.Fragment>
                    <BlogNavbar
                      data-plasmic-name={"blogNavbar"}
                      data-plasmic-override={overrides.blogNavbar}
                      className={classNames("__wab_instance", sty.blogNavbar)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8Cc5A
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__e2Hh
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tfiyH
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.heroHeadline;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "heroHeadline";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___74Vvq
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.heroSubHeadline;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "heroSubHeadline";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <p.PlasmicImg
                          data-plasmic-name={"heroImage"}
                          data-plasmic-override={overrides.heroImage}
                          alt={""}
                          className={classNames(sty.heroImage)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"400px" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.fields.image1[0].url;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          data-plasmic-name={"paragraph1"}
                          data-plasmic-override={overrides.paragraph1}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.paragraph1
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.paragraph1;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <p.PlasmicImg
                          data-plasmic-name={"image1"}
                          data-plasmic-override={overrides.image1}
                          alt={""}
                          className={classNames(sty.image1)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"400px" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.fields.image2[0].url;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          data-plasmic-name={"paragraph2"}
                          data-plasmic-override={overrides.paragraph2}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.paragraph2
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.paragraph2;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <p.PlasmicImg
                          data-plasmic-name={"image2"}
                          data-plasmic-override={overrides.image2}
                          alt={""}
                          className={classNames(sty.image2)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"400px" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.fields.image3[0].url;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          data-plasmic-name={"paragraph3"}
                          data-plasmic-override={overrides.paragraph3}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.paragraph3
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.paragraph3;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <p.PlasmicImg
                          data-plasmic-name={"image3"}
                          data-plasmic-override={overrides.image3}
                          alt={""}
                          className={classNames(sty.image3)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"400px" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.fields.image4[0].url;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          data-plasmic-name={"paragraph4"}
                          data-plasmic-override={overrides.paragraph4}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.paragraph4
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.paragraph4;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                              }
                              throw e;
                            }
                          })()}
                        </div>

                        <p.PlasmicImg
                          data-plasmic-name={"image4"}
                          data-plasmic-override={overrides.image4}
                          alt={""}
                          className={classNames(sty.image4)}
                          displayHeight={"auto" as const}
                          displayMaxHeight={"400px" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"100%" as const}
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.fields.image5[0].url;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />

                        <div
                          data-plasmic-name={"paragraph5"}
                          data-plasmic-override={overrides.paragraph5}
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.paragraph5
                          )}
                        >
                          {(() => {
                            try {
                              return $ctx.fetchedData.fields.paragraph5;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                              }
                              throw e;
                            }
                          })()}
                        </div>
                      </div>

                      <FooterSection
                        data-plasmic-name={"footerSection"}
                        data-plasmic-override={overrides.footerSection}
                        className={classNames(
                          "__wab_instance",
                          sty.footerSection
                        )}
                      />
                    </div>
                  </React.Fragment>
                )}
              </ph.DataCtxReader>
            </DataFetcher>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpApiFetcher",
    "blogNavbar",
    "heroImage",
    "paragraph1",
    "image1",
    "paragraph2",
    "image2",
    "paragraph3",
    "image3",
    "paragraph4",
    "image4",
    "paragraph5",
    "footerSection"
  ],
  httpApiFetcher: [
    "httpApiFetcher",
    "blogNavbar",
    "heroImage",
    "paragraph1",
    "image1",
    "paragraph2",
    "image2",
    "paragraph3",
    "image3",
    "paragraph4",
    "image4",
    "paragraph5",
    "footerSection"
  ],
  blogNavbar: ["blogNavbar"],
  heroImage: ["heroImage"],
  paragraph1: ["paragraph1"],
  image1: ["image1"],
  paragraph2: ["paragraph2"],
  image2: ["image2"],
  paragraph3: ["paragraph3"],
  image3: ["image3"],
  paragraph4: ["paragraph4"],
  image4: ["image4"],
  paragraph5: ["paragraph5"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpApiFetcher: typeof DataFetcher;
  blogNavbar: typeof BlogNavbar;
  heroImage: typeof p.PlasmicImg;
  paragraph1: "div";
  image1: typeof p.PlasmicImg;
  paragraph2: "div";
  image2: typeof p.PlasmicImg;
  paragraph3: "div";
  image3: typeof p.PlasmicImg;
  paragraph4: "div";
  image4: typeof p.PlasmicImg;
  paragraph5: "div";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogDynamic__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogDynamic__VariantsArgs;
    args?: PlasmicBlogDynamic__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogDynamic__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogDynamic__ArgsType,
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
          internalArgPropNames: PlasmicBlogDynamic__ArgProps,
          internalVariantPropNames: PlasmicBlogDynamic__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBlogDynamic__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogDynamic";
  } else {
    func.displayName = `PlasmicBlogDynamic.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogDynamic = Object.assign(
  // Top-level PlasmicBlogDynamic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    blogNavbar: makeNodeComponent("blogNavbar"),
    heroImage: makeNodeComponent("heroImage"),
    paragraph1: makeNodeComponent("paragraph1"),
    image1: makeNodeComponent("image1"),
    paragraph2: makeNodeComponent("paragraph2"),
    image2: makeNodeComponent("image2"),
    paragraph3: makeNodeComponent("paragraph3"),
    image3: makeNodeComponent("image3"),
    paragraph4: makeNodeComponent("paragraph4"),
    image4: makeNodeComponent("image4"),
    paragraph5: makeNodeComponent("paragraph5"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicBlogDynamic
    internalVariantProps: PlasmicBlogDynamic__VariantProps,
    internalArgProps: PlasmicBlogDynamic__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlogDynamic;
/* prettier-ignore-end */