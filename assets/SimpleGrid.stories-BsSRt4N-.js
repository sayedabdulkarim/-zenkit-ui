import{j as e}from"./jsx-runtime-DiklIkkE.js";import{ca as s,K as P}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const R={title:"Layout/SimpleGrid",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{cols:{control:"number",description:"Number of columns"},spacing:{control:"text",description:"Gap between items"},minChildWidth:{control:"text",description:"Minimum child width for auto-fit"}}},r=({children:n})=>e.jsx("div",{style:{background:"#e2e8f0",padding:"1rem",borderRadius:"8px",textAlign:"center",fontWeight:500},children:n}),d={render:()=>e.jsxs(s,{cols:3,children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"}),e.jsx(r,{children:"4"}),e.jsx(r,{children:"5"}),e.jsx(r,{children:"6"})]})},t={render:()=>e.jsxs(s,{cols:2,spacing:"1.5rem",children:[e.jsx(r,{children:"Column 1"}),e.jsx(r,{children:"Column 2"}),e.jsx(r,{children:"Column 3"}),e.jsx(r,{children:"Column 4"})]})},m={render:()=>e.jsx(s,{cols:4,spacing:"1rem",children:Array.from({length:8},(n,i)=>e.jsxs(r,{children:["Item ",i+1]},i))})},o={render:()=>e.jsx(s,{minChildWidth:"200px",spacing:"1rem",children:Array.from({length:6},(n,i)=>e.jsxs(P,{style:{padding:"1rem"},children:[e.jsxs("h4",{style:{margin:"0 0 0.5rem"},children:["Card ",i+1]}),e.jsx("p",{style:{margin:0,color:"#666"},children:"This card will auto-fit based on available space"})]},i))})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Spacing: 0.5rem"}),e.jsxs(s,{cols:3,spacing:"0.5rem",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Spacing: 1rem"}),e.jsxs(s,{cols:3,spacing:"1rem",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Spacing: 2rem"}),e.jsxs(s,{cols:3,spacing:"2rem",children:[e.jsx(r,{children:"1"}),e.jsx(r,{children:"2"}),e.jsx(r,{children:"3"})]})]})]})},l={render:()=>e.jsx(s,{cols:3,spacingX:"2rem",spacingY:"0.5rem",children:Array.from({length:9},(n,i)=>e.jsxs(r,{children:["Item ",i+1]},i))})},a={render:()=>e.jsx(s,{minChildWidth:"250px",spacing:"1.5rem",children:Array.from({length:6},(n,i)=>e.jsxs(P,{style:{overflow:"hidden"},children:[e.jsx("div",{style:{background:"#f1f5f9",height:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:"3rem"},children:"📦"})}),e.jsxs("div",{style:{padding:"1rem"},children:[e.jsxs("h4",{style:{margin:"0 0 0.5rem"},children:["Product ",i+1]}),e.jsx("p",{style:{margin:"0 0 0.5rem",color:"#666",fontSize:"0.875rem"},children:"Product description goes here"}),e.jsx("p",{style:{margin:0,fontWeight:600,color:"#2563eb"},children:"$99.99"})]})]},i))})};var p,h,g;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <SimpleGrid cols={3}>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
    </SimpleGrid>
}`,...(g=(h=d.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,G,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SimpleGrid cols={2} spacing="1.5rem">
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
      <GridItem>Column 3</GridItem>
      <GridItem>Column 4</GridItem>
    </SimpleGrid>
}`,...(u=(G=t.parameters)==null?void 0:G.docs)==null?void 0:u.source}}};var j,y,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <SimpleGrid cols={4} spacing="1rem">
      {Array.from({
      length: 8
    }, (_, i) => <GridItem key={i}>Item {i + 1}</GridItem>)}
    </SimpleGrid>
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var f,S,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SimpleGrid minChildWidth="200px" spacing="1rem">
      {Array.from({
      length: 6
    }, (_, i) => <Card key={i} style={{
      padding: '1rem'
    }}>
          <h4 style={{
        margin: '0 0 0.5rem'
      }}>Card {i + 1}</h4>
          <p style={{
        margin: 0,
        color: '#666'
      }}>
            This card will auto-fit based on available space
          </p>
        </Card>)}
    </SimpleGrid>
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var v,b,A;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Spacing: 0.5rem</h4>
        <SimpleGrid cols={3} spacing="0.5rem">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </SimpleGrid>
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Spacing: 1rem</h4>
        <SimpleGrid cols={3} spacing="1rem">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </SimpleGrid>
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Spacing: 2rem</h4>
        <SimpleGrid cols={3} spacing="2rem">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </SimpleGrid>
      </div>
    </div>
}`,...(A=(b=c.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var _,w,W;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <SimpleGrid cols={3} spacingX="2rem" spacingY="0.5rem">
      {Array.from({
      length: 9
    }, (_, i) => <GridItem key={i}>Item {i + 1}</GridItem>)}
    </SimpleGrid>
}`,...(W=(w=l.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var k,B,D;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <SimpleGrid minChildWidth="250px" spacing="1.5rem">
      {Array.from({
      length: 6
    }, (_, i) => <Card key={i} style={{
      overflow: 'hidden'
    }}>
          <div style={{
        background: '#f1f5f9',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
            <span style={{
          fontSize: '3rem'
        }}>📦</span>
          </div>
          <div style={{
        padding: '1rem'
      }}>
            <h4 style={{
          margin: '0 0 0.5rem'
        }}>Product {i + 1}</h4>
            <p style={{
          margin: '0 0 0.5rem',
          color: '#666',
          fontSize: '0.875rem'
        }}>
              Product description goes here
            </p>
            <p style={{
          margin: 0,
          fontWeight: 600,
          color: '#2563eb'
        }}>$99.99</p>
          </div>
        </Card>)}
    </SimpleGrid>
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};const X=["Default","TwoColumns","FourColumns","AutoFit","DifferentSpacing","AsymmetricSpacing","ProductGrid"];export{l as AsymmetricSpacing,o as AutoFit,d as Default,c as DifferentSpacing,m as FourColumns,a as ProductGrid,t as TwoColumns,X as __namedExportsOrder,R as default};
