import{j as e}from"./jsx-runtime-DiklIkkE.js";import{be as s,B as n}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const H={title:"Feedback/Message",component:s,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(s,{type:"info",content:"This is an info message"}),e.jsx(s,{type:"success",content:"This is a success message"}),e.jsx(s,{type:"warning",content:"This is a warning message"}),e.jsx(s,{type:"error",content:"This is an error message"})]})},a={args:{type:"info",content:"This is an informational message."}},t={args:{type:"success",content:"Operation completed successfully!"}},c={args:{type:"warning",content:"Please review your changes before proceeding."}},i={args:{type:"error",content:"An error occurred while processing your request."}},p={args:{type:"info",content:"This message will disappear after 5 seconds",duration:5e3}},g={args:{type:"info",content:"Click the X to close this message",closable:!0}},u={args:{type:"loading",content:"Loading data..."}},l={render:()=>{const r=$=>{alert(`${$} message triggered`)};return e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(n,{onClick:()=>r("info"),children:"Info"}),e.jsx(n,{onClick:()=>r("success"),children:"Success"}),e.jsx(n,{onClick:()=>r("warning"),children:"Warning"}),e.jsx(n,{onClick:()=>r("error"),children:"Error"})]})}};var d,m,y;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Message type="info" content="This is an info message" />
      <Message type="success" content="This is a success message" />
      <Message type="warning" content="This is a warning message" />
      <Message type="error" content="This is an error message" />
    </div>
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,h,w;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'info',
    content: 'This is an informational message.'
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var x,S,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'success',
    content: 'Operation completed successfully!'
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,M,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    content: 'Please review your changes before proceeding.'
  }
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,v,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'error',
    content: 'An error occurred while processing your request.'
  }
}`,...(B=(v=i.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var b,I,D;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'info',
    content: 'This message will disappear after 5 seconds',
    duration: 5000
  }
}`,...(D=(I=p.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var E,W,L;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'info',
    content: 'Click the X to close this message',
    closable: true
  }
}`,...(L=(W=g.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var A,O,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'loading',
    content: 'Loading data...'
  }
}`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,X,_;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const showMessage = (type: 'info' | 'success' | 'warning' | 'error') => {
      // In real usage, you'd use the message API
      alert(\`\${type} message triggered\`);
    };
    return <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
        <Button onClick={() => showMessage('info')}>Info</Button>
        <Button onClick={() => showMessage('success')}>Success</Button>
        <Button onClick={() => showMessage('warning')}>Warning</Button>
        <Button onClick={() => showMessage('error')}>Error</Button>
      </div>;
  }
}`,...(_=(X=l.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};const J=["Default","Info","Success","Warning","Error","WithDuration","Closable","Loading","Interactive"];export{g as Closable,o as Default,i as Error,a as Info,l as Interactive,u as Loading,t as Success,c as Warning,p as WithDuration,J as __namedExportsOrder,H as default};
