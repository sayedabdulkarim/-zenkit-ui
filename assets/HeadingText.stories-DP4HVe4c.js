import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aM as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const b={title:"Components/HeadingText",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6]},size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},align:{control:"select",options:["left","center","right"]}}},r={args:{children:"Heading Text"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(i,{level:1,children:"Heading 1"}),e.jsx(i,{level:2,children:"Heading 2"}),e.jsx(i,{level:3,children:"Heading 3"}),e.jsx(i,{level:4,children:"Heading 4"}),e.jsx(i,{level:5,children:"Heading 5"}),e.jsx(i,{level:6,children:"Heading 6"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(i,{size:"xs",children:"Extra Small"}),e.jsx(i,{size:"sm",children:"Small"}),e.jsx(i,{size:"md",children:"Medium"}),e.jsx(i,{size:"lg",children:"Large"}),e.jsx(i,{size:"xl",children:"Extra Large"}),e.jsx(i,{size:"2xl",children:"2X Large"}),e.jsx(i,{size:"3xl",children:"3X Large"}),e.jsx(i,{size:"4xl",children:"4X Large"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(i,{color:"default",children:"Default Color"}),e.jsx(i,{color:"primary",children:"Primary Color"}),e.jsx(i,{color:"secondary",children:"Secondary Color"}),e.jsx(i,{color:"muted",children:"Muted Color"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(i,{weight:"light",children:"Light Weight"}),e.jsx(i,{weight:"normal",children:"Normal Weight"}),e.jsx(i,{weight:"medium",children:"Medium Weight"}),e.jsx(i,{weight:"semibold",children:"Semibold Weight"}),e.jsx(i,{weight:"bold",children:"Bold Weight"})]})},d={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(i,{align:"left",children:"Left Aligned"}),e.jsx(i,{align:"center",children:"Center Aligned"}),e.jsx(i,{align:"right",children:"Right Aligned"})]})};var s,o,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Heading Text'
  }
}`,...(g=(o=r.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};var x,c,m;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <HeadingText level={1}>Heading 1</HeadingText>
      <HeadingText level={2}>Heading 2</HeadingText>
      <HeadingText level={3}>Heading 3</HeadingText>
      <HeadingText level={4}>Heading 4</HeadingText>
      <HeadingText level={5}>Heading 5</HeadingText>
      <HeadingText level={6}>Heading 6</HeadingText>
    </div>
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,H,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <HeadingText size="xs">Extra Small</HeadingText>
      <HeadingText size="sm">Small</HeadingText>
      <HeadingText size="md">Medium</HeadingText>
      <HeadingText size="lg">Large</HeadingText>
      <HeadingText size="xl">Extra Large</HeadingText>
      <HeadingText size="2xl">2X Large</HeadingText>
      <HeadingText size="3xl">3X Large</HeadingText>
      <HeadingText size="4xl">4X Large</HeadingText>
    </div>
}`,...(p=(H=n.parameters)==null?void 0:H.docs)==null?void 0:p.source}}};var T,u,f;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <HeadingText color="default">Default Color</HeadingText>
      <HeadingText color="primary">Primary Color</HeadingText>
      <HeadingText color="secondary">Secondary Color</HeadingText>
      <HeadingText color="muted">Muted Color</HeadingText>
    </div>
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var j,v,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <HeadingText weight="light">Light Weight</HeadingText>
      <HeadingText weight="normal">Normal Weight</HeadingText>
      <HeadingText weight="medium">Medium Weight</HeadingText>
      <HeadingText weight="semibold">Semibold Weight</HeadingText>
      <HeadingText weight="bold">Bold Weight</HeadingText>
    </div>
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,L,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <HeadingText align="left">Left Aligned</HeadingText>
      <HeadingText align="center">Center Aligned</HeadingText>
      <HeadingText align="right">Right Aligned</HeadingText>
    </div>
}`,...(S=(L=d.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const A=["Default","Levels","Sizes","Colors","Weights","Alignment"];export{d as Alignment,a as Colors,r as Default,l as Levels,n as Sizes,t as Weights,A as __namedExportsOrder,b as default};
