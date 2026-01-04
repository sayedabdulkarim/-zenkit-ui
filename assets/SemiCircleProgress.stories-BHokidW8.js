import{j as e}from"./jsx-runtime-DiklIkkE.js";import{bX as r}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const O={title:"Components/SemiCircleProgress",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"range",min:100,max:300,step:10}},thickness:{control:{type:"range",min:4,max:20,step:2}},color:{control:"select",options:["primary","secondary","success","warning","error"]}}},s={args:{value:65}},l={args:{value:75,label:"75%"}},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{value:60,color:"primary",label:"Primary"}),e.jsx(r,{value:70,color:"secondary",label:"Secondary"}),e.jsx(r,{value:80,color:"success",label:"Success"}),e.jsx(r,{value:50,color:"warning",label:"Warning"}),e.jsx(r,{value:30,color:"error",label:"Error"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"flex-end"},children:[e.jsx(r,{value:65,size:100,label:"100"}),e.jsx(r,{value:65,size:150,label:"150"}),e.jsx(r,{value:65,size:200,label:"200"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsx(r,{value:65,thickness:6,label:"6px"}),e.jsx(r,{value:65,thickness:10,label:"10px"}),e.jsx(r,{value:65,thickness:16,label:"16px"})]})},t={render:()=>e.jsx(r,{value:85,size:200,thickness:12,color:"success",label:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"2rem",fontWeight:"bold"},children:"85%"}),e.jsx("div",{style:{fontSize:"0.875rem",color:"#666"},children:"Complete"})]})})},c={render:()=>e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{value:72,size:200,thickness:14,color:"primary",label:e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"2.5rem",fontWeight:"bold"},children:"72"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#666"},children:"mph"})]})})})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem",justifyContent:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{value:92,color:"success",size:120,label:"92%"}),e.jsx("p",{children:"CPU Usage"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{value:67,color:"primary",size:120,label:"67%"}),e.jsx("p",{children:"Memory"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(r,{value:45,color:"warning",size:120,label:"45%"}),e.jsx("p",{children:"Storage"})]})]})};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,v,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: '75%'
  }
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <SemiCircleProgress value={60} color="primary" label="Primary" />
      <SemiCircleProgress value={70} color="secondary" label="Secondary" />
      <SemiCircleProgress value={80} color="success" label="Success" />
      <SemiCircleProgress value={50} color="warning" label="Warning" />
      <SemiCircleProgress value={30} color="error" label="Error" />
    </div>
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var b,h,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-end'
  }}>
      <SemiCircleProgress value={65} size={100} label="100" />
      <SemiCircleProgress value={65} size={150} label="150" />
      <SemiCircleProgress value={65} size={200} label="200" />
    </div>
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,C,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <SemiCircleProgress value={65} thickness={6} label="6px" />
      <SemiCircleProgress value={65} thickness={10} label="10px" />
      <SemiCircleProgress value={65} thickness={16} label="16px" />
    </div>
}`,...(z=(C=o.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var P,k,A;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SemiCircleProgress value={85} size={200} thickness={12} color="success" label={<div style={{
    textAlign: 'center'
  }}>
          <div style={{
      fontSize: '2rem',
      fontWeight: 'bold'
    }}>85%</div>
          <div style={{
      fontSize: '0.875rem',
      color: '#666'
    }}>Complete</div>
        </div>} />
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var W,w,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    textAlign: 'center'
  }}>
      <SemiCircleProgress value={72} size={200} thickness={14} color="primary" label={<div>
            <div style={{
        fontSize: '2.5rem',
        fontWeight: 'bold'
      }}>72</div>
            <div style={{
        fontSize: '0.75rem',
        color: '#666'
      }}>mph</div>
          </div>} />
    </div>
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,L,U;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <SemiCircleProgress value={92} color="success" size={120} label="92%" />
        <p>CPU Usage</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <SemiCircleProgress value={67} color="primary" size={120} label="67%" />
        <p>Memory</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <SemiCircleProgress value={45} color="warning" size={120} label="45%" />
        <p>Storage</p>
      </div>
    </div>
}`,...(U=(L=n.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const R=["Default","WithLabel","Colors","Sizes","Thickness","CustomLabel","SpeedometerStyle","Dashboard"];export{a as Colors,t as CustomLabel,n as Dashboard,s as Default,i as Sizes,c as SpeedometerStyle,o as Thickness,l as WithLabel,R as __namedExportsOrder,O as default};
