import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{bh as s}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const l=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"solid",label:"Solid"},{value:"preact",label:"Preact"}],G={title:"Components/MultiSelect",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},o={render:()=>{const[t,a]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{options:l,value:t,onChange:a,placeholder:"Select frameworks"})})}},n={render:()=>{const[t,a]=r.useState(["react","vue"]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{label:"Favorite Frameworks",options:l,value:t,onChange:a})})}},u={render:()=>{const[t,a]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{label:"Search & Select",options:l,value:t,onChange:a,searchable:!0,placeholder:"Type to search..."})})}},c={render:()=>{const[t,a]=r.useState([]),[v,W]=r.useState(l);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{label:"Add your own",options:v,value:t,onChange:a,creatable:!0,searchable:!0,onCreateOption:h=>{const _={value:h.toLowerCase(),label:h};W([...v,_])}})})}},i={render:()=>{const[t,a]=r.useState([]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{label:"Max 3 selections",options:l,value:t,onChange:a,maxSelectedValues:3})})}},d={render:()=>{const[t,a]=r.useState(["react","vue"]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{label:"Clearable",options:l,value:t,onChange:a,clearable:!0})})}},p={args:{label:"Disabled Select",options:l,value:["react","vue"],disabled:!0},decorators:[t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{})})]};var m,S,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect options={options} value={value} onChange={setValue} placeholder="Select frameworks" />
      </div>;
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,g,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'vue']);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect label="Favorite Frameworks" options={options} value={value} onChange={setValue} />
      </div>;
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var C,y,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect label="Search & Select" options={options} value={value} onChange={setValue} searchable placeholder="Type to search..." />
      </div>;
  }
}`,...(V=(y=u.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var j,M,O;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const [opts, setOpts] = useState(options);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect label="Add your own" options={opts} value={value} onChange={setValue} creatable searchable onCreateOption={label => {
        const newOpt = {
          value: label.toLowerCase(),
          label
        };
        setOpts([...opts, newOpt]);
      }} />
      </div>;
  }
}`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var f,D,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect label="Max 3 selections" options={options} value={value} onChange={setValue} maxSelectedValues={3} />
      </div>;
  }
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var F,L,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'vue']);
    return <div style={{
      width: '300px'
    }}>
        <MultiSelect label="Clearable" options={options} value={value} onChange={setValue} clearable />
      </div>;
  }
}`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,T,R;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    options,
    value: ['react', 'vue'],
    disabled: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const H=["Default","WithLabel","Searchable","Creatable","MaxSelected","Clearable","Disabled"];export{d as Clearable,c as Creatable,o as Default,p as Disabled,i as MaxSelected,u as Searchable,n as WithLabel,H as __namedExportsOrder,G as default};
