import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as n}from"./index-DRjF_FHU.js";import{d1 as o,B as i}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const K={title:"Utility/Transition",component:o,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle"}),e.jsx(o,{in:t,timeout:300,children:e.jsx("div",{style:{padding:"2rem",background:"#1890ff",color:"white",borderRadius:"8px"},children:"Fade Transition"})})]})}},d={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle Fade"}),e.jsx(o,{in:t,type:"fade",timeout:300,children:e.jsx("div",{style:{padding:"2rem",background:"#52c41a",color:"white",borderRadius:"8px"},children:"Fade In/Out"})})]})}},a={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle Slide"}),e.jsx(o,{in:t,type:"slide",timeout:300,children:e.jsx("div",{style:{padding:"2rem",background:"#722ed1",color:"white",borderRadius:"8px"},children:"Slide In/Out"})})]})}},l={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle Scale"}),e.jsx(o,{in:t,type:"scale",timeout:300,children:e.jsx("div",{style:{padding:"2rem",background:"#eb2f96",color:"white",borderRadius:"8px"},children:"Scale In/Out"})})]})}},c={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle Collapse"}),e.jsx(o,{in:t,type:"collapse",timeout:300,children:e.jsx("div",{style:{padding:"2rem",background:"#fa8c16",color:"white",borderRadius:"8px"},children:"Collapse In/Out"})})]})}},u={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle (Slow)"}),e.jsx(o,{in:t,timeout:1e3,children:e.jsx("div",{style:{padding:"2rem",background:"#13c2c2",color:"white",borderRadius:"8px"},children:"1 Second Transition"})})]})}},m={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle (Unmount on Exit)"}),e.jsx(o,{in:t,timeout:300,unmountOnExit:!0,children:e.jsx("div",{style:{padding:"2rem",background:"#f5222d",color:"white",borderRadius:"8px"},children:"Unmounted when hidden"})})]})}},h={render:()=>{const[t,r]=n.useState(!0);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>r(!t),style:{marginBottom:"1rem"},children:"Toggle All"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[e.jsx(o,{in:t,type:"fade",timeout:300,children:e.jsx("div",{style:{padding:"1rem",background:"#1890ff",color:"white",borderRadius:"4px"},children:"Fade"})}),e.jsx(o,{in:t,type:"slide",timeout:300,children:e.jsx("div",{style:{padding:"1rem",background:"#52c41a",color:"white",borderRadius:"4px"},children:"Slide"})}),e.jsx(o,{in:t,type:"scale",timeout:300,children:e.jsx("div",{style:{padding:"1rem",background:"#722ed1",color:"white",borderRadius:"4px"},children:"Scale"})}),e.jsx(o,{in:t,type:"collapse",timeout:300,children:e.jsx("div",{style:{padding:"1rem",background:"#eb2f96",color:"white",borderRadius:"4px"},children:"Collapse"})})]})]})}};var p,g,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle
        </Button>
        <Transition in={show} timeout={300}>
          <div style={{
          padding: '2rem',
          background: '#1890ff',
          color: 'white',
          borderRadius: '8px'
        }}>
            Fade Transition
          </div>
        </Transition>
      </div>;
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,S,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle Fade
        </Button>
        <Transition in={show} type="fade" timeout={300}>
          <div style={{
          padding: '2rem',
          background: '#52c41a',
          color: 'white',
          borderRadius: '8px'
        }}>
            Fade In/Out
          </div>
        </Transition>
      </div>;
  }
}`,...(v=(S=d.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,T,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle Slide
        </Button>
        <Transition in={show} type="slide" timeout={300}>
          <div style={{
          padding: '2rem',
          background: '#722ed1',
          color: 'white',
          borderRadius: '8px'
        }}>
            Slide In/Out
          </div>
        </Transition>
      </div>;
  }
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var j,k,B;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle Scale
        </Button>
        <Transition in={show} type="scale" timeout={300}>
          <div style={{
          padding: '2rem',
          background: '#eb2f96',
          color: 'white',
          borderRadius: '8px'
        }}>
            Scale In/Out
          </div>
        </Transition>
      </div>;
  }
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var f,C,R;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle Collapse
        </Button>
        <Transition in={show} type="collapse" timeout={300}>
          <div style={{
          padding: '2rem',
          background: '#fa8c16',
          color: 'white',
          borderRadius: '8px'
        }}>
            Collapse In/Out
          </div>
        </Transition>
      </div>;
  }
}`,...(R=(C=c.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var O,F,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle (Slow)
        </Button>
        <Transition in={show} timeout={1000}>
          <div style={{
          padding: '2rem',
          background: '#13c2c2',
          color: 'white',
          borderRadius: '8px'
        }}>
            1 Second Transition
          </div>
        </Transition>
      </div>;
  }
}`,...(E=(F=u.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var I,U,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle (Unmount on Exit)
        </Button>
        <Transition in={show} timeout={300} unmountOnExit>
          <div style={{
          padding: '2rem',
          background: '#f5222d',
          color: 'white',
          borderRadius: '8px'
        }}>
            Unmounted when hidden
          </div>
        </Transition>
      </div>;
  }
}`,...(A=(U=m.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var D,_,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(true);
    return <div>
        <Button onClick={() => setShow(!show)} style={{
        marginBottom: '1rem'
      }}>
          Toggle All
        </Button>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
          <Transition in={show} type="fade" timeout={300}>
            <div style={{
            padding: '1rem',
            background: '#1890ff',
            color: 'white',
            borderRadius: '4px'
          }}>
              Fade
            </div>
          </Transition>
          <Transition in={show} type="slide" timeout={300}>
            <div style={{
            padding: '1rem',
            background: '#52c41a',
            color: 'white',
            borderRadius: '4px'
          }}>
              Slide
            </div>
          </Transition>
          <Transition in={show} type="scale" timeout={300}>
            <div style={{
            padding: '1rem',
            background: '#722ed1',
            color: 'white',
            borderRadius: '4px'
          }}>
              Scale
            </div>
          </Transition>
          <Transition in={show} type="collapse" timeout={300}>
            <div style={{
            padding: '1rem',
            background: '#eb2f96',
            color: 'white',
            borderRadius: '4px'
          }}>
              Collapse
            </div>
          </Transition>
        </div>
      </div>;
  }
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const L=["Default","FadeTransition","SlideTransition","ScaleTransition","CollapseTransition","CustomDuration","UnmountOnExit","AllTransitions"];export{h as AllTransitions,c as CollapseTransition,u as CustomDuration,s as Default,d as FadeTransition,l as ScaleTransition,a as SlideTransition,m as UnmountOnExit,L as __namedExportsOrder,K as default};
