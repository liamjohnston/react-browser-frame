import * as React from "react";
import "./styles.css";

export type Props = {
  url?: string;
  padding?: string;
  children: React.ReactNode;
};

export default ({ url, padding, children }: Props) => (
  <div className="browser-frame">
    <div className="browser-frame__top">
      <div className="browser-frame__button browser-frame__button--red" />
      <div className="browser-frame__button browser-frame__button--yellow" />
      <div className="browser-frame__button browser-frame__button--green" />
      {url && (
        <div className="browser-frame__address" aria-hidden>
          {url}
        </div>
      )}
      <div className="browser-frame__burger">
        <span className="browser-frame__burger-line" />
        <span className="browser-frame__burger-line" />
        <span className="browser-frame__burger-line" />
      </div>
    </div>
    <div
      className="browser-frame__body"
      style={{ padding: padding ? padding : "" }}
    >
      {children}
    </div>
  </div>
);
