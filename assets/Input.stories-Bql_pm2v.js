import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const Q={title:"Components/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","email","password","number","tel","url"]}}},a={args:{placeholder:"Enter text..."}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{size:"sm",placeholder:"Small input"}),e.jsx(r,{size:"md",placeholder:"Medium input"}),e.jsx(r,{size:"lg",placeholder:"Large input"})]})},t={args:{placeholder:"Search...",prefix:e.jsx("span",{children:"🔍"})}},l={args:{placeholder:"Enter email",suffix:e.jsx("span",{children:"@example.com"})}},o={args:{placeholder:"Amount",prefix:e.jsx("span",{children:"$"}),suffix:e.jsx("span",{children:".00"})}},p={args:{placeholder:"Type something...",allowClear:!0,defaultValue:"Clear me!"}},n={args:{placeholder:"Invalid input",error:!0,defaultValue:"Invalid value"}},d={args:{placeholder:"Disabled input",disabled:!0,defaultValue:"Cannot edit"}},c={args:{type:"password",placeholder:"Enter password"}},i={args:{placeholder:"Full width input",fullWidth:!0},parameters:{layout:"padded"}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(r,{type:"text",placeholder:"Text"}),e.jsx(r,{type:"email",placeholder:"Email"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Number"}),e.jsx(r,{type:"tel",placeholder:"Phone"}),e.jsx(r,{type:"url",placeholder:"URL"})]})};var m,h,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,g,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,w,I;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    prefix: <span>🔍</span>
  }
}`,...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var j,v,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter email',
    suffix: <span>@example.com</span>
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var W,b,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Amount',
    prefix: <span>$</span>,
    suffix: <span>.00</span>
  }
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var P,z,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...',
    allowClear: true,
    defaultValue: 'Clear me!'
  }
}`,...(C=(z=p.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,A,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Invalid input',
    error: true,
    defaultValue: 'Invalid value'
  }
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var F,L,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    defaultValue: 'Cannot edit'
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var B,M,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var U,_,$;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width input',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,k,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="tel" placeholder="Phone" />
      <Input type="url" placeholder="URL" />
    </div>
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const X=["Default","Sizes","WithPrefix","WithSuffix","WithPrefixAndSuffix","WithClearButton","ErrorState","Disabled","PasswordInput","FullWidth","AllTypes"];export{u as AllTypes,a as Default,d as Disabled,n as ErrorState,i as FullWidth,c as PasswordInput,s as Sizes,p as WithClearButton,t as WithPrefix,o as WithPrefixAndSuffix,l as WithSuffix,X as __namedExportsOrder,Q as default};
