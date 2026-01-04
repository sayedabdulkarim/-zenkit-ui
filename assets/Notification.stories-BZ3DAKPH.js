import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bt as s,B as c}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const D={title:"Components/Notification",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:"select",options:["info","success","warning","error"]}}},a={args:{message:"This is a notification message."}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{type:"info",message:"This is an info notification.",duration:0}),e.jsx(s,{type:"success",message:"Your action was successful!",duration:0}),e.jsx(s,{type:"warning",message:"Please review before continuing.",duration:0}),e.jsx(s,{type:"error",message:"Something went wrong.",duration:0})]})},t={args:{type:"success",title:"Success!",message:"Your changes have been saved successfully.",duration:0}},n={args:{type:"info",title:"Update Available",message:"A new version is available for download.",duration:0,action:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:[e.jsx(c,{size:"sm",children:"Update Now"}),e.jsx(c,{size:"sm",variant:"outlined",children:"Later"})]})}},r={args:{type:"warning",message:"This notification cannot be closed manually.",closable:!1,duration:0}},i={args:{icon:e.jsx("span",{style:{fontSize:"20px"},children:"🎉"}),title:"Congratulations!",message:"You have completed all tasks.",duration:0}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: 'This is a notification message.'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Notification type="info" message="This is an info notification." duration={0} />
      <Notification type="success" message="Your action was successful!" duration={0} />
      <Notification type="warning" message="Please review before continuing." duration={0} />
      <Notification type="error" message="Something went wrong." duration={0} />
    </div>
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,y,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    duration: 0
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,x,w;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Update Available',
    message: 'A new version is available for download.',
    duration: 0,
    action: <div style={{
      display: 'flex',
      gap: '0.5rem',
      marginTop: '0.5rem'
    }}>
        <Button size="sm">Update Now</Button>
        <Button size="sm" variant="outlined">Later</Button>
      </div>
  }
}`,...(w=(x=n.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,T,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    message: 'This notification cannot be closed manually.',
    closable: false,
    duration: 0
  }
}`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var j,N,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: <span style={{
      fontSize: '20px'
    }}>🎉</span>,
    title: 'Congratulations!',
    message: 'You have completed all tasks.',
    duration: 0
  }
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};const U=["Default","Types","WithTitle","WithAction","NotClosable","CustomIcon"];export{i as CustomIcon,a as Default,r as NotClosable,o as Types,n as WithAction,t as WithTitle,U as __namedExportsOrder,D as default};
