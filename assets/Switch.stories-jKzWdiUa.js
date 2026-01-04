import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cy as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const G={title:"Components/Switch",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorScheme:{control:"select",options:["primary","secondary","success","danger","warning","info"]}}},a={args:{label:"Enable notifications"}},s={args:{label:"Feature enabled",defaultChecked:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",label:"Small switch"}),e.jsx(r,{size:"md",label:"Medium switch"}),e.jsx(r,{size:"lg",label:"Large switch"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{colorScheme:"primary",label:"Primary",defaultChecked:!0}),e.jsx(r,{colorScheme:"secondary",label:"Secondary",defaultChecked:!0}),e.jsx(r,{colorScheme:"success",label:"Success",defaultChecked:!0}),e.jsx(r,{colorScheme:"danger",label:"Danger",defaultChecked:!0}),e.jsx(r,{colorScheme:"warning",label:"Warning",defaultChecked:!0}),e.jsx(r,{colorScheme:"info",label:"Info",defaultChecked:!0})]})},c={args:{label:"Saving...",loading:!0,defaultChecked:!0}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{label:"Disabled off",disabled:!0}),e.jsx(r,{label:"Disabled on",disabled:!0,defaultChecked:!0})]})},i={args:{label:"Required toggle",error:!0}},d={args:{label:"Dark mode",labelPosition:"left"}},n={args:{"aria-label":"Toggle setting"}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Feature enabled',
    defaultChecked: true
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,S,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" />
      <Switch size="lg" label="Large switch" />
    </div>
}`,...(x=(S=l.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,C,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Switch colorScheme="primary" label="Primary" defaultChecked />
      <Switch colorScheme="secondary" label="Secondary" defaultChecked />
      <Switch colorScheme="success" label="Success" defaultChecked />
      <Switch colorScheme="danger" label="Danger" defaultChecked />
      <Switch colorScheme="warning" label="Warning" defaultChecked />
      <Switch colorScheme="info" label="Info" defaultChecked />
    </div>
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var w,D,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Saving...',
    loading: true,
    defaultChecked: true
  }
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var v,L,z;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
}`,...(z=(L=t.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var E,W,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Required toggle',
    error: true
  }
}`,...(P=(W=i.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var O,R,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Dark mode',
    labelPosition: 'left'
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,F,I;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Toggle setting'
  }
}`,...(I=(F=n.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const H=["Default","Checked","Sizes","ColorSchemes","Loading","Disabled","WithError","LabelOnLeft","WithoutLabel"];export{s as Checked,o as ColorSchemes,a as Default,t as Disabled,d as LabelOnLeft,c as Loading,l as Sizes,i as WithError,n as WithoutLabel,H as __namedExportsOrder,G as default};
