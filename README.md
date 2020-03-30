# react-browser-frame

Zhoozh up your content with this responsive browser frame mockup.

Typescript-friendly.

## Install

```bash
npm install react-browser-frame

or

yarn add react-browser-frame
```

## Usage

Stick whatever you like inside a `<BrowserFrame>` and it will render as children props. The BrowserFrame component will be 100% as wide as its parent, and as high as the content you pass in to it.

## Examples

### An image

![Image example](https://res.cloudinary.com/diouve9dy/image/upload/v1585474968/image_zkt042.png)

```jsx
import React from "react";
import BrowserFrame from "react-browser-frame";

import myImg from "./img/doge.jpg";

export default () => (
  <BrowserFrame url="http://zombo.com">
    <img src={myImg} alt="A handsome doggo" />
  </BrowserFrame>
);
```

### Text content

![Text content example](https://res.cloudinary.com/diouve9dy/image/upload/v1585474966/text_zojzpv.png)

```jsx
export default () => (
  <BrowserFrame url="https://example.biz" padding="30px 20px">
    <p>It was the best of times, it was the blurst of times...</p>
  </BrowserFrame>
);
```

### An iframe

![Iframe example](https://res.cloudinary.com/diouve9dy/image/upload/v1585474967/iframe_qcknzd.png)

```jsx
const iframeSrc =
  "https://codepen.io/liamj/embed/preview/VdqgZK?height=500&amp;theme-id=39032&amp;default-tab=result";

export default () => (
  <BrowserFrame>
    <iframe
      width="100%"
      height="500px"
      scrolling="no"
      title="Breezy Windows logo"
      src={iframeSrc}
      frameBorder="no"
    />
  </BrowserFrame>
);
```

## Props

`<BrowserFrame>` accepts the following props:

- **url** (optional, `string`): Shows the address bar with your specified string.
- **padding** (optional, `string`): Puts padding around your supplied content, as a CSS string, e.g. `"20px"` or `"15px 30px"` etc.
- **???:** What else would you like to see? Dark mode? Other styles? Raise a PR or flick me a note :)

Styles partially copied from the browser mockup in Docusaurus v2 😅

## License

MIT © [liamjohnston](https://github.com/liamjohnston)
