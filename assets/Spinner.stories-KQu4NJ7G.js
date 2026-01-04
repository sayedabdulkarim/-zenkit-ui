import{j as r}from"./jsx-runtime-DiklIkkE.js";import{ck as e}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const w={title:"Components/Spinner",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["border","grow"]},color:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"]}}},s={args:{}},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(e,{size:"sm"}),r.jsx(e,{size:"md"}),r.jsx(e,{size:"lg"})]})},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r.jsx(e,{variant:"grow",size:"sm"}),r.jsx(e,{variant:"grow",size:"md"}),r.jsx(e,{variant:"grow",size:"lg"})]})},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[r.jsx(e,{color:"primary"}),r.jsx(e,{color:"secondary"}),r.jsx(e,{color:"success"}),r.jsx(e,{color:"danger"}),r.jsx(e,{color:"warning"}),r.jsx(e,{color:"info"})]})};var i,t,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {}
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Spinner variant="grow" size="sm" />
      <Spinner variant="grow" size="md" />
      <Spinner variant="grow" size="lg" />
    </div>
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,y,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="info" />
    </div>
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const h=["Default","Sizes","GrowVariant","Colors"];export{n as Colors,s as Default,a as GrowVariant,o as Sizes,h as __namedExportsOrder,w as default};
