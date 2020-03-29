import React from "react";
import BrowserFrame from "react-browser-frame";
const iframeSrc =
  "https://codepen.io/liamj/embed/preview/VdqgZK?height=500&amp;theme-id=39032&amp;default-tab=result";
export default () => (
  <div style={{ padding: "30px", maxWidth: "800px" }}>
    <BrowserFrame url="http://zombo.com">
      <img
        src="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
        alt="A handsome doggo"
        style={{ width: "100%" }}
      />
    </BrowserFrame>
    <br />
    <br />
    <BrowserFrame url="https://example.biz" padding="30px 20px">
      <p>It was the best of times, it was the blurst of times...</p>
    </BrowserFrame>
    <br />
    <br />
    <BrowserFrame>
      <iframe
        width="100%"
        height="500px"
        scrolling="no"
        title="Breezy Windows logo"
        src={iframeSrc}
        frameBorder="no"
        allowtransparency="true"
        allowFullScreen=""
      />
    </BrowserFrame>
  </div>
);
