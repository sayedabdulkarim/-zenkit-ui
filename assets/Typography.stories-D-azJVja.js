import{j as e}from"./jsx-runtime-DiklIkkE.js";import{d4 as r,d5 as h,d6 as y}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const ie={title:"Components/Typography",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body1","body2","caption","overline"]},color:{control:"select",options:["primary","secondary","success","danger","warning","info","muted","inherit"]},align:{control:"select",options:["left","center","right","justify"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]}}},i={args:{children:"The quick brown fox jumps over the lazy dog."}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{variant:"h1",children:"Heading 1"}),e.jsx(r,{variant:"h2",children:"Heading 2"}),e.jsx(r,{variant:"h3",children:"Heading 3"}),e.jsx(r,{variant:"h4",children:"Heading 4"}),e.jsx(r,{variant:"h5",children:"Heading 5"}),e.jsx(r,{variant:"h6",children:"Heading 6"})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{variant:"body1",children:"Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(r,{variant:"body2",children:"Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsx(r,{variant:"caption",children:"Caption - Small text for additional information"}),e.jsx(r,{variant:"overline",children:"OVERLINE TEXT"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{color:"primary",children:"Primary color text"}),e.jsx(r,{color:"secondary",children:"Secondary color text"}),e.jsx(r,{color:"success",children:"Success color text"}),e.jsx(r,{color:"danger",children:"Danger color text"}),e.jsx(r,{color:"warning",children:"Warning color text"}),e.jsx(r,{color:"info",children:"Info color text"}),e.jsx(r,{color:"muted",children:"Muted color text"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{weight:"light",children:"Light weight text"}),e.jsx(r,{weight:"normal",children:"Normal weight text"}),e.jsx(r,{weight:"medium",children:"Medium weight text"}),e.jsx(r,{weight:"semibold",children:"Semibold weight text"}),e.jsx(r,{weight:"bold",children:"Bold weight text"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(r,{italic:!0,children:"Italic text"}),e.jsx(r,{underline:!0,children:"Underlined text"}),e.jsx(r,{strikethrough:!0,children:"Strikethrough text"}),e.jsx(r,{italic:!0,weight:"bold",underline:!0,children:"Combined styles"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{align:"left",children:"Left aligned text"}),e.jsx(r,{align:"center",children:"Center aligned text"}),e.jsx(r,{align:"right",children:"Right aligned text"}),e.jsx(r,{align:"justify",children:"Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},d={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(r,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width."})})},c={render:()=>e.jsx("div",{style:{maxWidth:"300px"},children:e.jsx(r,{lineClamp:2,children:"This is a long text that will be clamped to 2 lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."})})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(h,{level:1,children:"Heading Level 1"}),e.jsx(h,{level:2,children:"Heading Level 2"}),e.jsx(h,{level:3,color:"primary",children:"Heading Level 3 (Primary)"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(y,{children:"Regular size text (md)"}),e.jsx(y,{size:"sm",children:"Small size text (sm)"}),e.jsx(y,{color:"muted",children:"Muted text"})]})},m={args:{as:"span",variant:"h3",children:"This is a span styled as h3"}};var x,u,T;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...(T=(u=i.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var v,f,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
}`,...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,S,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Typography variant="body1">
        Body 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="body2">
        Body 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Typography variant="caption">
        Caption - Small text for additional information
      </Typography>
      <Typography variant="overline">
        OVERLINE TEXT
      </Typography>
    </div>
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var H,L,D;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="success">Success color text</Typography>
      <Typography color="danger">Danger color text</Typography>
      <Typography color="warning">Warning color text</Typography>
      <Typography color="info">Info color text</Typography>
      <Typography color="muted">Muted color text</Typography>
    </div>
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var C,q,E;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
}`,...(E=(q=n.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var z,B,W;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      <Typography italic>Italic text</Typography>
      <Typography underline>Underlined text</Typography>
      <Typography strikethrough>Strikethrough text</Typography>
      <Typography italic weight="bold" underline>Combined styles</Typography>
    </div>
}`,...(W=(B=s.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var R,k,I;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,N,P;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <Typography truncate>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width.
      </Typography>
    </div>
}`,...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var U,O,A;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <Typography lineClamp={2}>
        This is a long text that will be clamped to 2 lines. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </Typography>
    </div>
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var J,V,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3} color="primary">Heading Level 3 (Primary)</Heading>
    </div>
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var _,F,G;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Text>Regular size text (md)</Text>
      <Text size="sm">Small size text (sm)</Text>
      <Text color="muted">Muted text</Text>
    </div>
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,Q,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    as: 'span',
    variant: 'h3',
    children: 'This is a span styled as h3'
  }
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const te=["Default","Headings","BodyText","Colors","Weights","TextStyles","Alignment","Truncation","LineClamp","HeadingComponent","TextComponent","CustomElement"];export{l as Alignment,a as BodyText,o as Colors,m as CustomElement,i as Default,p as HeadingComponent,t as Headings,c as LineClamp,g as TextComponent,s as TextStyles,d as Truncation,n as Weights,te as __namedExportsOrder,ie as default};
