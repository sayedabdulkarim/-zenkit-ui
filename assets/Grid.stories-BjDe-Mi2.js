import{j as n}from"./jsx-runtime-DiklIkkE.js";import{aK as r,aL as s}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const H={title:"Layout/Grid",component:r,parameters:{layout:"padded"},tags:["autodocs"]},e=({children:o})=>n.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--primary)",color:"white",borderRadius:"var(--radius)",textAlign:"center"},children:o}),l={render:()=>n.jsxs(r,{children:[n.jsx(s,{children:n.jsx(e,{children:"Column 1"})}),n.jsx(s,{children:n.jsx(e,{children:"Column 2"})}),n.jsx(s,{children:n.jsx(e,{children:"Column 3"})})]})},a={render:()=>n.jsxs(r,{children:[n.jsx(s,{span:4,children:n.jsx(e,{children:"4 cols"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"4 cols"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"4 cols"})})]})},d={render:()=>n.jsxs(r,{children:[n.jsx(s,{span:2,children:n.jsx(e,{children:"2"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"4"})}),n.jsx(s,{span:6,children:n.jsx(e,{children:"6"})})]})},i={render:()=>n.jsxs(r,{children:[n.jsx(s,{span:4,children:n.jsx(e,{children:"4 cols"})}),n.jsx(s,{span:4,offset:4,children:n.jsx(e,{children:"4 cols, offset 4"})})]})},c={render:()=>n.jsxs(r,{children:[n.jsx(s,{span:12,sm:6,md:4,lg:3,children:n.jsx(e,{children:"Responsive"})}),n.jsx(s,{span:12,sm:6,md:4,lg:3,children:n.jsx(e,{children:"Responsive"})}),n.jsx(s,{span:12,sm:6,md:4,lg:3,children:n.jsx(e,{children:"Responsive"})}),n.jsx(s,{span:12,sm:6,md:4,lg:3,children:n.jsx(e,{children:"Responsive"})})]})},p={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"0.5rem"},children:"Gap 0:"}),n.jsxs(r,{gap:0,children:[n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"0.5rem"},children:"Gap 2:"}),n.jsxs(r,{gap:2,children:[n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})})]})]}),n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"0.5rem"},children:"Gap 5:"}),n.jsxs(r,{gap:5,children:[n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})}),n.jsx(s,{span:4,children:n.jsx(e,{children:"Col"})})]})]})]})},x={render:()=>n.jsxs(r,{children:[n.jsx(s,{span:6,children:n.jsxs(e,{children:["Outer Col 6",n.jsxs(r,{gap:2,style:{marginTop:"1rem"},children:[n.jsx(s,{span:6,children:n.jsx("div",{style:{background:"rgba(255,255,255,0.2)",padding:"0.5rem"},children:"Nested"})}),n.jsx(s,{span:6,children:n.jsx("div",{style:{background:"rgba(255,255,255,0.2)",padding:"0.5rem"},children:"Nested"})})]})]})}),n.jsx(s,{span:6,children:n.jsx(e,{children:"Outer Col 6"})})]})},t={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[12,6,4,3,2,1].map(o=>n.jsx(r,{gap:1,children:Array.from({length:12/o}).map((V,q)=>n.jsx(s,{span:o,children:n.jsx(e,{children:o})},q))},o))})};var m,C,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Grid>
      <Col><Box>Column 1</Box></Col>
      <Col><Box>Column 2</Box></Col>
      <Col><Box>Column 3</Box></Col>
    </Grid>
}`,...(h=(C=l.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var j,u,B;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Grid>
      <Col span={4}><Box>4 cols</Box></Col>
      <Col span={4}><Box>4 cols</Box></Col>
      <Col span={4}><Box>4 cols</Box></Col>
    </Grid>
}`,...(B=(u=a.parameters)==null?void 0:u.docs)==null?void 0:B.source}}};var g,v,G;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Grid>
      <Col span={2}><Box>2</Box></Col>
      <Col span={4}><Box>4</Box></Col>
      <Col span={6}><Box>6</Box></Col>
    </Grid>
}`,...(G=(v=d.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Grid>
      <Col span={4}><Box>4 cols</Box></Col>
      <Col span={4} offset={4}><Box>4 cols, offset 4</Box></Col>
    </Grid>
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var R,D,S;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Grid>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
      <Col span={12} sm={6} md={4} lg={3}><Box>Responsive</Box></Col>
    </Grid>
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var k,O,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Gap 0:</p>
        <Grid gap={0}>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
        </Grid>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Gap 2:</p>
        <Grid gap={2}>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
        </Grid>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem'
      }}>Gap 5:</p>
        <Grid gap={5}>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
          <Col span={4}><Box>Col</Box></Col>
        </Grid>
      </div>
    </div>
}`,...(N=(O=p.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var E,L,T;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Grid>
      <Col span={6}>
        <Box>
          Outer Col 6
          <Grid gap={2} style={{
          marginTop: '1rem'
        }}>
            <Col span={6}><div style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem'
            }}>Nested</div></Col>
            <Col span={6}><div style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem'
            }}>Nested</div></Col>
          </Grid>
        </Box>
      </Col>
      <Col span={6}><Box>Outer Col 6</Box></Col>
    </Grid>
}`,...(T=(L=x.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var _,w,A;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }}>
      {[12, 6, 4, 3, 2, 1].map(span => <Grid key={span} gap={1}>
          {Array.from({
        length: 12 / span
      }).map((_, i) => <Col key={i} span={span as 1 | 2 | 3 | 4 | 6 | 12}>
              <Box>{span}</Box>
            </Col>)}
        </Grid>)}
    </div>
}`,...(A=(w=t.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const I=["Default","EqualColumns","VariableColumns","WithOffset","ResponsiveColumns","DifferentGaps","NestedGrid","TwelveColumnLayout"];export{l as Default,p as DifferentGaps,a as EqualColumns,x as NestedGrid,c as ResponsiveColumns,t as TwelveColumnLayout,d as VariableColumns,i as WithOffset,I as __namedExportsOrder,H as default};
