import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{bW as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const G={title:"Data Display/Segmented",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={render:()=>{const[t,s]=d.useState("daily");return e.jsx(a,{options:["Daily","Weekly","Monthly","Yearly"],value:t,onChange:s})}},r={render:()=>{const[t,s]=d.useState("list");return e.jsx(a,{options:[{label:"List",value:"list"},{label:"Grid",value:"grid"},{label:"Table",value:"table"}],value:t,onChange:s})}},o={render:()=>{const[t,s]=d.useState("left");return e.jsx(a,{options:[{label:"⬅️ Left",value:"left"},{label:"⬆️ Center",value:"center"},{label:"➡️ Right",value:"right"}],value:t,onChange:s})}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{options:["S","M","L"],size:"sm"}),e.jsx(a,{options:["S","M","L"],size:"md"}),e.jsx(a,{options:["S","M","L"],size:"lg"})]})},i={args:{options:["Option 1","Option 2","Option 3"],block:!0,style:{width:"400px"}}},u={args:{options:["Daily","Weekly","Monthly"],disabled:!0}},c={args:{options:[{label:"Available",value:"available"},{label:"Sold Out",value:"soldout",disabled:!0},{label:"Coming Soon",value:"coming"}]}};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('daily');
    return <Segmented options={['Daily', 'Weekly', 'Monthly', 'Yearly']} value={value} onChange={setValue} />;
  }
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,v,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('list');
    return <Segmented options={[{
      label: 'List',
      value: 'list'
    }, {
      label: 'Grid',
      value: 'grid'
    }, {
      label: 'Table',
      value: 'table'
    }]} value={value} onChange={setValue} />;
  }
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var y,h,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('left');
    return <Segmented options={[{
      label: '⬅️ Left',
      value: 'left'
    }, {
      label: '⬆️ Center',
      value: 'center'
    }, {
      label: '➡️ Right',
      value: 'right'
    }]} value={value} onChange={setValue} />;
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,D,O;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Segmented options={['S', 'M', 'L']} size="sm" />
      <Segmented options={['S', 'M', 'L']} size="md" />
      <Segmented options={['S', 'M', 'L']} size="lg" />
    </div>
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var V,C,L;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    block: true,
    style: {
      width: '400px'
    }
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var M,j,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: ['Daily', 'Weekly', 'Monthly'],
    disabled: true
  }
}`,...(W=(j=u.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var k,z,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Available',
      value: 'available'
    }, {
      label: 'Sold Out',
      value: 'soldout',
      disabled: true
    }, {
      label: 'Coming Soon',
      value: 'coming'
    }]
  }
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const I=["Default","WithValues","WithIcons","Sizes","Block","Disabled","DisabledOption"];export{i as Block,n as Default,u as Disabled,c as DisabledOption,l as Sizes,o as WithIcons,r as WithValues,I as __namedExportsOrder,G as default};
