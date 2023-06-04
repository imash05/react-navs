import React from "react";
import { Story, Meta } from "@storybook/react";

import "./style.scss";
import { RNDefault, RNDark, NavbarProps } from "./reactnavs";

export default {
  title: "Components/Navbar",
  component: RNDefault,
  argTypes: {
    title: { control: "text" },
    navItems: { control: "array" },
  },
} as Meta;

const Template: Story<NavbarProps> = (args) => <RNDefault {...args} />;
const DarkTemplate: Story<NavbarProps> = (args) => <RNDark {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Brand",
  subTitle: "brand subtitle",
  btn: "Button",
  navItems: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ],
};

export const dark = DarkTemplate.bind({});
dark.args = {
  title: "My Navbar",
  navItems: [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ],
};
