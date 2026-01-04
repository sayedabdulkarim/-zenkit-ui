import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{bM as i,bN as c}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const G={title:"Data Entry/RadioCard",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"The size of the card"},variant:{control:"select",options:["outline","filled","subtle"],description:"The visual style of the card"},disabled:{control:"boolean",description:"Whether the card is disabled"}}},r={render:()=>{const[t,a]=p.useState("option1");return e.jsxs(c,{value:t,onChange:a,style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{value:"option1",title:"Option 1",description:"This is the first option"}),e.jsx(i,{value:"option2",title:"Option 2",description:"This is the second option"}),e.jsx(i,{value:"option3",title:"Option 3",description:"This is the third option"})]})}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Small"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{size:"sm",value:"sm1",title:"Small",description:"Small card"}),e.jsx(i,{size:"sm",value:"sm2",title:"Small",description:"Small card"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Medium"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{size:"md",value:"md1",title:"Medium",description:"Medium card"}),e.jsx(i,{size:"md",value:"md2",title:"Medium",description:"Medium card"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Large"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{size:"lg",value:"lg1",title:"Large",description:"Large card"}),e.jsx(i,{size:"lg",value:"lg2",title:"Large",description:"Large card"})]})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Outline"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"outline",value:"o1",title:"Outline",description:"Outline variant",defaultChecked:!0}),e.jsx(i,{variant:"outline",value:"o2",title:"Outline",description:"Outline variant"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Filled"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"filled",value:"f1",title:"Filled",description:"Filled variant",defaultChecked:!0}),e.jsx(i,{variant:"filled",value:"f2",title:"Filled",description:"Filled variant"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Subtle"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{variant:"subtle",value:"s1",title:"Subtle",description:"Subtle variant",defaultChecked:!0}),e.jsx(i,{variant:"subtle",value:"s2",title:"Subtle",description:"Subtle variant"})]})]})]})},d={render:()=>{const[t,a]=p.useState("starter");return e.jsxs(c,{value:t,onChange:a,style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{value:"starter",title:"Starter",description:"For personal projects",icon:e.jsx("span",{style:{fontSize:"24px"},children:"🚀"})}),e.jsx(i,{value:"pro",title:"Pro",description:"For growing teams",icon:e.jsx("span",{style:{fontSize:"24px"},children:"⚡"})}),e.jsx(i,{value:"enterprise",title:"Enterprise",description:"For large organizations",icon:e.jsx("span",{style:{fontSize:"24px"},children:"🏢"})})]})}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx(i,{value:"enabled",title:"Enabled",description:"This card is enabled"}),e.jsx(i,{value:"disabled",title:"Disabled",description:"This card is disabled",disabled:!0})]})},n={render:()=>{const[t,a]=p.useState("card1");return e.jsxs(c,{value:t,onChange:a,style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem",maxWidth:"500px"},children:[e.jsx(i,{value:"card1",title:"Card 1",description:"First option"}),e.jsx(i,{value:"card2",title:"Card 2",description:"Second option"}),e.jsx(i,{value:"card3",title:"Card 3",description:"Third option"}),e.jsx(i,{value:"card4",title:"Card 4",description:"Fourth option"})]})}};var u,m,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('option1');
    return <RadioCardGroup value={value} onChange={setValue} style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <RadioCard value="option1" title="Option 1" description="This is the first option" />
        <RadioCard value="option2" title="Option 2" description="This is the second option" />
        <RadioCard value="option3" title="Option 3" description="This is the third option" />
      </RadioCardGroup>;
  }
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Small</h4>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <RadioCard size="sm" value="sm1" title="Small" description="Small card" />
          <RadioCard size="sm" value="sm2" title="Small" description="Small card" />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Medium</h4>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <RadioCard size="md" value="md1" title="Medium" description="Medium card" />
          <RadioCard size="md" value="md2" title="Medium" description="Medium card" />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Large</h4>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <RadioCard size="lg" value="lg1" title="Large" description="Large card" />
          <RadioCard size="lg" value="lg2" title="Large" description="Large card" />
        </div>
      </div>
    </div>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Outline</h4>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <RadioCard variant="outline" value="o1" title="Outline" description="Outline variant" defaultChecked />
          <RadioCard variant="outline" value="o2" title="Outline" description="Outline variant" />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Filled</h4>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <RadioCard variant="filled" value="f1" title="Filled" description="Filled variant" defaultChecked />
          <RadioCard variant="filled" value="f2" title="Filled" description="Filled variant" />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '0.5rem'
      }}>Subtle</h4>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <RadioCard variant="subtle" value="s1" title="Subtle" description="Subtle variant" defaultChecked />
          <RadioCard variant="subtle" value="s2" title="Subtle" description="Subtle variant" />
        </div>
      </div>
    </div>
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,S,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('starter');
    return <RadioCardGroup value={value} onChange={setValue} style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <RadioCard value="starter" title="Starter" description="For personal projects" icon={<span style={{
        fontSize: '24px'
      }}>🚀</span>} />
        <RadioCard value="pro" title="Pro" description="For growing teams" icon={<span style={{
        fontSize: '24px'
      }}>⚡</span>} />
        <RadioCard value="enterprise" title="Enterprise" description="For large organizations" icon={<span style={{
        fontSize: '24px'
      }}>🏢</span>} />
      </RadioCardGroup>;
  }
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var R,z,F;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      <RadioCard value="enabled" title="Enabled" description="This card is enabled" />
      <RadioCard value="disabled" title="Disabled" description="This card is disabled" disabled />
    </div>
}`,...(F=(z=o.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var O,T,B;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('card1');
    return <RadioCardGroup value={value} onChange={setValue} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
      maxWidth: '500px'
    }}>
        <RadioCard value="card1" title="Card 1" description="First option" />
        <RadioCard value="card2" title="Card 2" description="Second option" />
        <RadioCard value="card3" title="Card 3" description="Third option" />
        <RadioCard value="card4" title="Card 4" description="Fourth option" />
      </RadioCardGroup>;
  }
}`,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const E=["Default","Sizes","Variants","WithIcons","Disabled","GridLayout"];export{r as Default,o as Disabled,n as GridLayout,s as Sizes,l as Variants,d as WithIcons,E as __namedExportsOrder,G as default};
