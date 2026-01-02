import type { Meta, StoryObj } from '@storybook/react';
import { NumberFormatter, formatNumber, formatCurrency, formatPercent, formatCompact } from '@zenkit-ui/core';

const meta: Meta<typeof NumberFormatter> = {
  title: 'Data Display/NumberFormatter',
  component: NumberFormatter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The number to format',
    },
    formatStyle: {
      control: 'select',
      options: ['decimal', 'currency', 'percent', 'unit'],
      description: 'The format style',
    },
    notation: {
      control: 'select',
      options: ['standard', 'scientific', 'engineering', 'compact'],
      description: 'The notation style',
    },
    locale: {
      control: 'text',
      description: 'The locale for formatting',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1234567.89,
  },
};

export const Currency: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        USD: <NumberFormatter value={1234.56} formatStyle="currency" currency="USD" />
      </div>
      <div>
        EUR: <NumberFormatter value={1234.56} formatStyle="currency" currency="EUR" locale="de-DE" />
      </div>
      <div>
        GBP: <NumberFormatter value={1234.56} formatStyle="currency" currency="GBP" locale="en-GB" />
      </div>
      <div>
        JPY: <NumberFormatter value={1234} formatStyle="currency" currency="JPY" locale="ja-JP" />
      </div>
      <div>
        INR: <NumberFormatter value={1234.56} formatStyle="currency" currency="INR" locale="en-IN" />
      </div>
    </div>
  ),
};

export const Percent: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        Default: <NumberFormatter value={0.1234} formatStyle="percent" />
      </div>
      <div>
        2 decimals: <NumberFormatter value={0.1234} formatStyle="percent" decimalPlaces={2} />
      </div>
      <div>
        Negative: <NumberFormatter value={-0.0567} formatStyle="percent" decimalPlaces={1} />
      </div>
      <div>
        100%+: <NumberFormatter value={1.5} formatStyle="percent" />
      </div>
    </div>
  ),
};

export const CompactNotation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        1,000: <NumberFormatter value={1000} notation="compact" />
      </div>
      <div>
        10,000: <NumberFormatter value={10000} notation="compact" />
      </div>
      <div>
        1,000,000: <NumberFormatter value={1000000} notation="compact" />
      </div>
      <div>
        1,000,000,000: <NumberFormatter value={1000000000} notation="compact" />
      </div>
      <div>
        Long format: <NumberFormatter value={1500000} notation="compact" compactDisplay="long" />
      </div>
    </div>
  ),
};

export const DecimalPlaces: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        No decimals: <NumberFormatter value={1234.5678} decimalPlaces={0} />
      </div>
      <div>
        1 decimal: <NumberFormatter value={1234.5678} decimalPlaces={1} />
      </div>
      <div>
        2 decimals: <NumberFormatter value={1234.5678} decimalPlaces={2} />
      </div>
      <div>
        4 decimals: <NumberFormatter value={1234.5678} decimalPlaces={4} />
      </div>
    </div>
  ),
};

export const SignDisplay: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        Auto (default): <NumberFormatter value={123} signDisplay="auto" /> / <NumberFormatter value={-123} signDisplay="auto" />
      </div>
      <div>
        Always: <NumberFormatter value={123} signDisplay="always" /> / <NumberFormatter value={-123} signDisplay="always" />
      </div>
      <div>
        Except Zero: <NumberFormatter value={123} signDisplay="exceptZero" /> / <NumberFormatter value={0} signDisplay="exceptZero" />
      </div>
      <div>
        Never: <NumberFormatter value={123} signDisplay="never" /> / <NumberFormatter value={-123} signDisplay="never" />
      </div>
    </div>
  ),
};

export const WithPrefixSuffix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        <NumberFormatter value={99.99} prefix="Price: $" />
      </div>
      <div>
        <NumberFormatter value={25} suffix=" items" />
      </div>
      <div>
        <NumberFormatter value={75} prefix="Score: " suffix="/100" />
      </div>
      <div>
        <NumberFormatter value={4.5} prefix="Rating: " suffix=" stars" decimalPlaces={1} />
      </div>
    </div>
  ),
};

export const DifferentLocales: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        en-US: <NumberFormatter value={1234567.89} locale="en-US" />
      </div>
      <div>
        de-DE: <NumberFormatter value={1234567.89} locale="de-DE" />
      </div>
      <div>
        fr-FR: <NumberFormatter value={1234567.89} locale="fr-FR" />
      </div>
      <div>
        ja-JP: <NumberFormatter value={1234567.89} locale="ja-JP" />
      </div>
      <div>
        ar-EG: <NumberFormatter value={1234567.89} locale="ar-EG" />
      </div>
    </div>
  ),
};

export const ScientificNotation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>
        Scientific: <NumberFormatter value={123456789} notation="scientific" />
      </div>
      <div>
        Engineering: <NumberFormatter value={123456789} notation="engineering" />
      </div>
      <div>
        Small number: <NumberFormatter value={0.00000123} notation="scientific" />
      </div>
    </div>
  ),
};

export const UtilityFunctions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div>formatNumber(1234567.89): {formatNumber(1234567.89)}</div>
      <div>formatCurrency(99.99): {formatCurrency(99.99)}</div>
      <div>formatCurrency(99.99, 'EUR', 'de-DE'): {formatCurrency(99.99, 'EUR', 'de-DE')}</div>
      <div>formatPercent(0.1234): {formatPercent(0.1234)}</div>
      <div>formatPercent(0.1234, 2): {formatPercent(0.1234, 2)}</div>
      <div>formatCompact(1500000): {formatCompact(1500000)}</div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Revenue</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          <NumberFormatter value={1234567} formatStyle="currency" currency="USD" notation="compact" />
        </div>
      </div>
      <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Growth</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#22c55e' }}>
          <NumberFormatter value={0.234} formatStyle="percent" signDisplay="always" decimalPlaces={1} />
        </div>
      </div>
      <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Users</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          <NumberFormatter value={8543219} notation="compact" />
        </div>
      </div>
      <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Avg. Order</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>
          <NumberFormatter value={89.99} formatStyle="currency" currency="USD" />
        </div>
      </div>
    </div>
  ),
};
