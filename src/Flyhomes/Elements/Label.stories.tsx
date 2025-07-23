import type { Meta, StoryObj } from '@storybook/react-vite';


/**
 * Displays an accessible label to associate with a control.
 */
const meta = {
  title: "Flyhomes/Elements/Label",
  render: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Default",
    id: "element-label-default",
  },
};

export const Disabled: Story = {
  args: {
    text: "Disabled",
    disabled: true,
    id: "element-label-disabled",
  },
};

function Label({
  text,
  disabled,
  id,
}: {
  id: string;
  text: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLLabelElement>) {
  return (
    <div className="flex items-center gap-sm">
      <input id={id} disabled={disabled} type="checkbox" className="peer" />

      <label htmlFor={id}>{text}</label>
    </div>
  );
}
