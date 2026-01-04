import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as n}from"./index-DRjF_FHU.js";import{cO as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const W={title:"Data Entry/TimePicker",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>{const[s,t]=n.useState("");return e.jsx(r,{value:s,onChange:t,placeholder:"Select time"})}},o={render:()=>{const[s,t]=n.useState("14:30");return e.jsx(r,{value:s,onChange:t,placeholder:"Select time"})}},i={render:()=>{const[s,t]=n.useState("");return e.jsx(r,{value:s,onChange:t,use12Hours:!0,placeholder:"Select time (12h)"})}},c={render:()=>{const[s,t]=n.useState("");return e.jsx(r,{value:s,onChange:t,showSeconds:!0,placeholder:"HH:MM:SS"})}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},l={args:{disabled:!0,value:"09:00"}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} placeholder="Select time" />;
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var S,h,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('14:30');
    return <TimePicker value={time} onChange={setTime} placeholder="Select time" />;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,x,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} use12Hours placeholder="Select time (12h)" />;
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,j,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string>('');
    return <TimePicker value={time} onChange={setTime} showSeconds placeholder="HH:MM:SS" />;
  }
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var P,z,C;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <TimePicker size="sm" placeholder="Small" />
      <TimePicker size="md" placeholder="Medium" />
      <TimePicker size="lg" placeholder="Large" />
    </div>
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var H,D,y;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: '09:00'
  }
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const L=["Default","WithValue","TwelveHour","WithSeconds","Sizes","Disabled"];export{a as Default,l as Disabled,m as Sizes,i as TwelveHour,c as WithSeconds,o as WithValue,L as __namedExportsOrder,W as default};
