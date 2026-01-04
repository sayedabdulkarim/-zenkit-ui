import{j as e}from"./jsx-runtime-DiklIkkE.js";import{az as i,aA as l,I as r,a9 as I,U as f}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const P={title:"Data Entry/Fieldset",component:i,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsxs(i,{legend:"Personal Information",style:{width:"400px"},children:[e.jsx(l,{label:"Full Name",required:!0,children:e.jsx(r,{placeholder:"Enter your name"})}),e.jsx(l,{label:"Email",required:!0,children:e.jsx(r,{type:"email",placeholder:"Enter your email"})}),e.jsx(l,{label:"Phone",children:e.jsx(r,{placeholder:"Enter your phone"})})]})},d={render:()=>e.jsxs(i,{legend:"Account Settings",description:"Configure your account preferences",style:{width:"400px"},children:[e.jsx(l,{label:"Username",description:"This will be your public display name",children:e.jsx(r,{placeholder:"username"})}),e.jsx(l,{label:"Language",children:e.jsxs(I,{children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"fr",children:"French"})]})})]})},a={render:()=>e.jsxs(i,{legend:"Disabled Fieldset",disabled:!0,style:{width:"400px"},children:[e.jsx(l,{label:"Name",children:e.jsx(r,{placeholder:"Disabled input"})}),e.jsx(l,{label:"Email",children:e.jsx(r,{type:"email",placeholder:"Disabled input"})})]})},t={render:()=>e.jsxs(i,{legend:"Registration",style:{width:"400px"},children:[e.jsx(l,{label:"Email",required:!0,error:"Please enter a valid email",children:e.jsx(r,{type:"email",placeholder:"Enter email",error:!0})}),e.jsx(l,{label:"Password",required:!0,children:e.jsx(r,{type:"password",placeholder:"Enter password"})}),e.jsx(l,{children:e.jsx(f,{children:"I agree to the terms and conditions"})})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"400px"},children:[e.jsxs(i,{legend:"Shipping Address",children:[e.jsx(l,{label:"Street",children:e.jsx(r,{placeholder:"Street address"})}),e.jsx(l,{label:"City",children:e.jsx(r,{placeholder:"City"})})]}),e.jsxs(i,{legend:"Billing Address",children:[e.jsx(l,{label:"Street",children:e.jsx(r,{placeholder:"Street address"})}),e.jsx(l,{label:"City",children:e.jsx(r,{placeholder:"City"})})]})]})};var o,p,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Personal Information" style={{
    width: '400px'
  }}>
      <Field label="Full Name" required>
        <Input placeholder="Enter your name" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="Enter your email" />
      </Field>
      <Field label="Phone">
        <Input placeholder="Enter your phone" />
      </Field>
    </Fieldset>
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,h,m;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Account Settings" description="Configure your account preferences" style={{
    width: '400px'
  }}>
      <Field label="Username" description="This will be your public display name">
        <Input placeholder="username" />
      </Field>
      <Field label="Language">
        <Select>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </Select>
      </Field>
    </Fieldset>
}`,...(m=(h=d.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,F,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Disabled Fieldset" disabled style={{
    width: '400px'
  }}>
      <Field label="Name">
        <Input placeholder="Disabled input" />
      </Field>
      <Field label="Email">
        <Input type="email" placeholder="Disabled input" />
      </Field>
    </Fieldset>
}`,...(b=(F=a.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var y,j,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Registration" style={{
    width: '400px'
  }}>
      <Field label="Email" required error="Please enter a valid email">
        <Input type="email" placeholder="Enter email" error />
      </Field>
      <Field label="Password" required>
        <Input type="password" placeholder="Enter password" />
      </Field>
      <Field>
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Field>
    </Fieldset>
}`,...(g=(j=t.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var S,E,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '400px'
  }}>
      <Fieldset legend="Shipping Address">
        <Field label="Street">
          <Input placeholder="Street address" />
        </Field>
        <Field label="City">
          <Input placeholder="City" />
        </Field>
      </Fieldset>
      <Fieldset legend="Billing Address">
        <Field label="Street">
          <Input placeholder="Street address" />
        </Field>
        <Field label="City">
          <Input placeholder="City" />
        </Field>
      </Fieldset>
    </div>
}`,...(w=(E=n.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};const A=["Default","WithDescription","Disabled","WithValidation","Multiple"];export{s as Default,a as Disabled,n as Multiple,d as WithDescription,t as WithValidation,A as __namedExportsOrder,P as default};
