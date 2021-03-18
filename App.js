import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pricing from "./pricing";

function App() {
  //Enterding Data for plans of different pricess
  let data = [
    //For Plan- FREE
    {
      plan: "FREE",
      price: 0,
      currency: "$",
      period: "month",
      //Entering an array of Object accessable based on Plan selection.
      listItems: [
        {
          itemName: "Single User",
          isEnabled: true,
        },
        {
          itemName: "5GB Storage",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          itemName: "Community Access",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          itemName: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          itemName: "Free Subdomin",
          isEnabled: false,
        },
        {
          itemName: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    //For Plan-PLUS
    {
      plan: "PLUS",
      price: 9,
      currency: "$",
      period: "month",
      //Entering an array of Object accessable based on Plan selection.
      listItems: [
        {
          itemName: "5 Users",
          isEnabled: true,
          isBole: true,
        },
        {
          itemName: "50GB Storage",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          itemName: "Community Access",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          itemName: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          itemName: "Free Subdomin",
          isEnabled: true,
        },
        {
          itemName: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    //For Plan-PRO
    {
      plan: "PRO",
      price: 49,
      currency: "$",
      period: "month",
      //Entering an array of Object accessable based on Plan selection.
      listItems: [
        {
          itemName: "Unlimited Users",
          isEnabled: true,
          isBole: true,
        },
        {
          itemName: "50GB Storage",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          itemName: "Community Access",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          itemName: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          itemName: "Unlimited Free Subdomin",
          isEnabled: true,
        },
        {
          itemName: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container"></div>
      <div className="row">
        {data.map((card) => {
          return <Pricing data={card}></Pricing>; //Passing Whole Opject insde data. and doing manupulation to hole opject using data
        })}
      </div>
    </section>
  );
}

export default App;
