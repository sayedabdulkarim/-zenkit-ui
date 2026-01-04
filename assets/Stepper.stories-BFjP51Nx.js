import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{cu as r,cv as t,B as x}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const I={title:"Components/Stepper",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","secondary","success"]}}},M=()=>{const[p,s]=d.useState(1);return e.jsxs("div",{style:{width:"500px"},children:[e.jsxs(r,{activeStep:p,onStepChange:s,children:[e.jsx(t,{label:"Account",description:"Create your account"}),e.jsx(t,{label:"Verify",description:"Verify email address"}),e.jsx(t,{label:"Complete",description:"Get started!"})]}),e.jsxs("div",{style:{marginTop:"2rem",display:"flex",gap:"0.5rem",justifyContent:"center"},children:[e.jsx(x,{onClick:()=>s(Math.max(0,p-1)),disabled:p===0,children:"Back"}),e.jsx(x,{onClick:()=>s(Math.min(2,p+1)),disabled:p===2,children:"Next"})]})]})},l={render:()=>e.jsx(M,{})},a={render:()=>{const[p,s]=d.useState(1);return e.jsx("div",{style:{width:"300px"},children:e.jsxs(r,{activeStep:p,onStepChange:s,orientation:"vertical",children:[e.jsx(t,{label:"Step 1",description:"First step description"}),e.jsx(t,{label:"Step 2",description:"Second step description"}),e.jsx(t,{label:"Step 3",description:"Third step description"}),e.jsx(t,{label:"Step 4",description:"Final step"})]})})}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs(r,{activeStep:1,color:"primary",children:[e.jsx(t,{label:"One"}),e.jsx(t,{label:"Two"}),e.jsx(t,{label:"Three"})]}),e.jsxs(r,{activeStep:1,color:"secondary",children:[e.jsx(t,{label:"One"}),e.jsx(t,{label:"Two"}),e.jsx(t,{label:"Three"})]}),e.jsxs(r,{activeStep:1,color:"success",children:[e.jsx(t,{label:"One"}),e.jsx(t,{label:"Two"}),e.jsx(t,{label:"Three"})]})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs(r,{activeStep:1,size:"sm",children:[e.jsx(t,{label:"Small"}),e.jsx(t,{label:"Steps"}),e.jsx(t,{label:"Here"})]}),e.jsxs(r,{activeStep:1,size:"md",children:[e.jsx(t,{label:"Medium"}),e.jsx(t,{label:"Steps"}),e.jsx(t,{label:"Here"})]}),e.jsxs(r,{activeStep:1,size:"lg",children:[e.jsx(t,{label:"Large"}),e.jsx(t,{label:"Steps"}),e.jsx(t,{label:"Here"})]})]})},c={render:()=>{const[p,s]=d.useState(1);return e.jsx("div",{style:{width:"500px"},children:e.jsxs(r,{activeStep:p,onStepChange:s,children:[e.jsx(t,{label:"Cart",icon:"🛒"}),e.jsx(t,{label:"Shipping",icon:"📦"}),e.jsx(t,{label:"Payment",icon:"💳"}),e.jsx(t,{label:"Complete",icon:"✅"})]})})}},n={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(r,{activeStep:1,children:[e.jsx(t,{label:"Details"}),e.jsx(t,{label:"Verification",error:!0}),e.jsx(t,{label:"Complete"})]})})},S={render:()=>e.jsx("div",{style:{width:"500px"},children:e.jsxs(r,{activeStep:1,children:[e.jsx(t,{label:"Submitted"}),e.jsx(t,{label:"Processing",loading:!0}),e.jsx(t,{label:"Complete"})]})})};var m,b,j;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <StepperExample />
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,u,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      width: '300px'
    }}>
        <Stepper activeStep={active} onStepChange={setActive} orientation="vertical">
          <StepperStep label="Step 1" description="First step description" />
          <StepperStep label="Step 2" description="Second step description" />
          <StepperStep label="Step 3" description="Third step description" />
          <StepperStep label="Step 4" description="Final step" />
        </Stepper>
      </div>;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Stepper activeStep={1} color="primary">
        <StepperStep label="One" />
        <StepperStep label="Two" />
        <StepperStep label="Three" />
      </Stepper>
      <Stepper activeStep={1} color="secondary">
        <StepperStep label="One" />
        <StepperStep label="Two" />
        <StepperStep label="Three" />
      </Stepper>
      <Stepper activeStep={1} color="success">
        <StepperStep label="One" />
        <StepperStep label="Two" />
        <StepperStep label="Three" />
      </Stepper>
    </div>
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,T,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Stepper activeStep={1} size="sm">
        <StepperStep label="Small" />
        <StepperStep label="Steps" />
        <StepperStep label="Here" />
      </Stepper>
      <Stepper activeStep={1} size="md">
        <StepperStep label="Medium" />
        <StepperStep label="Steps" />
        <StepperStep label="Here" />
      </Stepper>
      <Stepper activeStep={1} size="lg">
        <StepperStep label="Large" />
        <StepperStep label="Steps" />
        <StepperStep label="Here" />
      </Stepper>
    </div>
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var z,A,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      width: '500px'
    }}>
        <Stepper activeStep={active} onStepChange={setActive}>
          <StepperStep label="Cart" icon="🛒" />
          <StepperStep label="Shipping" icon="📦" />
          <StepperStep label="Payment" icon="💳" />
          <StepperStep label="Complete" icon="✅" />
        </Stepper>
      </div>;
  }
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var E,O,H;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <Stepper activeStep={1}>
        <StepperStep label="Details" />
        <StepperStep label="Verification" error />
        <StepperStep label="Complete" />
      </Stepper>
    </div>
}`,...(H=(O=n.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var V,F,L;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <Stepper activeStep={1}>
        <StepperStep label="Submitted" />
        <StepperStep label="Processing" loading />
        <StepperStep label="Complete" />
      </Stepper>
    </div>
}`,...(L=(F=S.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};const _=["Default","Vertical","Colors","Sizes","WithIcons","WithError","Loading"];export{i as Colors,l as Default,S as Loading,o as Sizes,a as Vertical,n as WithError,c as WithIcons,_ as __namedExportsOrder,I as default};
