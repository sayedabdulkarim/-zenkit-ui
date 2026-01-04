import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{k as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const T={title:"Components/AngleSlider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","secondary","success"]}}},l={render:()=>{const[n,a]=s.useState(45);return e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{value:n,onChange:a}),e.jsxs("p",{children:["Angle: ",n,"°"]})]})}},t={render:()=>{const[n,a]=s.useState(90);return e.jsx(r,{value:n,onChange:a,label:"Rotation"})}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-end"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"sm",defaultValue:30}),e.jsx("p",{children:"Small"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"md",defaultValue:60}),e.jsx("p",{children:"Medium"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{size:"lg",defaultValue:90}),e.jsx("p",{children:"Large"})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{defaultValue:45,color:"primary"}),e.jsx(r,{defaultValue:90,color:"secondary"}),e.jsx(r,{defaultValue:135,color:"success"})]})},i={render:()=>{const[n,a]=s.useState(0);return e.jsx(r,{value:n,onChange:a,marks:[{value:0,label:"N"},{value:90,label:"E"},{value:180,label:"S"},{value:270,label:"W"}]})}},c={render:()=>{const[n,a]=s.useState(0);return e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{value:n,onChange:a,step:15}),e.jsxs("p",{children:["Snaps to 15° increments: ",n,"°"]})]})}},g={args:{value:45,disabled:!0}},u={render:()=>{const[n,a]=s.useState(45);return e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center"},children:[e.jsx(r,{value:n,onChange:a,label:"Gradient Angle"}),e.jsx("div",{style:{width:"100px",height:"100px",borderRadius:"8px",background:`linear-gradient(${n}deg, #667eea, #764ba2)`}})]})}};var p,m,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [angle, setAngle] = useState(45);
    return <div style={{
      textAlign: 'center'
    }}>
        <AngleSlider value={angle} onChange={setAngle} />
        <p>Angle: {angle}°</p>
      </div>;
  }
}`,...(x=(m=l.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,A,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [angle, setAngle] = useState(90);
    return <AngleSlider value={angle} onChange={setAngle} label="Rotation" />;
  }
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var h,y,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-end'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <AngleSlider size="sm" defaultValue={30} />
        <p>Small</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <AngleSlider size="md" defaultValue={60} />
        <p>Medium</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <AngleSlider size="lg" defaultValue={90} />
        <p>Large</p>
      </div>
    </div>
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,b,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <AngleSlider defaultValue={45} color="primary" />
      <AngleSlider defaultValue={90} color="secondary" />
      <AngleSlider defaultValue={135} color="success" />
    </div>
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var V,z,k;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [angle, setAngle] = useState(0);
    return <AngleSlider value={angle} onChange={setAngle} marks={[{
      value: 0,
      label: 'N'
    }, {
      value: 90,
      label: 'E'
    }, {
      value: 180,
      label: 'S'
    }, {
      value: 270,
      label: 'W'
    }]} />;
  }
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var R,W,E;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [angle, setAngle] = useState(0);
    return <div style={{
      textAlign: 'center'
    }}>
        <AngleSlider value={angle} onChange={setAngle} step={15} />
        <p>Snaps to 15° increments: {angle}°</p>
      </div>;
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var D,G,I;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 45,
    disabled: true
  }
}`,...(I=(G=g.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var L,M,w;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [angle, setAngle] = useState(45);
    return <div style={{
      display: 'flex',
      gap: '2rem',
      alignItems: 'center'
    }}>
        <AngleSlider value={angle} onChange={setAngle} label="Gradient Angle" />
        <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        background: \`linear-gradient(\${angle}deg, #667eea, #764ba2)\`
      }} />
      </div>;
  }
}`,...(w=(M=u.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const q=["Default","WithLabel","Sizes","Colors","WithMarks","Step","Disabled","GradientRotation"];export{d as Colors,l as Default,g as Disabled,u as GradientRotation,o as Sizes,c as Step,t as WithLabel,i as WithMarks,q as __namedExportsOrder,T as default};
