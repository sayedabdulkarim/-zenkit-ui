import{j as e}from"./jsx-runtime-DiklIkkE.js";import{aB as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const A={title:"Components/FileInput",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","filled","dropzone"]}}},r={args:{placeholder:"Choose a file"}},a={args:{label:"Upload Document",placeholder:"Click to select file"}},l={args:{label:"Upload Image",accept:"image/*",placeholder:"Select an image file"}},s={args:{label:"Upload Files",multiple:!0,placeholder:"Select multiple files"}},o={args:{variant:"dropzone",label:"Upload Files",placeholder:"Drag and drop files here or click to browse"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[e.jsx(i,{size:"sm",placeholder:"Small"}),e.jsx(i,{size:"md",placeholder:"Medium"}),e.jsx(i,{size:"lg",placeholder:"Large"})]})},c={args:{label:"Disabled Input",placeholder:"Cannot select files",disabled:!0}},p={args:{label:"Required File",placeholder:"Select a file",error:"Please select a file"}};var n,d,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Choose a file'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Upload Document',
    placeholder: 'Click to select file'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Upload Image',
    accept: 'image/*',
    placeholder: 'Select an image file'
  }
}`,...(S=(b=l.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,z,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Upload Files',
    multiple: true,
    placeholder: 'Select multiple files'
  }
}`,...(D=(z=s.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,I,y;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'dropzone',
    label: 'Upload Files',
    placeholder: 'Drag and drop files here or click to browse'
  }
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var U,C,j;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <FileInput size="sm" placeholder="Small" />
      <FileInput size="md" placeholder="Medium" />
      <FileInput size="lg" placeholder="Large" />
    </div>
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var v,k,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot select files',
    disabled: true
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var E,L,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Required File',
    placeholder: 'Select a file',
    error: 'Please select a file'
  }
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const P=["Default","WithLabel","AcceptTypes","Multiple","Dropzone","Sizes","Disabled","WithError"];export{l as AcceptTypes,r as Default,c as Disabled,o as Dropzone,s as Multiple,t as Sizes,p as WithError,a as WithLabel,P as __namedExportsOrder,A as default};
