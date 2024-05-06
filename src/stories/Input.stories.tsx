import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input";
const meta: Meta<typeof Input> = {
  title: "Custom-examples/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Input",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Input",
  },
};
