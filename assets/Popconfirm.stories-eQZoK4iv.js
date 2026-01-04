import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bD as o,B as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const Y={title:"Feedback/Popconfirm",component:o,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsx(o,{title:"Are you sure you want to delete this item?",onConfirm:()=>console.log("Confirmed"),onCancel:()=>console.log("Cancelled"),children:e.jsx(t,{variant:"danger",children:"Delete"})})},n={render:()=>e.jsx(o,{title:"Delete this file?",description:"This action cannot be undone. The file will be permanently removed.",onConfirm:()=>console.log("Confirmed"),children:e.jsx(t,{variant:"danger",children:"Delete File"})})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",padding:"4rem"},children:[e.jsx(o,{title:"Confirm action?",placement:"top",children:e.jsx(t,{children:"Top"})}),e.jsx(o,{title:"Confirm action?",placement:"bottom",children:e.jsx(t,{children:"Bottom"})}),e.jsx(o,{title:"Confirm action?",placement:"left",children:e.jsx(t,{children:"Left"})}),e.jsx(o,{title:"Confirm action?",placement:"right",children:e.jsx(t,{children:"Right"})})]})},a={render:()=>e.jsx(o,{title:"Save changes?",okText:"Save",cancelText:"Discard",okType:"primary",onConfirm:()=>console.log("Saved"),onCancel:()=>console.log("Discarded"),children:e.jsx(t,{children:"Save Draft"})})},c={render:()=>e.jsx(o,{title:"Delete account?",description:"All your data will be permanently deleted.",okText:"Yes, delete",okType:"danger",icon:"⚠️",onConfirm:()=>console.log("Deleted"),children:e.jsx(t,{variant:"danger",children:"Delete Account"})})},s={render:()=>e.jsx(o,{title:"Confirm?",disabled:!0,children:e.jsx(t,{disabled:!0,children:"Disabled"})})},l={render:()=>e.jsx(o,{title:"Submit form?",onConfirm:async()=>{await new Promise(F=>setTimeout(F,2e3)),console.log("Submitted")},children:e.jsx(t,{children:"Submit"})})};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Are you sure you want to delete this item?" onConfirm={() => console.log('Confirmed')} onCancel={() => console.log('Cancelled')}>
      <Button variant="danger">Delete</Button>
    </Popconfirm>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,f,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Delete this file?" description="This action cannot be undone. The file will be permanently removed." onConfirm={() => console.log('Confirmed')}>
      <Button variant="danger">Delete File</Button>
    </Popconfirm>
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,C,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    padding: '4rem'
  }}>
      <Popconfirm title="Confirm action?" placement="top">
        <Button>Top</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="bottom">
        <Button>Bottom</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="left">
        <Button>Left</Button>
      </Popconfirm>
      <Popconfirm title="Confirm action?" placement="right">
        <Button>Right</Button>
      </Popconfirm>
    </div>
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var D,B,P;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Save changes?" okText="Save" cancelText="Discard" okType="primary" onConfirm={() => console.log('Saved')} onCancel={() => console.log('Discarded')}>
      <Button>Save Draft</Button>
    </Popconfirm>
}`,...(P=(B=a.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var y,b,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Delete account?" description="All your data will be permanently deleted." okText="Yes, delete" okType="danger" icon="⚠️" onConfirm={() => console.log('Deleted')}>
      <Button variant="danger">Delete Account</Button>
    </Popconfirm>
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,S,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Confirm?" disabled>
      <Button disabled>Disabled</Button>
    </Popconfirm>
}`,...(T=(S=s.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var w,A,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Submit form?" onConfirm={async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submitted');
  }}>
      <Button>Submit</Button>
    </Popconfirm>
}`,...(k=(A=l.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const _=["Default","WithDescription","Positions","CustomButtons","DangerAction","Disabled","AsyncConfirm"];export{l as AsyncConfirm,a as CustomButtons,c as DangerAction,r as Default,s as Disabled,i as Positions,n as WithDescription,_ as __namedExportsOrder,Y as default};
