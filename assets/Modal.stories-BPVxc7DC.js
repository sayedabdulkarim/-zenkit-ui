import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{bf as o,B as t}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const J={title:"Components/Modal",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]}}},a=({size:n="md",...s})=>{const[h,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>l(!0),children:"Open Modal"}),e.jsx(o,{isOpen:h,onClose:()=>l(!1),title:"Modal Title",size:n,footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(t,{variant:"outline",onClick:()=>l(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>l(!1),children:"Confirm"})]}),...s,children:e.jsx("p",{children:"This is the modal content. You can put anything here."})})]})},i={render:()=>e.jsx(a,{})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(a,{size:"sm",title:"Small Modal"}),e.jsx(a,{size:"md",title:"Medium Modal"}),e.jsx(a,{size:"lg",title:"Large Modal"}),e.jsx(a,{size:"xl",title:"Extra Large Modal"})]})},d={render:()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Centered Modal"}),e.jsx(o,{isOpen:n,onClose:()=>s(!1),title:"Centered Modal",centered:!0,footer:e.jsx(t,{onClick:()=>s(!1),children:"Close"}),children:e.jsx("p",{children:"This modal is vertically centered on the screen."})})]})}},p={render:()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Scrollable Modal"}),e.jsx(o,{isOpen:n,onClose:()=>s(!1),title:"Scrollable Modal",scrollable:!0,footer:e.jsx(t,{onClick:()=>s(!1),children:"Close"}),children:Array.from({length:20}).map((h,l)=>e.jsxs("p",{children:["This is paragraph ",l+1,". Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."]},l))})]})}},u={render:()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(o,{isOpen:n,onClose:()=>s(!1),title:"No Close Button",showCloseButton:!1,footer:e.jsx(t,{onClick:()=>s(!1),children:"Close"}),children:e.jsx("p",{children:"This modal doesn't have a close button in the header."})})]})}},m={render:()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(o,{isOpen:n,onClose:()=>s(!1),title:"Click Overlay Disabled",closeOnOverlayClick:!1,footer:e.jsx(t,{onClick:()=>s(!1),children:"Close"}),children:e.jsx("p",{children:"Clicking the overlay won't close this modal."})})]})}},f={render:()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>s(!0),children:"Open Fullscreen Modal"}),e.jsx(o,{isOpen:n,onClose:()=>s(!1),title:"Fullscreen Modal",size:"full",footer:e.jsx(t,{onClick:()=>s(!1),children:"Close"}),children:e.jsx("p",{children:"This modal takes up the entire screen."})})]})}},C={render:()=>{const[n,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{colorScheme:"danger",onClick:()=>s(!0),children:"Delete Item"}),e.jsx(o,{isOpen:n,onClose:()=>s(!1),title:"Confirm Deletion",size:"sm",centered:!0,footer:e.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[e.jsx(t,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),e.jsx(t,{colorScheme:"danger",onClick:()=>s(!1),children:"Delete"})]}),children:e.jsx("p",{children:"Are you sure you want to delete this item? This action cannot be undone."})})]})}};var O,x,j;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <ModalDemo />
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var M,g,k;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  }}>
      <ModalDemo size="sm" title="Small Modal" />
      <ModalDemo size="md" title="Medium Modal" />
      <ModalDemo size="lg" title="Large Modal" />
      <ModalDemo size="xl" title="Extra Large Modal" />
    </div>
}`,...(k=(g=c.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var S,B,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Centered Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Centered Modal" centered footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          <p>This modal is vertically centered on the screen.</p>
        </Modal>
      </>;
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var y,v,D;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Scrollable Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Scrollable Modal" scrollable footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i}>
              This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>)}
        </Modal>
      </>;
  }
}`,...(D=(v=p.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var b,z,F;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="No Close Button" showCloseButton={false} footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          <p>This modal doesn't have a close button in the header.</p>
        </Modal>
      </>;
  }
}`,...(F=(z=u.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var T,w,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Click Overlay Disabled" closeOnOverlayClick={false} footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          <p>Clicking the overlay won't close this modal.</p>
        </Modal>
      </>;
  }
}`,...(L=(w=m.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var E,A,N;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>Open Fullscreen Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Fullscreen Modal" size="full" footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}>
          <p>This modal takes up the entire screen.</p>
        </Modal>
      </>;
  }
}`,...(N=(A=f.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var W,_,R;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button colorScheme="danger" onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Deletion" size="sm" centered footer={<div style={{
        display: 'flex',
        gap: '0.5rem',
        justifyContent: 'flex-end'
      }}>
              <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button colorScheme="danger" onClick={() => setIsOpen(false)}>Delete</Button>
            </div>}>
          <p>Are you sure you want to delete this item? This action cannot be undone.</p>
        </Modal>
      </>;
  }
}`,...(R=(_=C.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const K=["Default","Sizes","Centered","Scrollable","WithoutCloseButton","NoOverlayClose","Fullscreen","ConfirmationDialog"];export{d as Centered,C as ConfirmationDialog,i as Default,f as Fullscreen,m as NoOverlayClose,p as Scrollable,c as Sizes,u as WithoutCloseButton,K as __namedExportsOrder,J as default};
