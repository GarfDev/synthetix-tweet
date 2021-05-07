import React from "react";
import ReactDOM from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import htmlToImage from "node-html-to-image";
import { getLogger } from "../utils/logger";
import DailyReport from "./DailyReport";

const HTML = (content: string, style: string) => {
  return `<html><head>${style}</head><body>${content}</body></html>`;
};

const renderer = async (template: React.ReactNode) => {
  const logger = getLogger();
  const sheet = new ServerStyleSheet();

  try {
    const html = ReactDOM.renderToString(sheet.collectStyles(template));
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    const buffer = await htmlToImage({
      output: "./image.png",
      html: HTML(html, styleTags),
    });
    return buffer;
  } catch (error) {
    // handle error
    logger.error(error);
  }
};

export default renderer;

renderer(<DailyReport />);
