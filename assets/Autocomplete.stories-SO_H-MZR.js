import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{t as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const L={title:"Data Entry/Autocomplete",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"},{value:"date",label:"Date"},{value:"elderberry",label:"Elderberry"},{value:"fig",label:"Fig"},{value:"grape",label:"Grape"}],t={render:()=>{const[l,s]=c.useState("");return e.jsx(a,{options:r,value:l,onChange:s,placeholder:"Search fruits..."})}},o={render:()=>{const[l,s]=c.useState("apple");return e.jsx(a,{options:r,value:l,onChange:s,placeholder:"Search fruits..."})}},n={render:()=>{const[l,s]=c.useState("banana");return e.jsx(a,{options:r,value:l,onChange:s,clearable:!0,placeholder:"Clearable"})}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(a,{options:r,size:"sm",placeholder:"Small"}),e.jsx(a,{options:r,size:"md",placeholder:"Medium"}),e.jsx(a,{options:r,size:"lg",placeholder:"Large"})]})},p={args:{options:r,disabled:!0,placeholder:"Disabled"}},i={args:{options:[{value:"apple",label:"Apple"},{value:"banana",label:"Banana",disabled:!0},{value:"cherry",label:"Cherry"},{value:"date",label:"Date",disabled:!0}],placeholder:"Some options disabled"}};var d,m,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>('');
    return <Autocomplete options={fruits} value={value} onChange={setValue} placeholder="Search fruits..." />;
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var h,v,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>('apple');
    return <Autocomplete options={fruits} value={value} onChange={setValue} placeholder="Search fruits..." />;
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,S,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>('banana');
    return <Autocomplete options={fruits} value={value} onChange={setValue} clearable placeholder="Clearable" />;
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,D,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <Autocomplete options={fruits} size="sm" placeholder="Small" />
      <Autocomplete options={fruits} size="md" placeholder="Medium" />
      <Autocomplete options={fruits} size="lg" placeholder="Large" />
    </div>
}`,...(C=(D=u.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,V,j;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: fruits,
    disabled: true,
    placeholder: 'Disabled'
  }
}`,...(j=(V=p.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var z,E,W;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'apple',
      label: 'Apple'
    }, {
      value: 'banana',
      label: 'Banana',
      disabled: true
    }, {
      value: 'cherry',
      label: 'Cherry'
    }, {
      value: 'date',
      label: 'Date',
      disabled: true
    }],
    placeholder: 'Some options disabled'
  }
}`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const M=["Default","WithInitialValue","Clearable","Sizes","Disabled","WithDisabledOptions"];export{n as Clearable,t as Default,p as Disabled,u as Sizes,i as WithDisabledOptions,o as WithInitialValue,M as __namedExportsOrder,L as default};
