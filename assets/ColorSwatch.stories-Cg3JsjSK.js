import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as J}from"./index-DRjF_FHU.js";import{a5 as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const Q={title:"Components/ColorSwatch",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},radius:{control:"select",options:["none","sm","md","lg","full"]}}},l={args:{color:"#228be6"}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{color:"#228be6"}),e.jsx(r,{color:"#40c057"}),e.jsx(r,{color:"#fab005"}),e.jsx(r,{color:"#fa5252"}),e.jsx(r,{color:"#7950f2"}),e.jsx(r,{color:"#15aabf"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{color:"#228be6",size:"xs"}),e.jsx(r,{color:"#228be6",size:"sm"}),e.jsx(r,{color:"#228be6",size:"md"}),e.jsx(r,{color:"#228be6",size:"lg"}),e.jsx(r,{color:"#228be6",size:"xl"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{color:"#228be6",radius:"none"}),e.jsx(r,{color:"#40c057",radius:"sm"}),e.jsx(r,{color:"#fab005",radius:"md"}),e.jsx(r,{color:"#fa5252",radius:"lg"}),e.jsx(r,{color:"#7950f2",radius:"full"})]})},d={render:()=>{const[a,x]=J.useState("#228be6"),o=["#228be6","#40c057","#fab005","#fa5252","#7950f2"];return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem"},children:o.map(s=>e.jsx(r,{color:s,onClick:()=>x(s),style:{cursor:"pointer",outline:a===s?"2px solid currentColor":"none",outlineOffset:"2px"}},s))}),e.jsxs("p",{children:["Selected: ",a]})]})}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(r,{color:"#228be6",size:"lg",children:e.jsx("span",{style:{color:"white"},children:"✓"})}),e.jsx(r,{color:"#fa5252",size:"lg",children:e.jsx("span",{style:{color:"white"},children:"×"})}),e.jsx(r,{color:"#40c057",size:"lg",children:e.jsx("span",{style:{color:"white"},children:"A"})})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{color:"transparent",withShadow:!0}),e.jsx(r,{color:"rgba(34, 139, 230, 0.5)"}),e.jsx(r,{color:"rgba(250, 82, 82, 0.3)"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{color:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",size:"lg"}),e.jsx(r,{color:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",size:"lg"}),e.jsx(r,{color:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",size:"lg"})]})},f={render:()=>{const a=["50","100","200","300","400","500","600","700","800","900"],x=["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem"},children:[e.jsx("div",{style:{display:"flex",gap:"0.25rem"},children:x.map((o,s)=>e.jsx(r,{color:o,size:"sm",radius:"sm"},o))}),e.jsx("div",{style:{display:"flex",gap:"0.25rem",fontSize:"0.625rem"},children:a.map(o=>e.jsx("span",{style:{width:"24px",textAlign:"center"},children:o},o))})]})}};var g,h,u;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: '#228be6'
  }
}`,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,S,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <ColorSwatch color="#228be6" />
      <ColorSwatch color="#40c057" />
      <ColorSwatch color="#fab005" />
      <ColorSwatch color="#fa5252" />
      <ColorSwatch color="#7950f2" />
      <ColorSwatch color="#15aabf" />
    </div>
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,w,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>
      <ColorSwatch color="#228be6" size="xs" />
      <ColorSwatch color="#228be6" size="sm" />
      <ColorSwatch color="#228be6" size="md" />
      <ColorSwatch color="#228be6" size="lg" />
      <ColorSwatch color="#228be6" size="xl" />
    </div>
}`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var v,z,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <ColorSwatch color="#228be6" radius="none" />
      <ColorSwatch color="#40c057" radius="sm" />
      <ColorSwatch color="#fab005" radius="md" />
      <ColorSwatch color="#fa5252" radius="lg" />
      <ColorSwatch color="#7950f2" radius="full" />
    </div>
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var A,D,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('#228be6');
    const colors = ['#228be6', '#40c057', '#fab005', '#fa5252', '#7950f2'];
    return <div>
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
          {colors.map(color => <ColorSwatch key={color} color={color} onClick={() => setSelected(color)} style={{
          cursor: 'pointer',
          outline: selected === color ? '2px solid currentColor' : 'none',
          outlineOffset: '2px'
        }} />)}
        </div>
        <p>Selected: {selected}</p>
      </div>;
  }
}`,...(G=(D=d.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,O,R;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <ColorSwatch color="#228be6" size="lg">
        <span style={{
        color: 'white'
      }}>✓</span>
      </ColorSwatch>
      <ColorSwatch color="#fa5252" size="lg">
        <span style={{
        color: 'white'
      }}>×</span>
      </ColorSwatch>
      <ColorSwatch color="#40c057" size="lg">
        <span style={{
        color: 'white'
      }}>A</span>
      </ColorSwatch>
    </div>
}`,...(R=(O=n.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var T,B,I;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <ColorSwatch color="transparent" withShadow />
      <ColorSwatch color="rgba(34, 139, 230, 0.5)" />
      <ColorSwatch color="rgba(250, 82, 82, 0.3)" />
    </div>
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var P,W,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <ColorSwatch color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" size="lg" />
      <ColorSwatch color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" size="lg" />
      <ColorSwatch color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" size="lg" />
    </div>
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,F,H;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
    const blues = ['#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7', '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    }}>
        <div style={{
        display: 'flex',
        gap: '0.25rem'
      }}>
          {blues.map((color, i) => <ColorSwatch key={color} color={color} size="sm" radius="sm" />)}
        </div>
        <div style={{
        display: 'flex',
        gap: '0.25rem',
        fontSize: '0.625rem'
      }}>
          {shades.map(shade => <span key={shade} style={{
          width: '24px',
          textAlign: 'center'
        }}>{shade}</span>)}
        </div>
      </div>;
  }
}`,...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const U=["Default","Palette","Sizes","Radius","Clickable","WithChildren","Transparent","Gradients","ColorGrid"];export{d as Clickable,f as ColorGrid,l as Default,m as Gradients,c as Palette,i as Radius,t as Sizes,p as Transparent,n as WithChildren,U as __namedExportsOrder,Q as default};
