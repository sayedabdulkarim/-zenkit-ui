import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aZ as r,I as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const z={title:"Components/Label",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Form Label"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx(r,{htmlFor:"email",children:"Email Address"}),e.jsx(t,{id:"email",type:"email",placeholder:"Enter your email"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx(r,{htmlFor:"name",required:!0,children:"Full Name"}),e.jsx(t,{id:"name",placeholder:"Enter your name"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx(r,{htmlFor:"password",description:"Must be at least 8 characters",children:"Password"}),e.jsx(t,{id:"password",type:"password",placeholder:"Enter password"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",children:"Small Label"}),e.jsx(r,{size:"md",children:"Medium Label"}),e.jsx(r,{size:"lg",children:"Large Label"})]})};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Form Label'
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,p,u;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  }}>
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,h,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  }}>
      <Label htmlFor="name" required>Full Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var b,L,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  }}>
      <Label htmlFor="password" description="Must be at least 8 characters">Password</Label>
      <Input id="password" type="password" placeholder="Enter password" />
    </div>
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var f,j,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Label size="sm">Small Label</Label>
      <Label size="md">Medium Label</Label>
      <Label size="lg">Large Label</Label>
    </div>
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const S=["Default","WithInput","Required","WithDescription","Sizes"];export{a as Default,l as Required,i as Sizes,o as WithDescription,s as WithInput,S as __namedExportsOrder,z as default};
