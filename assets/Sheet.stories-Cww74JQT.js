import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as h}from"./index-DRjF_FHU.js";import{bZ as o,B as n,b_ as c,b$ as d,c0 as p,c1 as k,c2 as S,c3 as H}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const E={title:"Feedback/Sheet",component:o,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>{const[s,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Sheet"}),e.jsxs(o,{open:s,onOpenChange:t,side:"right",children:[e.jsxs(c,{children:[e.jsx(d,{onClose:()=>t(!1)}),e.jsx(p,{children:"Sheet Title"}),e.jsx(k,{children:"This is a sheet that slides in from the right side."})]}),e.jsx(S,{children:e.jsx("p",{children:"Sheet content goes here."})}),e.jsxs(H,{children:[e.jsx(n,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(n,{onClick:()=>t(!1),children:"Save"})]})]})]})}},i={render:()=>{const[s,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Left Sheet"}),e.jsxs(o,{open:s,onOpenChange:t,side:"left",children:[e.jsxs(c,{children:[e.jsx(d,{onClose:()=>t(!1)}),e.jsx(p,{children:"Navigation"})]}),e.jsx(S,{children:e.jsx("nav",{children:e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{style:{padding:"0.5rem 0"},children:"Home"}),e.jsx("li",{style:{padding:"0.5rem 0"},children:"About"}),e.jsx("li",{style:{padding:"0.5rem 0"},children:"Services"}),e.jsx("li",{style:{padding:"0.5rem 0"},children:"Contact"})]})})})]})]})}},a={render:()=>{const[s,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Top Sheet"}),e.jsxs(o,{open:s,onOpenChange:t,side:"top",children:[e.jsxs(c,{children:[e.jsx(d,{onClose:()=>t(!1)}),e.jsx(p,{children:"Notification"}),e.jsx(k,{children:"You have a new message."})]}),e.jsx(S,{children:e.jsx("p",{children:"This sheet slides in from the top."})})]})]})}},l={render:()=>{const[s,t]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"Open Bottom Sheet"}),e.jsxs(o,{open:s,onOpenChange:t,side:"bottom",children:[e.jsxs(c,{children:[e.jsx(d,{onClose:()=>t(!1)}),e.jsx(p,{children:"Actions"})]}),e.jsx(S,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[e.jsx(n,{variant:"ghost",style:{justifyContent:"flex-start"},children:"Share"}),e.jsx(n,{variant:"ghost",style:{justifyContent:"flex-start"},children:"Copy Link"}),e.jsx(n,{variant:"ghost",style:{justifyContent:"flex-start"},children:"Edit"}),e.jsx(n,{variant:"ghost",colorScheme:"danger",style:{justifyContent:"flex-start"},children:"Delete"})]})})]})]})}};var u,x,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="right">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a sheet that slides in from the right side.
            </SheetDescription>
          </SheetHeader>
          <SheetContent>
            <p>Sheet content goes here.</p>
          </SheetContent>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </SheetFooter>
        </Sheet>
      </>;
  }
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,j,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Left Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="left">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <SheetContent>
            <nav>
              <ul style={{
              listStyle: 'none',
              padding: 0
            }}>
                <li style={{
                padding: '0.5rem 0'
              }}>Home</li>
                <li style={{
                padding: '0.5rem 0'
              }}>About</li>
                <li style={{
                padding: '0.5rem 0'
              }}>Services</li>
                <li style={{
                padding: '0.5rem 0'
              }}>Contact</li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </>;
  }
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var g,O,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Top Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="top">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Notification</SheetTitle>
            <SheetDescription>
              You have a new message.
            </SheetDescription>
          </SheetHeader>
          <SheetContent>
            <p>This sheet slides in from the top.</p>
          </SheetContent>
        </Sheet>
      </>;
  }
}`,...(y=(O=a.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var B,v,T;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="bottom">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Actions</SheetTitle>
          </SheetHeader>
          <SheetContent>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
              <Button variant="ghost" style={{
              justifyContent: 'flex-start'
            }}>Share</Button>
              <Button variant="ghost" style={{
              justifyContent: 'flex-start'
            }}>Copy Link</Button>
              <Button variant="ghost" style={{
              justifyContent: 'flex-start'
            }}>Edit</Button>
              <Button variant="ghost" colorScheme="danger" style={{
              justifyContent: 'flex-start'
            }}>Delete</Button>
            </div>
          </SheetContent>
        </Sheet>
      </>;
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const A=["Right","Left","Top","Bottom"];export{l as Bottom,i as Left,r as Right,a as Top,A as __namedExportsOrder,E as default};
