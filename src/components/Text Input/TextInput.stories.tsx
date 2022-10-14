import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputInputProps, TextInputRootProps } from ".";
import { Question } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Question />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Lorem ipsum bui mum ordin" type="email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputInputProps> = {};
export const WithoutIcon: StoryObj<TextInputInputProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Lorem ipsum bui mum ordin" type="email" />
    ),
  },
};
