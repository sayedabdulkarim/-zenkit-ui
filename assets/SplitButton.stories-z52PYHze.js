import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as _}from"./index-DRjF_FHU.js";import{cl as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const U={title:"Components/SplitButton",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"],description:"The visual style"},size:{control:"select",options:["sm","md","lg"],description:"The size of the button"},loading:{control:"boolean",description:"Loading state"},disabled:{control:"boolean",description:"Disabled state"}}},n=[{label:"Save",value:"save"},{label:"Save as Draft",value:"draft"},{label:"Save and Publish",value:"publish"},{label:"Save as Template",value:"template"}],a={render:()=>{const[o,u]=_.useState("save");return e.jsx(t,{options:n,selectedValue:o,onSelect:u,onClick:()=>alert(`Action: ${o}`),children:"Save"})}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",options:n,onClick:()=>{},children:"Primary"}),e.jsx(t,{variant:"secondary",options:n,onClick:()=>{},children:"Secondary"}),e.jsx(t,{variant:"outline",options:n,onClick:()=>{},children:"Outline"}),e.jsx(t,{variant:"ghost",options:n,onClick:()=>{},children:"Ghost"}),e.jsx(t,{variant:"danger",options:n,onClick:()=>{},children:"Danger"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx(t,{size:"sm",options:n,onClick:()=>{},children:"Small"}),e.jsx(t,{size:"md",options:n,onClick:()=>{},children:"Medium"}),e.jsx(t,{size:"lg",options:n,onClick:()=>{},children:"Large"})]})},i={render:()=>{const o=[{label:"Download as PDF",value:"pdf",icon:e.jsx("span",{children:"📄"})},{label:"Download as Word",value:"word",icon:e.jsx("span",{children:"📝"})},{label:"Download as Excel",value:"excel",icon:e.jsx("span",{children:"📊"})},{label:"Download as CSV",value:"csv",icon:e.jsx("span",{children:"📋"})}];return e.jsx(t,{options:o,onClick:()=>alert("Download clicked"),children:"Download"})}},l={render:()=>{const o=[{label:"Option 1",value:"opt1"},{label:"Option 2 (Premium)",value:"opt2",disabled:!0},{label:"Option 3",value:"opt3"},{label:"Option 4 (Coming Soon)",value:"opt4",disabled:!0}];return e.jsx(t,{options:o,onClick:()=>{},children:"Select Action"})}},p={render:()=>e.jsx(t,{loading:!0,options:n,onClick:()=>{},children:"Saving..."})},c={render:()=>e.jsx(t,{disabled:!0,options:n,onClick:()=>{},children:"Disabled"})},d={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"2rem",padding:"2rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"bottom-end (default)"}),e.jsx(t,{placement:"bottom-end",options:n,onClick:()=>{},children:"Bottom End"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"bottom-start"}),e.jsx(t,{placement:"bottom-start",options:n,onClick:()=>{},children:"Bottom Start"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"top-end"}),e.jsx(t,{placement:"top-end",options:n,onClick:()=>{},children:"Top End"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"top-start"}),e.jsx(t,{placement:"top-start",options:n,onClick:()=>{},children:"Top Start"})]})]})},m={render:()=>{const[o,u]=_.useState("merge"),S=[{label:"Merge commit",value:"merge"},{label:"Squash and merge",value:"squash"},{label:"Rebase and merge",value:"rebase"}],g=()=>{const v=S.find(H=>H.value===o);return(v==null?void 0:v.label)||"Merge"};return e.jsxs("div",{style:{padding:"1rem",background:"#f6f8fa",borderRadius:"8px"},children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#24292f"},children:"Pull request #123: Feature/new-component"}),e.jsx(t,{variant:"primary",options:S,selectedValue:o,onSelect:u,onClick:()=>alert(`${g()} clicked!`),children:g()})]})}};var b,x,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('save');
    return <SplitButton options={saveOptions} selectedValue={selected} onSelect={setSelected} onClick={() => alert(\`Action: \${selected}\`)}>
        Save
      </SplitButton>;
  }
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var h,C,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <SplitButton variant="primary" options={saveOptions} onClick={() => {}}>
        Primary
      </SplitButton>
      <SplitButton variant="secondary" options={saveOptions} onClick={() => {}}>
        Secondary
      </SplitButton>
      <SplitButton variant="outline" options={saveOptions} onClick={() => {}}>
        Outline
      </SplitButton>
      <SplitButton variant="ghost" options={saveOptions} onClick={() => {}}>
        Ghost
      </SplitButton>
      <SplitButton variant="danger" options={saveOptions} onClick={() => {}}>
        Danger
      </SplitButton>
    </div>
}`,...(k=(C=r.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var f,y,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  }}>
      <SplitButton size="sm" options={saveOptions} onClick={() => {}}>
        Small
      </SplitButton>
      <SplitButton size="md" options={saveOptions} onClick={() => {}}>
        Medium
      </SplitButton>
      <SplitButton size="lg" options={saveOptions} onClick={() => {}}>
        Large
      </SplitButton>
    </div>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var O,D,w;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: 'Download as PDF',
      value: 'pdf',
      icon: <span>📄</span>
    }, {
      label: 'Download as Word',
      value: 'word',
      icon: <span>📝</span>
    }, {
      label: 'Download as Excel',
      value: 'excel',
      icon: <span>📊</span>
    }, {
      label: 'Download as CSV',
      value: 'csv',
      icon: <span>📋</span>
    }];
    return <SplitButton options={options} onClick={() => alert('Download clicked')}>
        Download
      </SplitButton>;
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var z,T,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      label: 'Option 1',
      value: 'opt1'
    }, {
      label: 'Option 2 (Premium)',
      value: 'opt2',
      disabled: true
    }, {
      label: 'Option 3',
      value: 'opt3'
    }, {
      label: 'Option 4 (Coming Soon)',
      value: 'opt4',
      disabled: true
    }];
    return <SplitButton options={options} onClick={() => {}}>
        Select Action
      </SplitButton>;
  }
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var P,W,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SplitButton loading options={saveOptions} onClick={() => {}}>
      Saving...
    </SplitButton>
}`,...(V=(W=p.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var A,R,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SplitButton disabled options={saveOptions} onClick={() => {}}>
      Disabled
    </SplitButton>
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var M,L,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    padding: '2rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>bottom-end (default)</p>
        <SplitButton placement="bottom-end" options={saveOptions} onClick={() => {}}>
          Bottom End
        </SplitButton>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>bottom-start</p>
        <SplitButton placement="bottom-start" options={saveOptions} onClick={() => {}}>
          Bottom Start
        </SplitButton>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>top-end</p>
        <SplitButton placement="top-end" options={saveOptions} onClick={() => {}}>
          Top End
        </SplitButton>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>top-start</p>
        <SplitButton placement="top-start" options={saveOptions} onClick={() => {}}>
          Top Start
        </SplitButton>
      </div>
    </div>
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var I,$,G;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [action, setAction] = useState('merge');
    const mergeOptions = [{
      label: 'Merge commit',
      value: 'merge'
    }, {
      label: 'Squash and merge',
      value: 'squash'
    }, {
      label: 'Rebase and merge',
      value: 'rebase'
    }];
    const getButtonText = () => {
      const option = mergeOptions.find(o => o.value === action);
      return option?.label || 'Merge';
    };
    return <div style={{
      padding: '1rem',
      background: '#f6f8fa',
      borderRadius: '8px'
    }}>
        <p style={{
        marginBottom: '1rem',
        color: '#24292f'
      }}>
          Pull request #123: Feature/new-component
        </p>
        <SplitButton variant="primary" options={mergeOptions} selectedValue={action} onSelect={setAction} onClick={() => alert(\`\${getButtonText()} clicked!\`)}>
          {getButtonText()}
        </SplitButton>
      </div>;
  }
}`,...(G=($=m.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};const X=["Default","Variants","Sizes","WithIcons","WithDisabledOptions","Loading","Disabled","Placements","RealWorldExample"];export{a as Default,c as Disabled,p as Loading,d as Placements,m as RealWorldExample,s as Sizes,r as Variants,l as WithDisabledOptions,i as WithIcons,X as __namedExportsOrder,U as default};
