import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ax as d,B as M}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const W={title:"Components/Empty",component:d,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{}},s={args:{description:"No items found in your cart"}},t={render:()=>e.jsx(d,{description:"No results found",children:e.jsx(M,{children:"Create New"})})},o={args:{description:!1}},a={render:()=>e.jsx(d,{image:e.jsxs("svg",{viewBox:"0 0 24 24",width:"64",height:"64",fill:"none",stroke:"#d9d9d9",strokeWidth:"1",children:[e.jsx("path",{d:"M12 2v20M2 12h20"}),e.jsx("circle",{cx:"12",cy:"12",r:"10"})]}),description:"Custom empty state"})},i={args:{imageSize:120,description:"Larger image size"}},n={render:()=>e.jsxs("div",{style:{border:"1px solid #e8e8e8",borderRadius:"8px",padding:"2rem",width:"400px"},children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"My Items"}),e.jsx(d,{description:"You haven't added any items yet",children:e.jsx(M,{size:"sm",children:"Add Item"})})]})};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    description: 'No items found in your cart'
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Empty description="No results found">
      <Button>Create New</Button>
    </Empty>
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,j,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    description: false
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var C,B,I;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Empty image={<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#d9d9d9" strokeWidth="1">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="10" />
        </svg>} description="Custom empty state" />
}`,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var E,S,w;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    imageSize: 120,
    description: 'Larger image size'
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,z,D;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    padding: '2rem',
    width: '400px'
  }}>
      <h3 style={{
      marginBottom: '1rem'
    }}>My Items</h3>
      <Empty description="You haven't added any items yet">
        <Button size="sm">Add Item</Button>
      </Empty>
    </div>
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const R=["Default","CustomDescription","WithAction","NoDescription","CustomImage","LargeImage","InContext"];export{s as CustomDescription,a as CustomImage,r as Default,n as InContext,i as LargeImage,o as NoDescription,t as WithAction,R as __namedExportsOrder,W as default};
