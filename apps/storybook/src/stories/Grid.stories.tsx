import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Col } from '@zenkit-ui/core';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children?: React.ReactNode }) => (
  <div
    style={{
      padding: '1rem',
      backgroundColor: 'var(--primary)',
      color: 'white',
      borderRadius: 'var(--radius)',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid>
      <Col><Box>Column 1</Box></Col>
      <Col><Box>Column 2</Box></Col>
      <Col><Box>Column 3</Box></Col>
    </Grid>
  ),
};

export const EqualColumns: Story = {
  render: () => (
    <Grid>
      <Col span={4}><Box>4 cols</Box></Col>
      <Col span={4}><Box>4 cols</Box></Col>
      <Col span={4}><Box>4 cols</Box></Col>
    </Grid>
  ),
};

export const VariableColumns: Story = {
  render: () => (
    <Grid>
      <Col span={2}><Box>2</Box></Col>
      <Col span={4}><Box>4</Box></Col>
      <Col span={6}><Box>6</Box></Col>
    </Grid>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <Grid>
      <Col span={4}><Box>4 cols</Box></Col>
      <Col span={4} offset={4}><Box>4 cols, offset 4</Box></Col>
    </Grid>
  ),
};

export const ResponsiveColumns: Story = {
  render: () => (
    <Grid>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
    </Grid>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Gap 0:</p>
        <Grid gap={0}>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
        </Grid>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Gap 2:</p>
        <Grid gap={2}>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
        </Grid>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Gap 5:</p>
        <Grid gap={5}>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
        </Grid>
      </div>
    </div>
  ),
};

export const NestedGrid: Story = {
  render: () => (
    <Grid>
      <Col span={6}>
        <Box>
          Outer Col 6
          <Grid gap={2} style={{ marginTop: '1rem' }}>
            <Col span={6}><div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem' }}>Nested</div></Col>
            <Col span={6}><div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem' }}>Nested</div></Col>
          </Grid>
        </Box>
      </Col>
      <Col span={6}><Box>Outer Col 6</Box></Col>
    </Grid>
  ),
};

export const TwelveColumnLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {[12, 6, 4, 3, 2, 1].map((span) => (
        <Grid key={span} gap={1}>
          {Array.from({ length: 12 / span }).map((_, i) => (
            <Col key={i} span={span as 1 | 2 | 3 | 4 | 6 | 12}>
              <Box>{span}</Box>
            </Col>
          ))}
        </Grid>
      ))}
    </div>
  ),
};
