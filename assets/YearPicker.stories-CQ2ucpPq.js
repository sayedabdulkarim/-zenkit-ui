import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{db as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const V={title:"Data Entry/YearPicker",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"The size of the input"},disabled:{control:"boolean",description:"Whether the picker is disabled"},clearable:{control:"boolean",description:"Whether the picker is clearable"}}},t={render:()=>{const[a,s]=u.useState(null);return e.jsx(r,{value:a,onChange:s,placeholder:"Select year"})}},n={render:()=>{const[a,s]=u.useState(new Date().getFullYear());return e.jsx(r,{value:a,onChange:s,placeholder:"Select year"})}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(r,{size:"sm",placeholder:"Small"}),e.jsx(r,{size:"md",placeholder:"Medium"}),e.jsx(r,{size:"lg",placeholder:"Large"})]})},l={args:{disabled:!0,placeholder:"Disabled"}},c={render:()=>{const[a,s]=u.useState(2024);return e.jsx(r,{value:a,onChange:s,clearable:!0,placeholder:"Clearable"})}},d={render:()=>{const a=new Date().getFullYear();return e.jsx(r,{minYear:a-10,maxYear:a+10,placeholder:"±10 years from now"})}},i={render:()=>e.jsx(r,{minYear:1990,maxYear:2030,placeholder:"1990 - 2030"})};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | null>(null);
    return <YearPicker value={year} onChange={setYear} placeholder="Select year" />;
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var Y,g,x;n.parameters={...n.parameters,docs:{...(Y=n.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | null>(new Date().getFullYear());
    return <YearPicker value={year} onChange={setYear} placeholder="Select year" />;
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,y,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <YearPicker size="sm" placeholder="Small" />
      <YearPicker size="md" placeholder="Medium" />
      <YearPicker size="lg" placeholder="Large" />
    </div>
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,D,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...(k=(D=l.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var C,j,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [year, setYear] = useState<number | null>(2024);
    return <YearPicker value={year} onChange={setYear} clearable placeholder="Clearable" />;
  }
}`,...(z=(j=c.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,v,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const currentYear = new Date().getFullYear();
    return <YearPicker minYear={currentYear - 10} maxYear={currentYear + 10} placeholder="±10 years from now" />;
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var M,W,E;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <YearPicker minYear={1990} maxYear={2030} placeholder="1990 - 2030" />;
  }
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const _=["Default","WithValue","Sizes","Disabled","Clearable","WithMinMaxYear","CustomRange"];export{c as Clearable,i as CustomRange,t as Default,l as Disabled,o as Sizes,d as WithMinMaxYear,n as WithValue,_ as __namedExportsOrder,V as default};
