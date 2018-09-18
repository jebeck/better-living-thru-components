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
  Slide
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";

// Require CSS
require("normalize.css");

const LightCode = styled(Code)`
  background-color: rgba(242, 241, 239, 0.25);
  color: white !important;
  font-weight: bold;
`;

const themeColors = {
  primary: "#00706c",
  secondary: "#f2f1ef",
  tertiary: "#4ecec9",
  quaternary: "#96908c"
};

const theme = createTheme(themeColors, {
  primary: "Eczar",
  secondary: "Lato"
});

const images = {
  algoOrg: require("../assets/img/algo_organization.png"),
  flask: require("../assets/img/flask.png"),
  hive: require("../assets/img/hive.png"),
  lacroixamid: require("../assets/img/lacroixamid.jpg"),
  presto: require("../assets/img/presto.png"),
  python: require("../assets/img/python.svg"),
  redis: require("../assets/img/redis.png"),
  rLogo: require("../assets/img/r_logo.png"),
  spark: require("../assets/img/spark.png")
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
        <Slide>
          <Heading size={1}>better living through components</Heading>
        </Slide>
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
        </Slide>
        <Slide>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="488.033 281.743 120.333 120.307"
            width="45vw"
            height="45vh"
          >
            <path
              fill="#4ecec9"
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
          >
            <FaExternalLink />
            &nbsp;take the Stitch Fix algo tour!
          </Link>
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
              <ListItem>computation</ListItem>
            </Appear>
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
        <Slide>
          <Heading size={2}>(the team)</Heading>
          <Image src={images.algoOrg} />
        </Slide>
        <Slide>
          <Heading size={2}>(the team)</Heading>
          <List>
            <ListItem>technical</ListItem>
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
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.33)",
              borderRadius: "1rem",
              paddingTop: "1.25rem"
            }}
          >
            <Heading size={2}>(the [web] stack)</Heading>
            <Layout>
              <Fill>
                <Image src={images.hive} width={232.5} />
                <Image src={images.presto} />
              </Fill>
              <Fill>
                <Image src={images.flask} width={310} />
                <Image src={images.redis} />
              </Fill>
            </Layout>
          </div>
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
          <Heading fit>{"<Rethinker stop={false} />"}</Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              "I've got a problem...I'm gonna type out a component, and see if I
              can make it work"
            </Quote>
            <Cite>Ryan Florence</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading fit>{"<Rethinker stop={false} />"}</Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              "I'm able to use React's lifecycle hooks to make anything
              declarative"
            </Quote>
            <Cite>Ryan Florence</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading>the</Heading>
          <Heading fit>
            <LightCode>{"<Rethinker />"}</LightCode>
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
          code={require("raw-loader!../assets/ply/initial.example")}
          lang="js"
          ranges={[
            { loc: [0, 1], title: "initial <Fetch /> API" },
            { loc: [4, 9], note: "initial state" },
            { loc: [17, 31], note: "fire off the request" },
            { loc: [31, 38], note: "handle success" },
            { loc: [38, 44], note: "handle error" },
            { loc: [48, 69], note: "the render method" },
            { loc: [53, 61], note: "zero-effort error display" },
            { loc: [61, 64], note: "zero-effort loading display" },
            {
              loc: [64, 68],
              note: "clone the children + inject state (i.e., the data)"
            }
          ]}
        />
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
      </Deck>
    );
  }
}
