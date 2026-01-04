import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as o}from"./index-DRjF_FHU.js";import{ao as a,B as r}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const v={title:"Components/Drawer",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placement:{control:"select",options:["left","right","top","bottom"]},size:{control:"select",options:["sm","md","lg","full"]}}},l={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>t(!0),children:"Open Drawer"}),e.jsxs(a,{open:n,onClose:()=>t(!1),title:"Drawer Title",children:[e.jsx("p",{children:"Drawer content goes here."}),e.jsx("p",{children:"You can put any content inside the drawer."})]})]})}},i={render:()=>{const[n,t]=o.useState("right"),[u,s]=o.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{onClick:()=>{t("left"),s(!0)},children:"Left"}),e.jsx(r,{onClick:()=>{t("right"),s(!0)},children:"Right"}),e.jsx(r,{onClick:()=>{t("top"),s(!0)},children:"Top"}),e.jsx(r,{onClick:()=>{t("bottom"),s(!0)},children:"Bottom"}),e.jsx(a,{open:u,onClose:()=>s(!1),placement:n,title:`${n.charAt(0).toUpperCase()+n.slice(1)} Drawer`,children:e.jsxs("p",{children:["This drawer opens from the ",n,"."]})})]})}},c={render:()=>{const[n,t]=o.useState("md"),[u,s]=o.useState(!1);return e.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[e.jsx(r,{onClick:()=>{t("sm"),s(!0)},children:"Small"}),e.jsx(r,{onClick:()=>{t("md"),s(!0)},children:"Medium"}),e.jsx(r,{onClick:()=>{t("lg"),s(!0)},children:"Large"}),e.jsx(a,{open:u,onClose:()=>s(!1),size:n,title:`${n.toUpperCase()} Drawer`,children:e.jsxs("p",{children:["This is a ",n," drawer."]})})]})}},p={render:()=>{const[n,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>t(!0),children:"Open With Footer"}),e.jsx(a,{open:n,onClose:()=>t(!1),title:"Form Drawer",footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(r,{variant:"outlined",onClick:()=>t(!1),children:"Cancel"}),e.jsx(r,{onClick:()=>t(!1),children:"Submit"})]}),children:e.jsx("p",{children:"Add your form content here."})})]})}};var d,m,h;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer Title">
          <p>Drawer content goes here.</p>
          <p>You can put any content inside the drawer.</p>
        </Drawer>
      </>;
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,C,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
        <Button onClick={() => {
        setPlacement('left');
        setOpen(true);
      }}>Left</Button>
        <Button onClick={() => {
        setPlacement('right');
        setOpen(true);
      }}>Right</Button>
        <Button onClick={() => {
        setPlacement('top');
        setOpen(true);
      }}>Top</Button>
        <Button onClick={() => {
        setPlacement('bottom');
        setOpen(true);
      }}>Bottom</Button>
        <Drawer open={open} onClose={() => setOpen(false)} placement={placement} title={\`\${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer\`}>
          <p>This drawer opens from the {placement}.</p>
        </Drawer>
      </div>;
  }
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var g,j,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [open, setOpen] = useState(false);
    return <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>
        <Button onClick={() => {
        setSize('sm');
        setOpen(true);
      }}>Small</Button>
        <Button onClick={() => {
        setSize('md');
        setOpen(true);
      }}>Medium</Button>
        <Button onClick={() => {
        setSize('lg');
        setOpen(true);
      }}>Large</Button>
        <Drawer open={open} onClose={() => setOpen(false)} size={size} title={\`\${size.toUpperCase()} Drawer\`}>
          <p>This is a {size} drawer.</p>
        </Drawer>
      </div>;
  }
}`,...(w=(j=c.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var O,S,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open With Footer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Form Drawer" footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Submit</Button>
            </div>}>
          <p>Add your form content here.</p>
        </Drawer>
      </>;
  }
}`,...(B=(S=p.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const T=["Default","Placements","Sizes","WithFooter"];export{l as Default,i as Placements,c as Sizes,p as WithFooter,T as __namedExportsOrder,v as default};
