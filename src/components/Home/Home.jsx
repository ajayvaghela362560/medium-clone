import React from "react";
import Follow from "./UserToFollow/Follow";

const Home = () => {
  const updateMetaTags = () => {
    const metaTags = [
      { property: "og:image", content: "https://mint-invoice.com/images/image-376x376.png" },
      { property: "og:title", content: "Mint-Invoice | Easy Invoicing Software" },
      { property: "og:description", content: "Simplify your invoicing process with Mint-Invoice. Create professional invoices in minutes with customizable templates and automated payment reminders." },
      { property: "og:url", content: "https://mint-invoice.com/" },
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
