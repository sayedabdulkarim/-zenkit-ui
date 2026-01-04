import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{aX as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const _={title:"Components/JsonInput",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},m=JSON.stringify({name:"John",age:30,active:!0},null,2),n={render:()=>{const[a,r]=p.useState(m);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{value:a,onChange:r})})}},s={render:()=>{const[a,r]=p.useState(m);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{label:"Configuration",description:"Enter valid JSON",value:a,onChange:r})})}},o={render:()=>{const[a,r]=p.useState("{ invalid json }");return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{label:"JSON Data",value:a,onChange:r,validateOnChange:!0})})}},l={render:()=>{const[a,r]=p.useState('{"name":"John","age":30}');return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{label:"Click Format to prettify",value:a,onChange:r,formatOnBlur:!0})})}},i={args:{label:"Read Only",value:JSON.stringify({readonly:!0,data:[1,2,3]},null,2),readOnly:!0},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]},d={args:{label:"Disabled",value:m,disabled:!0},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]},u={args:{label:"Tall Editor",value:JSON.stringify({users:[{id:1,name:"Alice"},{id:2,name:"Bob"},{id:3,name:"Charlie"}],settings:{theme:"dark",notifications:!0}},null,2),minRows:10},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]},c={args:{label:"Invalid JSON",value:"{ invalid }",error:"Invalid JSON format"},decorators:[a=>e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{})})]};var v,h,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultJson);
    return <div style={{
      width: '400px'
    }}>
        <JsonInput value={value} onChange={setValue} />
      </div>;
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,x,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultJson);
    return <div style={{
      width: '400px'
    }}>
        <JsonInput label="Configuration" description="Enter valid JSON" value={value} onChange={setValue} />
      </div>;
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var J,f,b;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('{ invalid json }');
    return <div style={{
      width: '400px'
    }}>
        <JsonInput label="JSON Data" value={value} onChange={setValue} validateOnChange />
      </div>;
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var O,j,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('{"name":"John","age":30}');
    return <div style={{
      width: '400px'
    }}>
        <JsonInput label="Click Format to prettify" value={value} onChange={setValue} formatOnBlur />
      </div>;
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var w,V,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Read Only',
    value: JSON.stringify({
      readonly: true,
      data: [1, 2, 3]
    }, null, 2),
    readOnly: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}><Story /></div>]
}`,...(N=(V=i.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var I,E,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    value: defaultJson,
    disabled: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}><Story /></div>]
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var R,W,k;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Tall Editor',
    value: JSON.stringify({
      users: [{
        id: 1,
        name: 'Alice'
      }, {
        id: 2,
        name: 'Bob'
      }, {
        id: 3,
        name: 'Charlie'
      }],
      settings: {
        theme: 'dark',
        notifications: true
      }
    }, null, 2),
    minRows: 10
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}><Story /></div>]
}`,...(k=(W=u.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var B,F,z;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Invalid JSON',
    value: '{ invalid }',
    error: 'Invalid JSON format'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}><Story /></div>]
}`,...(z=(F=c.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const X=["Default","WithLabel","WithValidation","Formatize","ReadOnly","Disabled","CustomHeight","WithError"];export{u as CustomHeight,n as Default,d as Disabled,l as Formatize,i as ReadOnly,c as WithError,s as WithLabel,o as WithValidation,X as __namedExportsOrder,_ as default};
