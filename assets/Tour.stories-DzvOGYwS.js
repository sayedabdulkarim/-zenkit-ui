import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as t}from"./index-DRjF_FHU.js";import{c$ as l,B as i}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const W={title:"Feedback/Tour",component:l,parameters:{layout:"padded"},tags:["autodocs"]},d={render:()=>{const[o,n]=t.useState(!1),r=t.useRef(null),s=t.useRef(null),a=t.useRef(null),m=[{title:"Welcome",description:"Welcome to ZenKit UI! Let us show you around.",target:()=>r.current},{title:"Search",description:"Use this field to search for anything.",target:()=>s.current},{title:"Content Area",description:"Your main content will appear here.",target:()=>a.current}];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem"},children:[e.jsx(i,{ref:r,onClick:()=>n(!0),children:"Start Tour"}),e.jsx("input",{ref:s,placeholder:"Search...",style:{padding:"0.5rem"}})]}),e.jsx("div",{ref:a,style:{padding:"2rem",background:"#f5f5f5",borderRadius:"8px",minHeight:"200px"},children:"Content Area"}),e.jsx(l,{open:o,onClose:()=>n(!1),steps:m})]})}},p={render:()=>{const[o,n]=t.useState(!1),r=t.useRef(null),s=[{title:"Focus on this button",description:"The rest of the page is masked to draw attention here.",target:()=>r.current}];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(i,{ref:r,onClick:()=>n(!0),children:"Start Masked Tour"}),e.jsx("p",{style:{marginTop:"1rem"},children:"Some other content on the page."}),e.jsx(l,{open:o,onClose:()=>n(!1),steps:s,mask:!0})]})}},c={render:()=>{const[o,n]=t.useState(!1),r=t.useRef(null),s=t.useRef(null),a=[{title:"Top Placement",description:"This tooltip appears above the element.",target:()=>r.current,placement:"top"},{title:"Bottom Placement",description:"This tooltip appears below the element.",target:()=>s.current,placement:"bottom"}];return e.jsxs("div",{style:{padding:"4rem",display:"flex",gap:"2rem"},children:[e.jsx(i,{ref:r,onClick:()=>n(!0),children:"Start Tour"}),e.jsx(i,{ref:s,children:"Second Step"}),e.jsx(l,{open:o,onClose:()=>n(!1),steps:a})]})}},u={render:()=>{const[o,n]=t.useState(!1),r=t.useRef(null),s=t.useRef(null),a=t.useRef(null),m=[{title:"Step 1",description:"First step of the tour.",target:()=>r.current},{title:"Step 2",description:"Second step of the tour.",target:()=>s.current},{title:"Step 3",description:"Third step of the tour.",target:()=>a.current}];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(i,{onClick:()=>n(!0),style:{marginBottom:"1rem"},children:"Start Tour with Indicators"}),e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{ref:r,style:{padding:"1rem",background:"#e6f7ff",borderRadius:"4px"},children:"Box 1"}),e.jsx("div",{ref:s,style:{padding:"1rem",background:"#fff7e6",borderRadius:"4px"},children:"Box 2"}),e.jsx("div",{ref:a,style:{padding:"1rem",background:"#f6ffed",borderRadius:"4px"},children:"Box 3"})]}),e.jsx(l,{open:o,onClose:()=>n(!1),steps:m,indicatorsRender:!0})]})}},f={render:()=>{const[o,n]=t.useState(!1),r=t.useRef(null),s=[{title:"Non-modal Tour",description:"You can still interact with the page during this tour.",target:()=>r.current}];return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx(i,{ref:r,onClick:()=>n(!0),children:"Start Non-modal Tour"}),e.jsx("p",{style:{marginTop:"1rem"},children:"Try clicking this text during the tour."}),e.jsx(l,{open:o,onClose:()=>n(!1),steps:s,mask:!1})]})}};var g,h,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const steps = [{
      title: 'Welcome',
      description: 'Welcome to ZenKit UI! Let us show you around.',
      target: () => ref1.current
    }, {
      title: 'Search',
      description: 'Use this field to search for anything.',
      target: () => ref2.current
    }, {
      title: 'Content Area',
      description: 'Your main content will appear here.',
      target: () => ref3.current
    }];
    return <div style={{
      padding: '2rem'
    }}>
        <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
          <Button ref={ref1} onClick={() => setOpen(true)}>
            Start Tour
          </Button>
          <input ref={ref2} placeholder="Search..." style={{
          padding: '0.5rem'
        }} />
        </div>
        <div ref={ref3} style={{
        padding: '2rem',
        background: '#f5f5f5',
        borderRadius: '8px',
        minHeight: '200px'
      }}>
          Content Area
        </div>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>;
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,y,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);
    const steps = [{
      title: 'Focus on this button',
      description: 'The rest of the page is masked to draw attention here.',
      target: () => ref1.current
    }];
    return <div style={{
      padding: '2rem'
    }}>
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Masked Tour
        </Button>
        <p style={{
        marginTop: '1rem'
      }}>Some other content on the page.</p>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} mask />
      </div>;
  }
}`,...(S=(y=p.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,k,B;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);
    const ref2 = useRef<HTMLButtonElement>(null);
    const steps = [{
      title: 'Top Placement',
      description: 'This tooltip appears above the element.',
      target: () => ref1.current,
      placement: 'top' as const
    }, {
      title: 'Bottom Placement',
      description: 'This tooltip appears below the element.',
      target: () => ref2.current,
      placement: 'bottom' as const
    }];
    return <div style={{
      padding: '4rem',
      display: 'flex',
      gap: '2rem'
    }}>
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Tour
        </Button>
        <Button ref={ref2}>Second Step</Button>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>;
  }
}`,...(B=(k=c.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var R,j,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const steps = [{
      title: 'Step 1',
      description: 'First step of the tour.',
      target: () => ref1.current
    }, {
      title: 'Step 2',
      description: 'Second step of the tour.',
      target: () => ref2.current
    }, {
      title: 'Step 3',
      description: 'Third step of the tour.',
      target: () => ref3.current
    }];
    return <div style={{
      padding: '2rem'
    }}>
        <Button onClick={() => setOpen(true)} style={{
        marginBottom: '1rem'
      }}>
          Start Tour with Indicators
        </Button>
        <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
          <div ref={ref1} style={{
          padding: '1rem',
          background: '#e6f7ff',
          borderRadius: '4px'
        }}>
            Box 1
          </div>
          <div ref={ref2} style={{
          padding: '1rem',
          background: '#fff7e6',
          borderRadius: '4px'
        }}>
            Box 2
          </div>
          <div ref={ref3} style={{
          padding: '1rem',
          background: '#f6ffed',
          borderRadius: '4px'
        }}>
            Box 3
          </div>
        </div>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} indicatorsRender />
      </div>;
  }
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var b,O,M;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);
    const steps = [{
      title: 'Non-modal Tour',
      description: 'You can still interact with the page during this tour.',
      target: () => ref1.current
    }];
    return <div style={{
      padding: '2rem'
    }}>
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Non-modal Tour
        </Button>
        <p style={{
        marginTop: '1rem'
      }}>Try clicking this text during the tour.</p>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} mask={false} />
      </div>;
  }
}`,...(M=(O=f.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};const I=["Default","WithMask","CustomPlacement","WithIndicators","NonModal"];export{c as CustomPlacement,d as Default,f as NonModal,u as WithIndicators,p as WithMask,I as __namedExportsOrder,W as default};
