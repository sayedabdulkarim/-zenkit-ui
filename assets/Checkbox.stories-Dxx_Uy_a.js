import{j as e}from"./jsx-runtime-DiklIkkE.js";import{U as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const K={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorScheme:{control:"select",options:["primary","secondary","success","danger","warning","info"]}}},a={args:{label:"Accept terms and conditions"}},o={args:{label:"Checked checkbox",defaultChecked:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",label:"Small checkbox"}),e.jsx(r,{size:"md",label:"Medium checkbox"}),e.jsx(r,{size:"lg",label:"Large checkbox"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{colorScheme:"primary",label:"Primary",defaultChecked:!0}),e.jsx(r,{colorScheme:"secondary",label:"Secondary",defaultChecked:!0}),e.jsx(r,{colorScheme:"success",label:"Success",defaultChecked:!0}),e.jsx(r,{colorScheme:"danger",label:"Danger",defaultChecked:!0}),e.jsx(r,{colorScheme:"warning",label:"Warning",defaultChecked:!0}),e.jsx(r,{colorScheme:"info",label:"Info",defaultChecked:!0})]})},c={args:{label:"Indeterminate state",indeterminate:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Disabled unchecked",disabled:!0}),e.jsx(r,{label:"Disabled checked",disabled:!0,defaultChecked:!0})]})},d={args:{label:"Required field",error:!0}},n={args:{label:"Label on left side",labelPosition:"left"}},i={args:{"aria-label":"Checkbox without visible label"}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{label:"Option 1",name:"group"}),e.jsx(r,{label:"Option 2",name:"group",defaultChecked:!0}),e.jsx(r,{label:"Option 3",name:"group"}),e.jsx(r,{label:"Option 4 (disabled)",name:"group",disabled:!0})]})};var u,b,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var h,x,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Checked checkbox',
    defaultChecked: true
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var k,f,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,y,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Checkbox colorScheme="primary" label="Primary" defaultChecked />
      <Checkbox colorScheme="secondary" label="Secondary" defaultChecked />
      <Checkbox colorScheme="success" label="Success" defaultChecked />
      <Checkbox colorScheme="danger" label="Danger" defaultChecked />
      <Checkbox colorScheme="warning" label="Warning" defaultChecked />
      <Checkbox colorScheme="info" label="Info" defaultChecked />
    </div>
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var D,v,O;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate state',
    indeterminate: true
  }
}`,...(O=(v=c.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var L,z,I;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
}`,...(I=(z=t.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var W,w,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Required field',
    error: true
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var P,R,q;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Label on left side',
    labelPosition: 'left'
  }
}`,...(q=(R=n.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,G,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Checkbox without visible label'
  }
}`,...(M=(G=i.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var _,T,U;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <Checkbox label="Option 1" name="group" />
      <Checkbox label="Option 2" name="group" defaultChecked />
      <Checkbox label="Option 3" name="group" />
      <Checkbox label="Option 4 (disabled)" name="group" disabled />
    </div>
}`,...(U=(T=m.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};const N=["Default","Checked","Sizes","ColorSchemes","Indeterminate","Disabled","WithError","LabelOnLeft","WithoutLabel","CheckboxGroup"];export{m as CheckboxGroup,o as Checked,l as ColorSchemes,a as Default,t as Disabled,c as Indeterminate,n as LabelOnLeft,s as Sizes,d as WithError,i as WithoutLabel,N as __namedExportsOrder,K as default};
