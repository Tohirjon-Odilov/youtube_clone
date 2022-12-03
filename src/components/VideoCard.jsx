import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import {
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "./utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link link={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alr={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "108px" }}>
        <Link link={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant={"subtitle1"} fontWeight={"bold"} color={"#fff"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.at.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          link={
            snippet.channelId ? `/video/${snippet.channelId}` : demoChannelUrl
          }
        >
          <Typography variant={"subtitle2"} fontWeight={"bold"} color={"gray"}>
            {snippet?.channelTitle || demoVideoTitle}
            <CheckCircle
              sx={{ fontSize: 12, color: "gray", ml: "5X" }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
