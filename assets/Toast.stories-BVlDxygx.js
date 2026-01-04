import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as N}from"./index-DRjF_FHU.js";import{cR as t,B as c}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const V={title:"Components/Toast",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"]},position:{control:"select",options:["top","top-left","top-right","bottom","bottom-left","bottom-right"]}}},a={args:{title:"Toast Title",message:"This is a toast message",isOpen:!0}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{title:"Info",message:"This is an info toast",variant:"info",isOpen:!0}),e.jsx(t,{title:"Success",message:"Operation completed successfully",variant:"success",isOpen:!0}),e.jsx(t,{title:"Warning",message:"This action may have consequences",variant:"warning",isOpen:!0}),e.jsx(t,{title:"Error",message:"Something went wrong",variant:"error",isOpen:!0})]})},o={args:{title:"New Update Available",message:"A new version is ready to install",variant:"info",isOpen:!0,action:e.jsx(c,{size:"sm",children:"Update Now"})}},i={args:{title:"Dismissible Toast",message:"Click the X to close this toast",closable:!0,isOpen:!0}},U=()=>{const[E,p]=N.useState([]);let D=0;const l=(s,A,k)=>{const u=++D;p(m=>[...m,{id:u,title:s,message:A,variant:k}]),setTimeout(()=>{p(m=>m.filter(B=>B.id!==u))},3e3)};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem"},children:[e.jsx(c,{onClick:()=>l("Info","Info toast message","info"),children:"Info Toast"}),e.jsx(c,{onClick:()=>l("Success","Success toast message","success"),children:"Success Toast"}),e.jsx(c,{onClick:()=>l("Error","Error toast message","error"),children:"Error Toast"})]}),e.jsx("div",{style:{position:"fixed",top:"1rem",right:"1rem",display:"flex",flexDirection:"column",gap:"0.5rem"},children:E.map(s=>e.jsx(t,{title:s.title,message:s.message,variant:s.variant,isOpen:!0},s.id))})]})},n={render:()=>e.jsx(U,{})};var d,g,f;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Toast Title',
    message: 'This is a toast message',
    isOpen: true
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Toast title="Info" message="This is an info toast" variant="info" isOpen />
      <Toast title="Success" message="Operation completed successfully" variant="success" isOpen />
      <Toast title="Warning" message="This action may have consequences" variant="warning" isOpen />
      <Toast title="Error" message="Something went wrong" variant="error" isOpen />
    </div>
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,O,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'New Update Available',
    message: 'A new version is ready to install',
    variant: 'info',
    isOpen: true,
    action: <Button size="sm">Update Now</Button>
  }
}`,...(j=(O=o.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var y,w,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible Toast',
    message: 'Click the X to close this toast',
    closable: true,
    isOpen: true
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var b,C,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <InteractiveToast />
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const X=["Default","Variants","WithActions","Closable","Interactive"];export{i as Closable,a as Default,n as Interactive,r as Variants,o as WithActions,X as __namedExportsOrder,V as default};
