import{j as i}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{b6 as u}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const P={title:"Data Entry/Mentions",component:u,parameters:{layout:"centered"},tags:["autodocs"]},t=[{value:"john",label:"John Doe"},{value:"jane",label:"Jane Smith"},{value:"bob",label:"Bob Johnson"},{value:"alice",label:"Alice Williams"}],a={render:()=>{const[e,s]=p.useState("");return i.jsx(u,{value:e,onChange:s,options:t,placeholder:"Type @ to mention someone",style:{width:"300px"}})}},r={render:()=>{const[e,s]=p.useState("");return i.jsx(u,{value:e,onChange:s,options:t,prefix:"@",placeholder:"Type @ to mention",style:{width:"300px"}})}},o={render:()=>{const[e,s]=p.useState("");return i.jsx(u,{value:e,onChange:s,options:t,placeholder:"@ for users, # for tags",style:{width:"300px"}})}},n={args:{options:t,disabled:!0,placeholder:"Disabled mentions",style:{width:"300px"}}},l={args:{options:t,readOnly:!0,value:"Hello @john, please review this.",style:{width:"300px"}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Mentions value={value} onChange={setValue} options={users} placeholder="Type @ to mention someone" style={{
      width: '300px'
    }} />;
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,x,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Mentions value={value} onChange={setValue} options={users} prefix="@" placeholder="Type @ to mention" style={{
      width: '300px'
    }} />;
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var g,y,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const tags = [{
      value: 'bug',
      label: 'Bug'
    }, {
      value: 'feature',
      label: 'Feature'
    }, {
      value: 'docs',
      label: 'Documentation'
    }];
    return <Mentions value={value} onChange={setValue} options={users} placeholder="@ for users, # for tags" style={{
      width: '300px'
    }} />;
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,w,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: users,
    disabled: true,
    placeholder: 'Disabled mentions',
    style: {
      width: '300px'
    }
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,D,V;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: users,
    readOnly: true,
    value: 'Hello @john, please review this.',
    style: {
      width: '300px'
    }
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};const T=["Default","WithPrefix","MultiplePrefix","Disabled","ReadOnly"];export{a as Default,n as Disabled,o as MultiplePrefix,l as ReadOnly,r as WithPrefix,T as __namedExportsOrder,P as default};
