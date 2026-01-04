import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a$ as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const U={title:"Navigation/Link",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{href:"#",children:"Default Link"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{href:"#",color:"primary",children:"Primary"}),e.jsx(r,{href:"#",color:"secondary",children:"Secondary"}),e.jsx(r,{href:"#",color:"success",children:"Success"}),e.jsx(r,{href:"#",color:"warning",children:"Warning"}),e.jsx(r,{href:"#",color:"danger",children:"Danger"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{href:"#",underline:"none",children:"No underline"}),e.jsx(r,{href:"#",underline:"hover",children:"Underline on hover"}),e.jsx(r,{href:"#",underline:"always",children:"Always underlined"})]})},i={args:{href:"https://example.com",external:!0,children:"External Link"}},o={args:{href:"#",disabled:!0,children:"Disabled Link"}},l={render:()=>e.jsxs("p",{children:["This is a paragraph with an ",e.jsx(r,{href:"#",children:"inline link"})," inside it. You can also have ",e.jsx(r,{href:"#",color:"secondary",children:"colored links"})," in your text."]})};var c,d,t;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Default Link'
  }
}`,...(t=(d=n.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var p,h,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="danger">Danger</Link>
    </div>
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,f,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Link href="#" underline="none">No underline</Link>
      <Link href="#" underline="hover">Underline on hover</Link>
      <Link href="#" underline="always">Always underlined</Link>
    </div>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,g,L;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External Link'
  }
}`,...(L=(g=i.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var y,j,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    href: '#',
    disabled: true,
    children: 'Disabled Link'
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,D,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <p>
      This is a paragraph with an <Link href="#">inline link</Link> inside it.
      You can also have <Link href="#" color="secondary">colored links</Link> in your text.
    </p>
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const N=["Default","Colors","Underlines","External","Disabled","InText"];export{a as Colors,n as Default,o as Disabled,i as External,l as InText,s as Underlines,N as __namedExportsOrder,U as default};
