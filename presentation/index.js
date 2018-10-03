// Import React
import React from "react";
import { FaExternalLink, FaGithub, FaTwitter } from "react-icons/lib/fa";
import shuffle from "shuffle-array";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Quote,
  S,
  Slide
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const LightCode = styled(Code)`
  background-color: rgba(238, 125, 120, 0.2) !important;
  color: rgb(26, 21, 119) !important;
  font-weight: bold;
`;

// const themeColors = {
//   primary: "#00706c",
//   secondary: "#f2f1ef",
//   tertiary: "#4ecec9",
//   quaternary: "#96908c"
// };

const themeColors = {
  primary: "rgb(252,251,247)",
  secondary: "rgb(26,21,119)",
  tertiary: "rgb(238,125,120)",
  quaternary: "#96908c"
};

const theme = createTheme(themeColors, {
  primary: "Eczar",
  secondary: "Lato"
});

const images = {
  betterLivingThru: require("../assets/img/better_living_thru.png"),
  bobRoss: require("../assets/img/bobross.jpg"),
  bobRossData: require("../assets/img/bobross_data.png"),
  doAnything: require("../assets/img/do_anything.gif"),
  enhance: require("../assets/img/enhance.png"),
  findFreedom: require("../assets/img/find_freedom.gif"),
  fogtown: require("../assets/img/fogtown.png"),
  handwrittenNumbers: require("../assets/img/handwritten_numbers.png"),
  handwrittenNumbersTsne: require("../assets/img/handwritten_numbers_tsne.gif"),
  happyAccidents: require("../assets/img/happy_accidents.gif"),
  happyTrees: require("../assets/img/happy_trees.gif"),
  hazFeedback: require("../assets/img/haz_feedback.jpg"),
  miniBobRoss: require("../assets/img/mini_bobross.png"),
  python: require("../assets/img/python.svg"),
  reactDocsRenderProps: require("../assets/img/react_docs_render_props.png"),
  rLogo: require("../assets/img/r_logo.png"),
  spark: require("../assets/img/spark.png"),
  supreme: require("../assets/img/supreme.png"),
  tsne: require("../assets/img/tsne.png"),
  tsneEnhanced: require("../assets/img/tsne_enhanced.png"),
  womensBox: require("../assets/img/stitchfix_womens_box.png")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={["slide"]}
        transitionDuration={350}
        theme={theme}
      >
        <Slide bgColor="rgb(252,251,247)">
          <Image src={images.betterLivingThru} />
        </Slide>
        <Slide>
          <Heading>😱</Heading>
        </Slide>
        <Slide bgImage={images.bobRoss} />
        <Slide textSize="2.5rem">
          <Heading fit size={1}>
            slide deck is online!
          </Heading>
          <Link
            href="http://janabeck.com/better-living-thru-components/"
            target="_blank"
            textColor="secondary"
          >
            http://janabeck.com/better-living-thru-components/
          </Link>
          <Heading
            lineHeight={1.35}
            size={3}
            textAlign="left"
            textColor="tertiary"
          >
            <Link
              href="https://github.com/jebeck"
              target="_blank"
              textColor="secondary"
            >
              <span style={{ color: themeColors.quartenary }}>
                <FaGithub />
                +:&nbsp;
              </span>
              @jebeck
            </Link>
          </Heading>
          <Heading
            lineHeight={1.35}
            size={3}
            textAlign="left"
            textColor="tertiary"
          >
            <Link
              href="https://twitter.com/iPancreas"
              target="_blank"
              textColor="secondary"
            >
              <span style={{ color: themeColors.quartenary }}>
                <FaTwitter />
                :&nbsp;
              </span>
              @iPancreas
            </Link>
          </Heading>
          <Heading
            textSize="0.5em"
            style={{ position: "fixed", bottom: "0.75rem", right: "0" }}
          >
            (HT to my manager Tarek Rached for digging up the album cover for
            the title slide!)
          </Heading>
        </Slide>
        <Slide>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="488.033 281.743 120.333 120.307"
            width="45vw"
            height="45vh"
          >
            <path
              fill="rgb(26,21,119)"
              d="M607.707 340.293l-13.164-13.164 11.39-11.39c.878-.88.878-2.303 0-3.182s-2.304-.88-3.183 0l-11.39 11.39-18.373-18.375 11.397-11.397c.88-.88.88-2.303 0-3.182s-2.303-.88-3.182 0l-11.397 11.397-20.015-20.014c-.844-.844-2.338-.844-3.182 0l-19.93 19.93-11.312-11.312c-.88-.88-2.303-.88-3.182 0s-.88 2.303 0 3.182l11.312 11.312-18.39 18.39-11.32-11.32c-.88-.88-2.303-.88-3.182 0s-.88 2.303 0 3.182l11.32 11.32-13.233 13.233c-.42.422-.658.994-.658 1.59s.237 1.17.66 1.592l13.163 13.164-11.388 11.387c-.88.88-.88 2.303 0 3.182.44.438 1.015.658 1.59.658s1.152-.22 1.592-.66l11.387-11.388 18.373 18.373-11.397 11.397c-.88.88-.88 2.303 0 3.182.44.44 1.015.66 1.59.66s1.152-.22 1.592-.66l11.397-11.397 20.016 20.015c.44.44 1.015.66 1.59.66s1.152-.22 1.592-.66l19.93-19.93 11.312 11.312c.44.44 1.015.66 1.59.66s1.152-.22 1.592-.66c.88-.88.88-2.303 0-3.182l-11.312-11.312 18.39-18.39 11.32 11.32c.44.438 1.016.658 1.592.658s1.15-.22 1.59-.66c.88-.878.88-2.302 0-3.18l-11.32-11.32 13.233-13.233c.88-.877.88-2.3 0-3.18zM548.2 287.148l18.424 18.424-18.34 18.34-18.423-18.425 18.34-18.34zm-54.735 54.736l11.643-11.643 11.573 11.574-11.64 11.643-11.575-11.573zm14.755 14.755l13.233-13.235c.88-.88.88-2.303 0-3.182L508.29 327.06l18.39-18.39 18.423 18.423-13.284 13.284c-.88.88-.88 2.303 0 3.182l13.112 13.112-18.34 18.34-18.372-18.373zm40.065-26.365l11.522 11.522-11.693 11.693-11.522-11.522 11.693-11.693zm-.085 66.343l-18.425-18.425 18.34-18.34 18.424 18.426-18.34 18.338zm21.52-21.52l-18.424-18.425 13.284-13.284c.88-.88.88-2.304 0-3.183l-13.113-13.113 18.34-18.34 18.373 18.375-13.232 13.232c-.88.88-.88 2.303 0 3.182l13.164 13.164-18.39 18.39zm21.573-21.573l-11.573-11.573 11.64-11.642 11.574 11.574-11.64 11.64z"
            />
          </svg>
          <Heading fit size={1}>
            Stitch Fix Algorithms
          </Heading>
          <Link
            href="http://algorithms-tour.stitchfix.com/"
            target="_blank"
            textColor="secondary"
          />
        </Slide>
        <Slide>
          <Heading fit>what's Stitch Fix?</Heading>
          <Layout>
            <Fill>
              <Image src={images.womensBox} />
            </Fill>
            <Fill>
              <List>
                <ListItem>style profile</ListItem>
                <ListItem>stylist picks 5 things (a.k.a. a "fix")</ListItem>
                <ListItem>try on at 🏠</ListItem>
                <ListItem>💸 for what you keep</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading fit>where's the data science? (1/2)</Heading>
          <List>
            <ListItem>warehouse assignment</ListItem>
            <ListItem>recommendation systems</ListItem>
            <ListItem>client-stylist matching</ListItem>
            <ListItem>human computation</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading fit>where's the data science? (2/2)</Heading>
          <List>
            <ListItem>logistics (optimization)</ListItem>
            <ListItem>demand modeling</ListItem>
            <ListItem>inventory management</ListItem>
            <ListItem>new style development</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.supreme}>
          <Link
            href="http://algorithms-tour.stitchfix.com/"
            target="_blank"
            textColor="secondary"
          >
            <FaExternalLink />
            &nbsp;take the Stitch Fix algo tour!
          </Link>
          <Heading
            textSize="0.5em"
            style={{ position: "fixed", bottom: "0.75rem", right: "0" }}
          >
            (T design courtesy of my coworker Divya Prabhakar)
          </Heading>
        </Slide>
        <Slide>
          <Heading fit>(Bob Ross GIF break 1 of 4)</Heading>
          <Image src={images.findFreedom} />
        </Slide>
        <Slide>
          <Heading size={2}>better living</Heading>
          <Heading size={2}>thru</Heading>
          <Heading size={1}>non-presentational</Heading>
          <Heading size={2}>components</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>data...</Heading>
          <List>
            <Appear>
              <ListItem>fetching</ListItem>
            </Appear>
            <Appear>
              <ListItem>persistence</ListItem>
            </Appear>
            <Appear>
              <ListItem>computation (👈 this is the fun one!!)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">outline</Heading>
          <List>
            <ListItem>setting the context</ListItem>
            <ListItem>{"<Fetch /> components"}</ListItem>
            <ListItem>{"<Save /> and <Delete /> components"}</ListItem>
            <ListItem>{"<Compute /> components"}</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1}>context</Heading>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1.25}>
            {shuffle([
              "👩🏼‍💻",
              "👩‍💻",
              "👩🏻‍💻",
              "👩🏽‍💻",
              "👩🏾‍💻",
              "👩🏿‍💻",
              "👨🏼‍💻",
              "👨‍💻",
              "👨🏻‍💻",
              "👨🏽‍💻",
              "👨🏾‍💻",
              "👨🏿‍💻"
            ]).join("")}
          </Heading>
          <Heading fit>the team</Heading>
          <Heading fit lineHeight={1.25}>
            {shuffle([
              "👩🏼‍💻",
              "👩‍💻",
              "👩🏻‍💻",
              "👩🏽‍💻",
              "👩🏾‍💻",
              "👩🏿‍💻",
              "👨🏼‍💻",
              "👨‍💻",
              "👨🏻‍💻",
              "👨🏽‍💻",
              "👨🏾‍💻",
              "👨🏿‍💻"
            ]).join("")}
          </Heading>
        </Slide>
        <Slide textColor="primary">
          <Heading size={2}>(the team)</Heading>
          <Layout>
            <Fill
              style={{
                backgroundColor: themeColors.tertiary,
                borderRadius: "0.25rem",
                margin: "0.5rem 1rem",
                minHeight: "25vh",
                padding: "2.5rem"
              }}
            >
              <Heading textColor="primary">A</Heading>
              client
            </Fill>
            <Fill
              style={{
                backgroundColor: themeColors.tertiary,
                borderRadius: "0.25rem",
                margin: "0.5rem 1rem",
                minHeight: "25vh",
                padding: "2.5rem"
              }}
            >
              <Heading textColor="primary">B</Heading>
              styling
            </Fill>
            <Fill
              style={{
                backgroundColor: themeColors.tertiary,
                borderRadius: "0.25rem",
                margin: "0.5rem 1rem",
                minHeight: "25vh",
                padding: "2.5rem"
              }}
            >
              <Heading textColor="primary">C</Heading>
              merch
            </Fill>
            <Fill
              style={{
                backgroundColor: themeColors.tertiary,
                borderRadius: "0.25rem",
                margin: "0.5rem 1rem",
                minHeight: "25vh",
                padding: "2.5rem"
              }}
            >
              <Heading textColor="primary">D</Heading>
              etc.
            </Fill>
          </Layout>
          <Layout>
            <Fill
              style={{
                backgroundColor: themeColors.tertiary,
                borderRadius: "0.25rem",
                minHeight: "15vh",
                padding: "1.5rem"
              }}
            >
              <Heading textColor="primary" size={3}>
                data platform
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={2}>(the team)</Heading>
          <List>
            <ListItem>technical ("full stack" data scientists)</ListItem>
            <ListItem>...but not with frontend web dev</ListItem>
          </List>
        </Slide>
        <Slide>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.33)",
              borderRadius: "1rem",
              paddingBottom: "0.75rem",
              paddingLeft: "1.5rem",
              paddingTop: "1.25rem"
            }}
          >
            <Heading size={2} style={{ paddingBottom: "1.5rem" }}>
              (the team)
            </Heading>
            <Layout>
              <Fill>
                <Image src={images.python} width={450} />
                <Image src={images.rLogo} width={240} />
              </Fill>
              <Fill>
                <Image src={images.spark} width={360} />
              </Fill>
            </Layout>
          </div>
        </Slide>
        <Slide>
          <Heading fit>the stack</Heading>
          <Appear>
            <Heading fit>(is a lot more complicated than this)</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2}>data warehouse</Heading>
          <Heading size={3} textColor="tertiary">
            (🌁 "fogtown")
          </Heading>
          <List>
            <ListItem>GET requests</ListItem>
            <ListItem>
              limited SQL via a <LightCode>query</LightCode> object in the
              headers
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.33)",
              borderRadius: "1rem",
              paddingTop: "1.25rem"
            }}
          >
            <Image src={images.fogtown} />
          </div>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">outline</Heading>
          <List>
            <ListItem>
              <S type="strikethrough">setting the context</S>
            </ListItem>
            <ListItem>{"<Fetch /> components"}</ListItem>
            <ListItem>{"<Save /> and <Delete /> components"}</ListItem>
            <ListItem>{"<Compute /> components"}</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>(Bob Ross GIF break 2 of 4)</Heading>
          <Image src={images.happyTrees} />
        </Slide>
        <Slide>
          <Heading fit>
            <LightCode>{"<Fetch />"}</LightCode>
          </Heading>
          <Heading fit>components</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>the inspiration</Heading>
          <Heading fit>{"<Rethinker stop={false} />"}</Heading>
          <Heading size={4} textColor="tertiary">
            by Ryan Florence
          </Heading>
          <Link
            href="https://www.youtube.com/watch?v=kp-NOggyz54"
            target="_blank"
            textColor="secondary"
          >
            <FaExternalLink />
            &nbsp;watch it on YouTube
          </Link>
        </Slide>
        <Slide>
          <Heading fit>{"<Rethinker stop={false} />"}</Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              "we didn't give components a fair shake yet"
            </Quote>
            <Cite>Ryan Florence</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading>the 'Rethinker'</Heading>
          <Heading fit>
            <LightCode>{"<Fetch />"}</LightCode>
          </Heading>
          <Heading>example</Heading>
        </Slide>
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/rethinker.example")}
          />
        </Slide>
        <Slide>
          <Heading>our initial</Heading>
          <Heading fit>
            <LightCode>{"<Fetch />"}</LightCode>
          </Heading>
          <Heading>@ Stitch Fix</Heading>
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/cs/initial.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "initial <Fetch /> API" },
            { loc: [4, 9], note: "initial state" },
            { loc: [16, 30], note: "fire off the request" },
            { loc: [30, 37], note: "handle success" },
            { loc: [37, 43], note: "handle error" },
            { loc: [47, 68], note: "the render method" },
            { loc: [52, 60], note: "zero-effort error display" },
            { loc: [60, 63], note: "zero-effort loading display" },
            {
              loc: [63, 67],
              note: "clone the children + inject state (i.e., the data)"
            }
          ]}
        />
        <Slide>
          <Image src={images.reactDocsRenderProps} />
        </Slide>
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/initial.example")}
          />
        </Slide>
        <Slide>
          <Heading>making</Heading>
          <Heading fit>
            <LightCode>{"<Fetch />"}</LightCode>
          </Heading>
          <Heading>more generic</Heading>
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/ply/generic.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "more generic <Fetch />" },
            { loc: [17, 29], note: "pass in the url, body, method" },
            { loc: [46, 67], note: "everything else the same" }
          ]}
        />
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/generic.example")}
          />
        </Slide>
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/post.example")}
          />
        </Slide>
        <Slide>
          <Heading>making</Heading>
          <Heading fit>
            <LightCode>{"<Fetch />"}</LightCode>
          </Heading>
          <Heading>more flexible</Heading>
          <Heading>via "render props" support</Heading>
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/ply/flexible.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "more flexible <Fetch />" },
            { loc: [51, 59], note: "the 'render props' escape hatch" }
          ]}
        />
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/flexible.example")}
          />
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">outline</Heading>
          <List>
            <ListItem>
              <S type="strikethrough">setting the context</S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">{"<Fetch /> components"}</S>
            </ListItem>
            <ListItem>{"<Save /> and <Delete /> components"}</ListItem>
            <ListItem>{"<Compute /> components"}</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>(Bob Ross GIF break 3 of 4)</Heading>
          <Image src={images.doAnything} />
        </Slide>
        <Slide>
          <Heading fit>
            <LightCode>{"<Save />"}</LightCode>
          </Heading>
          <Heading>and</Heading>
          <Heading fit>
            <LightCode>{"<Delete />"}</LightCode>
          </Heading>
          <Heading fit>components</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>generic storage</Heading>
          <Heading size={3} textColor="tertiary">
            (🍰 "redvelvet")
          </Heading>
          <List>
            <ListItem>GET</ListItem>
            <ListItem>POST</ListItem>
            <ListItem>DELETE</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>let's talk about lifecycle methods</Heading>
          <Heading size={2}>for GET requests</Heading>
          <List>
            <ListItem>
              <LightCode>componentDidMount</LightCode>
            </ListItem>
            <ListItem>
              <LightCode>componentDidUpdate</LightCode>
            </ListItem>
            <ListItem>
              <S type="strikethrough">
                <LightCode>componentWillReceiveProps</LightCode>
              </S>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>let's talk about lifecycle methods</Heading>
          <Heading fit size={2}>
            for POST requests
          </Heading>
          <List>
            <ListItem>???</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>let's talk about lifecycle methods</Heading>
          <Heading fit size={2}>
            for DELETE requests
          </Heading>
          <List>
            <ListItem>???</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>GET and POST are</Heading>
          <Heading fit size={2}>
            dependent on user action
          </Heading>
          <Appear>
            <Heading fit>
              <LightCode>s/lifecycle/instance</LightCode>
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading>solution?</Heading>
          <Appear>
            <Heading size={2}>render a 🔘 button</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2}>better living</Heading>
          <Heading size={2}>thru</Heading>
          <Heading size={1}>(mostly) non-presentational</Heading>
          <Heading size={2}>components</Heading>
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/cs/save0.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "a basic <Save /> API" },
            { loc: [8, 13], note: "initial state" },
            { loc: [18, 30], note: "fire off the POST onClick" },
            { loc: [22, 26], note: "data to POST via this.props" },
            { loc: [30, 37], note: "handle success" },
            { loc: [37, 43], note: "handle error" },
            { loc: [47, 57], note: "the render method, a <button />" },
            { loc: [59, 60], note: "usage: a consuming app's Form" },
            { loc: [67, 75], note: "Form captures the input, stores in state" },
            {
              loc: [83, 88],
              note: "renders <Save />, passing input in 'body' prop"
            }
          ]}
        />
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/save0.example")}
          />
        </Slide>
        <Slide>
          <Heading>🤔&nbsp;🤔&nbsp;🤔</Heading>
          <Heading fit>...but...</Heading>
        </Slide>
        <Slide>
          <Image src={images.hazFeedback} width={630} />
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/cs/save1.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "#1: handle disabled state" },
            {
              loc: [93, 94],
              note: "consuming Form passes 'disabled' as prop"
            },
            {
              loc: [54, 59],
              note: "Save applies to rendered <button />"
            }
          ]}
        />
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/save1.example")}
          />
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/cs/save2.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "#1: handle inflight state" },
            {
              loc: [59, 62],
              note: "Save tracks and displays request inflight state"
            }
          ]}
        />
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/save2.example")}
          />
        </Slide>
        <Slide>
          <Heading fit>🛑 one more thing 🛑</Heading>
          <Appear>
            <Heading fit size={2}>
              showing the saved data
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <ComponentPlayground
            code={require("raw-loader!../assets/ply/save3.example")}
          />
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/cs/save3.example")}
          lang="js"
          ranges={[
            {
              loc: [2, 3],
              title: "ensuring ✨fresh✨ data"
            },
            {
              loc: [36, 46],
              note: "refresher: handle success"
            },
            {
              loc: [38, 41],
              note: "now with a callback"
            },
            {
              loc: [136, 143],
              note: "meanwhile in Form..."
            },
            {
              loc: [137, 138],
              note: "provide the callback as a prop on Save"
            },
            {
              loc: [137, 138],
              note: "the callback could also be a Redux action creator"
            },
            {
              loc: [93, 102],
              note: "the callback fetches from the location we're saving to"
            },
            {
              loc: [89, 92],
              note: "we call it on mount too"
            }
          ]}
        />
        <Slide>
          <Heading>? what about ?</Heading>
          <Heading fit>
            <LightCode>{"<Delete />"}</LightCode>
          </Heading>
          <Appear>
            <Heading fit>(left as an exercise 😉)</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading>some conclusions</Heading>
        </Slide>
        <Slide>
          <Heading>in practice</Heading>
          <Heading fit size={2}>
            components make a good tool set when...
          </Heading>
          <List>
            <ListItem>many small(ish)/mostly small apps</ListItem>
            <ListItem>built on shared resources</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>in practice</Heading>
          <Heading fit size={2}>
            components are a good unit of abstraction
          </Heading>
          <List>
            <ListItem>approachable</ListItem>
            <ListItem>encapsulated (single-file)</ListItem>
            <ListItem>
              easy documentation via Storybook, Styleguidist, etc.
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">outline</Heading>
          <List>
            <ListItem>
              <S type="strikethrough">setting the context</S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">{"<Fetch /> components"}</S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">{"<Save /> and <Delete /> components"}</S>
            </ListItem>
            <ListItem>{"<Compute /> components (🎉)"}</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>(Bob Ross GIF break 4 of 4)</Heading>
          <Image src={images.happyAccidents} />
        </Slide>
        <Slide>
          <Heading fit>
            <LightCode>{"<Compute />"}</LightCode>
          </Heading>
          <Heading fit>components</Heading>
        </Slide>
        <Slide>
          <Heading fit size={2}>
            ...compute in the browser? 🤔
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.tsne} />
        </Slide>
        <Slide>
          <Image src={images.enhance} />
        </Slide>
        <Slide>
          <Image src={images.tsneEnhanced} />
        </Slide>
        <Slide>
          <Heading>what's t-SNE?</Heading>
          <Heading size={2}>t-distributed</Heading>
          <Heading size={2}>(S)tochastic (N)eighbor (E)mbedding</Heading>
        </Slide>
        <Slide>
          <Heading>what's t-SNE?</Heading>
          <Heading fit size={2}>
            a technique for dimensionality reduction
          </Heading>
          <Heading fit>i.e., grouping in 2 or 3 dimensions</Heading>
        </Slide>
        <Slide bgImage={images.bobRoss} />
        <Slide>
          <Heading>we'll get to Bob</Heading>
          <Heading size={2}>(I promise)</Heading>
          <Appear>
            <Heading>first, 🍷</Heading>
          </Appear>
        </Slide>
        <CodeSlide
          code={require("raw-loader!../assets/cs/wine_data.example")}
          lang="json"
          ranges={[{ loc: [1, 15], note: "a wine datum" }]}
        />
        <Slide>
          <Heading>
            <Link
              href="http://localhost:6060/#!/BasicVisualization"
              textColor="secondary"
            >
              demo
            </Link>
          </Heading>
        </Slide>
        <Slide>
          <Heading fit>why tSNE as a component?</Heading>
          <Appear>
            <List>
              <ListItem>make declarative via lifecycle</ListItem>
              <ListItem>
                <S type="bold">cache</S> the computed result
              </ListItem>
              <List>
                <ListItem>for faster dev</ListItem>
                <ListItem>for better UX when navigating between pages</ListItem>
              </List>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" textColor="primary">
          <Heading textColor="primary">outline</Heading>
          <List>
            <ListItem>
              <S type="strikethrough">setting the context</S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">{"<Fetch /> components"}</S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">{"<Save /> and <Delete /> components"}</S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">{"<Compute /> components"}</S>
            </ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.bobRoss} />
        <Slide>
          <Image src={images.bobRossData} />
        </Slide>
        <Slide>
          <Layout>
            <Image height={100} src={images.miniBobRoss} width={100} />
            <Heading>
              <Link
                href="http://localhost:6060/#!/BobRoss"
                textColor="secondary"
              >
                demo
              </Link>
            </Heading>
            <Image height={100} src={images.miniBobRoss} width={100} />
          </Layout>
        </Slide>
        <Slide>
          <Heading>🙌&nbsp;🙌&nbsp;🙌</Heading>
          <Heading>thank you!</Heading>
          <br />
          <Heading>🎉&nbsp;🎉</Heading>
        </Slide>
      </Deck>
    );
  }
}
