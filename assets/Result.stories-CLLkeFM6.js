import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bR as s,B as t}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const q={title:"Components/Result",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["success","error","info","warning","404","403","500"]}}},r={args:{status:"success",title:"Successfully Purchased!",subtitle:"Order number: 2017182818828182881"}},o={args:{status:"error",title:"Submission Failed",subtitle:"Please check and modify the following information before resubmitting."}},a={args:{status:"info",title:"Your operation has been executed",subtitle:"The process will take 1-2 business days to complete."}},n={args:{status:"warning",title:"There are some problems with your operation",subtitle:"Please review the warnings and try again."}},i={render:()=>e.jsx(s,{status:"404",title:"404",subtitle:"Sorry, the page you visited does not exist.",extra:e.jsx(t,{children:"Back Home"})})},u={render:()=>e.jsx(s,{status:"403",title:"403",subtitle:"Sorry, you are not authorized to access this page.",extra:e.jsx(t,{children:"Back Home"})})},c={render:()=>e.jsx(s,{status:"500",title:"500",subtitle:"Sorry, something went wrong on our server.",extra:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(t,{children:"Back Home"}),e.jsx(t,{variant:"outlined",children:"Contact Support"})]})})},l={render:()=>e.jsx(s,{status:"success",title:"Payment Successful",subtitle:"Your payment of $199.00 has been processed.",extra:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(t,{children:"View Order"}),e.jsx(t,{variant:"outlined",children:"Continue Shopping"})]})})},d={render:()=>e.jsx(s,{icon:e.jsx("span",{style:{fontSize:"72px"},children:"🎉"}),title:"Congratulations!",subtitle:"You have successfully completed the onboarding process.",extra:e.jsx(t,{children:"Get Started"})})};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: 'Successfully Purchased!',
    subtitle: 'Order number: 2017182818828182881'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: 'error',
    title: 'Submission Failed',
    subtitle: 'Please check and modify the following information before resubmitting.'
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,S,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Your operation has been executed',
    subtitle: 'The process will take 1-2 business days to complete.'
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var B,v,w;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    title: 'There are some problems with your operation',
    subtitle: 'Please review the warnings and try again.'
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,k,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Result status="404" title="404" subtitle="Sorry, the page you visited does not exist." extra={<Button>Back Home</Button>} />
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,E,P;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Result status="403" title="403" subtitle="Sorry, you are not authorized to access this page." extra={<Button>Back Home</Button>} />
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,H,Y;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Result status="500" title="500" subtitle="Sorry, something went wrong on our server." extra={<div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
          <Button>Back Home</Button>
          <Button variant="outlined">Contact Support</Button>
        </div>} />
}`,...(Y=(H=c.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var O,T,z;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Result status="success" title="Payment Successful" subtitle="Your payment of $199.00 has been processed." extra={<div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
          <Button>View Order</Button>
          <Button variant="outlined">Continue Shopping</Button>
        </div>} />
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var I,W,G;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Result icon={<span style={{
    fontSize: '72px'
  }}>🎉</span>} title="Congratulations!" subtitle="You have successfully completed the onboarding process." extra={<Button>Get Started</Button>} />
}`,...(G=(W=d.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const A=["Success","Error","Info","Warning","NotFound","Forbidden","ServerError","WithExtra","CustomIcon"];export{d as CustomIcon,o as Error,u as Forbidden,a as Info,i as NotFound,c as ServerError,r as Success,n as Warning,l as WithExtra,A as __namedExportsOrder,q as default};
