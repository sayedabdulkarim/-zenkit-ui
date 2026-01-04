import{j as e}from"./jsx-runtime-DiklIkkE.js";import{an as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const S={title:"Components/Divider",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed","dotted"]},labelPosition:{control:"select",options:["left","center","right"]}}},i={args:{}},t={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Content above"}),e.jsx(r,{children:"OR"}),e.jsx("p",{children:"Content below"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(r,{labelPosition:"left",children:"Left"}),e.jsx(r,{labelPosition:"center",children:"Center"}),e.jsx(r,{labelPosition:"right",children:"Right"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(r,{variant:"solid"}),e.jsx(r,{variant:"dashed"}),e.jsx(r,{variant:"dotted"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"50px"},children:[e.jsx("span",{children:"Left"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Center"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Right"})]})};var n,d,l;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div>
      <p>Content above</p>
      <Divider>OR</Divider>
      <p>Content below</p>
    </div>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,x,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Divider labelPosition="left">Left</Divider>
      <Divider labelPosition="center">Center</Divider>
      <Divider labelPosition="right">Right</Divider>
    </div>
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,j,y;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '50px'
  }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Center</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const T=["Default","WithText","TextPositions","Variants","Vertical"];export{i as Default,s as TextPositions,a as Variants,o as Vertical,t as WithText,T as __namedExportsOrder,S as default};
