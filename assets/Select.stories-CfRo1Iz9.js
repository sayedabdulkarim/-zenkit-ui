import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a9 as o}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const N={title:"Components/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]}}},a=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}],r={args:{options:a,placeholder:"Select a framework"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"250px"},children:[e.jsx(o,{size:"sm",options:a,placeholder:"Small select"}),e.jsx(o,{size:"md",options:a,placeholder:"Medium select"}),e.jsx(o,{size:"lg",options:a,placeholder:"Large select"})]})},l={args:{options:a,placeholder:"Select framework",prefixIcon:e.jsx("span",{children:"🚀"})}},t={args:{placeholder:"Select a language",options:[{label:"Frontend",options:[{value:"js",label:"JavaScript"},{value:"ts",label:"TypeScript"}]},{label:"Backend",options:[{value:"python",label:"Python"},{value:"go",label:"Go"},{value:"rust",label:"Rust"}]}]}},n={args:{placeholder:"Select option",options:[{value:"available",label:"Available"},{value:"disabled",label:"Disabled option",disabled:!0},{value:"another",label:"Another option"}]}},i={args:{options:a,placeholder:"Select required",error:!0}},p={args:{options:a,placeholder:"Disabled select",disabled:!0}},c={args:{options:a,placeholder:"Loading...",loading:!0}},d={args:{options:a,placeholder:"Full width select",fullWidth:!0},parameters:{layout:"padded"}},u={render:()=>e.jsxs(o,{placeholder:"Select with children",children:[e.jsx("option",{value:"1",children:"Option 1"}),e.jsx("option",{value:"2",children:"Option 2"}),e.jsxs("optgroup",{label:"Group",children:[e.jsx("option",{value:"3",children:"Option 3"}),e.jsx("option",{value:"4",children:"Option 4"})]})]})};var m,h,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select a framework'
  }
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,v,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '250px'
  }}>
      <Select size="sm" options={basicOptions} placeholder="Small select" />
      <Select size="md" options={basicOptions} placeholder="Medium select" />
      <Select size="lg" options={basicOptions} placeholder="Large select" />
    </div>
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,O,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select framework',
    prefixIcon: <span>🚀</span>
  }
}`,...(f=(O=l.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var j,y,D;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a language',
    options: [{
      label: 'Frontend',
      options: [{
        value: 'js',
        label: 'JavaScript'
      }, {
        value: 'ts',
        label: 'TypeScript'
      }]
    }, {
      label: 'Backend',
      options: [{
        value: 'python',
        label: 'Python'
      }, {
        value: 'go',
        label: 'Go'
      }, {
        value: 'rust',
        label: 'Rust'
      }]
    }]
  }
}`,...(D=(y=t.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var W,w,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select option',
    options: [{
      value: 'available',
      label: 'Available'
    }, {
      value: 'disabled',
      label: 'Disabled option',
      disabled: true
    }, {
      value: 'another',
      label: 'Another option'
    }]
  }
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var k,F,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Select required',
    error: true
  }
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var L,A,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Disabled select',
    disabled: true
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var P,R,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Loading...',
    loading: true
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,q,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: basicOptions,
    placeholder: 'Full width select',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var I,J,M;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Select placeholder="Select with children">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <optgroup label="Group">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </Select>
}`,...(M=(J=u.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const Q=["Default","Sizes","WithPrefix","WithOptionGroups","WithDisabledOptions","ErrorState","Disabled","Loading","FullWidth","WithChildren"];export{r as Default,p as Disabled,i as ErrorState,d as FullWidth,c as Loading,s as Sizes,u as WithChildren,n as WithDisabledOptions,t as WithOptionGroups,l as WithPrefix,Q as __namedExportsOrder,N as default};
