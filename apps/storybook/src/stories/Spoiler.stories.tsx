import type { Meta, StoryObj } from '@storybook/react';
import { Spoiler } from '@zenkit-ui/core';

const meta: Meta<typeof Spoiler> = {
  title: 'Components/Spoiler',
  component: Spoiler,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
`;

export const Default: Story = {
  args: {
    maxHeight: 100,
    children: longText,
  },
  decorators: [(Story) => <div style={{ maxWidth: '400px' }}><Story /></div>],
};

export const CustomLabels: Story = {
  args: {
    maxHeight: 80,
    showLabel: 'Read more',
    hideLabel: 'Read less',
    children: longText,
  },
  decorators: [(Story) => <div style={{ maxWidth: '400px' }}><Story /></div>],
};

export const DifferentHeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px' }}>
      <div>
        <h4>Max Height: 50px</h4>
        <Spoiler maxHeight={50}>{longText}</Spoiler>
      </div>
      <div>
        <h4>Max Height: 100px</h4>
        <Spoiler maxHeight={100}>{longText}</Spoiler>
      </div>
      <div>
        <h4>Max Height: 150px</h4>
        <Spoiler maxHeight={150}>{longText}</Spoiler>
      </div>
    </div>
  ),
};

export const InitiallyExpanded: Story = {
  args: {
    maxHeight: 100,
    initialState: true,
    children: longText,
  },
  decorators: [(Story) => <div style={{ maxWidth: '400px' }}><Story /></div>],
};

export const WithRichContent: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Spoiler maxHeight={150}>
        <h3>Article Title</h3>
        <p>
          This is the introduction paragraph that gives an overview of the article content.
          It should grab the reader's attention and make them want to continue reading.
        </p>
        <h4>Section 1</h4>
        <p>
          More detailed content here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h4>Section 2</h4>
        <p>
          Even more content in this section. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul>
          <li>Point one</li>
          <li>Point two</li>
          <li>Point three</li>
        </ul>
      </Spoiler>
    </div>
  ),
};

export const NoTransition: Story = {
  args: {
    maxHeight: 100,
    transitionDuration: 0,
    children: longText,
  },
  decorators: [(Story) => <div style={{ maxWidth: '400px' }}><Story /></div>],
};
