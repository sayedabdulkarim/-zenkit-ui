import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as s,B as p}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const X={title:"Components/Alert",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{status:{control:"select",options:["info","success","warning","danger"]},variant:{control:"select",options:["filled","outlined","soft"]}}},i={args:{children:"This is an informational alert message."}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{status:"info",children:"This is an info alert — check it out!"}),e.jsx(s,{status:"success",children:"This is a success alert — great job!"}),e.jsx(s,{status:"warning",children:"This is a warning alert — be careful!"}),e.jsx(s,{status:"danger",children:"This is a danger alert — something went wrong!"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{status:"info",title:"Information",children:"This alert provides additional information about something."}),e.jsx(s,{status:"success",title:"Success!",children:"Your changes have been saved successfully."}),e.jsx(s,{status:"warning",title:"Warning",children:"Please review your input before proceeding."}),e.jsx(s,{status:"danger",title:"Error",children:"There was an error processing your request."})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{status:"info",variant:"soft",title:"Soft Variant",children:"This is the default soft/subtle variant."}),e.jsx(s,{status:"info",variant:"outlined",title:"Outlined Variant",children:"This is the outlined variant with a border."}),e.jsx(s,{status:"info",variant:"filled",title:"Filled Variant",children:"This is the filled variant with solid background."})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{status:"info",closable:!0,onClose:()=>console.log("Alert closed"),children:"This alert can be dismissed by clicking the close button."}),e.jsx(s,{status:"success",closable:!0,title:"Dismissible Alert",children:"Click the X to close this alert."})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{status:"info",title:"Update Available",action:e.jsx(p,{size:"sm",children:"Update Now"}),children:"A new version is available. Would you like to update?"}),e.jsx(s,{status:"warning",title:"Session Expiring",action:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(p,{size:"sm",children:"Extend"}),e.jsx(p,{size:"sm",variant:"ghost",children:"Logout"})]}),children:"Your session will expire in 5 minutes."})]})},c={args:{status:"info",icon:e.jsx("span",{style:{fontSize:"20px"},children:"🔔"}),title:"Notification",children:"You have a new notification!"}},d={args:{status:"info",icon:null,children:"This alert has no icon."}},u={render:()=>e.jsx("div",{style:{display:"grid",gap:"1rem"},children:["info","success","warning","danger"].map(t=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs(s,{status:t,variant:"soft",style:{flex:1},children:[t," soft"]}),e.jsxs(s,{status:t,variant:"outlined",style:{flex:1},children:[t," outlined"]}),e.jsxs(s,{status:t,variant:"filled",style:{flex:1},children:[t," filled"]})]},t))})};var m,f,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational alert message.'
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,x,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert status="info">This is an info alert — check it out!</Alert>
      <Alert status="success">This is a success alert — great job!</Alert>
      <Alert status="warning">This is a warning alert — be careful!</Alert>
      <Alert status="danger">This is a danger alert — something went wrong!</Alert>
    </div>
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,A,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert status="info" title="Information">
        This alert provides additional information about something.
      </Alert>
      <Alert status="success" title="Success!">
        Your changes have been saved successfully.
      </Alert>
      <Alert status="warning" title="Warning">
        Please review your input before proceeding.
      </Alert>
      <Alert status="danger" title="Error">
        There was an error processing your request.
      </Alert>
    </div>
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var j,w,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert status="info" variant="soft" title="Soft Variant">
        This is the default soft/subtle variant.
      </Alert>
      <Alert status="info" variant="outlined" title="Outlined Variant">
        This is the outlined variant with a border.
      </Alert>
      <Alert status="info" variant="filled" title="Filled Variant">
        This is the filled variant with solid background.
      </Alert>
    </div>
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var S,D,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert status="info" closable onClose={() => console.log('Alert closed')}>
        This alert can be dismissed by clicking the close button.
      </Alert>
      <Alert status="success" closable title="Dismissible Alert">
        Click the X to close this alert.
      </Alert>
    </div>
}`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var V,C,z;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Alert status="info" title="Update Available" action={<Button size="sm">Update Now</Button>}>
        A new version is available. Would you like to update?
      </Alert>
      <Alert status="warning" title="Session Expiring" action={<div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
            <Button size="sm">Extend</Button>
            <Button size="sm" variant="ghost">Logout</Button>
          </div>}>
        Your session will expire in 5 minutes.
      </Alert>
    </div>
}`,...(z=(C=o.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var B,E,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'info',
    icon: <span style={{
      fontSize: '20px'
    }}>🔔</span>,
    title: 'Notification',
    children: 'You have a new notification!'
  }
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var I,N,Y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'info',
    icon: null,
    children: 'This alert has no icon.'
  }
}`,...(Y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var U,O,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '1rem'
  }}>
      {(['info', 'success', 'warning', 'danger'] as const).map(status => <div key={status} style={{
      display: 'flex',
      gap: '1rem'
    }}>
          <Alert status={status} variant="soft" style={{
        flex: 1
      }}>
            {status} soft
          </Alert>
          <Alert status={status} variant="outlined" style={{
        flex: 1
      }}>
            {status} outlined
          </Alert>
          <Alert status={status} variant="filled" style={{
        flex: 1
      }}>
            {status} filled
          </Alert>
        </div>)}
    </div>
}`,...(q=(O=u.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const _=["Default","Status","WithTitle","Variants","Closable","WithAction","CustomIcon","NoIcon","AllVariantsGrid"];export{u as AllVariantsGrid,l as Closable,c as CustomIcon,i as Default,d as NoIcon,r as Status,n as Variants,o as WithAction,a as WithTitle,_ as __namedExportsOrder,X as default};
