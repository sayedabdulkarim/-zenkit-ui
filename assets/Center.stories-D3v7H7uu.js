import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as r,E as s}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const k={title:"Components/Center",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsx(r,{style:{width:"300px",height:"200px",border:"1px dashed gray"},children:e.jsx(s,{p:"md",bg:"primary",radius:"md",children:"Centered Content"})})},n={render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"Text before "}),e.jsx(r,{inline:!0,style:{width:"100px",height:"50px",border:"1px dashed gray"},children:e.jsx("span",{children:"Inline"})}),e.jsx("span",{children:" text after"})]})},a={render:()=>e.jsx(r,{style:{width:"100%",height:"400px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:e.jsxs(s,{p:"lg",bg:"surface",radius:"lg",shadow:"lg",children:[e.jsx("h2",{children:"Welcome"}),e.jsx("p",{children:"Perfectly centered in the viewport"})]})})},d={render:()=>e.jsx(r,{style:{width:"60px",height:"60px",background:"#228be6",borderRadius:"50%"},children:e.jsx("span",{style:{fontSize:"24px",color:"white"},children:"✓"})})},i={render:()=>e.jsx(r,{style:{width:"300px",height:"200px",border:"1px dashed gray"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[e.jsx(s,{p:"sm",bg:"primary",radius:"md",children:"Item 1"}),e.jsx(s,{p:"sm",bg:"secondary",radius:"md",children:"Item 2"}),e.jsx(s,{p:"sm",bg:"accent",radius:"md",children:"Item 3"})]})})};var o,p,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Center style={{
    width: '300px',
    height: '200px',
    border: '1px dashed gray'
  }}>
      <Box p="md" bg="primary" radius="md">Centered Content</Box>
    </Center>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div>
      <span>Text before </span>
      <Center inline style={{
      width: '100px',
      height: '50px',
      border: '1px dashed gray'
    }}>
        <span>Inline</span>
      </Center>
      <span> text after</span>
    </div>
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,g,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Center style={{
    width: '100%',
    height: '400px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }}>
      <Box p="lg" bg="surface" radius="lg" shadow="lg">
        <h2>Welcome</h2>
        <p>Perfectly centered in the viewport</p>
      </Box>
    </Center>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,b,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Center style={{
    width: '60px',
    height: '60px',
    background: '#228be6',
    borderRadius: '50%'
  }}>
      <span style={{
      fontSize: '24px',
      color: 'white'
    }}>✓</span>
    </Center>
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,C,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Center style={{
    width: '300px',
    height: '200px',
    border: '1px dashed gray'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
        <Box p="sm" bg="primary" radius="md">Item 1</Box>
        <Box p="sm" bg="secondary" radius="md">Item 2</Box>
        <Box p="sm" bg="accent" radius="md">Item 3</Box>
      </div>
    </Center>
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const D=["Default","Inline","FullPage","WithIcon","StackedItems"];export{t as Default,a as FullPage,n as Inline,i as StackedItems,d as WithIcon,D as __namedExportsOrder,k as default};
