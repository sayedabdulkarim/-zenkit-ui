import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as V}from"./index-DRjF_FHU.js";import{cK as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const A={title:"Components/Tag",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","soft","outline"]},color:{control:"select",options:["default","primary","secondary","success","danger","warning","info"]},size:{control:"select",options:["sm","md","lg"]}}},a={args:{children:"Tag"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx(r,{color:"default",children:"Default"}),e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"secondary",children:"Secondary"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{color:"danger",children:"Danger"}),e.jsx(r,{color:"warning",children:"Warning"}),e.jsx(r,{color:"info",children:"Info"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{variant:"soft",color:"primary",children:"Soft"}),e.jsx(r,{variant:"solid",color:"primary",children:"Solid"}),e.jsx(r,{variant:"outline",color:"primary",children:"Outline"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},l={render:()=>{const[t,D]=V.useState(["React","Vue","Angular","Svelte"]);return e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:t.map(i=>e.jsx(r,{closable:!0,onClose:()=>D(t.filter(I=>I!==i)),children:i},i))})}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{icon:e.jsx("span",{children:"🏷️"}),children:"Label"}),e.jsx(r,{icon:e.jsx("span",{children:"⭐"}),color:"warning",children:"Featured"}),e.jsx(r,{icon:e.jsx("span",{children:"✓"}),color:"success",children:"Verified"})]})};var d,g,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  }
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,u,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  }}>
      <Tag color="default">Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="danger">Danger</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="info">Info</Tag>
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,f,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Tag variant="soft" color="primary">Soft</Tag>
      <Tag variant="solid" color="primary">Solid</Tag>
      <Tag variant="outline" color="primary">Outline</Tag>
    </div>
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,j,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  }}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,w,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(['React', 'Vue', 'Angular', 'Svelte']);
    return <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap'
    }}>
        {tags.map(tag => <Tag key={tag} closable onClose={() => setTags(tags.filter(t => t !== tag))}>
            {tag}
          </Tag>)}
      </div>;
  }
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var W,C,b;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '0.5rem'
  }}>
      <Tag icon={<span>🏷️</span>}>Label</Tag>
      <Tag icon={<span>⭐</span>} color="warning">Featured</Tag>
      <Tag icon={<span>✓</span>} color="success">Verified</Tag>
    </div>
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const F=["Default","Colors","Variants","Sizes","Closable","WithIcon"];export{l as Closable,s as Colors,a as Default,n as Sizes,o as Variants,c as WithIcon,F as __namedExportsOrder,A as default};
