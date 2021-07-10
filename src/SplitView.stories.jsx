// Generated with util/create-component.js
import React from "react";
import SplitView from "./SplitView";

export default {
    title: "SplitView"
};

export const WithViews = () => <SplitView leftView={<p>left text</p>} rightView={<p>right text</p>} />;

export const WithNested = () => <SplitView leftView={<p>left text</p>} rightView={<SplitView leftView={<p>left text</p>} rightView={<p>right text</p>} />} />;
