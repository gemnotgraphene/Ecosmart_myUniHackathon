import React from "react";
import {
  // Container,
  VBox,
  BasicSegment,
  NavMenu,
  NavMenuItem,
  CBox,
  Listview,
  AekReactRouter,
  RouterView,
  Page,
  ListviewItem as Item,
  Padding,
  Divider,
  publicPath,
  Container,
  Panel,
} from "@ombiel/aek-lib";

//import { IconHome } from "@ombiel/aek-lib/Icons";

const router = new AekReactRouter();

export default class Screen extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <Container>
        <RouterView router={router}>
          <Page path="/">
            <Redeem />
          </Page>
          <Page path="/claim">
            <Claim />
          </Page>
          <Page path="/learn-more">
            <LearnMore />
          </Page>
          <Page path="/item1">
            <Upload />
          </Page>
        </RouterView>
      </Container>
    );
  }
}

const RedeemItems = [
  {
    thumbnail: publicPath("/images/Icons/Printing.png"),
    heading: "Printing",
    text: "Use your points to print for free with the University's Printing Service",
    href: "#/item1",
  },
  {
    thumbnail: publicPath("/images/Icons/Parking.png"),
    heading: "Parking",
    text: "Get free parking hours at student parking spots around the University",
    href: "#/page/2",
  },
  {
    thumbnail: publicPath("/images/Icons/Merch.png"),
    heading: "Merchandise",
    text: "Get discounted prices at the official University clothes shop",
    href: "#/page/3",
  },
  {
    thumbnail: publicPath("/images/Icons/Vouchers.png"),
    heading: "Vouchers",
    text: "Spend your points at on-campus retailers like Subway, coffee shops etc.",
    href: "#/page/3",
  },
  {
    thumbnail: publicPath("/images/Icons/Azure.png"),
    heading: "Azure Credits",
    text: "Exchange your points for Azure Cloud credits",
    href: "#/page/3",
  },
];

