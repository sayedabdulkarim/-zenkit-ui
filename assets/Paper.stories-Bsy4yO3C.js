import{j as s}from"./jsx-runtime-DiklIkkE.js";import{P as e}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Paper",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{shadow:{control:"select",options:["none","xs","sm","md","lg","xl"]},radius:{control:"select",options:["none","xs","sm","md","lg","xl"]},p:{control:"select",options:["none","xs","sm","md","lg","xl"]}}},d={args:{children:"This is a Paper component",p:"md"}},r={render:()=>s.jsxs("div",{style:{display:"flex",gap:"1.5rem",padding:"1rem"},children:[s.jsx(e,{p:"md",shadow:"xs",children:"xs shadow"}),s.jsx(e,{p:"md",shadow:"sm",children:"sm shadow"}),s.jsx(e,{p:"md",shadow:"md",children:"md shadow"}),s.jsx(e,{p:"md",shadow:"lg",children:"lg shadow"}),s.jsx(e,{p:"md",shadow:"xl",children:"xl shadow"})]})},a={render:()=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsx(e,{p:"md",shadow:"sm",radius:"none",children:"none"}),s.jsx(e,{p:"md",shadow:"sm",radius:"xs",children:"xs"}),s.jsx(e,{p:"md",shadow:"sm",radius:"sm",children:"sm"}),s.jsx(e,{p:"md",shadow:"sm",radius:"md",children:"md"}),s.jsx(e,{p:"md",shadow:"sm",radius:"lg",children:"lg"}),s.jsx(e,{p:"md",shadow:"sm",radius:"xl",children:"xl"})]})},p={render:()=>s.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[s.jsx(e,{p:"md",withBorder:!0,children:"With Border"}),s.jsx(e,{p:"md",shadow:"sm",children:"With Shadow"}),s.jsx(e,{p:"md",withBorder:!0,shadow:"sm",children:"Both"})]})},o={render:()=>s.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[s.jsx(e,{shadow:"sm",p:"xs",children:"xs padding"}),s.jsx(e,{shadow:"sm",p:"sm",children:"sm padding"}),s.jsx(e,{shadow:"sm",p:"md",children:"md padding"}),s.jsx(e,{shadow:"sm",p:"lg",children:"lg padding"}),s.jsx(e,{shadow:"sm",p:"xl",children:"xl padding"})]})},m={render:()=>s.jsxs(e,{shadow:"md",radius:"md",p:"lg",style:{maxWidth:"300px"},children:[s.jsx("h3",{style:{marginTop:0},children:"Card Title"}),s.jsx("p",{style:{color:"#666"},children:"This is an example of using Paper as a card component with shadow and padding."}),s.jsx("button",{style:{padding:"0.5rem 1rem",cursor:"pointer"},children:"Learn More"})]})};var i,n,l;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'This is a Paper component',
    p: 'md'
  }
}`,...(l=(n=d.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var t,h,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1.5rem',
    padding: '1rem'
  }}>
      <Paper p="md" shadow="xs">xs shadow</Paper>
      <Paper p="md" shadow="sm">sm shadow</Paper>
      <Paper p="md" shadow="md">md shadow</Paper>
      <Paper p="md" shadow="lg">lg shadow</Paper>
      <Paper p="md" shadow="xl">xl shadow</Paper>
    </div>
}`,...(c=(h=r.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var x,w,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Paper p="md" shadow="sm" radius="none">none</Paper>
      <Paper p="md" shadow="sm" radius="xs">xs</Paper>
      <Paper p="md" shadow="sm" radius="sm">sm</Paper>
      <Paper p="md" shadow="sm" radius="md">md</Paper>
      <Paper p="md" shadow="sm" radius="lg">lg</Paper>
      <Paper p="md" shadow="sm" radius="xl">xl</Paper>
    </div>
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var u,P,j;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Paper p="md" withBorder>With Border</Paper>
      <Paper p="md" shadow="sm">With Shadow</Paper>
      <Paper p="md" withBorder shadow="sm">Both</Paper>
    </div>
}`,...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var y,f,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
      <Paper shadow="sm" p="xs">xs padding</Paper>
      <Paper shadow="sm" p="sm">sm padding</Paper>
      <Paper shadow="sm" p="md">md padding</Paper>
      <Paper shadow="sm" p="lg">lg padding</Paper>
      <Paper shadow="sm" p="xl">xl padding</Paper>
    </div>
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var B,S,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Paper shadow="md" radius="md" p="lg" style={{
    maxWidth: '300px'
  }}>
      <h3 style={{
      marginTop: 0
    }}>Card Title</h3>
      <p style={{
      color: '#666'
    }}>
        This is an example of using Paper as a card component with shadow and padding.
      </p>
      <button style={{
      padding: '0.5rem 1rem',
      cursor: 'pointer'
    }}>Learn More</button>
    </Paper>
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const D=["Default","Shadows","Radius","WithBorder","Padding","CardExample"];export{m as CardExample,d as Default,o as Padding,a as Radius,r as Shadows,p as WithBorder,D as __namedExportsOrder,R as default};
