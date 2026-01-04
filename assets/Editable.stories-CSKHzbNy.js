import{j as a}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{aw as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const q={title:"Data Entry/Editable",component:r,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>{const[e,t]=s.useState("Click to edit");return a.jsx(r,{value:e,onChange:t,onSubmit:m=>console.log("Submitted:",m)})}},n={render:()=>{const[e,t]=s.useState("");return a.jsx(r,{value:e,onChange:t,placeholder:"Click to add text..."})}},l={render:()=>{const[e,t]=s.useState("Double-click to edit");return a.jsx(r,{value:e,onChange:t,startWithEditView:!1,activationMode:"dblclick"})}},u={render:()=>{const[e,t]=s.useState("Edit me");return a.jsx(r,{value:e,onChange:t,showControls:!0,onSubmit:m=>console.log("Saved:",m),onCancel:()=>console.log("Cancelled")})}},c={render:()=>{const[e,t]=s.useState("This is a longer text that can be edited. Click to edit this content.");return a.jsx(r,{value:e,onChange:t,type:"textarea",style:{maxWidth:"400px"}})}},i={args:{value:"This cannot be edited",disabled:!0}},d={render:()=>{const[e,t]=s.useState("Page Title");return a.jsx("h1",{style:{margin:0},children:a.jsx(r,{value:e,onChange:t,style:{fontSize:"inherit",fontWeight:"inherit"}})})}};var h,p,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Click to edit');
    return <Editable value={value} onChange={setValue} onSubmit={val => console.log('Submitted:', val)} />;
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,S,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Editable value={value} onChange={setValue} placeholder="Click to add text..." />;
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,x,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Double-click to edit');
    return <Editable value={value} onChange={setValue} startWithEditView={false} activationMode="dblclick" />;
  }
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var E,f,k;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Edit me');
    return <Editable value={value} onChange={setValue} showControls onSubmit={val => console.log('Saved:', val)} onCancel={() => console.log('Cancelled')} />;
  }
}`,...(k=(f=u.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,W,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('This is a longer text that can be edited. Click to edit this content.');
    return <Editable value={value} onChange={setValue} type="textarea" style={{
      maxWidth: '400px'
    }} />;
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var D,T,w;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 'This cannot be edited',
    disabled: true
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,z,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Page Title');
    return <h1 style={{
      margin: 0
    }}>
        <Editable value={value} onChange={setValue} style={{
        fontSize: 'inherit',
        fontWeight: 'inherit'
      }} />
      </h1>;
  }
}`,...(H=(z=d.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const A=["Default","WithPlaceholder","DoubleClick","WithControls","Textarea","Disabled","Heading"];export{o as Default,i as Disabled,l as DoubleClick,d as Heading,c as Textarea,u as WithControls,n as WithPlaceholder,A as __namedExportsOrder,q as default};
