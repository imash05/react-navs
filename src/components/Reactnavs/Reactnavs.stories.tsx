import React from "react";
import { Story, Meta } from "@storybook/react";

import './style.scss'
import Navbar, { NavbarProps } from "./reactnavs";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  navItems: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: "My Navbar",
  navItems: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ],
};
