import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{af as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const C={title:"Data Entry/DateRangePicker",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>{const[t,n]=d.useState([null,null]);return e.jsx(a,{value:t,onChange:n,placeholder:["Start date","End date"]})}},s={render:()=>{const[t,n]=d.useState([null,null]);return e.jsx(a,{value:t,onChange:n,presets:[{label:"Last 7 days",value:[new Date(Date.now()-7*24*60*60*1e3),new Date]},{label:"Last 30 days",value:[new Date(Date.now()-30*24*60*60*1e3),new Date]},{label:"This month",value:[new Date(new Date().getFullYear(),new Date().getMonth(),1),new Date]}]})}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{size:"sm",placeholder:["Start","End"]}),e.jsx(a,{size:"md",placeholder:["Start","End"]}),e.jsx(a,{size:"lg",placeholder:["Start","End"]})]})},o={args:{disabled:!0,value:[new Date,new Date(Date.now()+7*24*60*60*1e3)]}},c={render:()=>{const t=new Date,n=new Date(Date.now()+7*24*60*60*1e3),[k,b]=d.useState([t,n]);return e.jsx(a,{value:k,onChange:b})}};var u,D,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
    return <DateRangePicker value={range} onChange={setRange} placeholder={['Start date', 'End date']} />;
  }
}`,...(i=(D=r.parameters)==null?void 0:D.docs)==null?void 0:i.source}}};var g,p,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
    return <DateRangePicker value={range} onChange={setRange} presets={[{
      label: 'Last 7 days',
      value: [new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()]
    }, {
      label: 'Last 30 days',
      value: [new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), new Date()]
    }, {
      label: 'This month',
      value: [new Date(new Date().getFullYear(), new Date().getMonth(), 1), new Date()]
    }]} />;
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var w,h,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <DateRangePicker size="sm" placeholder={['Start', 'End']} />
      <DateRangePicker size="md" placeholder={['Start', 'End']} />
      <DateRangePicker size="lg" placeholder={['Start', 'End']} />
    </div>
}`,...(S=(h=l.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,R,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: [new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
  }
}`,...(v=(R=o.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var y,E,f;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const [range, setRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
    return <DateRangePicker value={range} onChange={setRange} />;
  }
}`,...(f=(E=c.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const L=["Default","WithPresets","Sizes","Disabled","WithValue"];export{r as Default,o as Disabled,l as Sizes,s as WithPresets,c as WithValue,L as __namedExportsOrder,C as default};
