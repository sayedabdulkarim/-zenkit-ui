import{j as e}from"./jsx-runtime-DiklIkkE.js";import{z as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const P={title:"Typography/Blockquote",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered","filled","minimal"],description:"The visual style of the blockquote"},colorScheme:{control:"select",options:["gray","primary","success","warning","danger"],description:"The color scheme"},size:{control:"select",options:["sm","md","lg"],description:"The size of the blockquote"}}},t={args:{children:"The only way to do great work is to love what you do.",cite:"Steve Jobs"}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"500px"},children:[e.jsx(o,{variant:"default",cite:"Default",children:"This is the default variant with a left border accent."}),e.jsx(o,{variant:"bordered",cite:"Bordered",children:"This is the bordered variant with a full border around."}),e.jsx(o,{variant:"filled",cite:"Filled",children:"This is the filled variant with a background color."}),e.jsx(o,{variant:"minimal",cite:"Minimal",children:"This is the minimal variant with just styling."})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"500px"},children:[e.jsx(o,{colorScheme:"gray",cite:"Gray",children:"A gray colored blockquote for neutral content."}),e.jsx(o,{colorScheme:"primary",cite:"Primary",children:"A primary colored blockquote for important content."}),e.jsx(o,{colorScheme:"success",cite:"Success",children:"A success colored blockquote for positive content."}),e.jsx(o,{colorScheme:"warning",cite:"Warning",children:"A warning colored blockquote for cautionary content."}),e.jsx(o,{colorScheme:"danger",cite:"Danger",children:"A danger colored blockquote for critical content."})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"500px"},children:[e.jsx(o,{size:"sm",cite:"Small",children:"This is a small blockquote with compact text."}),e.jsx(o,{size:"md",cite:"Medium",children:"This is a medium blockquote with standard text sizing."}),e.jsx(o,{size:"lg",cite:"Large",children:"This is a large blockquote with prominent text."})]})},c={args:{children:"Innovation distinguishes between a leader and a follower.",cite:"Steve Jobs",showIcon:!0}},s={args:{children:`The future belongs to those who believe in the beauty of their dreams.
    It is not the strongest of the species that survives, nor the most intelligent that survives.
    It is the one that is most adaptable to change.`,cite:"Charles Darwin",variant:"filled",colorScheme:"primary"}},l={args:{children:"Sometimes the simplest quotes need no attribution.",variant:"bordered"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"500px"},children:[e.jsx(o,{variant:"filled",colorScheme:"primary",cite:"Info",children:"Use primary for informational highlights."}),e.jsx(o,{variant:"filled",colorScheme:"success",cite:"Tip",children:"Pro tip: Use success for helpful suggestions."}),e.jsx(o,{variant:"filled",colorScheme:"warning",cite:"Warning",children:"Be careful with this approach."}),e.jsx(o,{variant:"filled",colorScheme:"danger",cite:"Important",children:"Critical information that requires attention."})]})};var d,h,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'The only way to do great work is to love what you do.',
    cite: 'Steve Jobs'
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '500px'
  }}>
      <Blockquote variant="default" cite="Default">
        This is the default variant with a left border accent.
      </Blockquote>
      <Blockquote variant="bordered" cite="Bordered">
        This is the bordered variant with a full border around.
      </Blockquote>
      <Blockquote variant="filled" cite="Filled">
        This is the filled variant with a background color.
      </Blockquote>
      <Blockquote variant="minimal" cite="Minimal">
        This is the minimal variant with just styling.
      </Blockquote>
    </div>
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '500px'
  }}>
      <Blockquote colorScheme="gray" cite="Gray">
        A gray colored blockquote for neutral content.
      </Blockquote>
      <Blockquote colorScheme="primary" cite="Primary">
        A primary colored blockquote for important content.
      </Blockquote>
      <Blockquote colorScheme="success" cite="Success">
        A success colored blockquote for positive content.
      </Blockquote>
      <Blockquote colorScheme="warning" cite="Warning">
        A warning colored blockquote for cautionary content.
      </Blockquote>
      <Blockquote colorScheme="danger" cite="Danger">
        A danger colored blockquote for critical content.
      </Blockquote>
    </div>
}`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,q,y;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '500px'
  }}>
      <Blockquote size="sm" cite="Small">
        This is a small blockquote with compact text.
      </Blockquote>
      <Blockquote size="md" cite="Medium">
        This is a medium blockquote with standard text sizing.
      </Blockquote>
      <Blockquote size="lg" cite="Large">
        This is a large blockquote with prominent text.
      </Blockquote>
    </div>
}`,...(y=(q=a.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var b,S,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Innovation distinguishes between a leader and a follower.',
    cite: 'Steve Jobs',
    showIcon: true
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var B,T,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: \`The future belongs to those who believe in the beauty of their dreams.
    It is not the strongest of the species that survives, nor the most intelligent that survives.
    It is the one that is most adaptable to change.\`,
    cite: 'Charles Darwin',
    variant: 'filled',
    colorScheme: 'primary'
  }
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var W,D,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Sometimes the simplest quotes need no attribution.',
    variant: 'bordered'
  }
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var z,A,C;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxWidth: '500px'
  }}>
      <Blockquote variant="filled" colorScheme="primary" cite="Info">
        Use primary for informational highlights.
      </Blockquote>
      <Blockquote variant="filled" colorScheme="success" cite="Tip">
        Pro tip: Use success for helpful suggestions.
      </Blockquote>
      <Blockquote variant="filled" colorScheme="warning" cite="Warning">
        Be careful with this approach.
      </Blockquote>
      <Blockquote variant="filled" colorScheme="danger" cite="Important">
        Critical information that requires attention.
      </Blockquote>
    </div>
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const U=["Default","Variants","ColorSchemes","Sizes","WithIcon","LongQuote","WithoutCitation","FilledWithColors"];export{i as ColorSchemes,t as Default,n as FilledWithColors,s as LongQuote,a as Sizes,r as Variants,c as WithIcon,l as WithoutCitation,U as __namedExportsOrder,P as default};
