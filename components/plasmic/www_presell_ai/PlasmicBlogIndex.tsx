// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: Ye27euD-H0
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
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import BlogNavbar from "../../BlogNavbar"; // plasmic-import: heif9h_Z_o/component
import FooterSection from "../../FooterSection"; // plasmic-import: RmQnVGl7OA9pJb/component

import { useScreenVariants as useScreenVariantscvQoPsTOivAmc4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CVQoPsTOivAmc4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_www_presell_ai.module.css"; // plasmic-import: hgYa2chxELsjCrsDiarb3T/projectcss
import sty from "./PlasmicBlogIndex.module.css"; // plasmic-import: Ye27euD-H0/css

export type PlasmicBlogIndex__VariantMembers = {};
export type PlasmicBlogIndex__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogIndex__VariantsArgs;
export const PlasmicBlogIndex__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogIndex__ArgsType = {};
type ArgPropType = keyof PlasmicBlogIndex__ArgsType;
export const PlasmicBlogIndex__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogIndex__OverridesType = {
  root?: p.Flex<"div">;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
  blogNavbar?: p.Flex<typeof BlogNavbar>;
  button?: p.Flex<"button">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultBlogIndexProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicBlogIndex__RenderFunc(props: {
  variants: PlasmicBlogIndex__VariantsArgs;
  args: PlasmicBlogIndex__ArgsType;
  overrides: PlasmicBlogIndex__OverridesType;

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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicBlogIndex.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicBlogIndex.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicBlogIndex.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicBlogIndex.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicBlogIndex.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicBlogIndex.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
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
              "https://api.airtable.com/v0/appmM1mMqcDvugXhY/wwwBlog" as const
            }
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__abTAm)}
                  >
                    <BlogNavbar
                      data-plasmic-name={"blogNavbar"}
                      data-plasmic-override={overrides.blogNavbar}
                      className={classNames("__wab_instance", sty.blogNavbar)}
                    />

                    {(
                      hasVariant(globalVariants, "screen", "mobile")
                        ? true
                        : true
                    ) ? (
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
                        {"Join Newsletter"}
                      </button>
                    ) : null}
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__ahXyg)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.columns__usu4V)}
                    >
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.column__jKfVq
                        )}
                        component={Link}
                        href={`/blog/${(() => {
                          try {
                            return $ctx.fetchedData.records[0].fields.slug;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "";
                            }
                            throw e;
                          }
                        })()}`}
                        platform={"nextjs"}
                      >
                        <p.PlasmicImg
                          alt={""}
                          className={classNames(sty.img__blnJ)}
                          displayHeight={
                            hasVariant(globalVariants, "screen", "mobile")
                              ? ("185.63px" as const)
                              : hasVariant(globalVariants, "screen", "footer")
                              ? ("250px" as const)
                              : ("475.28px" as const)
                          }
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"100%" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={
                            hasVariant(globalVariants, "screen", "mobile")
                              ? ("330px" as const)
                              : hasVariant(globalVariants, "screen", "footer")
                              ? ("550px" as const)
                              : ("830px" as const)
                          }
                          loading={"lazy" as const}
                          src={(() => {
                            try {
                              return $ctx.fetchedData.records[0].fields
                                .heroImage[0].url;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                        />
                      </p.PlasmicLink>

                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__xpani
                        )}
                      >
                        {(
                          hasVariant(globalVariants, "screen", "mobile")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__igvxr
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___1XqdD
                              )}
                            >
                              {"CATEGORY TITLE"}
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__d0MXe
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData.records[0].fields
                                    .heroHeadline;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "Blog Post Title: This Will Usually Take Up A Few Lines Of Text. ";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__fJkb1
                              )}
                            >
                              {(() => {
                                try {
                                  return $ctx.fetchedData.records[1].fields
                                    .heroSubHeadline;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return "A Short 1-2 Teaser Sentences. Must compel readers to click-through. ";
                                  }
                                  throw e;
                                }
                              })()}
                            </div>
                          </div>
                        ) : null}
                        {(
                          hasVariant(globalVariants, "screen", "mobile")
                            ? true
                            : hasVariant(globalVariants, "screen", "footer")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___4H3Ep
                            )}
                          >
                            {(() => {
                              try {
                                return $ctx.fetchedData.records[0].fields.Type;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Enter some text";
                                }
                                throw e;
                              }
                            })()}
                          </div>
                        ) : null}
                        {(
                          hasVariant(globalVariants, "screen", "mobile")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ufbNb
                            )}
                          >
                            {(() => {
                              try {
                                return $ctx.fetchedData.records[0].fields.Type;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Enter some text";
                                }
                                throw e;
                              }
                            })()}
                          </div>
                        ) : null}
                        {(
                          hasVariant(globalVariants, "screen", "mobile")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___5C9XJ
                            )}
                          >
                            {(() => {
                              try {
                                return $ctx.fetchedData.records[0].fields
                                  .heroHeadline;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Enter some text";
                                }
                                throw e;
                              }
                            })()}
                          </div>
                        ) : null}
                        {(
                          hasVariant(globalVariants, "screen", "mobile")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__crzb
                            )}
                          >
                            {(() => {
                              try {
                                return $ctx.fetchedData.records[0].fields
                                  .heroSubHeadline;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "Enter some text";
                                }
                                throw e;
                              }
                            })()}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.freeBox__h2Ka)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zk3QC
                        )}
                      >
                        {(
                          (() => {
                            try {
                              return $ctx.fetchedData.records;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return [];
                              }
                              throw e;
                            }
                          })() ?? []
                        ).map((currentItem, currentIndex) => (
                          <p.PlasmicLink
                            data-plasmic-name={"link"}
                            data-plasmic-override={overrides.link}
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              sty.link
                            )}
                            component={Link}
                            href={`/blog/${(() => {
                              try {
                                return currentItem.fields.slug;
                              } catch (e) {
                                if (e instanceof TypeError) {
                                  return "";
                                }
                                throw e;
                              }
                            })()}`}
                            key={currentIndex}
                            platform={"nextjs"}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.columns___0BVIk
                              )}
                            >
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.column___1JIqa
                                )}
                                component={Link}
                                platform={"nextjs"}
                              >
                                <p.PlasmicImg
                                  alt={""}
                                  className={classNames(sty.img___8YyoR)}
                                  displayHeight={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? ("185.39px" as const)
                                      : ("173.53px" as const)
                                  }
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"100%" as const}
                                  displayMinHeight={"0" as const}
                                  displayMinWidth={"0" as const}
                                  displayWidth={
                                    hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobile"
                                    )
                                      ? ("330px" as const)
                                      : ("308.5px" as const)
                                  }
                                  loading={"lazy" as const}
                                  src={(() => {
                                    try {
                                      return currentItem.fields.heroImage[0]
                                        .url;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                />

                                {(
                                  hasVariant(globalVariants, "screen", "mobile")
                                    ? true
                                    : true
                                ) ? (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__iEb4M
                                    )}
                                  >
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__utCdD
                                      )}
                                    >
                                      {(() => {
                                        try {
                                          return currentItem.fields
                                            .heroHeadline;
                                        } catch (e) {
                                          if (e instanceof TypeError) {
                                            return "Enter some text";
                                          }
                                          throw e;
                                        }
                                      })()}
                                    </div>

                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__ylWhw
                                      )}
                                    >
                                      {(() => {
                                        try {
                                          return currentItem.fields
                                            .heroSubHeadline;
                                        } catch (e) {
                                          if (e instanceof TypeError) {
                                            return "Enter some text";
                                          }
                                          throw e;
                                        }
                                      })()}
                                    </div>
                                  </div>
                                ) : null}
                                {(
                                  hasVariant(globalVariants, "screen", "mobile")
                                    ? true
                                    : true
                                ) ? (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text___8QR
                                    )}
                                  >
                                    {(() => {
                                      try {
                                        return currentItem.fields.heroHeadline;
                                      } catch (e) {
                                        if (e instanceof TypeError) {
                                          return "Enter some text";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </div>
                                ) : null}
                                {(
                                  hasVariant(globalVariants, "screen", "mobile")
                                    ? true
                                    : true
                                ) ? (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text___27Qi6
                                    )}
                                  >
                                    {(() => {
                                      try {
                                        return currentItem.fields
                                          .heroSubHeadline;
                                      } catch (e) {
                                        if (e instanceof TypeError) {
                                          return "Enter some text";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </div>
                                ) : null}
                              </p.PlasmicLink>
                            </div>
                          </p.PlasmicLink>
                        ))}

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___6Ymyn
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox___9KJu)}
                  >
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
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpApiFetcher",
    "blogNavbar",
    "button",
    "link",
    "footerSection"
  ],
  httpApiFetcher: [
    "httpApiFetcher",
    "blogNavbar",
    "button",
    "link",
    "footerSection"
  ],
  blogNavbar: ["blogNavbar"],
  button: ["button"],
  link: ["link"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpApiFetcher: typeof DataFetcher;
  blogNavbar: typeof BlogNavbar;
  button: "button";
  link: "a";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogIndex__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogIndex__VariantsArgs;
    args?: PlasmicBlogIndex__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogIndex__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogIndex__ArgsType,
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
          internalArgPropNames: PlasmicBlogIndex__ArgProps,
          internalVariantPropNames: PlasmicBlogIndex__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBlogIndex__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogIndex";
  } else {
    func.displayName = `PlasmicBlogIndex.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogIndex = Object.assign(
  // Top-level PlasmicBlogIndex renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    blogNavbar: makeNodeComponent("blogNavbar"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicBlogIndex
    internalVariantProps: PlasmicBlogIndex__VariantProps,
    internalArgProps: PlasmicBlogIndex__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "The Prompter - AI Marketing Blog by Presell.ai",
      description:
        "A futuristic marketing blog for programmatic growth hackers.  ",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlogIndex;
/* prettier-ignore-end */
