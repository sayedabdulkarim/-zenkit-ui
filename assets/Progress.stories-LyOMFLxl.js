import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bG as s}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const G={title:"Components/Progress",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},size:{control:"select",options:["sm","md","lg"]},status:{control:"select",options:["default","success","warning","danger"]}}},r={args:{value:60}},a={args:{value:75,showLabel:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{value:60,size:"sm"}),e.jsx(s,{value:60,size:"md"}),e.jsx(s,{value:60,size:"lg"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{value:25,status:"default"}),e.jsx(s,{value:50,status:"success"}),e.jsx(s,{value:75,status:"warning"}),e.jsx(s,{value:90,status:"danger"})]})},n={args:{value:60,striped:!0}},u={args:{value:60,striped:!0,animated:!0}},c={args:{indeterminate:!0}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 75,
    showLabel: true
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,x,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Progress value={60} size="sm" />
      <Progress value={60} size="md" />
      <Progress value={60} size="lg" />
    </div>
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,j,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Progress value={25} status="default" />
      <Progress value={50} status="success" />
      <Progress value={75} status="warning" />
      <Progress value={90} status="danger" />
    </div>
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var z,P,h;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 60,
    striped: true
  }
}`,...(h=(P=n.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var D,b,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 60,
    striped: true,
    animated: true
  }
}`,...(w=(b=u.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var L,A,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const O=["Default","WithLabel","Sizes","Statuses","Striped","Animated","Indeterminate"];export{u as Animated,r as Default,c as Indeterminate,t as Sizes,o as Statuses,n as Striped,a as WithLabel,O as __namedExportsOrder,G as default};
