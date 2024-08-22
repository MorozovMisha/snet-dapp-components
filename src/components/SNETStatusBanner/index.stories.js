import SNETStatusBanner from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETStatusBannerTest = {
    args:{
        title: "Some title",
        img: "img",
        description: "description ",
        actions: ["", ""],
        type: "PENDING"
    },
};

export default {
    component: SNETStatusBanner,
    tags: ['autodocs'],
    argTypes: {
        title:
        {
            control: {type: 'text'},
            default: "something",
        },
        img:
        {
            control: {type: 'text'},
            default: "something",
        },       
        description:
        {
            control: {type: 'text'},
            default: "something",
        },       
        type:
        {
            options: ["PENDING", "REJECTED"],
            control: { type: 'radio' },
            default: "PENDING",
        },
    },
};