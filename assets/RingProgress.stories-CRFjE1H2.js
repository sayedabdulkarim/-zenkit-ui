import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bT as s}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const F={title:"Components/RingProgress",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"range",min:60,max:200,step:10}},thickness:{control:{type:"range",min:2,max:20,step:1}},color:{control:"select",options:["primary","secondary","success","warning","error"]}}},r={args:{value:65}},l={args:{value:75,label:"75%"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{value:60,color:"primary",label:"60%"}),e.jsx(s,{value:70,color:"secondary",label:"70%"}),e.jsx(s,{value:80,color:"success",label:"80%"}),e.jsx(s,{value:50,color:"warning",label:"50%"}),e.jsx(s,{value:30,color:"error",label:"30%"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(s,{value:65,size:60,label:"60"}),e.jsx(s,{value:65,size:80,label:"80"}),e.jsx(s,{value:65,size:100,label:"100"}),e.jsx(s,{value:65,size:120,label:"120"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{value:65,thickness:4,label:"4px"}),e.jsx(s,{value:65,thickness:8,label:"8px"}),e.jsx(s,{value:65,thickness:12,label:"12px"}),e.jsx(s,{value:65,thickness:16,label:"16px"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(s,{value:65,label:"Square"}),e.jsx(s,{value:65,roundCaps:!0,label:"Round"})]})},n={render:()=>e.jsx(s,{sections:[{value:40,color:"#228be6"},{value:25,color:"#40c057"},{value:15,color:"#fab005"}],label:"Multi"})},c={render:()=>e.jsx(s,{value:85,size:120,thickness:12,color:"success",label:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"24px",fontWeight:"bold"},children:"85%"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Complete"})]})})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{value:92,color:"success",size:100,thickness:8,label:"92%"}),e.jsx("p",{style:{marginTop:"0.5rem"},children:"Uptime"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{value:67,color:"primary",size:100,thickness:8,label:"67%"}),e.jsx("p",{style:{marginTop:"0.5rem"},children:"CPU"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{value:45,color:"warning",size:100,thickness:8,label:"45%"}),e.jsx("p",{style:{marginTop:"0.5rem"},children:"Memory"})]})]})};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,v,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: '75%'
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,y,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <RingProgress value={60} color="primary" label="60%" />
      <RingProgress value={70} color="secondary" label="70%" />
      <RingProgress value={80} color="success" label="80%" />
      <RingProgress value={50} color="warning" label="50%" />
      <RingProgress value={30} color="error" label="30%" />
    </div>
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var j,R,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <RingProgress value={65} size={60} label="60" />
      <RingProgress value={65} size={80} label="80" />
      <RingProgress value={65} size={100} label="100" />
      <RingProgress value={65} size={120} label="120" />
    </div>
}`,...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var f,z,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <RingProgress value={65} thickness={4} label="4px" />
      <RingProgress value={65} thickness={8} label="8px" />
      <RingProgress value={65} thickness={12} label="12px" />
      <RingProgress value={65} thickness={16} label="16px" />
    </div>
}`,...(k=(z=i.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var S,C,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <RingProgress value={65} label="Square" />
      <RingProgress value={65} roundCaps label="Round" />
    </div>
}`,...(T=(C=t.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var A,M,w;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <RingProgress sections={[{
    value: 40,
    color: '#228be6'
  }, {
    value: 25,
    color: '#40c057'
  }, {
    value: 15,
    color: '#fab005'
  }]} label="Multi" />
}`,...(w=(M=n.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var D,L,U;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <RingProgress value={85} size={120} thickness={12} color="success" label={<div style={{
    textAlign: 'center'
  }}>
          <div style={{
      fontSize: '24px',
      fontWeight: 'bold'
    }}>85%</div>
          <div style={{
      fontSize: '12px',
      color: '#666'
    }}>Complete</div>
        </div>} />
}`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var W,q,E;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <RingProgress value={92} color="success" size={100} thickness={8} label="92%" />
        <p style={{
        marginTop: '0.5rem'
      }}>Uptime</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <RingProgress value={67} color="primary" size={100} thickness={8} label="67%" />
        <p style={{
        marginTop: '0.5rem'
      }}>CPU</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <RingProgress value={45} color="warning" size={100} thickness={8} label="45%" />
        <p style={{
        marginTop: '0.5rem'
      }}>Memory</p>
      </div>
    </div>
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const G=["Default","WithLabel","Colors","Sizes","Thickness","RoundedCaps","MultiSection","CustomLabel","Dashboard"];export{a as Colors,c as CustomLabel,d as Dashboard,r as Default,n as MultiSection,t as RoundedCaps,o as Sizes,i as Thickness,l as WithLabel,G as __namedExportsOrder,F as default};
