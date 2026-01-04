import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aG as t,aH as r,I as l,B as a,aI as p,a9 as M,U as J}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Form",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","inline"]},size:{control:"select",options:["sm","md","lg"]}}},s={render:()=>e.jsxs(t,{style:{maxWidth:"400px"},children:[e.jsx(r,{label:"Username",required:!0,htmlFor:"username",children:e.jsx(l,{id:"username",placeholder:"Enter username",fullWidth:!0})}),e.jsx(r,{label:"Email",required:!0,htmlFor:"email",children:e.jsx(l,{id:"email",type:"email",placeholder:"Enter email",fullWidth:!0})}),e.jsx(r,{label:"Password",required:!0,htmlFor:"password",children:e.jsx(l,{id:"password",type:"password",placeholder:"Enter password",fullWidth:!0})}),e.jsx(r,{children:e.jsx(a,{type:"submit",children:"Submit"})})]})},o={render:()=>e.jsxs(t,{layout:"vertical",style:{maxWidth:"400px"},children:[e.jsx(r,{label:"Name",required:!0,children:e.jsx(l,{placeholder:"Your name",fullWidth:!0})}),e.jsx(r,{label:"Email",required:!0,children:e.jsx(l,{type:"email",placeholder:"your@email.com",fullWidth:!0})}),e.jsx(r,{label:"Message",children:e.jsx(p,{placeholder:"Your message",rows:4,fullWidth:!0})}),e.jsx(r,{children:e.jsx(a,{type:"submit",children:"Send Message"})})]})},m={render:()=>e.jsxs(t,{style:{maxWidth:"400px"},children:[e.jsx(r,{label:"Username",helperText:"Username must be 3-20 characters",required:!0,children:e.jsx(l,{placeholder:"Enter username",fullWidth:!0})}),e.jsx(r,{label:"Password",helperText:"Use at least 8 characters with numbers and symbols",required:!0,children:e.jsx(l,{type:"password",placeholder:"Enter password",fullWidth:!0})})]})},d={render:()=>e.jsxs(t,{style:{maxWidth:"400px"},children:[e.jsx(r,{label:"Email",error:"Please enter a valid email address",required:!0,children:e.jsx(l,{type:"email",defaultValue:"invalid-email",error:!0,fullWidth:!0})}),e.jsx(r,{label:"Password",error:"Password must be at least 8 characters",required:!0,children:e.jsx(l,{type:"password",defaultValue:"123",error:!0,fullWidth:!0})})]})},i={render:()=>e.jsxs(t,{requiredMark:"optional",style:{maxWidth:"400px"},children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(l,{placeholder:"John Doe",fullWidth:!0})}),e.jsx(r,{label:"Nickname",children:e.jsx(l,{placeholder:"Optional nickname",fullWidth:!0})}),e.jsx(r,{label:"Bio",children:e.jsx(p,{placeholder:"Tell us about yourself",rows:3,fullWidth:!0})})]})},u={render:()=>e.jsxs(t,{layout:"inline",children:[e.jsx(r,{label:"Name",children:e.jsx(l,{placeholder:"Name"})}),e.jsx(r,{label:"Email",children:e.jsx(l,{type:"email",placeholder:"Email"})}),e.jsx(r,{children:e.jsx(a,{type:"submit",children:"Search"})})]})},n={render:()=>e.jsxs(t,{style:{maxWidth:"500px"},children:[e.jsx(r,{label:"Full Name",required:!0,children:e.jsx(l,{placeholder:"John Doe",fullWidth:!0})}),e.jsx(r,{label:"Email",required:!0,helperText:"We'll never share your email",children:e.jsx(l,{type:"email",placeholder:"john@example.com",fullWidth:!0})}),e.jsx(r,{label:"Country",required:!0,children:e.jsx(M,{fullWidth:!0,placeholder:"Select country",options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}]})}),e.jsx(r,{label:"Message",children:e.jsx(p,{placeholder:"Your message...",rows:4,fullWidth:!0})}),e.jsx(r,{children:e.jsx(J,{label:"I agree to the terms and conditions"})}),e.jsx(r,{children:e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(a,{type:"submit",children:"Submit"}),e.jsx(a,{variant:"outline",type:"reset",children:"Reset"})]})})]})},c={render:()=>e.jsxs(t,{disabled:!0,style:{maxWidth:"400px"},children:[e.jsx(r,{label:"Name",children:e.jsx(l,{defaultValue:"John Doe",fullWidth:!0})}),e.jsx(r,{label:"Email",children:e.jsx(l,{defaultValue:"john@example.com",fullWidth:!0})}),e.jsx(r,{children:e.jsx(a,{type:"submit",children:"Submit"})})]})};var h,x,F;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Form style={{
    maxWidth: '400px'
  }}>
      <FormItem label="Username" required htmlFor="username">
        <Input id="username" placeholder="Enter username" fullWidth />
      </FormItem>
      <FormItem label="Email" required htmlFor="email">
        <Input id="email" type="email" placeholder="Enter email" fullWidth />
      </FormItem>
      <FormItem label="Password" required htmlFor="password">
        <Input id="password" type="password" placeholder="Enter password" fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit">Submit</Button>
      </FormItem>
    </Form>
}`,...(F=(x=s.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var b,I,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Form layout="vertical" style={{
    maxWidth: '400px'
  }}>
      <FormItem label="Name" required>
        <Input placeholder="Your name" fullWidth />
      </FormItem>
      <FormItem label="Email" required>
        <Input type="email" placeholder="your@email.com" fullWidth />
      </FormItem>
      <FormItem label="Message">
        <Textarea placeholder="Your message" rows={4} fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit">Send Message</Button>
      </FormItem>
    </Form>
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var y,W,f;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Form style={{
    maxWidth: '400px'
  }}>
      <FormItem label="Username" helperText="Username must be 3-20 characters" required>
        <Input placeholder="Enter username" fullWidth />
      </FormItem>
      <FormItem label="Password" helperText="Use at least 8 characters with numbers and symbols" required>
        <Input type="password" placeholder="Enter password" fullWidth />
      </FormItem>
    </Form>
}`,...(f=(W=m.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var w,q,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Form style={{
    maxWidth: '400px'
  }}>
      <FormItem label="Email" error="Please enter a valid email address" required>
        <Input type="email" defaultValue="invalid-email" error fullWidth />
      </FormItem>
      <FormItem label="Password" error="Password must be at least 8 characters" required>
        <Input type="password" defaultValue="123" error fullWidth />
      </FormItem>
    </Form>
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var g,S,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Form requiredMark="optional" style={{
    maxWidth: '400px'
  }}>
      <FormItem label="Full Name" required>
        <Input placeholder="John Doe" fullWidth />
      </FormItem>
      <FormItem label="Nickname">
        <Input placeholder="Optional nickname" fullWidth />
      </FormItem>
      <FormItem label="Bio">
        <Textarea placeholder="Tell us about yourself" rows={3} fullWidth />
      </FormItem>
    </Form>
}`,...(v=(S=i.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var B,T,N;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Form layout="inline">
      <FormItem label="Name">
        <Input placeholder="Name" />
      </FormItem>
      <FormItem label="Email">
        <Input type="email" placeholder="Email" />
      </FormItem>
      <FormItem>
        <Button type="submit">Search</Button>
      </FormItem>
    </Form>
}`,...(N=(T=u.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var U,k,D;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Form style={{
    maxWidth: '500px'
  }}>
      <FormItem label="Full Name" required>
        <Input placeholder="John Doe" fullWidth />
      </FormItem>
      <FormItem label="Email" required helperText="We'll never share your email">
        <Input type="email" placeholder="john@example.com" fullWidth />
      </FormItem>
      <FormItem label="Country" required>
        <Select fullWidth placeholder="Select country" options={[{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }, {
        value: 'au',
        label: 'Australia'
      }]} />
      </FormItem>
      <FormItem label="Message">
        <Textarea placeholder="Your message..." rows={4} fullWidth />
      </FormItem>
      <FormItem>
        <Checkbox label="I agree to the terms and conditions" />
      </FormItem>
      <FormItem>
        <div style={{
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="reset">Reset</Button>
        </div>
      </FormItem>
    </Form>
}`,...(D=(k=n.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var P,V,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Form disabled style={{
    maxWidth: '400px'
  }}>
      <FormItem label="Name">
        <Input defaultValue="John Doe" fullWidth />
      </FormItem>
      <FormItem label="Email">
        <Input defaultValue="john@example.com" fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit">Submit</Button>
      </FormItem>
    </Form>
}`,...(C=(V=c.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const z=["Default","VerticalLayout","WithHelperText","WithErrors","OptionalFields","InlineLayout","CompleteForm","DisabledForm"];export{n as CompleteForm,s as Default,c as DisabledForm,u as InlineLayout,i as OptionalFields,o as VerticalLayout,d as WithErrors,m as WithHelperText,z as __namedExportsOrder,R as default};
