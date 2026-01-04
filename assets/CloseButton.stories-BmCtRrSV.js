import{j as e}from"./jsx-runtime-DiklIkkE.js";import{_ as s}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const I={title:"Components/CloseButton",component:s,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{onClick:()=>alert("Closed!")}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"md"}),e.jsx(s,{size:"lg"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{variant:"subtle"}),e.jsx(s,{variant:"solid"}),e.jsx(s,{variant:"ghost"})]})},o={args:{disabled:!0}},i={render:()=>e.jsxs("div",{style:{padding:"1rem",border:"1px solid #eee",borderRadius:"8px",display:"flex",justifyContent:"space-between",alignItems:"center",minWidth:"300px"},children:[e.jsx("span",{children:"Notification message"}),e.jsx(s,{size:"sm"})]})};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('Closed!')
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <CloseButton variant="subtle" />
      <CloseButton variant="solid" />
      <CloseButton variant="ghost" />
    </div>
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,f,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,y,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '300px'
  }}>
      <span>Notification message</span>
      <CloseButton size="sm" />
    </div>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const D=["Default","Sizes","Variants","Disabled","InCard"];export{r as Default,o as Disabled,i as InCard,a as Sizes,t as Variants,D as __namedExportsOrder,I as default};
