import{j as l}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{d3 as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const Q={title:"Data Entry/TreeSelect",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r=[{value:"frontend",title:"Frontend",children:[{value:"react",title:"React"},{value:"vue",title:"Vue"},{value:"angular",title:"Angular"}]},{value:"backend",title:"Backend",children:[{value:"node",title:"Node.js"},{value:"python",title:"Python"},{value:"go",title:"Go"}]},{value:"database",title:"Database",children:[{value:"mysql",title:"MySQL"},{value:"postgres",title:"PostgreSQL"},{value:"mongodb",title:"MongoDB"}]}],o={render:()=>{const[e,t]=s.useState();return l.jsx(a,{treeData:r,value:e,onChange:t,placeholder:"Select technology",style:{width:"300px"}})}},n={render:()=>{const[e,t]=s.useState("react");return l.jsx(a,{treeData:r,value:e,onChange:t,placeholder:"Select technology",style:{width:"300px"}})}},c={render:()=>{const[e,t]=s.useState(["react","node"]);return l.jsx(a,{treeData:r,value:e,onChange:t,multiple:!0,placeholder:"Select technologies",style:{width:"300px"}})}},u={render:()=>{const[e,t]=s.useState();return l.jsx(a,{treeData:r,value:e,onChange:t,showSearch:!0,placeholder:"Search and select",style:{width:"300px"}})}},d={render:()=>{const[e,t]=s.useState([]);return l.jsx(a,{treeData:r,value:e,onChange:t,treeCheckable:!0,placeholder:"Check items",style:{width:"300px"}})}},i={args:{treeData:r,disabled:!0,placeholder:"Disabled",style:{width:"300px"}}};var p,h,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return <TreeSelect treeData={treeData} value={value} onChange={setValue} placeholder="Select technology" style={{
      width: '300px'
    }} />;
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,S,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>('react');
    return <TreeSelect treeData={treeData} value={value} onChange={setValue} placeholder="Select technology" style={{
      width: '300px'
    }} />;
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var x,y,D;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'node']);
    return <TreeSelect treeData={treeData} value={value} onChange={setValue} multiple placeholder="Select technologies" style={{
      width: '300px'
    }} />;
  }
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var V,b,C;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return <TreeSelect treeData={treeData} value={value} onChange={setValue} showSearch placeholder="Search and select" style={{
      width: '300px'
    }} />;
  }
}`,...(C=(b=u.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var w,f,j;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <TreeSelect treeData={treeData} value={value} onChange={setValue} treeCheckable placeholder="Check items" style={{
      width: '300px'
    }} />;
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var k,T,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    treeData: treeData,
    disabled: true,
    placeholder: 'Disabled',
    style: {
      width: '300px'
    }
  }
}`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const R=["Default","WithValue","Multiple","Searchable","Checkable","Disabled"];export{d as Checkable,o as Default,i as Disabled,c as Multiple,u as Searchable,n as WithValue,R as __namedExportsOrder,Q as default};
