import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as W}from"./index-DRjF_FHU.js";import{ce as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const A={title:"Components/Slider",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","secondary","success","danger","warning"]}}},s={args:{defaultValue:50}},t={render:()=>{const[a,i]=W.useState(30);return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(r,{value:a,onChange:c=>i(Number(c.target.value))}),e.jsxs("p",{children:["Value: ",a]})]})}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"300px"},children:[e.jsx(r,{size:"sm",defaultValue:25}),e.jsx(r,{size:"md",defaultValue:50}),e.jsx(r,{size:"lg",defaultValue:75})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",width:"300px"},children:[e.jsx(r,{color:"primary",defaultValue:50}),e.jsx(r,{color:"secondary",defaultValue:50}),e.jsx(r,{color:"success",defaultValue:50}),e.jsx(r,{color:"danger",defaultValue:50}),e.jsx(r,{color:"warning",defaultValue:50})]})},n={args:{defaultValue:50,showMarks:!0,min:0,max:100}},u={render:()=>{const[a,i]=W.useState(5);return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(r,{min:1,max:10,step:1,value:a,onChange:c=>i(Number(c.target.value)),showMarks:!0}),e.jsxs("p",{children:["Rating: ",a,"/10"]})]})}},d={args:{defaultValue:50,disabled:!0}};var m,p,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    defaultValue: 50
  }
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,f,V;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(30);
    return <div style={{
      width: '300px'
    }}>
        <Slider value={value} onChange={e => setValue(Number(e.target.value))} />
        <p>Value: {value}</p>
      </div>;
  }
}`,...(V=(f=t.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var v,S,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '300px'
  }}>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </div>
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,j,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '300px'
  }}>
      <Slider color="primary" defaultValue={50} />
      <Slider color="secondary" defaultValue={50} />
      <Slider color="success" defaultValue={50} />
      <Slider color="danger" defaultValue={50} />
      <Slider color="warning" defaultValue={50} />
    </div>
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,z,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    showMarks: true,
    min: 0,
    max: 100
  }
}`,...(b=(z=n.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var D,k,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(5);
    return <div style={{
      width: '300px'
    }}>
        <Slider min={1} max={10} step={1} value={value} onChange={e => setValue(Number(e.target.value))} showMarks />
        <p>Rating: {value}/10</p>
      </div>;
  }
}`,...(M=(k=u.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,N,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    disabled: true
  }
}`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const B=["Default","Controlled","Sizes","Colors","WithMarks","CustomRange","Disabled"];export{o as Colors,t as Controlled,u as CustomRange,s as Default,d as Disabled,l as Sizes,n as WithMarks,B as __namedExportsOrder,A as default};
