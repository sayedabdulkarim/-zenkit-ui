import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as W}from"./index-DRjF_FHU.js";import{cw as n,cx as t,B as d}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const M={title:"Components/Steps",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{direction:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md"]}}},s={render:()=>e.jsxs(n,{current:1,children:[e.jsx(t,{title:"Login",description:"Log into your account"}),e.jsx(t,{title:"Verification",description:"Verify your identity"}),e.jsx(t,{title:"Payment",description:"Complete payment"}),e.jsx(t,{title:"Done",description:"Order confirmed"})]})},o={render:()=>{const[r,i]=W.useState(0);return e.jsxs("div",{children:[e.jsxs(n,{current:r,children:[e.jsx(t,{title:"Step 1"}),e.jsx(t,{title:"Step 2"}),e.jsx(t,{title:"Step 3"})]}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"0.5rem"},children:[e.jsx(d,{onClick:()=>i(Math.max(0,r-1)),disabled:r===0,children:"Previous"}),e.jsx(d,{onClick:()=>i(Math.min(2,r+1)),disabled:r===2,children:"Next"})]})]})}},c={render:()=>e.jsxs(n,{current:1,direction:"vertical",children:[e.jsx(t,{title:"Create Account",description:"Sign up for a new account"}),e.jsx(t,{title:"Configure Settings",description:"Set up your preferences"}),e.jsx(t,{title:"Invite Team",description:"Add team members"}),e.jsx(t,{title:"Start Working",description:"Begin using the platform"})]})},a={render:()=>e.jsxs(n,{current:1,children:[e.jsx(t,{title:"Login",status:"finish"}),e.jsx(t,{title:"Verification",status:"error",description:"Failed to verify"}),e.jsx(t,{title:"Payment"}),e.jsx(t,{title:"Done"})]})},p={render:()=>{const[r,i]=W.useState(1);return e.jsxs(n,{current:r,clickable:!0,onChange:i,children:[e.jsx(t,{title:"Cart"}),e.jsx(t,{title:"Shipping"}),e.jsx(t,{title:"Payment"}),e.jsx(t,{title:"Confirm"})]})}},l={render:()=>e.jsxs(n,{current:1,children:[e.jsx(t,{title:"Login",icon:e.jsx("span",{children:"👤"})}),e.jsx(t,{title:"Verify",icon:e.jsx("span",{children:"✉️"})}),e.jsx(t,{title:"Pay",icon:e.jsx("span",{children:"💳"})}),e.jsx(t,{title:"Done",icon:e.jsx("span",{children:"✓"})})]})};var u,m,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Steps current={1}>
      <Step title="Login" description="Log into your account" />
      <Step title="Verification" description="Verify your identity" />
      <Step title="Payment" description="Complete payment" />
      <Step title="Done" description="Order confirmed" />
    </Steps>
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var x,j,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    return <div>
        <Steps current={current}>
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
        <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
            Previous
          </Button>
          <Button onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>
            Next
          </Button>
        </div>
      </div>;
  }
}`,...(g=(j=o.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var f,h,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Steps current={1} direction="vertical">
      <Step title="Create Account" description="Sign up for a new account" />
      <Step title="Configure Settings" description="Set up your preferences" />
      <Step title="Invite Team" description="Add team members" />
      <Step title="Start Working" description="Begin using the platform" />
    </Steps>
}`,...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,v,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Steps current={1}>
      <Step title="Login" status="finish" />
      <Step title="Verification" status="error" description="Failed to verify" />
      <Step title="Payment" />
      <Step title="Done" />
    </Steps>
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,P,V;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <Steps current={current} clickable onChange={setCurrent}>
        <Step title="Cart" />
        <Step title="Shipping" />
        <Step title="Payment" />
        <Step title="Confirm" />
      </Steps>;
  }
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,D,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Steps current={1}>
      <Step title="Login" icon={<span>👤</span>} />
      <Step title="Verify" icon={<span>✉️</span>} />
      <Step title="Pay" icon={<span>💳</span>} />
      <Step title="Done" icon={<span>✓</span>} />
    </Steps>
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const w=["Default","Controlled","Vertical","WithError","Clickable","WithIcons"];export{p as Clickable,o as Controlled,s as Default,c as Vertical,a as WithError,l as WithIcons,w as __namedExportsOrder,M as default};
