import{j as r}from"./jsx-runtime-DiklIkkE.js";import{aU as e,u as a,B as W}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const k={title:"Components/Indicator",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","success","warning","error"]},position:{control:"select",options:["top-start","top-end","bottom-start","bottom-end"]},size:{control:"select",options:["xs","sm","md","lg"]}}},o={render:()=>r.jsx(e,{children:r.jsx(a,{name:"John Doe"})})},s={render:()=>r.jsx(e,{label:5,children:r.jsx(a,{name:"Jane Smith"})})},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsx(e,{color:"primary",children:r.jsx(a,{name:"A"})}),r.jsx(e,{color:"secondary",children:r.jsx(a,{name:"B"})}),r.jsx(e,{color:"success",children:r.jsx(a,{name:"C"})}),r.jsx(e,{color:"warning",children:r.jsx(a,{name:"D"})}),r.jsx(e,{color:"error",children:r.jsx(a,{name:"E"})})]})},t={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsx(e,{position:"top-start",label:"1",children:r.jsx(a,{name:"TS"})}),r.jsx(e,{position:"top-end",label:"2",children:r.jsx(a,{name:"TE"})}),r.jsx(e,{position:"bottom-start",label:"3",children:r.jsx(a,{name:"BS"})}),r.jsx(e,{position:"bottom-end",label:"4",children:r.jsx(a,{name:"BE"})})]})},c={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsx(e,{size:"xs",children:r.jsx(a,{name:"XS"})}),r.jsx(e,{size:"sm",children:r.jsx(a,{name:"SM"})}),r.jsx(e,{size:"md",children:r.jsx(a,{name:"MD"})}),r.jsx(e,{size:"lg",children:r.jsx(a,{name:"LG"})})]})},i={render:()=>r.jsx(e,{label:3,color:"error",children:r.jsx(W,{children:"Notifications"})})},d={render:()=>r.jsx(e,{processing:!0,color:"success",children:r.jsx(a,{name:"Online"})})},l={render:()=>r.jsx(e,{disabled:!0,children:r.jsx(a,{name:"No Indicator"})})},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[r.jsx(e,{label:5,children:r.jsx(a,{name:"A"})}),r.jsx(e,{label:99,children:r.jsx(a,{name:"B"})}),r.jsx(e,{label:"99+",overflowCount:99,children:r.jsx(a,{name:"C"})})]})};var p,x,j;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Indicator>
      <Avatar name="John Doe" />
    </Indicator>
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var u,I,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Indicator label={5}>
      <Avatar name="Jane Smith" />
    </Indicator>
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var b,h,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Indicator color="primary"><Avatar name="A" /></Indicator>
      <Indicator color="secondary"><Avatar name="B" /></Indicator>
      <Indicator color="success"><Avatar name="C" /></Indicator>
      <Indicator color="warning"><Avatar name="D" /></Indicator>
      <Indicator color="error"><Avatar name="E" /></Indicator>
    </div>
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var A,y,S;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Indicator position="top-start" label="1"><Avatar name="TS" /></Indicator>
      <Indicator position="top-end" label="2"><Avatar name="TE" /></Indicator>
      <Indicator position="bottom-start" label="3"><Avatar name="BS" /></Indicator>
      <Indicator position="bottom-end" label="4"><Avatar name="BE" /></Indicator>
    </div>
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,B,z;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Indicator size="xs"><Avatar name="XS" /></Indicator>
      <Indicator size="sm"><Avatar name="SM" /></Indicator>
      <Indicator size="md"><Avatar name="MD" /></Indicator>
      <Indicator size="lg"><Avatar name="LG" /></Indicator>
    </div>
}`,...(z=(B=c.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var D,C,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Indicator label={3} color="error">
      <Button>Notifications</Button>
    </Indicator>
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var w,O,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Indicator processing color="success">
      <Avatar name="Online" />
    </Indicator>
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var T,J,M;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Indicator disabled>
      <Avatar name="No Indicator" />
    </Indicator>
}`,...(M=(J=l.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var N,P,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <Indicator label={5}><Avatar name="A" /></Indicator>
      <Indicator label={99}><Avatar name="B" /></Indicator>
      <Indicator label="99+" overflowCount={99}><Avatar name="C" /></Indicator>
    </div>
}`,...(G=(P=m.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const q=["Default","WithLabel","Colors","Positions","Sizes","OnButton","Processing","Disabled","OverflowLabel"];export{n as Colors,o as Default,l as Disabled,i as OnButton,m as OverflowLabel,t as Positions,d as Processing,c as Sizes,s as WithLabel,q as __namedExportsOrder,k as default};
