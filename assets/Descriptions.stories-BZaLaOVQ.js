import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ah as r,ai as s,B as A}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Components/Descriptions",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{layout:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md","lg"]}}},i={render:()=>e.jsxs(r,{title:"User Info",children:[e.jsx(s,{label:"UserName",children:"John Doe"}),e.jsx(s,{label:"Telephone",children:"1810000000"}),e.jsx(s,{label:"Live",children:"Hangzhou, Zhejiang"}),e.jsx(s,{label:"Remark",children:"Empty"}),e.jsx(s,{label:"Address",children:"No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"})]})},n={render:()=>e.jsxs(r,{title:"User Info",bordered:!0,children:[e.jsx(s,{label:"Product",children:"Cloud Database"}),e.jsx(s,{label:"Billing Mode",children:"Prepaid"}),e.jsx(s,{label:"Automatic Renewal",children:"YES"}),e.jsx(s,{label:"Order time",children:"2018-04-24 18:00:00"}),e.jsx(s,{label:"Usage Time",span:2,children:"2018-04-24 18:00:00 - 2019-04-24 18:00:00"}),e.jsx(s,{label:"Status",span:3,children:"Running"})]})},t={render:()=>e.jsxs(r,{title:"User Info",layout:"vertical",children:[e.jsx(s,{label:"UserName",children:"John Doe"}),e.jsx(s,{label:"Telephone",children:"1810000000"}),e.jsx(s,{label:"Live",children:"Hangzhou, Zhejiang"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs(r,{title:"Small",size:"sm",bordered:!0,children:[e.jsx(s,{label:"Name",children:"John"}),e.jsx(s,{label:"Age",children:"25"}),e.jsx(s,{label:"City",children:"NYC"})]}),e.jsxs(r,{title:"Medium",size:"md",bordered:!0,children:[e.jsx(s,{label:"Name",children:"John"}),e.jsx(s,{label:"Age",children:"25"}),e.jsx(s,{label:"City",children:"NYC"})]}),e.jsxs(r,{title:"Large",size:"lg",bordered:!0,children:[e.jsx(s,{label:"Name",children:"John"}),e.jsx(s,{label:"Age",children:"25"}),e.jsx(s,{label:"City",children:"NYC"})]})]})},l={render:()=>e.jsxs(r,{title:"User Info",extra:e.jsx(A,{size:"sm",children:"Edit"}),bordered:!0,children:[e.jsx(s,{label:"UserName",children:"John Doe"}),e.jsx(s,{label:"Telephone",children:"1810000000"}),e.jsx(s,{label:"Live",children:"Hangzhou, Zhejiang"})]})},a={render:()=>e.jsxs(r,{title:"User Info",colon:!1,children:[e.jsx(s,{label:"UserName",children:"John Doe"}),e.jsx(s,{label:"Telephone",children:"1810000000"}),e.jsx(s,{label:"Live",children:"Hangzhou, Zhejiang"})]})},c={render:()=>e.jsxs(r,{title:"User Info",column:2,bordered:!0,children:[e.jsx(s,{label:"UserName",children:"John Doe"}),e.jsx(s,{label:"Telephone",children:"1810000000"}),e.jsx(s,{label:"Live",children:"Hangzhou"}),e.jsx(s,{label:"Address",children:"China"})]})};var m,p,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Descriptions title="User Info">
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
      <DescriptionsItem label="Remark">Empty</DescriptionsItem>
      <DescriptionsItem label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </DescriptionsItem>
    </Descriptions>
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var D,h,b;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Descriptions title="User Info" bordered>
      <DescriptionsItem label="Product">Cloud Database</DescriptionsItem>
      <DescriptionsItem label="Billing Mode">Prepaid</DescriptionsItem>
      <DescriptionsItem label="Automatic Renewal">YES</DescriptionsItem>
      <DescriptionsItem label="Order time">2018-04-24 18:00:00</DescriptionsItem>
      <DescriptionsItem label="Usage Time" span={2}>
        2018-04-24 18:00:00 - 2019-04-24 18:00:00
      </DescriptionsItem>
      <DescriptionsItem label="Status" span={3}>
        Running
      </DescriptionsItem>
    </Descriptions>
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var I,u,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Descriptions title="User Info" layout="vertical">
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    </Descriptions>
}`,...(j=(u=t.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var x,g,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Descriptions title="Small" size="sm" bordered>
        <DescriptionsItem label="Name">John</DescriptionsItem>
        <DescriptionsItem label="Age">25</DescriptionsItem>
        <DescriptionsItem label="City">NYC</DescriptionsItem>
      </Descriptions>
      <Descriptions title="Medium" size="md" bordered>
        <DescriptionsItem label="Name">John</DescriptionsItem>
        <DescriptionsItem label="Age">25</DescriptionsItem>
        <DescriptionsItem label="City">NYC</DescriptionsItem>
      </Descriptions>
      <Descriptions title="Large" size="lg" bordered>
        <DescriptionsItem label="Name">John</DescriptionsItem>
        <DescriptionsItem label="Age">25</DescriptionsItem>
        <DescriptionsItem label="City">NYC</DescriptionsItem>
      </Descriptions>
    </div>
}`,...(N=(g=o.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};var C,z,U;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Descriptions title="User Info" extra={<Button size="sm">Edit</Button>} bordered>
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    </Descriptions>
}`,...(U=(z=l.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var f,y,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Descriptions title="User Info" colon={false}>
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    </Descriptions>
}`,...(v=(y=a.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var J,S,T;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Descriptions title="User Info" column={2} bordered>
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou</DescriptionsItem>
      <DescriptionsItem label="Address">China</DescriptionsItem>
    </Descriptions>
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const B=["Default","Bordered","Vertical","Sizes","WithExtra","NoColon","CustomColumns"];export{n as Bordered,c as CustomColumns,i as Default,a as NoColon,o as Sizes,t as Vertical,l as WithExtra,B as __namedExportsOrder,R as default};
