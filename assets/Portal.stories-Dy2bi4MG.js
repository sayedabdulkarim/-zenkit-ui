import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as o}from"./index-DRjF_FHU.js";import{bF as i,B as p}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const H={title:"Utility/Portal",component:i,parameters:{layout:"padded"},tags:["autodocs"]},s={render:()=>{const[n,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsxs(p,{onClick:()=>r(!n),children:[n?"Hide":"Show"," Portal Content"]}),n&&e.jsx(i,{children:e.jsx("div",{style:{position:"fixed",bottom:"20px",right:"20px",padding:"1rem",background:"#1890ff",color:"white",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.15)"},children:"I'm rendered at the end of document body!"})})]})}},d={render:()=>{const n=o.useRef(null),[r,t]=o.useState(!1);return e.jsxs("div",{children:[e.jsxs(p,{onClick:()=>t(!r),children:[r?"Hide":"Show"," Portal"]}),e.jsxs("div",{ref:n,style:{marginTop:"1rem",padding:"2rem",background:"#f5f5f5",borderRadius:"8px",minHeight:"150px",position:"relative"},children:[e.jsx("p",{children:"Portal container (content will be rendered here)"}),r&&e.jsx(i,{container:n.current,children:e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"1rem",background:"#52c41a",color:"white",borderRadius:"8px"},children:"Rendered inside the container!"})})]})]})}},a={render:()=>{const[n,r]=o.useState(!1);return e.jsxs("div",{children:[e.jsx(p,{onClick:()=>r(!0),children:"Open Modal"}),n&&e.jsx(i,{children:e.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>r(!1),children:e.jsxs("div",{style:{background:"white",padding:"2rem",borderRadius:"8px",maxWidth:"400px"},onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{style:{margin:"0 0 1rem"},children:"Modal Title"}),e.jsx("p",{children:"This modal is rendered using Portal to escape the DOM hierarchy."}),e.jsx(p,{onClick:()=>r(!1),children:"Close"})]})})})]})}},l={render:()=>{const[n,r]=o.useState({x:0,y:0,visible:!1});return e.jsxs("div",{children:[e.jsx("div",{style:{padding:"2rem",background:"#f5f5f5",borderRadius:"8px",cursor:"pointer"},onMouseEnter:t=>{const u=t.currentTarget.getBoundingClientRect();r({x:u.left+u.width/2,y:u.top-10,visible:!0})},onMouseLeave:()=>r(t=>({...t,visible:!1})),children:"Hover over me"}),n.visible&&e.jsx(i,{children:e.jsx("div",{style:{position:"fixed",left:n.x,top:n.y,transform:"translate(-50%, -100%)",padding:"0.5rem 1rem",background:"#333",color:"white",borderRadius:"4px",fontSize:"14px",zIndex:1e3},children:"Tooltip content"})})]})}},c={render:()=>e.jsx("div",{style:{padding:"1rem",background:"#f5f5f5",borderRadius:"8px"},children:e.jsx(i,{disabled:!0,children:e.jsx("div",{style:{padding:"1rem",background:"#1890ff",color:"white",borderRadius:"4px"},children:"Portal is disabled - rendered in place"})})})};var x,b,m;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(false);
    return <div>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'} Portal Content
        </Button>
        {visible && <Portal>
            <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '1rem',
          background: '#1890ff',
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
              I&apos;m rendered at the end of document body!
            </div>
          </Portal>}
      </div>;
  }
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var f,h,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    return <div>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'} Portal
        </Button>
        <div ref={containerRef} style={{
        marginTop: '1rem',
        padding: '2rem',
        background: '#f5f5f5',
        borderRadius: '8px',
        minHeight: '150px',
        position: 'relative'
      }}>
          <p>Portal container (content will be rendered here)</p>
          {visible && <Portal container={containerRef.current}>
              <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1rem',
            background: '#52c41a',
            color: 'white',
            borderRadius: '8px'
          }}>
                Rendered inside the container!
              </div>
            </Portal>}
        </div>
      </div>;
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,y,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        {open && <Portal>
            <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setOpen(false)}>
              <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '400px'
          }} onClick={e => e.stopPropagation()}>
                <h3 style={{
              margin: '0 0 1rem'
            }}>Modal Title</h3>
                <p>This modal is rendered using Portal to escape the DOM hierarchy.</p>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </div>
            </div>
          </Portal>}
      </div>;
  }
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,P,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
      visible: false
    });
    return <div>
        <div style={{
        padding: '2rem',
        background: '#f5f5f5',
        borderRadius: '8px',
        cursor: 'pointer'
      }} onMouseEnter={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10,
          visible: true
        });
      }} onMouseLeave={() => setPosition(p => ({
        ...p,
        visible: false
      }))}>
          Hover over me
        </div>
        {position.visible && <Portal>
            <div style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -100%)',
          padding: '0.5rem 1rem',
          background: '#333',
          color: 'white',
          borderRadius: '4px',
          fontSize: '14px',
          zIndex: 1000
        }}>
              Tooltip content
            </div>
          </Portal>}
      </div>;
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var C,S,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '1rem',
    background: '#f5f5f5',
    borderRadius: '8px'
  }}>
      <Portal disabled>
        <div style={{
        padding: '1rem',
        background: '#1890ff',
        color: 'white',
        borderRadius: '4px'
      }}>
          Portal is disabled - rendered in place
        </div>
      </Portal>
    </div>
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const I=["Default","ToContainer","Modal","Tooltip","Disabled"];export{s as Default,c as Disabled,a as Modal,d as ToContainer,l as Tooltip,I as __namedExportsOrder,H as default};
