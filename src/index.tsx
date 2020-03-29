import * as React from "react";
import styles from "./styles.css";

export type Props = {
  url?: string;
  padding?: string;
  children: React.ReactNode;
};

export default ({ url, padding, children }: Props) => (
  <div className={styles["browser-frame"]}>
    <div className={styles["browser-frame__top"]}>
      <div
        className={[
          styles["browser-frame__button"],
          styles["browser-frame__button--red"]
        ].join(" ")}
      />
      <div
        className={[
          styles["browser-frame__button"],
          styles["browser-frame__button--yellow"]
        ].join(" ")}
      />
      <div
        className={[
          styles["browser-frame__button"],
          styles["browser-frame__button--green"]
        ].join(" ")}
      />
      {url && (
        <div className={styles["browser-frame__address"]} aria-hidden>
          {url}
        </div>
      )}
      <div className={styles["browser-frame__burger"]}>
        <span className={styles["browser-frame__burger-line"]} />
        <span className={styles["browser-frame__burger-line"]} />
        <span className={styles["browser-frame__burger-line"]} />
      </div>
    </div>
    <div
      className={styles["browser-frame__body"]}
      style={{ padding: padding ? padding : "" }}
    >
      {children}
    </div>
  </div>
);
