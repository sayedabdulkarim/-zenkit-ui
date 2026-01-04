import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{bz as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const q={title:"Data Entry/NumberInput",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[a,s]=t.useState(0);return e.jsx(r,{value:a,onChange:s,placeholder:"Enter number"})}},o={render:()=>{const[a,s]=t.useState(5);return e.jsx(r,{value:a,onChange:s,min:0,max:10,placeholder:"0-10"})}},u={render:()=>{const[a,s]=t.useState(0);return e.jsx(r,{value:a,onChange:s,step:5,placeholder:"Step: 5"})}},l={render:()=>{const[a,s]=t.useState(3.14);return e.jsx(r,{value:a,onChange:s,precision:2,step:.01,placeholder:"2 decimal places"})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},i={render:()=>{const[a,s]=t.useState(50);return e.jsx(r,{value:a,onChange:s,showControls:!0,min:0,max:100})}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"200px"},children:[e.jsx(r,{prefix:"$",placeholder:"Price"}),e.jsx(r,{suffix:"%",placeholder:"Percentage"}),e.jsx(r,{prefix:"$",suffix:"USD",placeholder:"Currency"})]})},d={args:{disabled:!0,value:100}};var m,h,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);
    return <NumberInput value={value} onChange={setValue} placeholder="Enter number" />;
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,g,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);
    return <NumberInput value={value} onChange={setValue} min={0} max={10} placeholder="0-10" />;
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var v,b,C;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(0);
    return <NumberInput value={value} onChange={setValue} step={5} placeholder="Step: 5" />;
  }
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var j,V,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(3.14);
    return <NumberInput value={value} onChange={setValue} precision={2} step={0.01} placeholder="2 decimal places" />;
  }
}`,...(I=(V=l.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var N,y,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '200px'
  }}>
      <NumberInput size="sm" placeholder="Small" />
      <NumberInput size="md" placeholder="Medium" />
      <NumberInput size="lg" placeholder="Large" />
    </div>
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var W,z,P;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(50);
    return <NumberInput value={value} onChange={setValue} showControls min={0} max={100} />;
  }
}`,...(P=(z=i.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var w,E,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '200px'
  }}>
      <NumberInput prefix="$" placeholder="Price" />
      <NumberInput suffix="%" placeholder="Percentage" />
      <NumberInput prefix="$" suffix="USD" placeholder="Currency" />
    </div>
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var $,L,U;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 100
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const A=["Default","WithMinMax","WithStep","WithPrecision","Sizes","WithControls","WithPrefixSuffix","Disabled"];export{n as Default,d as Disabled,c as Sizes,i as WithControls,o as WithMinMax,l as WithPrecision,p as WithPrefixSuffix,u as WithStep,A as __namedExportsOrder,q as default};
