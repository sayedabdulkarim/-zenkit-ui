import{j as a}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{d0 as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const O={title:"Data Entry/Transfer",component:r,parameters:{layout:"centered"},tags:["autodocs"]},u=Array.from({length:10}).map((t,e)=>({key:`item-${e}`,title:`Item ${e+1}`,description:`Description for item ${e+1}`})),o={render:()=>{const[t,e]=s.useState([]);return a.jsx(r,{dataSource:u,targetKeys:t,onChange:e,titles:["Source","Target"]})}},c={render:()=>{const[t,e]=s.useState(["item-1","item-3"]);return a.jsx(r,{dataSource:u,targetKeys:t,onChange:e,showSearch:!0,titles:["Available","Selected"]})}},i={render:()=>{const[t,e]=s.useState([]);return a.jsx(r,{dataSource:u,targetKeys:t,onChange:e,oneWay:!0,titles:["Source","Target"]})}},g={render:()=>{const t=u.map((l,n)=>({...l,disabled:n%3===0})),[e,d]=s.useState([]);return a.jsx(r,{dataSource:t,targetKeys:e,onChange:d,titles:["Source","Target"]})}},m={render:()=>{const t=Array.from({length:50}).map((l,n)=>({key:`item-${n}`,title:`Item ${n+1}`})),[e,d]=s.useState([]);return a.jsx(r,{dataSource:t,targetKeys:e,onChange:d,pagination:{pageSize:10},titles:["All Items","Selected"]})}};var y,p,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return <Transfer dataSource={mockData} targetKeys={targetKeys} onChange={setTargetKeys} titles={['Source', 'Target']} />;
  }
}`,...(S=(p=o.parameters)==null?void 0:p.docs)==null?void 0:S.source}}};var K,T,h;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(['item-1', 'item-3']);
    return <Transfer dataSource={mockData} targetKeys={targetKeys} onChange={setTargetKeys} showSearch titles={['Available', 'Selected']} />;
  }
}`,...(h=(T=c.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var f,D,W;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return <Transfer dataSource={mockData} targetKeys={targetKeys} onChange={setTargetKeys} oneWay titles={['Source', 'Target']} />;
  }
}`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var x,C,b;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const dataWithDisabled = mockData.map((item, i) => ({
      ...item,
      disabled: i % 3 === 0
    }));
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return <Transfer dataSource={dataWithDisabled} targetKeys={targetKeys} onChange={setTargetKeys} titles={['Source', 'Target']} />;
  }
}`,...(b=(C=g.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var k,j,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const largeData = Array.from({
      length: 50
    }).map((_, i) => ({
      key: \`item-\${i}\`,
      title: \`Item \${i + 1}\`
    }));
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return <Transfer dataSource={largeData} targetKeys={targetKeys} onChange={setTargetKeys} pagination={{
      pageSize: 10
    }} titles={['All Items', 'Selected']} />;
  }
}`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};const v=["Default","WithSearch","OneWay","WithDisabledItems","Pagination"];export{o as Default,i as OneWay,m as Pagination,g as WithDisabledItems,c as WithSearch,v as __namedExportsOrder,O as default};
