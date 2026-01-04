import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bu as r,bv as H,bw as u,bx as p,by as K}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const ee={title:"Data Display/NumberFormatter",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"number",description:"The number to format"},formatStyle:{control:"select",options:["decimal","currency","percent","unit"],description:"The format style"},notation:{control:"select",options:["standard","scientific","engineering","compact"],description:"The notation style"},locale:{control:"text",description:"The locale for formatting"}}},a={args:{value:123456789e-2}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["USD: ",e.jsx(r,{value:1234.56,formatStyle:"currency",currency:"USD"})]}),e.jsxs("div",{children:["EUR: ",e.jsx(r,{value:1234.56,formatStyle:"currency",currency:"EUR",locale:"de-DE"})]}),e.jsxs("div",{children:["GBP: ",e.jsx(r,{value:1234.56,formatStyle:"currency",currency:"GBP",locale:"en-GB"})]}),e.jsxs("div",{children:["JPY: ",e.jsx(r,{value:1234,formatStyle:"currency",currency:"JPY",locale:"ja-JP"})]}),e.jsxs("div",{children:["INR: ",e.jsx(r,{value:1234.56,formatStyle:"currency",currency:"INR",locale:"en-IN"})]})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["Default: ",e.jsx(r,{value:.1234,formatStyle:"percent"})]}),e.jsxs("div",{children:["2 decimals: ",e.jsx(r,{value:.1234,formatStyle:"percent",decimalPlaces:2})]}),e.jsxs("div",{children:["Negative: ",e.jsx(r,{value:-.0567,formatStyle:"percent",decimalPlaces:1})]}),e.jsxs("div",{children:["100%+: ",e.jsx(r,{value:1.5,formatStyle:"percent"})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["1,000: ",e.jsx(r,{value:1e3,notation:"compact"})]}),e.jsxs("div",{children:["10,000: ",e.jsx(r,{value:1e4,notation:"compact"})]}),e.jsxs("div",{children:["1,000,000: ",e.jsx(r,{value:1e6,notation:"compact"})]}),e.jsxs("div",{children:["1,000,000,000: ",e.jsx(r,{value:1e9,notation:"compact"})]}),e.jsxs("div",{children:["Long format: ",e.jsx(r,{value:15e5,notation:"compact",compactDisplay:"long"})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["No decimals: ",e.jsx(r,{value:1234.5678,decimalPlaces:0})]}),e.jsxs("div",{children:["1 decimal: ",e.jsx(r,{value:1234.5678,decimalPlaces:1})]}),e.jsxs("div",{children:["2 decimals: ",e.jsx(r,{value:1234.5678,decimalPlaces:2})]}),e.jsxs("div",{children:["4 decimals: ",e.jsx(r,{value:1234.5678,decimalPlaces:4})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["Auto (default): ",e.jsx(r,{value:123,signDisplay:"auto"})," / ",e.jsx(r,{value:-123,signDisplay:"auto"})]}),e.jsxs("div",{children:["Always: ",e.jsx(r,{value:123,signDisplay:"always"})," / ",e.jsx(r,{value:-123,signDisplay:"always"})]}),e.jsxs("div",{children:["Except Zero: ",e.jsx(r,{value:123,signDisplay:"exceptZero"})," / ",e.jsx(r,{value:0,signDisplay:"exceptZero"})]}),e.jsxs("div",{children:["Never: ",e.jsx(r,{value:123,signDisplay:"never"})," / ",e.jsx(r,{value:-123,signDisplay:"never"})]})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx("div",{children:e.jsx(r,{value:99.99,prefix:"Price: $"})}),e.jsx("div",{children:e.jsx(r,{value:25,suffix:" items"})}),e.jsx("div",{children:e.jsx(r,{value:75,prefix:"Score: ",suffix:"/100"})}),e.jsx("div",{children:e.jsx(r,{value:4.5,prefix:"Rating: ",suffix:" stars",decimalPlaces:1})})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["en-US: ",e.jsx(r,{value:123456789e-2,locale:"en-US"})]}),e.jsxs("div",{children:["de-DE: ",e.jsx(r,{value:123456789e-2,locale:"de-DE"})]}),e.jsxs("div",{children:["fr-FR: ",e.jsx(r,{value:123456789e-2,locale:"fr-FR"})]}),e.jsxs("div",{children:["ja-JP: ",e.jsx(r,{value:123456789e-2,locale:"ja-JP"})]}),e.jsxs("div",{children:["ar-EG: ",e.jsx(r,{value:123456789e-2,locale:"ar-EG"})]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["Scientific: ",e.jsx(r,{value:123456789,notation:"scientific"})]}),e.jsxs("div",{children:["Engineering: ",e.jsx(r,{value:123456789,notation:"engineering"})]}),e.jsxs("div",{children:["Small number: ",e.jsx(r,{value:123e-8,notation:"scientific"})]})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsxs("div",{children:["formatNumber(1234567.89): ",H(123456789e-2)]}),e.jsxs("div",{children:["formatCurrency(99.99): ",u(99.99)]}),e.jsxs("div",{children:["formatCurrency(99.99, 'EUR', 'de-DE'): ",u(99.99,"EUR","de-DE")]}),e.jsxs("div",{children:["formatPercent(0.1234): ",p(.1234)]}),e.jsxs("div",{children:["formatPercent(0.1234, 2): ",p(.1234,2)]}),e.jsxs("div",{children:["formatCompact(1500000): ",K(15e5)]})]})},v={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",background:"#f8fafc",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Revenue"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:e.jsx(r,{value:1234567,formatStyle:"currency",currency:"USD",notation:"compact"})})]}),e.jsxs("div",{style:{padding:"1rem",background:"#f8fafc",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Growth"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600,color:"#22c55e"},children:e.jsx(r,{value:.234,formatStyle:"percent",signDisplay:"always",decimalPlaces:1})})]}),e.jsxs("div",{style:{padding:"1rem",background:"#f8fafc",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Users"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:e.jsx(r,{value:8543219,notation:"compact"})})]}),e.jsxs("div",{style:{padding:"1rem",background:"#f8fafc",borderRadius:"8px"},children:[e.jsx("div",{style:{fontSize:"0.875rem",color:"#64748b"},children:"Avg. Order"}),e.jsx("div",{style:{fontSize:"1.5rem",fontWeight:600},children:e.jsx(r,{value:89.99,formatStyle:"currency",currency:"USD"})})]})]})};var f,x,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 1234567.89
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var j,g,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,S,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(D=(S=t.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,F,P;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(P=(F=s.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var R,E,U;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(U=(E=l.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var C,z,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var W,w,J;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(J=(w=o.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};var k,T,A;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,I,Z;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
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
}`,...(Z=(I=n.parameters)==null?void 0:I.docs)==null?void 0:Z.source}}};var L,Y,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <div>formatNumber(1234567.89): {formatNumber(1234567.89)}</div>
      <div>formatCurrency(99.99): {formatCurrency(99.99)}</div>
      <div>formatCurrency(99.99, 'EUR', 'de-DE'): {formatCurrency(99.99, 'EUR', 'de-DE')}</div>
      <div>formatPercent(0.1234): {formatPercent(0.1234)}</div>
      <div>formatPercent(0.1234, 2): {formatPercent(0.1234, 2)}</div>
      <div>formatCompact(1500000): {formatCompact(1500000)}</div>
    </div>
}`,...(O=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var _,$,q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  }}>
      <div style={{
      padding: '1rem',
      background: '#f8fafc',
      borderRadius: '8px'
    }}>
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Revenue</div>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 600
      }}>
          <NumberFormatter value={1234567} formatStyle="currency" currency="USD" notation="compact" />
        </div>
      </div>
      <div style={{
      padding: '1rem',
      background: '#f8fafc',
      borderRadius: '8px'
    }}>
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Growth</div>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#22c55e'
      }}>
          <NumberFormatter value={0.234} formatStyle="percent" signDisplay="always" decimalPlaces={1} />
        </div>
      </div>
      <div style={{
      padding: '1rem',
      background: '#f8fafc',
      borderRadius: '8px'
    }}>
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Users</div>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 600
      }}>
          <NumberFormatter value={8543219} notation="compact" />
        </div>
      </div>
      <div style={{
      padding: '1rem',
      background: '#f8fafc',
      borderRadius: '8px'
    }}>
        <div style={{
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Avg. Order</div>
        <div style={{
        fontSize: '1.5rem',
        fontWeight: 600
      }}>
          <NumberFormatter value={89.99} formatStyle="currency" currency="USD" />
        </div>
      </div>
    </div>
}`,...(q=($=v.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const re=["Default","Currency","Percent","CompactNotation","DecimalPlaces","SignDisplay","WithPrefixSuffix","DifferentLocales","ScientificNotation","UtilityFunctions","RealWorldExamples"];export{s as CompactNotation,i as Currency,l as DecimalPlaces,a as Default,d as DifferentLocales,t as Percent,v as RealWorldExamples,n as ScientificNotation,c as SignDisplay,m as UtilityFunctions,o as WithPrefixSuffix,re as __namedExportsOrder,ee as default};
