import{j as r}from"./jsx-runtime-DiklIkkE.js";import{r as W}from"./index-DRjF_FHU.js";import{bA as e}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const k={title:"Components/Pagination",component:e,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{total:100,current:1}},a={render:()=>{const[u,M]=W.useState(1);return r.jsxs("div",{children:[r.jsxs("p",{children:["Current page: ",u]}),r.jsx(e,{total:100,current:u,onChange:M})]})}},s={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[r.jsx(e,{total:100,current:3,size:"sm"}),r.jsx(e,{total:100,current:3,size:"md"}),r.jsx(e,{total:100,current:3,size:"lg"})]})},n={args:{total:256,current:5,showTotal:!0}},o={args:{total:30,pageSize:10,current:2}},c={args:{total:500,current:25}},i={args:{total:100,current:5,disabled:!0}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    total: 100,
    current: 1
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div>
        <p>Current page: {current}</p>
        <Pagination total={100} current={current} onChange={setCurrent} />
      </div>;
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,f,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Pagination total={100} current={3} size="sm" />
      <Pagination total={100} current={3} size="md" />
      <Pagination total={100} current={3} size="lg" />
    </div>
}`,...(z=(f=s.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var C,P,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    total: 256,
    current: 5,
    showTotal: true
  }
}`,...(h=(P=n.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var j,y,v;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    total: 30,
    pageSize: 10,
    current: 2
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var D,b,w;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    total: 500,
    current: 25
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var T,E,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    total: 100,
    current: 5,
    disabled: true
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const q=["Default","Controlled","Sizes","WithTotal","FewPages","ManyPages","Disabled"];export{a as Controlled,t as Default,i as Disabled,o as FewPages,c as ManyPages,s as Sizes,n as WithTotal,q as __namedExportsOrder,k as default};
