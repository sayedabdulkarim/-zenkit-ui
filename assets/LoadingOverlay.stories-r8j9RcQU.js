import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as T}from"./index-DRjF_FHU.js";import{b3 as r,P as i,B as A}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const M={title:"Components/LoadingOverlay",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{loaderSize:{control:"select",options:["sm","md","lg","xl"]}}},E=()=>{const[t,h]=T.useState(!1),O=()=>{h(!0),setTimeout(()=>h(!1),2e3)};return e.jsxs("div",{style:{position:"relative",width:"300px",height:"200px"},children:[e.jsxs(i,{p:"lg",withBorder:!0,style:{height:"100%"},children:[e.jsx("h3",{children:"Content Area"}),e.jsx("p",{children:"Click the button to show loading overlay."}),e.jsx(A,{onClick:O,children:"Load Data"})]}),e.jsx(r,{visible:t})]})},s={render:()=>e.jsx(E,{})},o={render:()=>e.jsxs("div",{style:{position:"relative",width:"300px",height:"200px"},children:[e.jsxs(i,{p:"lg",withBorder:!0,style:{height:"100%"},children:[e.jsx("h3",{children:"Loading Content"}),e.jsx("p",{children:"This content is being loaded..."})]}),e.jsx(r,{visible:!0})]})},a={render:()=>e.jsxs("div",{style:{position:"relative",width:"300px",height:"200px"},children:[e.jsxs(i,{p:"lg",withBorder:!0,style:{height:"100%"},children:[e.jsx("h3",{children:"Form Content"}),e.jsx("p",{children:"Submitting form data..."})]}),e.jsx(r,{visible:!0,message:"Saving changes..."})]})},d={render:()=>e.jsx("div",{style:{display:"flex",gap:"1rem"},children:["sm","md","lg","xl"].map(t=>e.jsxs("div",{style:{position:"relative",width:"150px",height:"150px"},children:[e.jsx(i,{p:"md",withBorder:!0,style:{height:"100%"},children:e.jsxs("p",{children:[t," loader"]})}),e.jsx(r,{visible:!0,loaderSize:t})]},t))})},l={render:()=>e.jsxs("div",{style:{position:"relative",width:"300px",height:"200px"},children:[e.jsxs(i,{p:"lg",withBorder:!0,style:{height:"100%"},children:[e.jsx("h3",{children:"Custom Loader"}),e.jsx("p",{children:"Using a custom loading component."})]}),e.jsx(r,{visible:!0,loader:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"⏳"}),e.jsx("div",{children:"Please wait..."})]})})]})},n={render:()=>e.jsxs("div",{style:{position:"relative",width:"300px",height:"200px"},children:[e.jsxs(i,{p:"lg",withBorder:!0,style:{height:"100%"},children:[e.jsx("h3",{children:"Blurred Content"}),e.jsx("p",{children:"The content behind is blurred."})]}),e.jsx(r,{visible:!0,blur:3})]})};var p,c,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <LoadingExample />
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,x,v;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}>
      <Paper p="lg" withBorder style={{
      height: '100%'
    }}>
        <h3>Loading Content</h3>
        <p>This content is being loaded...</p>
      </Paper>
      <LoadingOverlay visible />
    </div>
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var u,y,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}>
      <Paper p="lg" withBorder style={{
      height: '100%'
    }}>
        <h3>Form Content</h3>
        <p>Submitting form data...</p>
      </Paper>
      <LoadingOverlay visible message="Saving changes..." />
    </div>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,b,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem'
  }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <div key={size} style={{
      position: 'relative',
      width: '150px',
      height: '150px'
    }}>
          <Paper p="md" withBorder style={{
        height: '100%'
      }}>
            <p>{size} loader</p>
          </Paper>
          <LoadingOverlay visible loaderSize={size} />
        </div>)}
    </div>
}`,...(L=(b=d.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var B,S,f;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}>
      <Paper p="lg" withBorder style={{
      height: '100%'
    }}>
        <h3>Custom Loader</h3>
        <p>Using a custom loading component.</p>
      </Paper>
      <LoadingOverlay visible loader={<div style={{
      textAlign: 'center'
    }}>
            <div style={{
        fontSize: '2rem',
        marginBottom: '0.5rem'
      }}>⏳</div>
            <div>Please wait...</div>
          </div>} />
    </div>
}`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,P,z;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '300px',
    height: '200px'
  }}>
      <Paper p="lg" withBorder style={{
      height: '100%'
    }}>
        <h3>Blurred Content</h3>
        <p>The content behind is blurred.</p>
      </Paper>
      <LoadingOverlay visible blur={3} />
    </div>
}`,...(z=(P=n.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const U=["Default","AlwaysVisible","WithMessage","LoaderSizes","CustomLoader","WithBlur"];export{o as AlwaysVisible,l as CustomLoader,s as Default,d as LoaderSizes,n as WithBlur,a as WithMessage,U as __namedExportsOrder,M as default};
