import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{a6 as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const o=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"kr",label:"South Korea"}],G={title:"Components/Combobox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},l={render:()=>{const[t,a]=s.useState(null);return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{options:o,value:t,onChange:a,placeholder:"Select a country"})})}},n={render:()=>{const[t,a]=s.useState(null);return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{label:"Country",options:o,value:t,onChange:a,placeholder:"Search countries..."})})}},u={render:()=>{const[t,a]=s.useState(null),[p,K]=s.useState(o);return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{label:"Add new option",options:p,value:t,onChange:a,creatable:!0,onCreateOption:b=>{const v={value:b.toLowerCase(),label:b};K([...p,v]),a(v.value)}})})}},i={render:()=>{const[t,a]=s.useState("us");return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{label:"Clearable selection",options:o,value:t,onChange:a,clearable:!0})})}},c={render:()=>{const[t,a]=s.useState(null);return e.jsx("div",{style:{width:"300px"},children:e.jsx(r,{label:"Country",description:"Start typing to search",options:o,value:t,onChange:a})})}},d={args:{label:"Disabled",options:o,value:"us",disabled:!0},decorators:[t=>e.jsx("div",{style:{width:"300px"},children:e.jsx(t,{})})]};var m,h,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      width: '300px'
    }}>
        <Combobox options={countries} value={value} onChange={setValue} placeholder="Select a country" />
      </div>;
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,g,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      width: '300px'
    }}>
        <Combobox label="Country" options={countries} value={value} onChange={setValue} placeholder="Search countries..." />
      </div>;
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,w,V;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    const [opts, setOpts] = useState(countries);
    return <div style={{
      width: '300px'
    }}>
        <Combobox label="Add new option" options={opts} value={value} onChange={setValue} creatable onCreateOption={label => {
        const newOpt = {
          value: label.toLowerCase(),
          label
        };
        setOpts([...opts, newOpt]);
        setValue(newOpt.value);
      }} />
      </div>;
  }
}`,...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var j,O,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>('us');
    return <div style={{
      width: '300px'
    }}>
        <Combobox label="Clearable selection" options={countries} value={value} onChange={setValue} clearable />
      </div>;
  }
}`,...(D=(O=i.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var f,L,W;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return <div style={{
      width: '300px'
    }}>
        <Combobox label="Country" description="Start typing to search" options={countries} value={value} onChange={setValue} />
      </div>;
  }
}`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var A,E,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    options: countries,
    value: 'us',
    disabled: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}><Story /></div>]
}`,...(k=(E=d.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const J=["Default","WithLabel","Creatable","Clearable","WithDescription","Disabled"];export{i as Clearable,u as Creatable,l as Default,d as Disabled,c as WithDescription,n as WithLabel,J as __namedExportsOrder,G as default};
