// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hgYa2chxELsjCrsDiarb3T
// Component: RmQnVGl7OA9pJb
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
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: RmQnVGl7OA9pJb/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: W8L233iGtyT_1l/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: brAbYez_ESnLEu/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: HVWoQp7yRZCLIE/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: gXUyymd27stui8/icon
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: GqlQDoqakuGAAn/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: q1JO1GFRPkcbBU/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: Yq9TX85itfl8Tl/icon

export type PlasmicFooterSection__VariantMembers = {
  unnamedVariant: "unnamedVariant";
};
export type PlasmicFooterSection__VariantsArgs = {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>(
  "unnamedVariant"
);

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h5?: p.Flex<"h5">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  textInput?: p.Flex<typeof TextInput>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterSectionProps {
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "unnamedVariant",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.unnamedVariant
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

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
        sty.root,
        {
          [sty.rootunnamedVariant]: hasVariant(
            $state,
            "unnamedVariant",
            "unnamedVariant"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__oo29Y, {
          [sty.freeBoxunnamedVariant__oo29YoxEvg]: hasVariant(
            $state,
            "unnamedVariant",
            "unnamedVariant"
          )
        })}
      >
        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__xoWvX, {
              [sty.freeBoxunnamedVariant__xoWvXoxEvg]: hasVariant(
                $state,
                "unnamedVariant",
                "unnamedVariant"
              )
            })}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"35px" as const}
              displayMaxWidth={"229px" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/www_presell_ai/images/presellFooterLogosvg.svg",
                fullWidth: 300,
                fullHeight: 54,
                aspectRatio: 5.518072
              }}
            />

            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {"Programmatic AI Marketing"}
            </h5>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__deJbg
              )}
            >
              {
                "Skip the guesswork. Instantly generate and deploy structured campaigns."
              }
            </div>

            <div
              className={classNames(projectcss.all, sty.freeBox__hZnSg, {
                [sty.freeBoxunnamedVariant__hZnSgoxEvg]: hasVariant(
                  $state,
                  "unnamedVariant",
                  "unnamedVariant"
                )
              })}
            >
              <FacebooksvgIcon
                className={classNames(projectcss.all, sty.svg__slVsB, {
                  [sty.svgunnamedVariant__slVsBoxEvg]: hasVariant(
                    $state,
                    "unnamedVariant",
                    "unnamedVariant"
                  )
                })}
                link={"https://www.facebook.com/PresellAI" as const}
                role={"img"}
              />

              {true ? (
                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg__z9SY)}
                  role={"img"}
                />
              ) : null}

              <InstagramsvgIcon
                className={classNames(projectcss.all, sty.svg__uj6UR, {
                  [sty.svgunnamedVariant__uj6URoxEvg]: hasVariant(
                    $state,
                    "unnamedVariant",
                    "unnamedVariant"
                  )
                })}
                link={"https://www.instagram.com/presellai/?hl=en" as const}
                role={"img"}
              />

              {true ? (
                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg__dIcrg)}
                  role={"img"}
                />
              ) : null}
            </div>
          </div>
        ) : null}
        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__pDQI, {
              [sty.freeBoxunnamedVariant__pDQIoxEvg]: hasVariant(
                $state,
                "unnamedVariant",
                "unnamedVariant"
              )
            })}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__jZui
              )}
            >
              {"Company"}
            </h4>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__heFnr,
                {
                  [sty.textunnamedVariant__heFnroxEvg]: hasVariant(
                    $state,
                    "unnamedVariant",
                    "unnamedVariant"
                  )
                }
              )}
            >
              {"Presell Vision"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8HfjG
              )}
            >
              {"Documentation"}
            </div>

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
              href={"http://www.presell.ai/pricing" as const}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kW5Yf,
                {
                  [sty.textunnamedVariant__kW5YFoxEvg]: hasVariant(
                    $state,
                    "unnamedVariant",
                    "unnamedVariant"
                  )
                }
              )}
            >
              {"Support"}
            </div>

            {true ? (
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
              />
            ) : null}
            {true ? (
              <Button
                className={classNames("__wab_instance", sty.button__xxL7)}
                color={"white" as const}
                small={
                  hasVariant(globalVariants, "screen", "mobile")
                    ? true
                    : undefined
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vaxiz
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Subscribe"
                    : "Subscribe"}
                </div>
              </Button>
            ) : null}
          </div>
        ) : null}
        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__e4Sk, {
              [sty.freeBoxunnamedVariant__e4SkoxEvg]: hasVariant(
                $state,
                "unnamedVariant",
                "unnamedVariant"
              )
            })}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__q6GYm
              )}
            >
              {"Product"}
            </h4>

            {true ? (
              <Button
                className={classNames("__wab_instance", sty.button__qocX, {
                  [sty.buttonunnamedVariant__qocXoxEvg]: hasVariant(
                    $state,
                    "unnamedVariant",
                    "unnamedVariant"
                  )
                })}
                color={"footerButton" as const}
                endIcon={
                  <svg
                    className={classNames(projectcss.all, sty.svg__kr8Y)}
                    role={"img"}
                  />
                }
                link={"#" as const}
                startIcon={
                  <svg
                    className={classNames(projectcss.all, sty.svg___4DkzC)}
                    role={"img"}
                  />
                }
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aRIx,
                    {
                      [sty.textunnamedVariant__aRIxoxEvg]: hasVariant(
                        $state,
                        "unnamedVariant",
                        "unnamedVariant"
                      )
                    }
                  )}
                >
                  {"Advertorials"}
                </div>
              </Button>
            ) : null}

            <Button
              className={classNames("__wab_instance", sty.button__rCy26)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__dW9Hb)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__znGOu)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9FF1K
                )}
              >
                {"Quizzes"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__tCvS1)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__dQmP)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__kYow4)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dBiSz
                )}
              >
                {"Lead Pages"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__fwOnx)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__moqj7)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__j0Lna)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__n9IHi
                )}
              >
                {"Offer Pages"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__k5Oxv)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__krZ3)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___5WhDl)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iaPAm
                )}
              >
                {"Ad Creation"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__r9A3N)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__lsfc9)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__nXsC4)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__v8EAr
                )}
              >
                {"Ad Managment"}
              </div>
            </Button>
          </div>
        ) : null}
        {true ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___9YgNs, {
              [sty.freeBoxunnamedVariant___9YgNsoxEvg]: hasVariant(
                $state,
                "unnamedVariant",
                "unnamedVariant"
              )
            })}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__gOk8
              )}
            >
              {"Learn AI"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button__macgz)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__g7EDl)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__atb73)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iBrZe
                )}
              >
                {"Growth Marketing"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__mdNFu)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rZzp)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___1P37A)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l4ISu
                )}
              >
                {"Lead Generation"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__ulfco)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___9IPnv)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___339Gy)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ouHUb
                )}
              >
                {"DTC eCommerce"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__bgPxH)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__fYEjm)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mtfWh)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pxGgV
                )}
              >
                {"Go-To-Market"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__qLf9, {
                [sty.buttonunnamedVariant__qLf9OxEvg]: hasVariant(
                  $state,
                  "unnamedVariant",
                  "unnamedVariant"
                )
              })}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__nJoU1)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jdZLr)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u5FFa
                )}
              >
                {"Ad Agencies"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button___4Sj0S)}
              color={"footerButton" as const}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__tkTiq)}
                  role={"img"}
                />
              }
              link={"#" as const}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xlSBh)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nW7Rr
                )}
              >
                {"Affiliate Marketing"}
              </div>
            </Button>
          </div>
        ) : null}
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox___66JBc)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gt6JV
          )}
        >
          {"Copyrights © 2023 All Rights Reserved by Presell, Inc."}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h5", "link", "textInput", "textbox"],
  img: ["img"],
  h5: ["h5"],
  link: ["link"],
  textInput: ["textInput", "textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  h5: "h5";
  link: "a";
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterSection__ArgsType,
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
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h5: makeNodeComponent("h5"),
    link: makeNodeComponent("link"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
