import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{cS as s}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const W={title:"Data Display/Toggle",component:s,parameters:{layout:"centered"},tags:["autodocs"]},l={render:()=>{const[r,a]=t.useState(!1);return e.jsx(s,{pressed:r,onPressedChange:a,children:"Toggle"})}},n={render:()=>{const[r,a]=t.useState(!0);return e.jsx(s,{pressed:r,onPressedChange:a,children:"Pressed"})}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{variant:"default",children:"Default"}),e.jsx(s,{variant:"outline",children:"Outline"}),e.jsx(s,{variant:"ghost",children:"Ghost"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{size:"md",children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})},i={render:()=>{const[r,a]=t.useState(!1),[B,U]=t.useState(!1),[E,O]=t.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(s,{pressed:r,onPressedChange:a,"aria-label":"Bold",children:e.jsx("strong",{children:"B"})}),e.jsx(s,{pressed:B,onPressedChange:U,"aria-label":"Italic",children:e.jsx("em",{children:"I"})}),e.jsx(s,{pressed:E,onPressedChange:O,"aria-label":"Underline",children:e.jsx("u",{children:"U"})})]})}},c={args:{disabled:!0,children:"Disabled"}};var g,p,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed}>
        Toggle
      </Toggle>;
  }
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(true);
    return <Toggle pressed={pressed} onPressedChange={setPressed}>
        Pressed
      </Toggle>;
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,f,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle variant="ghost">Ghost</Toggle>
    </div>
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var P,j,b;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <Toggle size="sm">Small</Toggle>
      <Toggle size="md">Medium</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var v,y,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
        <Toggle pressed={bold} onPressedChange={setBold} aria-label="Bold">
          <strong>B</strong>
        </Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Italic">
          <em>I</em>
        </Toggle>
        <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Underline">
          <u>U</u>
        </Toggle>
      </div>;
  }
}`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,D,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const _=["Default","Pressed","Variants","Sizes","WithIcons","Disabled"];export{l as Default,c as Disabled,n as Pressed,o as Sizes,d as Variants,i as WithIcons,_ as __namedExportsOrder,W as default};
