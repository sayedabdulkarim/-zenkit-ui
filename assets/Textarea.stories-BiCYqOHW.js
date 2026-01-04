import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aI as d}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const L={title:"Components/Textarea",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},r={args:{placeholder:"Enter your message...",rows:4}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(d,{size:"sm",placeholder:"Small textarea",rows:3}),e.jsx(d,{size:"md",placeholder:"Medium textarea",rows:3}),e.jsx(d,{size:"lg",placeholder:"Large textarea",rows:3})]})},s={args:{placeholder:"Start typing... I will grow!",autoGrow:!0,minRows:2,maxRows:8}},t={args:{placeholder:"Max 100 characters...",showCount:!0,maxLength:100,rows:3}},o={args:{placeholder:"Invalid input",error:!0,defaultValue:"This field has an error",rows:3}},l={args:{placeholder:"Disabled textarea",disabled:!0,defaultValue:"Cannot edit this",rows:3}},n={args:{placeholder:"Full width textarea",fullWidth:!0,rows:4},parameters:{layout:"padded"}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your message...',
    rows: 4
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Textarea size="sm" placeholder="Small textarea" rows={3} />
      <Textarea size="md" placeholder="Medium textarea" rows={3} />
      <Textarea size="lg" placeholder="Large textarea" rows={3} />
    </div>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,x,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Start typing... I will grow!',
    autoGrow: true,
    minRows: 2,
    maxRows: 8
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var f,S,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Max 100 characters...',
    showCount: true,
    maxLength: 100,
    rows: 3
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var z,C,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: 'Invalid input',
    error: true,
    defaultValue: 'This field has an error',
    rows: 3
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var T,b,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    defaultValue: 'Cannot edit this',
    rows: 3
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var E,W,v;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full width textarea',
    fullWidth: true,
    rows: 4
  },
  parameters: {
    layout: 'padded'
  }
}`,...(v=(W=n.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};const M=["Default","Sizes","AutoGrow","WithCharacterCount","ErrorState","Disabled","FullWidth"];export{s as AutoGrow,r as Default,l as Disabled,o as ErrorState,n as FullWidth,a as Sizes,t as WithCharacterCount,M as __namedExportsOrder,L as default};
