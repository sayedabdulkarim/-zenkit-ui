import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as b}from"./index-DRjF_FHU.js";import{cT as r,cU as l}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const z={title:"Data Display/ToggleGroup",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>{const[s,n]=b.useState("center");return e.jsxs(r,{type:"single",value:s,onValueChange:n,children:[e.jsx(l,{value:"left",children:"Left"}),e.jsx(l,{value:"center",children:"Center"}),e.jsx(l,{value:"right",children:"Right"})]})}},o={render:()=>{const[s,n]=b.useState(["bold"]);return e.jsxs(r,{type:"multiple",value:s,onValueChange:n,children:[e.jsx(l,{value:"bold",children:e.jsx("strong",{children:"B"})}),e.jsx(l,{value:"italic",children:e.jsx("em",{children:"I"})}),e.jsx(l,{value:"underline",children:e.jsx("u",{children:"U"})})]})}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(r,{type:"single",size:"sm",defaultValue:"a",children:[e.jsx(l,{value:"a",children:"A"}),e.jsx(l,{value:"b",children:"B"}),e.jsx(l,{value:"c",children:"C"})]}),e.jsxs(r,{type:"single",size:"md",defaultValue:"a",children:[e.jsx(l,{value:"a",children:"A"}),e.jsx(l,{value:"b",children:"B"}),e.jsx(l,{value:"c",children:"C"})]}),e.jsxs(r,{type:"single",size:"lg",defaultValue:"a",children:[e.jsx(l,{value:"a",children:"A"}),e.jsx(l,{value:"b",children:"B"}),e.jsx(l,{value:"c",children:"C"})]})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(r,{type:"single",variant:"default",defaultValue:"a",children:[e.jsx(l,{value:"a",children:"Default"}),e.jsx(l,{value:"b",children:"Variant"})]}),e.jsxs(r,{type:"single",variant:"outline",defaultValue:"a",children:[e.jsx(l,{value:"a",children:"Outline"}),e.jsx(l,{value:"b",children:"Variant"})]})]})},g={render:()=>e.jsxs(r,{type:"single",disabled:!0,defaultValue:"a",children:[e.jsx(l,{value:"a",children:"A"}),e.jsx(l,{value:"b",children:"B"}),e.jsx(l,{value:"c",children:"C"})]})};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>('center');
    return <ToggleGroup type="single" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,T;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['bold']);
    return <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold"><strong>B</strong></ToggleGroupItem>
        <ToggleGroupItem value="italic"><em>I</em></ToggleGroupItem>
        <ToggleGroupItem value="underline"><u>U</u></ToggleGroupItem>
      </ToggleGroup>;
  }
}`,...(T=(m=o.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var G,v,x;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <ToggleGroup type="single" size="sm" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="md" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...(x=(v=u.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var I,h,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <ToggleGroup type="single" variant="default" defaultValue="a">
        <ToggleGroupItem value="a">Default</ToggleGroupItem>
        <ToggleGroupItem value="b">Variant</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" defaultValue="a">
        <ToggleGroupItem value="a">Outline</ToggleGroupItem>
        <ToggleGroupItem value="b">Variant</ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,V,y;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" disabled defaultValue="a">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
}`,...(y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:y.source}}};const A=["Single","Multiple","Sizes","Variants","Disabled"];export{g as Disabled,o as Multiple,a as Single,u as Sizes,t as Variants,A as __namedExportsOrder,z as default};
