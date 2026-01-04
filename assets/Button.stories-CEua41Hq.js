import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const ee={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","ghost","link","soft"],description:"The visual style of the button"},colorScheme:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"],description:"The color scheme of the button"},size:{control:"select",options:["sm","md","lg"],description:"The size of the button"},fullWidth:{control:"boolean",description:"Whether the button takes full width"},loading:{control:"boolean",description:"Whether the button is in loading state"},disabled:{control:"boolean",description:"Whether the button is disabled"}}},t={args:{children:"Button"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",children:"Solid"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsx(r,{variant:"link",children:"Link"}),e.jsx(r,{variant:"soft",children:"Soft"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{colorScheme:"primary",children:"Primary"}),e.jsx(r,{colorScheme:"secondary",children:"Secondary"}),e.jsx(r,{colorScheme:"success",children:"Success"}),e.jsx(r,{colorScheme:"danger",children:"Danger"}),e.jsx(r,{colorScheme:"warning",children:"Warning"}),e.jsx(r,{colorScheme:"info",children:"Info"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{variant:"outline",colorScheme:"primary",children:"Primary"}),e.jsx(r,{variant:"outline",colorScheme:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",colorScheme:"success",children:"Success"}),e.jsx(r,{variant:"outline",colorScheme:"danger",children:"Danger"}),e.jsx(r,{variant:"outline",colorScheme:"warning",children:"Warning"}),e.jsx(r,{variant:"outline",colorScheme:"info",children:"Info"})]})},i={args:{loading:!0,children:"Loading"}},c={args:{loading:!0,loadingText:"Please wait...",children:"Submit"}},l={args:{disabled:!0,children:"Disabled"}},d={args:{fullWidth:!0,children:"Full Width Button"},parameters:{layout:"padded"}},u={args:{leftIcon:e.jsx("span",{children:"←"}),children:"Back"}},m={args:{rightIcon:e.jsx("span",{children:"→"}),children:"Next"}},p={args:{iconOnly:!0,"aria-label":"Settings",children:"⚙️"}};var h,g,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(S=(g=t.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,B,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="soft">Soft</Button>
    </div>
}`,...(f=(B=n.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var y,v,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="secondary">Secondary</Button>
      <Button colorScheme="success">Success</Button>
      <Button colorScheme="danger">Danger</Button>
      <Button colorScheme="warning">Warning</Button>
      <Button colorScheme="info">Info</Button>
    </div>
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var W,b,I;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(I=(b=a.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var w,L,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Button variant="outline" colorScheme="primary">Primary</Button>
      <Button variant="outline" colorScheme="secondary">Secondary</Button>
      <Button variant="outline" colorScheme="success">Success</Button>
      <Button variant="outline" colorScheme="danger">Danger</Button>
      <Button variant="outline" colorScheme="warning">Warning</Button>
      <Button variant="outline" colorScheme="info">Info</Button>
    </div>
}`,...(z=(L=s.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var D,k,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Loading'
  }
}`,...(O=(k=i.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var T,P,F;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    loading: true,
    loadingText: 'Please wait...',
    children: 'Submit'
  }
}`,...(F=(P=c.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var V,C,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(R=(C=l.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var E,G,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var N,_,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    leftIcon: <span>←</span>,
    children: 'Back'
  }
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var A,H,J;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    rightIcon: <span>→</span>,
    children: 'Next'
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    iconOnly: true,
    'aria-label': 'Settings',
    children: '⚙️'
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const re=["Default","Variants","ColorSchemes","Sizes","OutlineVariants","Loading","LoadingWithText","Disabled","FullWidth","WithLeftIcon","WithRightIcon","IconOnly"];export{o as ColorSchemes,t as Default,l as Disabled,d as FullWidth,p as IconOnly,i as Loading,c as LoadingWithText,s as OutlineVariants,a as Sizes,n as Variants,u as WithLeftIcon,m as WithRightIcon,re as __namedExportsOrder,ee as default};
