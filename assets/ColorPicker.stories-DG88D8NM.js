import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{a4 as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const _={title:"Data Entry/ColorPicker",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>{const[o,s]=d.useState("#1890ff");return e.jsx(r,{value:o,onChange:s})}},t={render:()=>{const[o,s]=d.useState("#ff4d4f");return e.jsx(r,{value:o,onChange:s,presets:["#ff4d4f","#fa8c16","#fadb14","#52c41a","#13c2c2","#1890ff","#722ed1","#eb2f96"]})}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",value:"#1890ff"}),e.jsx(r,{size:"md",value:"#52c41a"}),e.jsx(r,{size:"lg",value:"#722ed1"})]})},c={render:()=>{const[o,s]=d.useState("rgba(24, 144, 255, 0.5)");return e.jsx(r,{value:o,onChange:s,showAlpha:!0})}},l={render:()=>{const[o,s]=d.useState("#1890ff");return e.jsx(r,{value:o,onChange:s,showInput:!0})}},u={args:{value:"#1890ff",disabled:!0}};var i,p,f;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState<string>('#1890ff');
    return <ColorPicker value={color} onChange={setColor} />;
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var m,g,C;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState<string>('#ff4d4f');
    return <ColorPicker value={color} onChange={setColor} presets={['#ff4d4f', '#fa8c16', '#fadb14', '#52c41a', '#13c2c2', '#1890ff', '#722ed1', '#eb2f96']} />;
  }
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,v,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <ColorPicker size="sm" value="#1890ff" />
      <ColorPicker size="md" value="#52c41a" />
      <ColorPicker size="lg" value="#722ed1" />
    </div>
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,P,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState<string>('rgba(24, 144, 255, 0.5)');
    return <ColorPicker value={color} onChange={setColor} showAlpha />;
  }
}`,...(b=(P=c.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var j,k,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState<string>('#1890ff');
    return <ColorPicker value={color} onChange={setColor} showInput />;
  }
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var y,I,W;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: '#1890ff',
    disabled: true
  }
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const O=["Default","WithPresets","Sizes","WithAlpha","WithInput","Disabled"];export{a as Default,u as Disabled,n as Sizes,c as WithAlpha,l as WithInput,t as WithPresets,O as __namedExportsOrder,_ as default};
