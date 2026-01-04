import{j as n}from"./jsx-runtime-DiklIkkE.js";import{r as m}from"./index-DRjF_FHU.js";import{J as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const _={title:"Data Display/Calendar",component:t,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>{const[a,r]=m.useState(new Date);return n.jsx(t,{value:a,onChange:r})}},o={render:()=>{const[a,r]=m.useState(new Date),e=new Date;return n.jsx(t,{value:a,onChange:r,events:[{date:new Date(e.getFullYear(),e.getMonth(),5),title:"Meeting"},{date:new Date(e.getFullYear(),e.getMonth(),15),title:"Launch"},{date:new Date(e.getFullYear(),e.getMonth(),25),title:"Review"}]})}},d={render:()=>{const[a,r]=m.useState(new Date);return n.jsx(t,{value:a,onChange:r,fullScreen:!0})},parameters:{layout:"fullscreen"}},l={render:()=>n.jsx(t,{mode:"month",value:new Date})},u={render:()=>n.jsx(t,{mode:"year",value:new Date})},c={args:{value:new Date,disabled:!0}};var i,D,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar value={date} onChange={setDate} />;
  }
}`,...(p=(D=s.parameters)==null?void 0:D.docs)==null?void 0:p.source}}};var g,w,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    const today = new Date();
    return <Calendar value={date} onChange={setDate} events={[{
      date: new Date(today.getFullYear(), today.getMonth(), 5),
      title: 'Meeting'
    }, {
      date: new Date(today.getFullYear(), today.getMonth(), 15),
      title: 'Launch'
    }, {
      date: new Date(today.getFullYear(), today.getMonth(), 25),
      title: 'Review'
    }]} />;
  }
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var v,S,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <Calendar value={date} onChange={setDate} fullScreen />;
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,f,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Calendar mode="month" value={new Date()} />
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var M,F,Y;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Calendar mode="year" value={new Date()} />
}`,...(Y=(F=u.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var j,E,b;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: new Date(),
    disabled: true
  }
}`,...(b=(E=c.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const J=["Default","WithEvents","FullScreen","MonthView","YearView","Disabled"];export{s as Default,c as Disabled,d as FullScreen,l as MonthView,o as WithEvents,u as YearView,J as __namedExportsOrder,_ as default};
