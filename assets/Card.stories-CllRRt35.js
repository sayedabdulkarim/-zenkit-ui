import{j as e}from"./jsx-runtime-DiklIkkE.js";import{K as r,L as t,M as a,N as V,B as h}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const I={title:"Components/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsx(r,{style:{width:"300px"},children:e.jsx(t,{children:e.jsx("p",{children:"This is a basic card with some content."})})})},s={render:()=>e.jsxs(r,{style:{width:"350px"},children:[e.jsx(a,{title:"Card Title",subtitle:"Card subtitle"}),e.jsx(t,{children:e.jsx("p",{children:"This is the card body content. You can put any content here."})}),e.jsx(V,{children:e.jsx(h,{size:"sm",children:"Action"})})]})},i={render:()=>e.jsxs(r,{style:{width:"350px"},children:[e.jsx(a,{title:"Card Title",extra:e.jsx(h,{size:"sm",variant:"ghost",children:"More"})}),e.jsx(t,{children:e.jsx("p",{children:"Card with extra content in header."})})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{style:{width:"200px"},children:e.jsxs(t,{children:[e.jsx("strong",{children:"Default"}),e.jsx("p",{children:"Standard card"})]})}),e.jsx(r,{variant:"outlined",style:{width:"200px"},children:e.jsxs(t,{children:[e.jsx("strong",{children:"Outlined"}),e.jsx("p",{children:"Border only"})]})}),e.jsx(r,{variant:"filled",style:{width:"200px"},children:e.jsxs(t,{children:[e.jsx("strong",{children:"Filled"}),e.jsx("p",{children:"Subtle background"})]})}),e.jsx(r,{variant:"elevated",style:{width:"200px"},children:e.jsxs(t,{children:[e.jsx("strong",{children:"Elevated"}),e.jsx("p",{children:"With shadow"})]})})]})},n={render:()=>e.jsx(r,{hoverable:!0,style:{width:"300px"},children:e.jsx(t,{children:e.jsx("p",{children:"Hover over me to see the effect!"})})})},l={render:()=>e.jsx(r,{clickable:!0,style:{width:"300px"},onClick:()=>alert("Card clicked!"),children:e.jsx(t,{children:e.jsx("p",{children:"Click me! I'm an interactive card."})})})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs(r,{size:"sm",style:{width:"300px"},children:[e.jsx(a,{title:"Small Card"}),e.jsx(t,{children:e.jsx("p",{children:"Compact padding"})})]}),e.jsxs(r,{size:"md",style:{width:"300px"},children:[e.jsx(a,{title:"Medium Card"}),e.jsx(t,{children:e.jsx("p",{children:"Default padding"})})]}),e.jsxs(r,{size:"lg",style:{width:"300px"},children:[e.jsx(a,{title:"Large Card"}),e.jsx(t,{children:e.jsx("p",{children:"Spacious padding"})})]})]})},p={render:()=>e.jsxs(r,{style:{width:"400px"},children:[e.jsx("img",{src:"https://via.placeholder.com/400x200",alt:"Placeholder",style:{width:"100%",borderRadius:"var(--radius-lg) var(--radius-lg) 0 0"}}),e.jsx(a,{title:"Beautiful Sunset",subtitle:"Nature Photography"}),e.jsx(t,{children:e.jsx("p",{children:"A stunning view of the sunset over the mountains. This photograph captures the beauty of nature in its most peaceful moments."})}),e.jsxs(V,{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(h,{children:"View"}),e.jsx(h,{variant:"outline",children:"Share"})]})]})};var x,u,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '300px'
  }}>
      <CardBody>
        <p>This is a basic card with some content.</p>
      </CardBody>
    </Card>
}`,...(C=(u=d.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var m,y,j;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '350px'
  }}>
      <CardHeader title="Card Title" subtitle="Card subtitle" />
      <CardBody>
        <p>This is the card body content. You can put any content here.</p>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var g,B,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '350px'
  }}>
      <CardHeader title="Card Title" extra={<Button size="sm" variant="ghost">More</Button>} />
      <CardBody>
        <p>Card with extra content in header.</p>
      </CardBody>
    </Card>
}`,...(v=(B=i.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var w,f,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <Card style={{
      width: '200px'
    }}>
        <CardBody>
          <strong>Default</strong>
          <p>Standard card</p>
        </CardBody>
      </Card>
      <Card variant="outlined" style={{
      width: '200px'
    }}>
        <CardBody>
          <strong>Outlined</strong>
          <p>Border only</p>
        </CardBody>
      </Card>
      <Card variant="filled" style={{
      width: '200px'
    }}>
        <CardBody>
          <strong>Filled</strong>
          <p>Subtle background</p>
        </CardBody>
      </Card>
      <Card variant="elevated" style={{
      width: '200px'
    }}>
        <CardBody>
          <strong>Elevated</strong>
          <p>With shadow</p>
        </CardBody>
      </Card>
    </div>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,H,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card hoverable style={{
    width: '300px'
  }}>
      <CardBody>
        <p>Hover over me to see the effect!</p>
      </CardBody>
    </Card>
}`,...(k=(H=n.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var z,T,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Card clickable style={{
    width: '300px'
  }} onClick={() => alert('Card clicked!')}>
      <CardBody>
        <p>Click me! I'm an interactive card.</p>
      </CardBody>
    </Card>
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var D,E,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <Card size="sm" style={{
      width: '300px'
    }}>
        <CardHeader title="Small Card" />
        <CardBody>
          <p>Compact padding</p>
        </CardBody>
      </Card>
      <Card size="md" style={{
      width: '300px'
    }}>
        <CardHeader title="Medium Card" />
        <CardBody>
          <p>Default padding</p>
        </CardBody>
      </Card>
      <Card size="lg" style={{
      width: '300px'
    }}>
        <CardHeader title="Large Card" />
        <CardBody>
          <p>Spacious padding</p>
        </CardBody>
      </Card>
    </div>
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var A,M,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '400px'
  }}>
      <img src="https://via.placeholder.com/400x200" alt="Placeholder" style={{
      width: '100%',
      borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0'
    }} />
      <CardHeader title="Beautiful Sunset" subtitle="Nature Photography" />
      <CardBody>
        <p>
          A stunning view of the sunset over the mountains. This photograph
          captures the beauty of nature in its most peaceful moments.
        </p>
      </CardBody>
      <CardFooter style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
        <Button>View</Button>
        <Button variant="outline">Share</Button>
      </CardFooter>
    </Card>
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const Y=["Default","WithHeaderAndFooter","WithHeaderExtra","Variants","Hoverable","Clickable","Sizes","CompleteExample"];export{l as Clickable,p as CompleteExample,d as Default,n as Hoverable,c as Sizes,o as Variants,s as WithHeaderAndFooter,i as WithHeaderExtra,Y as __namedExportsOrder,I as default};
