import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cP as i,cQ as n}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const N={title:"Components/Timeline",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{mode:{control:"select",options:["left","right","alternate"]}}},r={render:()=>e.jsxs(i,{children:[e.jsx(n,{children:"Create a services site 2015-09-01"}),e.jsx(n,{children:"Solve initial network problems 2015-09-01"}),e.jsx(n,{children:"Technical testing 2015-09-01"}),e.jsx(n,{children:"Network problems being solved 2015-09-01"})]})},t={render:()=>e.jsxs(i,{children:[e.jsx(n,{color:"primary",children:"Primary event"}),e.jsx(n,{color:"success",children:"Success event"}),e.jsx(n,{color:"warning",children:"Warning event"}),e.jsx(n,{color:"danger",children:"Danger event"}),e.jsx(n,{color:"gray",children:"Gray event"})]})},m={render:()=>e.jsxs(i,{mode:"right",children:[e.jsx(n,{children:"Event 1"}),e.jsx(n,{children:"Event 2"}),e.jsx(n,{children:"Event 3"})]})},s={render:()=>e.jsxs(i,{mode:"alternate",children:[e.jsx(n,{children:"Create account 2015-09-01"}),e.jsx(n,{color:"success",children:"Verify email 2015-09-02"}),e.jsx(n,{children:"Complete profile 2015-09-03"}),e.jsx(n,{color:"success",children:"First purchase 2015-09-04"})]})},l={render:()=>e.jsxs(i,{mode:"alternate",children:[e.jsx(n,{label:"2015-09-01",children:"Create account"}),e.jsx(n,{label:"2015-09-02",children:"Verify email"}),e.jsx(n,{label:"2015-09-03",children:"Complete profile"}),e.jsx(n,{label:"2015-09-04",children:"First purchase"})]})},o={render:()=>e.jsxs(i,{pending:"Recording...",children:[e.jsx(n,{children:"Create account 2015-09-01"}),e.jsx(n,{children:"Verify email 2015-09-02"}),e.jsx(n,{children:"Complete profile 2015-09-03"})]})},a={render:()=>e.jsxs(i,{children:[e.jsx(n,{dot:e.jsx("span",{children:"🚀"}),children:"Project launched"}),e.jsx(n,{dot:e.jsx("span",{children:"📝"}),children:"Documentation written"}),e.jsx(n,{dot:e.jsx("span",{children:"✅"}),children:"Testing complete"}),e.jsx(n,{dot:e.jsx("span",{children:"🎉"}),children:"Released to production"})]})},c={render:()=>e.jsxs(i,{reverse:!0,children:[e.jsx(n,{children:"Event 1 (oldest)"}),e.jsx(n,{children:"Event 2"}),e.jsx(n,{children:"Event 3"}),e.jsx(n,{children:"Event 4 (newest)"})]})};var d,T,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Timeline>
      <TimelineItem>Create a services site 2015-09-01</TimelineItem>
      <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
    </Timeline>
}`,...(p=(T=r.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var I,h,u;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Timeline>
      <TimelineItem color="primary">Primary event</TimelineItem>
      <TimelineItem color="success">Success event</TimelineItem>
      <TimelineItem color="warning">Warning event</TimelineItem>
      <TimelineItem color="danger">Danger event</TimelineItem>
      <TimelineItem color="gray">Gray event</TimelineItem>
    </Timeline>
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var j,x,g;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Timeline mode="right">
      <TimelineItem>Event 1</TimelineItem>
      <TimelineItem>Event 2</TimelineItem>
      <TimelineItem>Event 3</TimelineItem>
    </Timeline>
}`,...(g=(x=m.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,C,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Timeline mode="alternate">
      <TimelineItem>Create account 2015-09-01</TimelineItem>
      <TimelineItem color="success">Verify email 2015-09-02</TimelineItem>
      <TimelineItem>Complete profile 2015-09-03</TimelineItem>
      <TimelineItem color="success">First purchase 2015-09-04</TimelineItem>
    </Timeline>
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var b,y,E;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Timeline mode="alternate">
      <TimelineItem label="2015-09-01">Create account</TimelineItem>
      <TimelineItem label="2015-09-02">Verify email</TimelineItem>
      <TimelineItem label="2015-09-03">Complete profile</TimelineItem>
      <TimelineItem label="2015-09-04">First purchase</TimelineItem>
    </Timeline>
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,w,R;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Timeline pending="Recording...">
      <TimelineItem>Create account 2015-09-01</TimelineItem>
      <TimelineItem>Verify email 2015-09-02</TimelineItem>
      <TimelineItem>Complete profile 2015-09-03</TimelineItem>
    </Timeline>
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var D,P,V;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Timeline>
      <TimelineItem dot={<span>🚀</span>}>Project launched</TimelineItem>
      <TimelineItem dot={<span>📝</span>}>Documentation written</TimelineItem>
      <TimelineItem dot={<span>✅</span>}>Testing complete</TimelineItem>
      <TimelineItem dot={<span>🎉</span>}>Released to production</TimelineItem>
    </Timeline>
}`,...(V=(P=a.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var k,F,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Timeline reverse>
      <TimelineItem>Event 1 (oldest)</TimelineItem>
      <TimelineItem>Event 2</TimelineItem>
      <TimelineItem>Event 3</TimelineItem>
      <TimelineItem>Event 4 (newest)</TimelineItem>
    </Timeline>
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const _=["Default","Colors","RightMode","Alternate","WithLabels","Pending","CustomDot","Reverse"];export{s as Alternate,t as Colors,a as CustomDot,r as Default,o as Pending,c as Reverse,m as RightMode,l as WithLabels,_ as __namedExportsOrder,N as default};
