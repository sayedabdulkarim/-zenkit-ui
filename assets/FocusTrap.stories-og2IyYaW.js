import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{aF as o,B as t,P as d,I as a}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const w={title:"Components/FocusTrap",component:o,parameters:{layout:"centered"},tags:["autodocs"]},C=()=>{const[r,s]=c.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Activate Focus Trap"}),r&&e.jsx(d,{p:"lg",shadow:"lg",style:{marginTop:"1rem"},children:e.jsx(o,{active:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx("h3",{children:"Focus is trapped here"}),e.jsx(a,{placeholder:"First input"}),e.jsx(a,{placeholder:"Second input"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(t,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>s(!1),children:"Submit"})]})]})})})]})},l={render:()=>e.jsx(C,{})},F=()=>{const[r,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Modal"}),r&&e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:p=>p.target===p.currentTarget&&s(!1),children:e.jsx(o,{active:!0,children:e.jsxs(d,{p:"lg",shadow:"xl",style:{minWidth:"300px"},children:[e.jsx("h2",{children:"Modal with Focus Trap"}),e.jsx("p",{children:"Tab key will cycle through these elements only."}),e.jsx(a,{placeholder:"Enter something...",style:{marginBottom:"1rem"}}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(t,{variant:"outline",onClick:()=>s(!1),children:"Close"}),e.jsx(t,{onClick:()=>s(!1),children:"Save"})]})]})})})]})},i={render:()=>e.jsx(F,{})},n={render:()=>{const[r,s]=c.useState(!1);return e.jsxs("div",{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open with Initial Focus"}),r&&e.jsx(d,{p:"lg",shadow:"lg",style:{marginTop:"1rem"},children:e.jsx(o,{active:!0,initialFocus:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{placeholder:"This gets initial focus","data-autofocus":!0}),e.jsx(a,{placeholder:"Second input"}),e.jsx(t,{onClick:()=>s(!1),children:"Close"})]})})})]})}};var u,x,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <FocusTrapExample />
}`,...(m=(x=l.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var h,j,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ModalExample />
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var g,v,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(false);
    return <div>
        <Button onClick={() => setActive(true)}>Open with Initial Focus</Button>
        {active && <Paper p="lg" shadow="lg" style={{
        marginTop: '1rem'
      }}>
            <FocusTrap active initialFocus>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
                <Input placeholder="This gets initial focus" data-autofocus />
                <Input placeholder="Second input" />
                <Button onClick={() => setActive(false)}>Close</Button>
              </div>
            </FocusTrap>
          </Paper>}
      </div>;
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const E=["Default","InModal","InitialFocus"];export{l as Default,i as InModal,n as InitialFocus,E as __namedExportsOrder,w as default};
