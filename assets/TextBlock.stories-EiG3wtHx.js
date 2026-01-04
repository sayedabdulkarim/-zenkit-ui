import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cM as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const q={title:"Components/TextBlock",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{as:{control:"select",options:["p","span","div","label","small","strong","em"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},color:{control:"select",options:["default","muted","primary","secondary","success","warning","error"]},align:{control:"select",options:["left","center","right","justify"]}}},t={args:{children:"This is a text block component for displaying text content."}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{size:"xs",children:"Extra Small Text"}),e.jsx(r,{size:"sm",children:"Small Text"}),e.jsx(r,{size:"md",children:"Medium Text"}),e.jsx(r,{size:"lg",children:"Large Text"}),e.jsx(r,{size:"xl",children:"Extra Large Text"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{color:"default",children:"Default Color"}),e.jsx(r,{color:"muted",children:"Muted Color"}),e.jsx(r,{color:"primary",children:"Primary Color"}),e.jsx(r,{color:"secondary",children:"Secondary Color"}),e.jsx(r,{color:"success",children:"Success Color"}),e.jsx(r,{color:"warning",children:"Warning Color"}),e.jsx(r,{color:"error",children:"Error Color"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{weight:"light",children:"Light Weight"}),e.jsx(r,{weight:"normal",children:"Normal Weight"}),e.jsx(r,{weight:"medium",children:"Medium Weight"}),e.jsx(r,{weight:"semibold",children:"Semibold Weight"}),e.jsx(r,{weight:"bold",children:"Bold Weight"})]})},s={render:()=>e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width."})})},c={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{lineClamp:2,children:"This is a multi-line text that will be clamped to 2 lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."})})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{transform:"uppercase",children:"uppercase text"}),e.jsx(r,{transform:"lowercase",children:"LOWERCASE TEXT"}),e.jsx(r,{transform:"capitalize",children:"capitalize text"})]})};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'This is a text block component for displaying text content.'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,p,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <TextBlock size="xs">Extra Small Text</TextBlock>
      <TextBlock size="sm">Small Text</TextBlock>
      <TextBlock size="md">Medium Text</TextBlock>
      <TextBlock size="lg">Large Text</TextBlock>
      <TextBlock size="xl">Extra Large Text</TextBlock>
    </div>
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,T,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <TextBlock color="default">Default Color</TextBlock>
      <TextBlock color="muted">Muted Color</TextBlock>
      <TextBlock color="primary">Primary Color</TextBlock>
      <TextBlock color="secondary">Secondary Color</TextBlock>
      <TextBlock color="success">Success Color</TextBlock>
      <TextBlock color="warning">Warning Color</TextBlock>
      <TextBlock color="error">Error Color</TextBlock>
    </div>
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var k,B,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <TextBlock weight="light">Light Weight</TextBlock>
      <TextBlock weight="normal">Normal Weight</TextBlock>
      <TextBlock weight="medium">Medium Weight</TextBlock>
      <TextBlock weight="semibold">Semibold Weight</TextBlock>
      <TextBlock weight="bold">Bold Weight</TextBlock>
    </div>
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,j,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '200px'
  }}>
      <TextBlock truncate>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width.
      </TextBlock>
    </div>
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var v,C,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <TextBlock lineClamp={2}>
        This is a multi-line text that will be clamped to 2 lines. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </TextBlock>
    </div>
}`,...(S=(C=c.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var b,z,W;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <TextBlock transform="uppercase">uppercase text</TextBlock>
      <TextBlock transform="lowercase">LOWERCASE TEXT</TextBlock>
      <TextBlock transform="capitalize">capitalize text</TextBlock>
    </div>
}`,...(W=(z=a.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const O=["Default","Sizes","Colors","Weights","Truncate","LineClamp","Transform"];export{l as Colors,t as Default,c as LineClamp,o as Sizes,a as Transform,s as Truncate,i as Weights,O as __namedExportsOrder,q as default};
