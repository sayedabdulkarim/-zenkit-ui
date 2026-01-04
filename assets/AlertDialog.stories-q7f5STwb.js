import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";import{b as a,B as s,c,d,e as u,f as g,g as p,h as k,i as A}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const w={title:"Feedback/AlertDialog",component:a,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(a,{open:t,onOpenChange:n,children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(u,{children:"Are you sure?"}),e.jsx(g,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(p,{children:[e.jsx(k,{onClick:()=>n(!1),children:"Cancel"}),e.jsx(A,{onClick:()=>n(!1),children:"Continue"})]})]})})]})}},r={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"danger",onClick:()=>n(!0),children:"Delete Account"}),e.jsx(a,{open:t,onOpenChange:n,children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(u,{children:"Delete Account"}),e.jsx(g,{children:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."})]}),e.jsxs(p,{children:[e.jsx(k,{onClick:()=>n(!1),children:"Cancel"}),e.jsx(A,{onClick:()=>n(!1),style:{background:"var(--color-danger)"},children:"Delete"})]})]})})]})}},l={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Show Alert"}),e.jsx(a,{open:t,onOpenChange:n,children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx(u,{children:"Alert"}),e.jsx(g,{children:"Something important happened that you should know about."})]}),e.jsx(p,{children:e.jsx(A,{onClick:()=>n(!1),children:"OK"})})]})})]})}};var D,h,m;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setOpen(false)}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>;
  }
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var C,x,j;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button colorScheme="danger" onClick={() => setOpen(true)}>Delete Account</Button>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Account</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete your account? All of your data will be
                permanently removed. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setOpen(false)} style={{
              background: 'var(--color-danger)'
            }}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>;
  }
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var O,f,y;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Show Alert</Button>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Alert</AlertDialogTitle>
              <AlertDialogDescription>
                Something important happened that you should know about.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setOpen(false)}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>;
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const v=["Default","Danger","Simple"];export{r as Danger,o as Default,l as Simple,v as __namedExportsOrder,w as default};
