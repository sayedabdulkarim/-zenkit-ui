import{j as e}from"./jsx-runtime-DiklIkkE.js";import{y as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const P={title:"Components/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","soft","outline"]},color:{control:"select",options:["primary","secondary","success","danger","warning","info"]},size:{control:"select",options:["sm","md","lg"]}}},s={args:{children:"Badge"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"secondary",children:"Secondary"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{color:"danger",children:"Danger"}),e.jsx(r,{color:"warning",children:"Warning"}),e.jsx(r,{color:"info",children:"Info"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{variant:"solid",children:"Solid"}),e.jsx(r,{variant:"soft",children:"Soft"}),e.jsx(r,{variant:"outline",children:"Outline"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{pill:!0,color:"primary",children:"12"}),e.jsx(r,{pill:!0,color:"success",children:"99+"}),e.jsx(r,{pill:!0,color:"danger",children:"New"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsxs("span",{style:{position:"relative"},children:["Notifications",e.jsx(r,{dot:!0,color:"danger",style:{position:"absolute",top:0,right:-8}})]}),e.jsxs("span",{style:{position:"relative"},children:["Messages",e.jsx(r,{dot:!0,color:"success",style:{position:"absolute",top:0,right:-8}})]})]})};var d,n,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
    </div>
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,y,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var B,h,f;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var j,v,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Badge pill color="primary">12</Badge>
      <Badge pill color="success">99+</Badge>
      <Badge pill color="danger">New</Badge>
    </div>
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var z,D,I;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <span style={{
      position: 'relative'
    }}>
        Notifications
        <Badge dot color="danger" style={{
        position: 'absolute',
        top: 0,
        right: -8
      }} />
      </span>
      <span style={{
      position: 'relative'
    }}>
        Messages
        <Badge dot color="success" style={{
        position: 'absolute',
        top: 0,
        right: -8
      }} />
      </span>
    </div>
}`,...(I=(D=t.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const C=["Default","Colors","Variants","Sizes","Pill","Dot"];export{a as Colors,s as Default,t as Dot,l as Pill,i as Sizes,o as Variants,C as __namedExportsOrder,P as default};
