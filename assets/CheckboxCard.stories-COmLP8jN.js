import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as h}from"./index-DRjF_FHU.js";import{V as s}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const N={title:"Components/CheckboxCard",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},checkboxPosition:{control:"select",options:["top-start","top-end","hidden"]}}},c={render:()=>{const[a,r]=h.useState(!1);return e.jsx(s,{label:"Basic Plan",description:"Perfect for small projects",checked:a,onChange:t=>r(t.target.checked)})}},l={render:()=>{const[a,r]=h.useState(!0);return e.jsx(s,{label:"Premium Plan",description:"All features included",icon:e.jsx("span",{style:{fontSize:"2rem"},children:"⭐"}),checked:a,onChange:t=>r(t.target.checked)})}},o={render:()=>{const[a,r]=h.useState(["email"]),t=m=>{r(u=>u.includes(m)?u.filter(W=>W!==m):[...u,m])};return e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(s,{label:"Email",description:"Notifications via email",icon:e.jsx("span",{children:"📧"}),checked:a.includes("email"),onChange:()=>t("email")}),e.jsx(s,{label:"SMS",description:"Text message alerts",icon:e.jsx("span",{children:"📱"}),checked:a.includes("sms"),onChange:()=>t("sms")}),e.jsx(s,{label:"Push",description:"Browser notifications",icon:e.jsx("span",{children:"🔔"}),checked:a.includes("push"),onChange:()=>t("push")})]})}},d={render:()=>{const[a,r]=h.useState("monthly");return e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{name:"billing",label:"Monthly",description:"$9/month",radio:!0,checked:a==="monthly",onChange:()=>r("monthly")}),e.jsx(s,{name:"billing",label:"Yearly",description:"$99/year (save 17%)",radio:!0,checked:a==="yearly",onChange:()=>r("yearly")})]})}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-start"},children:[e.jsx(s,{size:"sm",label:"Small",description:"Compact size",defaultChecked:!0}),e.jsx(s,{size:"md",label:"Medium",description:"Default size",defaultChecked:!0}),e.jsx(s,{size:"lg",label:"Large",description:"Larger size",defaultChecked:!0})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{label:"Top Start",checkboxPosition:"top-start",defaultChecked:!0}),e.jsx(s,{label:"Top End",checkboxPosition:"top-end",defaultChecked:!0}),e.jsx(s,{label:"Hidden",checkboxPosition:"hidden",defaultChecked:!0})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{label:"Disabled Unchecked",disabled:!0}),e.jsx(s,{label:"Disabled Checked",disabled:!0,defaultChecked:!0})]})};var C,k,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <CheckboxCard label="Basic Plan" description="Perfect for small projects" checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var b,g,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <CheckboxCard label="Premium Plan" description="All features included" icon={<span style={{
      fontSize: '2rem'
    }}>⭐</span>} checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,S,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);
    const toggleSelection = (value: string) => {
      setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
    return <div style={{
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }}>
        <CheckboxCard label="Email" description="Notifications via email" icon={<span>📧</span>} checked={selected.includes('email')} onChange={() => toggleSelection('email')} />
        <CheckboxCard label="SMS" description="Text message alerts" icon={<span>📱</span>} checked={selected.includes('sms')} onChange={() => toggleSelection('sms')} />
        <CheckboxCard label="Push" description="Browser notifications" icon={<span>🔔</span>} checked={selected.includes('push')} onChange={() => toggleSelection('push')} />
      </div>;
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,P,z;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('monthly');
    return <div style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <CheckboxCard name="billing" label="Monthly" description="$9/month" radio checked={selected === 'monthly'} onChange={() => setSelected('monthly')} />
        <CheckboxCard name="billing" label="Yearly" description="$99/year (save 17%)" radio checked={selected === 'yearly'} onChange={() => setSelected('yearly')} />
      </div>;
  }
}`,...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var D,E,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start'
  }}>
      <CheckboxCard size="sm" label="Small" description="Compact size" defaultChecked />
      <CheckboxCard size="md" label="Medium" description="Default size" defaultChecked />
      <CheckboxCard size="lg" label="Large" description="Larger size" defaultChecked />
    </div>
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var M,w,B;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <CheckboxCard label="Top Start" checkboxPosition="top-start" defaultChecked />
      <CheckboxCard label="Top End" checkboxPosition="top-end" defaultChecked />
      <CheckboxCard label="Hidden" checkboxPosition="hidden" defaultChecked />
    </div>
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var G,I,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <CheckboxCard label="Disabled Unchecked" disabled />
      <CheckboxCard label="Disabled Checked" disabled defaultChecked />
    </div>
}`,...(L=(I=p.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const U=["Default","WithIcon","SelectionGroup","RadioGroup","Sizes","CheckboxPositions","Disabled"];export{n as CheckboxPositions,c as Default,p as Disabled,d as RadioGroup,o as SelectionGroup,i as Sizes,l as WithIcon,U as __namedExportsOrder,N as default};
