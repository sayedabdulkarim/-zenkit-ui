import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bJ as a}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const w={title:"Data Display/QRCode",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{value:"https://example.com"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(a,{value:"https://example.com",size:64}),e.jsx(a,{value:"https://example.com",size:128}),e.jsx(a,{value:"https://example.com",size:200})]})},o={args:{value:"https://example.com",icon:"🏠",iconSize:32}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(a,{value:"https://example.com",color:"#1890ff"}),e.jsx(a,{value:"https://example.com",color:"#52c41a"}),e.jsx(a,{value:"https://example.com",color:"#eb2f96"})]})},c={args:{value:"https://example.com",bgColor:"#f0f0f0",color:"#333"}},p={args:{value:"https://example.com",bordered:!0}},m={args:{value:"https://example.com",status:"loading"}},l={args:{value:"https://example.com",status:"expired",onRefresh:()=>alert("Refresh clicked")}};var n,d,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com'
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var u,x,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
  }}>
      <QRCode value="https://example.com" size={64} />
      <QRCode value="https://example.com" size={128} />
      <QRCode value="https://example.com" size={200} />
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,v,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    icon: '🏠',
    iconSize: 32
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var R,C,S;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <QRCode value="https://example.com" color="#1890ff" />
      <QRCode value="https://example.com" color="#52c41a" />
      <QRCode value="https://example.com" color="#eb2f96" />
    </div>
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,y,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    bgColor: '#f0f0f0',
    color: '#333'
  }
}`,...(z=(y=c.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var Q,W,b;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    bordered: true
  }
}`,...(b=(W=p.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var k,B,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    status: 'loading'
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,I,L;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com',
    status: 'expired',
    onRefresh: () => alert('Refresh clicked')
  }
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const A=["Default","WithSize","WithIcon","WithColors","WithBackground","Bordered","Loading","Expired"];export{p as Bordered,r as Default,l as Expired,m as Loading,c as WithBackground,t as WithColors,o as WithIcon,s as WithSize,A as __namedExportsOrder,w as default};
