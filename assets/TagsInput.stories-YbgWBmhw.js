import{j as s}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{cL as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const k={title:"Data Entry/TagsInput",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[e,a]=t.useState(["React","TypeScript"]);return s.jsx(r,{value:e,onChange:a,placeholder:"Add tags..."})}},o={render:()=>{const[e,a]=t.useState([]);return s.jsx(r,{value:e,onChange:a,placeholder:"Type and press Enter to add tags"})}},l={render:()=>{const[e,a]=t.useState(["One","Two"]);return s.jsx(r,{value:e,onChange:a,maxTags:5,placeholder:"Max 5 tags"})}},g={render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"300px"},children:[s.jsx(r,{size:"sm",value:["Small"],placeholder:"Small"}),s.jsx(r,{size:"md",value:["Medium"],placeholder:"Medium"}),s.jsx(r,{size:"lg",value:["Large"],placeholder:"Large"})]})},c={render:()=>{const[e,a]=t.useState(["Tag 1","Tag 2","Tag 3"]);return s.jsx(r,{value:e,onChange:a,clearable:!0,placeholder:"Clearable tags"})}},d={args:{value:["Disabled","Tags"],disabled:!0}},u={render:()=>{const[e,a]=t.useState([]);return s.jsx(r,{value:e,onChange:a,validate:R=>R.length>=2,placeholder:"Min 2 characters per tag"})}};var p,i,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
    return <TagsInput value={tags} onChange={setTags} placeholder="Add tags..." />;
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var T,h,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return <TagsInput value={tags} onChange={setTags} placeholder="Type and press Enter to add tags" />;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,v,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['One', 'Two']);
    return <TagsInput value={tags} onChange={setTags} maxTags={5} placeholder="Max 5 tags" />;
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var b,y,j;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '300px'
  }}>
      <TagsInput size="sm" value={['Small']} placeholder="Small" />
      <TagsInput size="md" value={['Medium']} placeholder="Medium" />
      <TagsInput size="lg" value={['Large']} placeholder="Large" />
    </div>
}`,...(j=(y=g.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,I,M;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['Tag 1', 'Tag 2', 'Tag 3']);
    return <TagsInput value={tags} onChange={setTags} clearable placeholder="Clearable tags" />;
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,z,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: ['Disabled', 'Tags'],
    disabled: true
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var L,w,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return <TagsInput value={tags} onChange={setTags} validate={tag => tag.length >= 2} placeholder="Min 2 characters per tag" />;
  }
}`,...(O=(w=u.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};const q=["Default","Empty","MaxTags","Sizes","Clearable","Disabled","WithValidation"];export{c as Clearable,n as Default,d as Disabled,o as Empty,l as MaxTags,g as Sizes,u as WithValidation,q as __namedExportsOrder,k as default};
