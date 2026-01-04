import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{a3 as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const _={title:"Components/ColorInput",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},format:{control:"select",options:["hex","rgb","hsl"]}}},l={render:()=>{const[a,r]=s.useState("#228be6");return e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{value:a,onChange:r})})}},o={render:()=>{const[a,r]=s.useState("#40c057");return e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{label:"Brand Color",value:a,onChange:r})})}},n={render:()=>{const[a,r]=s.useState("#fa5252");return e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{label:"Pick a color",value:a,onChange:r,swatches:["#228be6","#40c057","#fab005","#fa5252","#7950f2","#15aabf"]})})}},u={render:()=>{const[a,r]=s.useState("#228be6"),[E,B]=s.useState("rgb(34, 139, 230)"),[L,k]=s.useState("hsl(211, 100%, 50%)");return e.jsxs("div",{style:{width:"250px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{label:"HEX format",value:a,onChange:r,format:"hex"}),e.jsx(t,{label:"RGB format",value:E,onChange:B,format:"rgb"}),e.jsx(t,{label:"HSL format",value:L,onChange:k,format:"hsl"})]})}},d={render:()=>{const[a,r]=s.useState("rgba(34, 139, 230, 0.5)");return e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{label:"With Alpha",value:a,onChange:r,withAlpha:!0})})}},c={render:()=>e.jsxs("div",{style:{width:"250px",display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{size:"sm",defaultValue:"#228be6"}),e.jsx(t,{size:"md",defaultValue:"#40c057"}),e.jsx(t,{size:"lg",defaultValue:"#fa5252"})]})},i={args:{label:"Disabled",value:"#228be6",disabled:!0},decorators:[a=>e.jsx("div",{style:{width:"250px"},children:e.jsx(a,{})})]};var p,m,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('#228be6');
    return <div style={{
      width: '250px'
    }}>
        <ColorInput value={value} onChange={setValue} />
      </div>;
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,b,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('#40c057');
    return <div style={{
      width: '250px'
    }}>
        <ColorInput label="Brand Color" value={value} onChange={setValue} />
      </div>;
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,v,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('#fa5252');
    return <div style={{
      width: '250px'
    }}>
        <ColorInput label="Pick a color" value={value} onChange={setValue} swatches={['#228be6', '#40c057', '#fab005', '#fa5252', '#7950f2', '#15aabf']} />
      </div>;
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,y,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [hex, setHex] = useState('#228be6');
    const [rgb, setRgb] = useState('rgb(34, 139, 230)');
    const [hsl, setHsl] = useState('hsl(211, 100%, 50%)');
    return <div style={{
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <ColorInput label="HEX format" value={hex} onChange={setHex} format="hex" />
        <ColorInput label="RGB format" value={rgb} onChange={setRgb} format="rgb" />
        <ColorInput label="HSL format" value={hsl} onChange={setHsl} format="hsl" />
      </div>;
  }
}`,...(j=(y=u.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,V,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('rgba(34, 139, 230, 0.5)');
    return <div style={{
      width: '250px'
    }}>
        <ColorInput label="With Alpha" value={value} onChange={setValue} withAlpha />
      </div>;
  }
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var D,H,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <ColorInput size="sm" defaultValue="#228be6" />
      <ColorInput size="md" defaultValue="#40c057" />
      <ColorInput size="lg" defaultValue="#fa5252" />
    </div>
}`,...(z=(H=c.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var W,A,R;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    value: '#228be6',
    disabled: true
  },
  decorators: [Story => <div style={{
    width: '250px'
  }}><Story /></div>]
}`,...(R=(A=i.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const O=["Default","WithLabel","WithSwatches","Formats","WithAlpha","Sizes","Disabled"];export{l as Default,i as Disabled,u as Formats,c as Sizes,d as WithAlpha,o as WithLabel,n as WithSwatches,O as __namedExportsOrder,_ as default};
