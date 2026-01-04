import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as n}from"./index-DRjF_FHU.js";import{bO as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const z={title:"Components/RangeSlider",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["primary","secondary","success","warning","error"]}}},t={render:()=>{const[r,s]=n.useState([25,75]);return e.jsxs("div",{style:{width:"300px"},children:[e.jsx(a,{value:r,onChange:s}),e.jsxs("p",{children:["Range: ",r[0]," - ",r[1]]})]})}},l={render:()=>{const[r,s]=n.useState([20,80]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{label:"Price Range",value:r,onChange:s})})}},o={render:()=>{const[r,s]=n.useState([0,100]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{value:r,onChange:s,marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}]})})}},u={render:()=>{const[r,s]=n.useState([30,70]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{value:r,onChange:s,showTooltip:!0})})}},d={render:()=>{const[r,s]=n.useState([20,80]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{label:"Minimum 20 units apart",value:r,onChange:s,minRange:20})})}},i={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(a,{defaultValue:[20,80],color:"primary"}),e.jsx(a,{defaultValue:[30,70],color:"secondary"}),e.jsx(a,{defaultValue:[25,75],color:"success"}),e.jsx(a,{defaultValue:[35,65],color:"warning"}),e.jsx(a,{defaultValue:[40,60],color:"error"})]})},c={args:{defaultValue:[25,75],disabled:!0},decorators:[r=>e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{})})]};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<[number, number]>([25, 75]);
    return <div style={{
      width: '300px'
    }}>
        <RangeSlider value={value} onChange={setValue} />
        <p>Range: {value[0]} - {value[1]}</p>
      </div>;
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,x,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return <div style={{
      width: '300px'
    }}>
        <RangeSlider label="Price Range" value={value} onChange={setValue} />
      </div>;
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,S,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<[number, number]>([0, 100]);
    return <div style={{
      width: '300px'
    }}>
        <RangeSlider value={value} onChange={setValue} marks={[{
        value: 0,
        label: '0'
      }, {
        value: 25,
        label: '25'
      }, {
        value: 50,
        label: '50'
      }, {
        value: 75,
        label: '75'
      }, {
        value: 100,
        label: '100'
      }]} />
      </div>;
  }
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var y,f,j;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<[number, number]>([30, 70]);
    return <div style={{
      width: '300px'
    }}>
        <RangeSlider value={value} onChange={setValue} showTooltip />
      </div>;
  }
}`,...(j=(f=u.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var R,w,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return <div style={{
      width: '300px'
    }}>
        <RangeSlider label="Minimum 20 units apart" value={value} onChange={setValue} minRange={20} />
      </div>;
  }
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var D,M,W;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <RangeSlider defaultValue={[20, 80]} color="primary" />
      <RangeSlider defaultValue={[30, 70]} color="secondary" />
      <RangeSlider defaultValue={[25, 75]} color="success" />
      <RangeSlider defaultValue={[35, 65]} color="warning" />
      <RangeSlider defaultValue={[40, 60]} color="error" />
    </div>
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var T,k,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultValue: [25, 75],
    disabled: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const q=["Default","WithLabel","WithMarks","WithTooltip","MinRange","Colors","Disabled"];export{i as Colors,t as Default,c as Disabled,d as MinRange,l as WithLabel,o as WithMarks,u as WithTooltip,q as __namedExportsOrder,z as default};
