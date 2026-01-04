import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as n}from"./index-DRjF_FHU.js";import{bC as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const B={title:"Data Entry/PinInput",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>{const[t,s]=n.useState("");return e.jsx(r,{value:t,onChange:s,length:4})}},o={render:()=>{const[t,s]=n.useState("");return e.jsx(r,{value:t,onChange:s,length:6})}},l={render:()=>{const[t,s]=n.useState("");return e.jsx(r,{value:t,onChange:s,length:4,mask:!0})}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{length:4,size:"sm"}),e.jsx(r,{length:4,size:"md"}),e.jsx(r,{length:4,size:"lg"})]})},c={render:()=>{const[t,s]=n.useState(""),[N,T]=n.useState(!1);return e.jsxs("div",{children:[e.jsx(r,{value:t,onChange:s,length:4,onComplete:_=>{T(!0),console.log("Completed:",_)}}),N&&e.jsx("p",{style:{marginTop:"1rem",color:"green"},children:"PIN completed!"})]})}},p={args:{length:4,disabled:!0,value:"1234"}},m={args:{length:4,error:!0,value:"1234"}};var d,i,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <PinInput value={value} onChange={setValue} length={4} />;
  }
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var h,v,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <PinInput value={value} onChange={setValue} length={6} />;
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,C,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <PinInput value={value} onChange={setValue} length={4} mask />;
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,V,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <PinInput length={4} size="sm" />
      <PinInput length={4} size="md" />
      <PinInput length={4} size="lg" />
    </div>
}`,...(I=(V=u.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var P,D,y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [completed, setCompleted] = useState(false);
    return <div>
        <PinInput value={value} onChange={setValue} length={4} onComplete={val => {
        setCompleted(true);
        console.log('Completed:', val);
      }} />
        {completed && <p style={{
        marginTop: '1rem',
        color: 'green'
      }}>PIN completed!</p>}
      </div>;
  }
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var z,E,b;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    length: 4,
    disabled: true,
    value: '1234'
  }
}`,...(b=(E=p.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var k,O,M;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    length: 4,
    error: true,
    value: '1234'
  }
}`,...(M=(O=m.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const F=["Default","SixDigits","Masked","Sizes","OnComplete","Disabled","Error"];export{a as Default,p as Disabled,m as Error,l as Masked,c as OnComplete,o as SixDigits,u as Sizes,F as __namedExportsOrder,B as default};
