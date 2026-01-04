import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aC as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const T={title:"Layout/Flex",component:i,parameters:{layout:"padded"},tags:["autodocs"]},s=({children:r,size:n="md"})=>{const p={sm:"50px",md:"80px",lg:"120px"};return e.jsx("div",{style:{width:p[n],height:p[n],backgroundColor:"var(--primary)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"var(--radius)"},children:r})},o={render:()=>e.jsxs(i,{gap:3,children:[e.jsx(s,{children:"1"}),e.jsx(s,{children:"2"}),e.jsx(s,{children:"3"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Row (default):"}),e.jsxs(i,{direction:"row",gap:2,children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"sm",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Row Reverse:"}),e.jsxs(i,{direction:"row-reverse",gap:2,children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"sm",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Column:"}),e.jsxs(i,{direction:"column",gap:2,children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"sm",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{children:"Align Start:"}),e.jsxs(i,{align:"start",gap:2,style:{height:"150px",background:"#f5f5f5"},children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"lg",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Align Center:"}),e.jsxs(i,{align:"center",gap:2,style:{height:"150px",background:"#f5f5f5"},children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"lg",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Align End:"}),e.jsxs(i,{align:"end",gap:2,style:{height:"150px",background:"#f5f5f5"},children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"lg",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]})]})},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:["start","center","end","space-between","space-around","space-evenly"].map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"0.5rem"},children:[r,":"]}),e.jsxs(i,{justify:r,gap:2,style:{background:"#f5f5f5",padding:"1rem"},children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"sm",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]},r))})},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[0,1,2,3,4,5].map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:"0.5rem"},children:["Gap ",r,":"]}),e.jsxs(i,{gap:r,children:[e.jsx(s,{size:"sm",children:"1"}),e.jsx(s,{size:"sm",children:"2"}),e.jsx(s,{size:"sm",children:"3"})]})]},r))})},c={render:()=>e.jsxs("div",{style:{maxWidth:"300px"},children:[e.jsx("p",{children:"With wrap:"}),e.jsx(i,{wrap:"wrap",gap:2,children:Array.from({length:8}).map((r,n)=>e.jsx(s,{size:"sm",children:n+1},n))})]})},t={render:()=>e.jsxs("p",{children:["This is some text with an"," ",e.jsxs(i,{inline:!0,gap:1,align:"center",children:[e.jsx(s,{size:"sm",children:"inline"}),e.jsx(s,{size:"sm",children:"flex"})]})," ","container."]})};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Flex gap={3}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,B,u;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <p>Row (default):</p>
        <Flex direction="row" gap={2}>
          <Box size="sm">1</Box>
          <Box size="sm">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Row Reverse:</p>
        <Flex direction="row-reverse" gap={2}>
          <Box size="sm">1</Box>
          <Box size="sm">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Column:</p>
        <Flex direction="column" gap={2}>
          <Box size="sm">1</Box>
          <Box size="sm">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
    </div>
}`,...(u=(B=l.parameters)==null?void 0:B.docs)==null?void 0:u.source}}};var f,z,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <p>Align Start:</p>
        <Flex align="start" gap={2} style={{
        height: '150px',
        background: '#f5f5f5'
      }}>
          <Box size="sm">1</Box>
          <Box size="lg">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Align Center:</p>
        <Flex align="center" gap={2} style={{
        height: '150px',
        background: '#f5f5f5'
      }}>
          <Box size="sm">1</Box>
          <Box size="lg">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Align End:</p>
        <Flex align="end" gap={2} style={{
        height: '150px',
        background: '#f5f5f5'
      }}>
          <Box size="sm">1</Box>
          <Box size="lg">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
    </div>
}`,...(v=(z=a.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var y,F,w;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'].map(justify => <div key={justify}>
          <p style={{
        marginBottom: '0.5rem'
      }}>{justify}:</p>
          <Flex justify={justify as any} gap={2} style={{
        background: '#f5f5f5',
        padding: '1rem'
      }}>
            <Box size="sm">1</Box>
            <Box size="sm">2</Box>
            <Box size="sm">3</Box>
          </Flex>
        </div>)}
    </div>
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var b,k,D;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {[0, 1, 2, 3, 4, 5].map(gap => <div key={gap}>
          <p style={{
        marginBottom: '0.5rem'
      }}>Gap {gap}:</p>
          <Flex gap={gap as any}>
            <Box size="sm">1</Box>
            <Box size="sm">2</Box>
            <Box size="sm">3</Box>
          </Flex>
        </div>)}
    </div>
}`,...(D=(k=x.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var A,S,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px'
  }}>
      <p>With wrap:</p>
      <Flex wrap="wrap" gap={2}>
        {Array.from({
        length: 8
      }).map((_, i) => <Box key={i} size="sm">{i + 1}</Box>)}
      </Flex>
    </div>
}`,...(R=(S=c.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var C,W,E;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <p>
      This is some text with an{' '}
      <Flex inline gap={1} align="center">
        <Box size="sm">inline</Box>
        <Box size="sm">flex</Box>
      </Flex>{' '}
      container.
    </p>
}`,...(E=(W=t.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};const L=["Default","Direction","Alignment","Justification","Gaps","Wrap","Inline"];export{a as Alignment,o as Default,l as Direction,x as Gaps,t as Inline,d as Justification,c as Wrap,L as __namedExportsOrder,T as default};
