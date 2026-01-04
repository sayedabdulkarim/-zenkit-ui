import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bY as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const P={title:"Components/Separator",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed","dotted"]},size:{control:"select",options:["sm","md","lg"]}}},t={render:()=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx("p",{children:"Content above"}),e.jsx(r,{}),e.jsx("p",{children:"Content below"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"50px",gap:"1rem"},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Right"})]})},s={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Solid"}),e.jsx(r,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Dashed"}),e.jsx(r,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Dotted"}),e.jsx(r,{variant:"dotted"})]})]})},i={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{label:"OR"})})},o={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Left",labelPosition:"left"}),e.jsx(r,{label:"Center",labelPosition:"center"}),e.jsx(r,{label:"Right",labelPosition:"right"})]})};var n,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <p>Content above</p>
      <Separator />
      <p>Content below</p>
    </div>
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    gap: '1rem'
  }}>
      <span>Left</span>
      <Separator orientation="vertical" />
      <span>Right</span>
    </div>
}`,...(x=(c=a.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var m,h,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div>
        <p>Solid</p>
        <Separator variant="solid" />
      </div>
      <div>
        <p>Dashed</p>
        <Separator variant="dashed" />
      </div>
      <div>
        <p>Dotted</p>
        <Separator variant="dotted" />
      </div>
    </div>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,u,g;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <Separator label="OR" />
    </div>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Separator label="Left" labelPosition="left" />
      <Separator label="Center" labelPosition="center" />
      <Separator label="Right" labelPosition="right" />
    </div>
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const C=["Default","Vertical","Variants","WithLabel","LabelPositions"];export{t as Default,o as LabelPositions,s as Variants,a as Vertical,i as WithLabel,C as __namedExportsOrder,P as default};
