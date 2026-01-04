import{j as e}from"./jsx-runtime-DiklIkkE.js";import{E as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const X={title:"Components/Box",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{p:{control:"select",options:["none","xs","sm","md","lg","xl"]},m:{control:"select",options:["none","xs","sm","md","lg","xl","auto"]},bg:{control:"select",options:["transparent","primary","secondary","muted","accent","surface"]},radius:{control:"select",options:["none","sm","md","lg","xl","full"]},shadow:{control:"select",options:["none","sm","md","lg","xl"]}}},d={args:{children:"Box content",p:"md",bg:"surface",radius:"md",border:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{p:"xs",bg:"muted",border:!0,children:"xs"}),e.jsx(r,{p:"sm",bg:"muted",border:!0,children:"sm"}),e.jsx(r,{p:"md",bg:"muted",border:!0,children:"md"}),e.jsx(r,{p:"lg",bg:"muted",border:!0,children:"lg"}),e.jsx(r,{p:"xl",bg:"muted",border:!0,children:"xl"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{p:"md",bg:"primary",radius:"md",children:"Primary"}),e.jsx(r,{p:"md",bg:"secondary",radius:"md",children:"Secondary"}),e.jsx(r,{p:"md",bg:"muted",radius:"md",children:"Muted"}),e.jsx(r,{p:"md",bg:"accent",radius:"md",children:"Accent"}),e.jsx(r,{p:"md",bg:"surface",radius:"md",border:!0,children:"Surface"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1.5rem",padding:"1rem"},children:[e.jsx(r,{p:"md",bg:"surface",shadow:"sm",radius:"md",children:"Small"}),e.jsx(r,{p:"md",bg:"surface",shadow:"md",radius:"md",children:"Medium"}),e.jsx(r,{p:"md",bg:"surface",shadow:"lg",radius:"md",children:"Large"}),e.jsx(r,{p:"md",bg:"surface",shadow:"xl",radius:"md",children:"XL"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{p:"md",bg:"muted",radius:"none",children:"None"}),e.jsx(r,{p:"md",bg:"muted",radius:"sm",children:"Small"}),e.jsx(r,{p:"md",bg:"muted",radius:"md",children:"Medium"}),e.jsx(r,{p:"md",bg:"muted",radius:"lg",children:"Large"}),e.jsx(r,{p:"md",bg:"muted",radius:"xl",children:"XL"}),e.jsx(r,{p:"md",bg:"muted",radius:"full",children:"Full"})]})},t={render:()=>e.jsxs(r,{p:"md",bg:"muted",display:"flex",style:{gap:"1rem"},children:[e.jsx(r,{p:"sm",bg:"primary",children:"Item 1"}),e.jsx(r,{p:"sm",bg:"secondary",children:"Item 2"}),e.jsx(r,{p:"sm",bg:"accent",children:"Item 3"})]})};var c,i,l;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Box content',
    p: 'md',
    bg: 'surface',
    radius: 'md',
    border: true
  }
}`,...(l=(i=d.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var u,p,n;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Box p="xs" bg="muted" border>xs</Box>
      <Box p="sm" bg="muted" border>sm</Box>
      <Box p="md" bg="muted" border>md</Box>
      <Box p="lg" bg="muted" border>lg</Box>
      <Box p="xl" bg="muted" border>xl</Box>
    </div>
}`,...(n=(p=s.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var x,g,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Box p="md" bg="primary" radius="md">Primary</Box>
      <Box p="md" bg="secondary" radius="md">Secondary</Box>
      <Box p="md" bg="muted" radius="md">Muted</Box>
      <Box p="md" bg="accent" radius="md">Accent</Box>
      <Box p="md" bg="surface" radius="md" border>Surface</Box>
    </div>
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var B,h,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem'
  }}>
      <Box p="md" bg="surface" shadow="sm" radius="md">Small</Box>
      <Box p="md" bg="surface" shadow="md" radius="md">Medium</Box>
      <Box p="md" bg="surface" shadow="lg" radius="md">Large</Box>
      <Box p="md" bg="surface" shadow="xl" radius="md">XL</Box>
    </div>
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,j,S;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Box p="md" bg="muted" radius="none">None</Box>
      <Box p="md" bg="muted" radius="sm">Small</Box>
      <Box p="md" bg="muted" radius="md">Medium</Box>
      <Box p="md" bg="muted" radius="lg">Large</Box>
      <Box p="md" bg="muted" radius="xl">XL</Box>
      <Box p="md" bg="muted" radius="full">Full</Box>
    </div>
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,w,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Box p="md" bg="muted" display="flex" style={{
    gap: '1rem'
  }}>
      <Box p="sm" bg="primary">Item 1</Box>
      <Box p="sm" bg="secondary">Item 2</Box>
      <Box p="sm" bg="accent">Item 3</Box>
    </Box>
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const E=["Default","Padding","Backgrounds","Shadows","Radius","Display"];export{a as Backgrounds,d as Default,t as Display,s as Padding,m as Radius,o as Shadows,E as __namedExportsOrder,X as default};
