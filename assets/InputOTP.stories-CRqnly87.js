import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{aW as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const _={title:"Data Entry/InputOTP",component:t,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[r,a]=s.useState("");return e.jsx(t,{value:r,onChange:a,length:6})}},o={render:()=>{const[r,a]=s.useState("");return e.jsx(t,{value:r,onChange:a,length:4})}},u={render:()=>{const[r,a]=s.useState("123456");return e.jsx(t,{value:r,onChange:a,length:6})}},l={render:()=>{const[r,a]=s.useState("");return e.jsx(t,{value:r,onChange:a,length:6,mask:!0})}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(t,{length:4,size:"sm"}),e.jsx(t,{length:4,size:"md"}),e.jsx(t,{length:4,size:"lg"})]})},p={args:{length:6,disabled:!0,value:"123456"}},d={render:()=>{const[r,a]=s.useState("");return e.jsx(t,{value:r,onChange:a,length:6,separator:e.jsx("span",{style:{margin:"0 0.5rem"},children:"-"}),separatorAfter:3})}};var m,i,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <InputOTP value={value} onChange={setValue} length={6} />;
  }
}`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var h,v,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <InputOTP value={value} onChange={setValue} length={4} />;
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,V,f;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('123456');
    return <InputOTP value={value} onChange={setValue} length={6} />;
  }
}`,...(f=(V=u.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var j,O,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <InputOTP value={value} onChange={setValue} length={6} mask />;
  }
}`,...(C=(O=l.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var I,P,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <InputOTP length={4} size="sm" />
      <InputOTP length={4} size="md" />
      <InputOTP length={4} size="lg" />
    </div>
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var D,y,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: '123456'
  }
}`,...(z=(y=p.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var W,b,k;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <InputOTP value={value} onChange={setValue} length={6} separator={<span style={{
      margin: '0 0.5rem'
    }}>-</span>} separatorAfter={3} />;
  }
}`,...(k=(b=d.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const R=["Default","FourDigits","WithValue","Masked","Sizes","Disabled","WithSeparator"];export{n as Default,p as Disabled,o as FourDigits,l as Masked,c as Sizes,d as WithSeparator,u as WithValue,R as __namedExportsOrder,_ as default};
