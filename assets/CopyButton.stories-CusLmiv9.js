import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ac as r,B as _}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const F={title:"Components/CopyButton",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","filled","outline","subtle"]}}},a={args:{value:"Text to copy"}},o={args:{value:"npm install @zenkit-ui/core",copyLabel:"Copy",copiedLabel:"Copied!"}},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 1rem",background:"#1e1e1e",borderRadius:"4px"},children:[e.jsx("code",{style:{color:"#d4d4d4"},children:"npm install @zenkit-ui/core"}),e.jsx(r,{value:"npm install @zenkit-ui/core"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{value:"small",size:"sm"}),e.jsx(r,{value:"medium",size:"md"}),e.jsx(r,{value:"large",size:"lg"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{value:"default",variant:"default"}),e.jsx(r,{value:"filled",variant:"filled"}),e.jsx(r,{value:"outline",variant:"outline"}),e.jsx(r,{value:"subtle",variant:"subtle"})]})},n={args:{value:"Copied for 5 seconds",timeout:5e3,copyLabel:"Click me",copiedLabel:"Done!"}},i={render:()=>e.jsx(r,{value:"Custom render prop",children:({copied:c,copy:V})=>e.jsx(_,{onClick:V,color:c?"success":"primary",children:c?"Copied!":"Copy to clipboard"})})},d={args:{value:"Cannot copy",disabled:!0}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'Text to copy'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,y,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 'npm install @zenkit-ui/core',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!'
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var C,x,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: '#1e1e1e',
    borderRadius: '4px'
  }}>
      <code style={{
      color: '#d4d4d4'
    }}>npm install @zenkit-ui/core</code>
      <CopyButton value="npm install @zenkit-ui/core" />
    </div>
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,j,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <CopyButton value="small" size="sm" />
      <CopyButton value="medium" size="md" />
      <CopyButton value="large" size="lg" />
    </div>
}`,...(B=(j=t.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var z,k,h;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <CopyButton value="default" variant="default" />
      <CopyButton value="filled" variant="filled" />
      <CopyButton value="outline" variant="outline" />
      <CopyButton value="subtle" variant="subtle" />
    </div>
}`,...(h=(k=l.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var L,S,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 'Copied for 5 seconds',
    timeout: 5000,
    copyLabel: 'Click me',
    copiedLabel: 'Done!'
  }
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var R,T,I;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <CopyButton value="Custom render prop">
      {({
      copied,
      copy
    }) => <Button onClick={copy} color={copied ? 'success' : 'primary'}>
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </Button>}
    </CopyButton>
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,E,P;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 'Cannot copy',
    disabled: true
  }
}`,...(P=(E=d.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const G=["Default","CustomLabels","WithCode","Sizes","Variants","CustomTimeout","WithRenderProp","Disabled"];export{o as CustomLabels,n as CustomTimeout,a as Default,d as Disabled,t as Sizes,l as Variants,s as WithCode,i as WithRenderProp,G as __namedExportsOrder,F as default};
