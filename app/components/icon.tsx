'use client';
import { Button, Image } from "../common/components";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import { amber } from "@mui/material/colors";

export const Twitter = () => {
    return (
        <TwitterIcon />
    );
};

export const GitHub = () => {
    return (
        <GitHubIcon />
    );
};

export const Star = () => {
    return (
        <StarIcon sx={{ color: amber[500] }}  />
    );
};