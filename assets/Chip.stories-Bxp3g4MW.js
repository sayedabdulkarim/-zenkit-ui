import{j as r}from"./jsx-runtime-DiklIkkE.js";import{Y as e}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const L={title:"Components/Chip",component:e,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"Chip"}},s={render:()=>r.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[r.jsx(e,{color:"default",children:"Default"}),r.jsx(e,{color:"primary",children:"Primary"}),r.jsx(e,{color:"secondary",children:"Secondary"}),r.jsx(e,{color:"success",children:"Success"}),r.jsx(e,{color:"warning",children:"Warning"}),r.jsx(e,{color:"danger",children:"Danger"})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[r.jsx(e,{variant:"solid",color:"primary",children:"Solid"}),r.jsx(e,{variant:"soft",color:"primary",children:"Soft"}),r.jsx(e,{variant:"outline",color:"primary",children:"Outline"}),r.jsx(e,{variant:"dot",color:"primary",children:"Dot"})]})},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})},l={args:{children:"Closable Chip",closable:!0,onClose:()=>alert("Chip closed!")}},c={args:{children:"John Doe",avatar:r.jsx("span",{style:{fontSize:"12px"},children:"JD"})}},n={args:{children:"Clickable",onClick:()=>alert("Chip clicked!")}};var t,p,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Chip'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,h,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </div>
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>
      <Chip variant="solid" color="primary">Solid</Chip>
      <Chip variant="soft" color="primary">Soft</Chip>
      <Chip variant="outline" color="primary">Outline</Chip>
      <Chip variant="dot" color="primary">Dot</Chip>
    </div>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,f,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,j,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Closable Chip',
    closable: true,
    onClose: () => alert('Chip closed!')
  }
}`,...(D=(j=l.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var b,z,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'John Doe',
    avatar: <span style={{
      fontSize: '12px'
    }}>JD</span>
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var W,w,J;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Clickable',
    onClick: () => alert('Chip clicked!')
  }
}`,...(J=(w=n.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};const M=["Default","Colors","Variants","Sizes","Closable","WithAvatar","Clickable"];export{n as Clickable,l as Closable,s as Colors,a as Default,i as Sizes,o as Variants,c as WithAvatar,M as __namedExportsOrder,L as default};
