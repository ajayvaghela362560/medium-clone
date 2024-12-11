import React from "react";
import Posts from "../Common/Posts/Posts";
import Follow from "./UserToFollow/Follow";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mint-Invoice | Easy Invoicing Software"
        />
        <meta
          property="og:description"
          content="Simplify your invoicing process with Mint-Invoice. Create professional invoices in minutes with customizable templates and automated payment reminders."
        />
        <meta
          property="og:image"
          content="https://mint-invoice.com/images/image-376x376.png"
        />
        <meta property="og:url" content="https://mint-invoice.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Mint-Invoice" />
      </Helmet>

      <section className="size flex gap-[5rem] relative">
        <div className="flex-[2] py-10 mb-[4rem]">
          <h1>New Posts</h1>
        </div>
        <div className="hidden md:inline-block md:w-[21rem] p-7 border-l border-gray-300">
          <h3>Who to follow?</h3>
          <Follow />
        </div>
      </section>
    </>
  );
};

export default Home;
