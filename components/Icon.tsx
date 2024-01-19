"use client";
import React from "react";
import { AiOutlineTwitter, AiOutlineGithub, AiFillStar } from "react-icons/ai";
import { Box } from "../common/components";

export const Twitter = () => {
  return (
    <Box
      p={1}
      marginLeft={"30px"}
      onClick={() => {
        window.location.href = "https://twitter.com/o_ga09";
      }}
    >
      <AiOutlineTwitter size={32} />
    </Box>
  );
};

export const GitHub = () => {
  return (
    <Box
      p={1}
      marginLeft={"30px"}
      onClick={() => {
        window.location.href = "https://github.com/o-ga09?tab=repositories";
      }}
    >
      <AiOutlineGithub size={32} />
    </Box>
  );
};

export const GitHubRepo = () => {
  return (
    <Box
      p={1}
      onClick={() => {
        window.location.href = "https://github.com/o-ga09/portfolio-20230727";
      }}
    >
      <AiOutlineGithub size={32} />
    </Box>
  );
};

export const Star = () => {
  return <AiFillStar color={"#ffd700"} />;
};
