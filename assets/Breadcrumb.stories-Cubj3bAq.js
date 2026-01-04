import{j as r}from"./jsx-runtime-DiklIkkE.js";import{F as a,G as e}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const D={title:"Components/Breadcrumb",component:a,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>r.jsxs(a,{children:[r.jsx(e,{href:"#",children:"Home"}),r.jsx(e,{href:"#",children:"Products"}),r.jsx(e,{active:!0,children:"Details"})]})},t={render:()=>r.jsxs(a,{children:[r.jsx(e,{href:"#",icon:r.jsx("span",{children:"🏠"}),children:"Home"}),r.jsx(e,{href:"#",icon:r.jsx("span",{children:"📦"}),children:"Products"}),r.jsx(e,{active:!0,icon:r.jsx("span",{children:"📄"}),children:"Details"})]})},m={render:()=>r.jsxs(a,{separator:">",children:[r.jsx(e,{href:"#",children:"Home"}),r.jsx(e,{href:"#",children:"Library"}),r.jsx(e,{active:!0,children:"Data"})]})},s={render:()=>r.jsxs(a,{children:[r.jsx(e,{href:"#",children:"Home"}),r.jsx(e,{href:"#",children:"Category"}),r.jsx(e,{href:"#",children:"Subcategory"}),r.jsx(e,{href:"#",children:"Products"}),r.jsx(e,{active:!0,children:"Item"})]})};var d,n,o;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem active>Details</BreadcrumbItem>
    </Breadcrumb>
}`,...(o=(n=c.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var u,i,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbItem href="#" icon={<span>🏠</span>}>Home</BreadcrumbItem>
      <BreadcrumbItem href="#" icon={<span>📦</span>}>Products</BreadcrumbItem>
      <BreadcrumbItem active icon={<span>📄</span>}>Details</BreadcrumbItem>
    </Breadcrumb>
}`,...(h=(i=t.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var b,p,B;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Breadcrumb separator=">">
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
}`,...(B=(p=m.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var l,I,f;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Category</BreadcrumbItem>
      <BreadcrumbItem href="#">Subcategory</BreadcrumbItem>
      <BreadcrumbItem href="#">Products</BreadcrumbItem>
      <BreadcrumbItem active>Item</BreadcrumbItem>
    </Breadcrumb>
}`,...(f=(I=s.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const H=["Default","WithIcons","CustomSeparator","LongPath"];export{m as CustomSeparator,c as Default,s as LongPath,t as WithIcons,H as __namedExportsOrder,D as default};
