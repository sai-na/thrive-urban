import React from "react";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, WhatsappIcon, TelegramIcon } from "react-share";

function ShareButtons({ shareUrl, title }) {
  return (
    <div className=" my-3">
      <p className="font-bold font-mono">Share Post </p>
      <div className="flex  gap-2">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={36} round />
        </FacebookShareButton>

        {/* WhatsApp Share Button */}
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={36} round />
        </WhatsappShareButton>

        {/* Telegram Share Button */}
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={36} round />
        </TelegramShareButton>
      </div>
    </div>
  );
}

export default ShareButtons;
