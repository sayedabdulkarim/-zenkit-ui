import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{R as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const N={title:"Data Entry/Cascader",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r=[{value:"us",label:"United States",children:[{value:"ca",label:"California",children:[{value:"sf",label:"San Francisco"},{value:"la",label:"Los Angeles"}]},{value:"ny",label:"New York",children:[{value:"nyc",label:"New York City"},{value:"buf",label:"Buffalo"}]}]},{value:"uk",label:"United Kingdom",children:[{value:"eng",label:"England",children:[{value:"lon",label:"London"},{value:"man",label:"Manchester"}]}]}],o={render:()=>{const[s,t]=u.useState([]);return e.jsx(a,{options:r,value:s,onChange:t,placeholder:"Select location",style:{width:"300px"}})}},l={render:()=>{const[s,t]=u.useState(["us","ca","sf"]);return e.jsx(a,{options:r,value:s,onChange:t,placeholder:"Select location",style:{width:"300px"}})}},n={render:()=>{const[s,t]=u.useState([]);return e.jsx(a,{options:r,value:s,onChange:t,showSearch:!0,placeholder:"Search location",style:{width:"300px"}})}},c={render:()=>{const[s,t]=u.useState([]);return e.jsx(a,{options:r,value:s,onChange:t,expandTrigger:"hover",placeholder:"Hover to expand",style:{width:"300px"}})}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{options:r,size:"sm",placeholder:"Small",style:{width:"300px"}}),e.jsx(a,{options:r,size:"md",placeholder:"Medium",style:{width:"300px"}}),e.jsx(a,{options:r,size:"lg",placeholder:"Large",style:{width:"300px"}})]})},i={args:{options:r,disabled:!0,placeholder:"Disabled",style:{width:"300px"}}};var p,h,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <Cascader options={options} value={value} onChange={setValue} placeholder="Select location" style={{
      width: '300px'
    }} />;
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,v,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['us', 'ca', 'sf']);
    return <Cascader options={options} value={value} onChange={setValue} placeholder="Select location" style={{
      width: '300px'
    }} />;
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var S,y,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <Cascader options={options} value={value} onChange={setValue} showSearch placeholder="Search location" style={{
      width: '300px'
    }} />;
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,C,f;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <Cascader options={options} value={value} onChange={setValue} expandTrigger="hover" placeholder="Hover to expand" style={{
      width: '300px'
    }} />;
  }
}`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var V,j,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Cascader options={options} size="sm" placeholder="Small" style={{
      width: '300px'
    }} />
      <Cascader options={options} size="md" placeholder="Medium" style={{
      width: '300px'
    }} />
      <Cascader options={options} size="lg" placeholder="Large" style={{
      width: '300px'
    }} />
    </div>
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var z,E,H;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options: options,
    disabled: true,
    placeholder: 'Disabled',
    style: {
      width: '300px'
    }
  }
}`,...(H=(E=i.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const R=["Default","WithValue","Searchable","ExpandOnHover","Sizes","Disabled"];export{o as Default,i as Disabled,c as ExpandOnHover,n as Searchable,d as Sizes,l as WithValue,R as __namedExportsOrder,N as default};
