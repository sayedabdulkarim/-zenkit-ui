import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItem, ListItemMeta, Avatar, Button } from '@zenkit-ui/core';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { title: 'Ant Design Title 1', description: 'Ant Design, a design language for background applications' },
  { title: 'Ant Design Title 2', description: 'Ant Design, a design language for background applications' },
  { title: 'Ant Design Title 3', description: 'Ant Design, a design language for background applications' },
  { title: 'Ant Design Title 4', description: 'Ant Design, a design language for background applications' },
];

export const Default: Story = {
  render: () => (
    <List>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemMeta title={item.title} description={item.description} />
        </ListItem>
      ))}
    </List>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <List>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemMeta
            avatar={<Avatar src={`https://i.pravatar.cc/150?img=${index + 1}`} />}
            title={item.title}
            description={item.description}
          />
        </ListItem>
      ))}
    </List>
  ),
};

export const Bordered: Story = {
  render: () => (
    <List bordered header="Header" footer="Footer">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <List size="sm" bordered header="Small">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
      <List size="md" bordered header="Medium">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
      <List size="lg" bordered header="Large">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <List>
      {data.map((item, index) => (
        <ListItem
          key={index}
          actions={[
            <a key="edit" href="#">Edit</a>,
            <a key="more" href="#">More</a>,
          ]}
        >
          <ListItemMeta
            avatar={<Avatar src={`https://i.pravatar.cc/150?img=${index + 1}`} />}
            title={item.title}
            description={item.description}
          />
        </ListItem>
      ))}
    </List>
  ),
};

export const WithExtra: Story = {
  render: () => (
    <List>
      {data.slice(0, 2).map((item, index) => (
        <ListItem
          key={index}
          extra={<img width="200" alt="logo" src={`https://picsum.photos/200/100?random=${index}`} />}
        >
          <ListItemMeta
            avatar={<Avatar src={`https://i.pravatar.cc/150?img=${index + 1}`} />}
            title={item.title}
            description={item.description}
          />
          <div>Additional content can go here...</div>
        </ListItem>
      ))}
    </List>
  ),
};

export const Empty: Story = {
  render: () => <List bordered emptyText="No items to display" />,
};

export const Loading: Story = {
  render: () => (
    <List bordered loading>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
    </List>
  ),
};