// Redeem
class Redeem extends React.Component {
  render() {
    return (
      <VBox style={{ backgroundColor: "#EBEBEB" }}>
        <Panel>
          <Padding>
            <PointsBanner />
            <BasicSegment>
              <Listview items={RedeemItems} />
            </BasicSegment>
          </Padding>
        </Panel>
        <CBox
          size={65}
          style={{
            borderTop: "1px solid rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <Navigation />
        </CBox>
      </VBox>
    );
  }
}

const ClaimItems = [
  {
    thumbnail: publicPath("/images/Icons/UtilityBills.png"),
    heading: "Utility Bills (Power and Water)",
    text: "Saved water or electricity? Claim your points by uploading a copy of your bill",
    href: "#/item1",
  },
  {
    thumbnail: publicPath("/images/Icons/OpalCard.png"),
    heading: "Opal Card Receipt",
    text: "Travelled on public transport with Opal? Let us know and earn points",
    href: "#/page/2",
  },
  {
    thumbnail: publicPath("/images/Icons/UniSustainability.png"),
    heading: "Sustainable Food and Clothing",
    text: "Share your receipts for purchased sustainable items to get points",
    href: "#/page/3",
  },
  {
    thumbnail: publicPath("/images/Icons/Return&Earn.png"),
    heading: "Return and Earn Receipt",
    text: "Upload your Return and Earn receipt to earn points",
    href: "#/page/3",
  },
  {
    thumbnail: publicPath("/images/Icons/Recycling.png"),
    heading: "Recyling and more...",
    text: "Planted a tree? Recycled some batteries? Share with us to get points",
    href: "#/page/3",
  },
];

// Claim
class Claim extends React.Component {
  render() {
    return (
      <VBox style={{ backgroundColor: "#EBEBEB" }}>
        <Panel>
          <Padding>
            <BasicSegment>
              <Listview items={ClaimItems} />
            </BasicSegment>
          </Padding>
        </Panel>
        <CBox
          size={65}
          style={{
            borderTop: "1px solid rgba(0,0,0,0.2)",
            backgroundColor: "rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Navigation />
        </CBox>
      </VBox>
    );
  }
}

// learn more items
const LearnMoreItems = [
  {
    heading: "University's Sustainable Initiatives",
    text: "See how the University of Newcastle is making a positive environmental impact",
    href: "https://www.newcastle.edu.au/our-uni/sustainability",
  },
  {
    heading: "How do the points work?",
    text: "See how you can earn and spend points with EcoSmart",
    href: "https://www.newcastle.edu.au/our-uni/sustainability/sustainability-goals",
  },
  {
    heading: "Submit an Idea",
    text: "Got an idea to change the world (or your Uni) for the better? Let us know here",
    href: "https://www.newcastle.edu.au/study/research/current-students/nearing-completion/accordion-nearing-completion/submit-your-thesis",
  },
];

// Learn more
class LearnMore extends React.Component {
  render() {
    return (
      <VBox style={{ backgroundColor: "#EBEBEB" }}>
        <Panel>
          <Padding>
            <BasicSegment>
              <Listview items={LearnMoreItems} />
            </BasicSegment>
          </Padding>
        </Panel>
        <CBox
          size={65}
          style={{
            borderTop: "1px solid rgba(0,0,0,0.2)",
            backgroundColor: "rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Navigation />
        </CBox>
      </VBox>
    );
  }
}

// navigation react component
class Navigation extends React.Component {
  navTo(href, e) {
    e.preventDefault();
    const currentPath = router.getCurrentPath();

    if (currentPath == "/") {
      router.goto(href);
    } else if (currentPath == "/claim" && href == "#/") {
      router.backTo(href);
    } else if (currentPath == "/claim" && href == "#/learn-more") {
      router.goto(href);
    } else {
      router.backTo(href);
    }
  }
  render() {
    return (
      <NavMenu router={router}>
        <NavMenuItem icon="gift icon" onClick={(e) => this.navTo("#/", e)}>
          Redeem
        </NavMenuItem>
        <NavMenuItem icon="star icon" onClick={(e) => this.navTo("#/claim", e)}>
          Claim
        </NavMenuItem>
        <NavMenuItem
          icon="leaf icon"
          onClick={(e) => this.navTo("#/learn-more", e)}
        >
          Learn More
        </NavMenuItem>
      </NavMenu>
    );
  }
}

// points banner
class PointsBanner extends React.Component {
  render() {
    return (
      <BasicSegment>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "6px",
            padding: "16px",
            border: "1px solid rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                marginRight: "50px",
              }}
            >
              <img
                src={publicPath("/images/ecosmart-logo.png")}
                alt="points"
                style={{ height: "160px", width: "160px" }}
              />
            </div>
            <div
              style={{
                flex: "1 1 auto",
                textAlign: "right",
                marginRight: "20px",
              }}
            >
              <p
                style={{
                  color: "#A1A1A1",
                  fontSize: "18px",
                  marginBottom: "0",
                }}
              >
                Your Balance
              </p>
              <p
                style={{
                  color: "#63DB38",
                  fontWeight: "normal",
                  fontSize: "30px",
                  marginBottom: "0",
                }}
              >
                3,000 Points
              </p>
              <p
                style={{
                  color: "#A1A1A1",
                  fontSize: "14px",
                }}
              >
                <i>Tap</i> to view your points history
              </p>
            </div>
          </div>

          <Divider />
          <div>
            <p>
              <b style={{ color: "#63DB38" }}>500</b> more points needed to
              redeem your next reward
            </p>
            <div
              style={{
                width: "100%",
                backgroundColor: "#e0e0df",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "80%",
                  height: "24px",
                  backgroundColor: "#63DB38",
                  textAlign: "center",
                  lineHeight: "24px",
                  color: "white",
                }}
              >
                3000 / 3500 Points
              </div>
            </div>
          </div>
        </div>
      </BasicSegment>
    );
  }
}

// upload page
class Upload extends React.Component {
  render() {
    return (
      <VBox>
        <Padding>
          <BasicSegment>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "6px",
                padding: "16px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <h3>Utility Bills (Power and Water)</h3>
              <p>
                Saved water or electricity? Claim your points by uploading a
                copy of your bill
              </p>

              <Divider />
              <div>
                <form action="/action_page.php">
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="file"
                      id="myFile"
                      name="filename"
                      style={{
                        display: "block",
                        marginBottom: "16px",
                        padding: "10px",
                        backgroundColor: "white",
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    />

                    <input
                      type="submit"
                      value="Submit"
                      style={{
                        backgroundColor: "#63DB38",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "140px",
                        height: "43px",
                        marginRight: "15px",
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </BasicSegment>
        </Padding>
        <CBox
          size={65}
          style={{
            borderTop: "1px solid rgba(0,0,0,0.2)",
            backgroundColor: "rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Navigation />
        </CBox>
      </VBox>
    );
  }
}
