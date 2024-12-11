import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";
import Discover from "./Discover";
import { Helmet } from "react-helmet";

const Demo = () => {

  const updateMetaTags = () => {
    const metaTags = [
      { property: "og:image", content: "https://mint-invoice.com/images/image-376x376.png" },
      { property: "og:title", content: "Mint-Invoice | Blog" },
      { property: "og:description", content: "Explore articles and tips on invoice management." },
      { property: "og:url", content: "https://mint-invoice.com/blog" },
    ];

    metaTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property='${property}']`);
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        metaTag.setAttribute("content", content);
        document.head.appendChild(metaTag);
      }
    });
  };

  React.useEffect(() => {
    updateMetaTags();
  }, []);

  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mint-Invoice | Blog Title" />
        <meta property="og:description" content="This is blog description."
        />
        <meta property="og:image" content="https://mint-invoice.com/images/image-376x376.png" />
        <meta property="og:url" content="https://mint-invoice.com/" />
      </Helmet>

      <Banner />
      <Trending />
      <div className="size py-7 flex flex-col-reverse md:flex-row gap-[7rem]">
        <div className="flex-[1.5]">
          <h1>New Posts</h1>
        </div>
        <div className="flex-[1] relative">
          <Discover />
        </div>
      </div>
    </>
  );
};

export default Demo;
