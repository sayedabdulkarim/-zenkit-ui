import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{W as r,X as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const R={title:"Components/CheckboxGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},orientation:{control:"select",options:["horizontal","vertical"]}}},s={render:()=>{const[l,o]=t.useState(["react"]);return e.jsxs(r,{value:l,onChange:o,children:[e.jsx(a,{value:"react",label:"React"}),e.jsx(a,{value:"vue",label:"Vue"}),e.jsx(a,{value:"angular",label:"Angular"}),e.jsx(a,{value:"svelte",label:"Svelte"})]})}},u={render:()=>{const[l,o]=t.useState([]);return e.jsxs(r,{label:"Select frameworks",value:l,onChange:o,children:[e.jsx(a,{value:"react",label:"React"}),e.jsx(a,{value:"vue",label:"Vue"}),e.jsx(a,{value:"angular",label:"Angular"})]})}},n={render:()=>{const[l,o]=t.useState(["option1"]);return e.jsxs(r,{orientation:"horizontal",value:l,onChange:o,children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2"}),e.jsx(a,{value:"option3",label:"Option 3"})]})}},c={render:()=>{const[l,o]=t.useState([]);return e.jsxs(r,{label:"Notifications",description:"Choose how you want to be notified",value:l,onChange:o,children:[e.jsx(a,{value:"email",label:"Email"}),e.jsx(a,{value:"sms",label:"SMS"}),e.jsx(a,{value:"push",label:"Push notifications"})]})}},i={render:()=>{const[l,o]=t.useState([]);return e.jsxs(r,{label:"Select at least one",error:"Please select at least one option",value:l,onChange:o,children:[e.jsx(a,{value:"option1",label:"Option 1"}),e.jsx(a,{value:"option2",label:"Option 2"})]})}},b={render:()=>{const[l,o]=t.useState(["enabled1"]);return e.jsxs(r,{value:l,onChange:o,children:[e.jsx(a,{value:"enabled1",label:"Enabled option"}),e.jsx(a,{value:"disabled",label:"Disabled option",disabled:!0}),e.jsx(a,{value:"enabled2",label:"Another enabled"})]})}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[e.jsxs(r,{size:"sm",defaultValue:["a"],children:[e.jsx(a,{value:"a",label:"Small A"}),e.jsx(a,{value:"b",label:"Small B"})]}),e.jsxs(r,{size:"md",defaultValue:["a"],children:[e.jsx(a,{value:"a",label:"Medium A"}),e.jsx(a,{value:"b",label:"Medium B"})]}),e.jsxs(r,{size:"lg",defaultValue:["a"],children:[e.jsx(a,{value:"a",label:"Large A"}),e.jsx(a,{value:"b",label:"Large B"})]})]})};var d,m,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['react']);
    return <CheckboxGroup value={value} onChange={setValue}>
        <CheckboxGroupItem value="react" label="React" />
        <CheckboxGroupItem value="vue" label="Vue" />
        <CheckboxGroupItem value="angular" label="Angular" />
        <CheckboxGroupItem value="svelte" label="Svelte" />
      </CheckboxGroup>;
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,v,C;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <CheckboxGroup label="Select frameworks" value={value} onChange={setValue}>
        <CheckboxGroupItem value="react" label="React" />
        <CheckboxGroupItem value="vue" label="Vue" />
        <CheckboxGroupItem value="angular" label="Angular" />
      </CheckboxGroup>;
  }
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,G,g;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['option1']);
    return <CheckboxGroup orientation="horizontal" value={value} onChange={setValue}>
        <CheckboxGroupItem value="option1" label="Option 1" />
        <CheckboxGroupItem value="option2" label="Option 2" />
        <CheckboxGroupItem value="option3" label="Option 3" />
      </CheckboxGroup>;
  }
}`,...(g=(G=n.parameters)==null?void 0:G.docs)==null?void 0:g.source}}};var j,S,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <CheckboxGroup label="Notifications" description="Choose how you want to be notified" value={value} onChange={setValue}>
        <CheckboxGroupItem value="email" label="Email" />
        <CheckboxGroupItem value="sms" label="SMS" />
        <CheckboxGroupItem value="push" label="Push notifications" />
      </CheckboxGroup>;
  }
}`,...(V=(S=c.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var I,f,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <CheckboxGroup label="Select at least one" error="Please select at least one option" value={value} onChange={setValue}>
        <CheckboxGroupItem value="option1" label="Option 1" />
        <CheckboxGroupItem value="option2" label="Option 2" />
      </CheckboxGroup>;
  }
}`,...(z=(f=i.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var A,O,E;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['enabled1']);
    return <CheckboxGroup value={value} onChange={setValue}>
        <CheckboxGroupItem value="enabled1" label="Enabled option" />
        <CheckboxGroupItem value="disabled" label="Disabled option" disabled />
        <CheckboxGroupItem value="enabled2" label="Another enabled" />
      </CheckboxGroup>;
  }
}`,...(E=(O=b.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var y,D,W;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '2rem'
  }}>
      <CheckboxGroup size="sm" defaultValue={['a']}>
        <CheckboxGroupItem value="a" label="Small A" />
        <CheckboxGroupItem value="b" label="Small B" />
      </CheckboxGroup>
      <CheckboxGroup size="md" defaultValue={['a']}>
        <CheckboxGroupItem value="a" label="Medium A" />
        <CheckboxGroupItem value="b" label="Medium B" />
      </CheckboxGroup>
      <CheckboxGroup size="lg" defaultValue={['a']}>
        <CheckboxGroupItem value="a" label="Large A" />
        <CheckboxGroupItem value="b" label="Large B" />
      </CheckboxGroup>
    </div>
}`,...(W=(D=p.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const P=["Default","WithLabel","Horizontal","WithDescription","WithError","DisabledItems","Sizes"];export{s as Default,b as DisabledItems,n as Horizontal,p as Sizes,c as WithDescription,i as WithError,u as WithLabel,P as __namedExportsOrder,R as default};
