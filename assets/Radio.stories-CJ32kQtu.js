import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as P}from"./index-DRjF_FHU.js";import{bK as a,bL as W}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const A={title:"Components/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},colorScheme:{control:"select",options:["primary","secondary","success","danger","warning","info"]}}},r={args:{label:"Radio option",name:"default"}},o={args:{label:"Selected option",name:"checked",defaultChecked:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{size:"sm",label:"Small radio",name:"sizes",value:"sm"}),e.jsx(a,{size:"md",label:"Medium radio",name:"sizes",value:"md"}),e.jsx(a,{size:"lg",label:"Large radio",name:"sizes",value:"lg"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{colorScheme:"primary",label:"Primary",name:"colors",defaultChecked:!0}),e.jsx(a,{colorScheme:"secondary",label:"Secondary",name:"colors2",defaultChecked:!0}),e.jsx(a,{colorScheme:"success",label:"Success",name:"colors3",defaultChecked:!0}),e.jsx(a,{colorScheme:"danger",label:"Danger",name:"colors4",defaultChecked:!0})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{label:"Disabled unchecked",name:"disabled1",disabled:!0}),e.jsx(a,{label:"Disabled checked",name:"disabled2",disabled:!0,defaultChecked:!0})]})},d={render:()=>{const[n,u]=P.useState("option1");return e.jsxs(W,{name:"vertical",value:n,onChange:u,children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2"}),e.jsx(a,{value:"option3",label:"Option 3"}),e.jsx(a,{value:"option4",label:"Option 4 (disabled)",disabled:!0})]})}},i={render:()=>{const[n,u]=P.useState("left");return e.jsxs(W,{name:"horizontal",value:n,onChange:u,direction:"horizontal",children:[e.jsx(a,{value:"left",label:"Left"}),e.jsx(a,{value:"center",label:"Center"}),e.jsx(a,{value:"right",label:"Right"})]})}},c={args:{label:"Required selection",error:!0,name:"error"}};var m,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    name: 'default'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,g,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Selected option',
    name: 'checked',
    defaultChecked: true
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Radio size="sm" label="Small radio" name="sizes" value="sm" />
      <Radio size="md" label="Medium radio" name="sizes" value="md" />
      <Radio size="lg" label="Large radio" name="sizes" value="lg" />
    </div>
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var R,y,j;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Radio colorScheme="primary" label="Primary" name="colors" defaultChecked />
      <Radio colorScheme="secondary" label="Secondary" name="colors2" defaultChecked />
      <Radio colorScheme="success" label="Success" name="colors3" defaultChecked />
      <Radio colorScheme="danger" label="Danger" name="colors4" defaultChecked />
    </div>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,z,k;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Radio label="Disabled unchecked" name="disabled1" disabled />
      <Radio label="Disabled checked" name="disabled2" disabled defaultChecked />
    </div>
}`,...(k=(z=t.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var D,G,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <RadioGroup name="vertical" value={value} onChange={setValue}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
        <Radio value="option4" label="Option 4 (disabled)" disabled />
      </RadioGroup>;
  }
}`,...(O=(G=d.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,E,L;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('left');
    return <RadioGroup name="horizontal" value={value} onChange={setValue} direction="horizontal">
        <Radio value="left" label="Left" />
        <Radio value="center" label="Center" />
        <Radio value="right" label="Right" />
      </RadioGroup>;
  }
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var q,H,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Required selection',
    error: true,
    name: 'error'
  }
}`,...(M=(H=c.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};const B=["Default","Checked","Sizes","ColorSchemes","Disabled","VerticalGroup","HorizontalGroup","WithError"];export{o as Checked,s as ColorSchemes,r as Default,t as Disabled,i as HorizontalGroup,l as Sizes,d as VerticalGroup,c as WithError,B as __namedExportsOrder,A as default};
