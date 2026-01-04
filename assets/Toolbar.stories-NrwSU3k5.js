import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as a}from"./index-DRjF_FHU.js";import{cV as i,cW as r,cX as t,cY as n,cZ as P}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const q={title:"Navigation/Toolbar",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"The orientation of the toolbar"},size:{control:"select",options:["sm","md","lg"],description:"The size of the toolbar"}}},s={render:()=>o.jsxs(i,{"aria-label":"Formatting options",children:[o.jsxs(r,{children:[o.jsx(t,{tooltip:"Bold",children:"B"}),o.jsx(t,{tooltip:"Italic",children:"I"}),o.jsx(t,{tooltip:"Underline",children:"U"})]}),o.jsx(n,{}),o.jsxs(r,{children:[o.jsx(t,{tooltip:"Align Left",children:"≡"}),o.jsx(t,{tooltip:"Align Center",children:"≡"}),o.jsx(t,{tooltip:"Align Right",children:"≡"})]})]})},c={render:()=>{const[e,l]=a.useState("bold");return o.jsx(i,{"aria-label":"Text formatting",children:o.jsxs(r,{children:[o.jsx(t,{isActive:e==="bold",onClick:()=>l(e==="bold"?null:"bold"),tooltip:"Bold",style:{fontWeight:"bold"},children:"B"}),o.jsx(t,{isActive:e==="italic",onClick:()=>l(e==="italic"?null:"italic"),tooltip:"Italic",style:{fontStyle:"italic"},children:"I"}),o.jsx(t,{isActive:e==="underline",onClick:()=>l(e==="underline"?null:"underline"),tooltip:"Underline",style:{textDecoration:"underline"},children:"U"})]})})}},d={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"Small"}),o.jsxs(i,{size:"sm","aria-label":"Small toolbar",children:[o.jsxs(r,{children:[o.jsx(t,{children:"B"}),o.jsx(t,{children:"I"}),o.jsx(t,{children:"U"})]}),o.jsx(n,{}),o.jsx(t,{children:"Link"})]})]}),o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"Medium (default)"}),o.jsxs(i,{size:"md","aria-label":"Medium toolbar",children:[o.jsxs(r,{children:[o.jsx(t,{children:"B"}),o.jsx(t,{children:"I"}),o.jsx(t,{children:"U"})]}),o.jsx(n,{}),o.jsx(t,{children:"Link"})]})]}),o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"Large"}),o.jsxs(i,{size:"lg","aria-label":"Large toolbar",children:[o.jsxs(r,{children:[o.jsx(t,{children:"B"}),o.jsx(t,{children:"I"}),o.jsx(t,{children:"U"})]}),o.jsx(n,{}),o.jsx(t,{children:"Link"})]})]})]})},u={render:()=>o.jsxs(i,{orientation:"vertical","aria-label":"Vertical toolbar",children:[o.jsxs(r,{children:[o.jsx(t,{tooltip:"Bold",children:"B"}),o.jsx(t,{tooltip:"Italic",children:"I"}),o.jsx(t,{tooltip:"Underline",children:"U"})]}),o.jsx(n,{}),o.jsxs(r,{children:[o.jsx(t,{tooltip:"List",children:"📋"}),o.jsx(t,{tooltip:"Image",children:"🖼"}),o.jsx(t,{tooltip:"Link",children:"🔗"})]})]})},b={render:()=>{const[e,l]=a.useState(!1),[m,M]=a.useState(!1),[x,N]=a.useState(!1);return o.jsxs("div",{style:{border:"1px solid #e2e8f0",borderRadius:"8px",overflow:"hidden"},children:[o.jsxs(i,{"aria-label":"Text editor toolbar",style:{padding:"0.5rem",borderBottom:"1px solid #e2e8f0",background:"#f8fafc"},children:[o.jsxs(r,{spacing:"none",children:[o.jsx(t,{isActive:e,onClick:()=>l(!e),tooltip:"Bold (Ctrl+B)",style:{fontWeight:"bold"},children:"B"}),o.jsx(t,{isActive:m,onClick:()=>M(!m),tooltip:"Italic (Ctrl+I)",style:{fontStyle:"italic"},children:"I"}),o.jsx(t,{isActive:x,onClick:()=>N(!x),tooltip:"Underline (Ctrl+U)",style:{textDecoration:"underline"},children:"U"})]}),o.jsx(n,{}),o.jsxs(r,{spacing:"none",children:[o.jsx(t,{tooltip:"Heading 1",children:"H1"}),o.jsx(t,{tooltip:"Heading 2",children:"H2"}),o.jsx(t,{tooltip:"Heading 3",children:"H3"})]}),o.jsx(n,{}),o.jsxs(r,{spacing:"none",children:[o.jsx(t,{tooltip:"Bullet list",children:"•"}),o.jsx(t,{tooltip:"Numbered list",children:"1."})]}),o.jsx(n,{}),o.jsxs(r,{spacing:"none",children:[o.jsx(t,{tooltip:"Insert link",children:"🔗"}),o.jsx(t,{tooltip:"Insert image",children:"🖼"}),o.jsx(t,{tooltip:"Insert code",children:"</>"})]})]}),o.jsx("div",{contentEditable:!0,style:{padding:"1rem",minHeight:"150px",outline:"none",fontWeight:e?"bold":"normal",fontStyle:m?"italic":"normal",textDecoration:x?"underline":"none"},suppressContentEditableWarning:!0,children:"Start typing here..."})]})}},p={render:()=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"Ghost (default)"}),o.jsx(i,{children:o.jsxs(r,{children:[o.jsx(t,{variant:"ghost",children:"Button 1"}),o.jsx(t,{variant:"ghost",isActive:!0,children:"Button 2 (active)"}),o.jsx(t,{variant:"ghost",children:"Button 3"})]})})]}),o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"Outline"}),o.jsx(i,{children:o.jsxs(r,{children:[o.jsx(t,{variant:"outline",children:"Button 1"}),o.jsx(t,{variant:"outline",isActive:!0,children:"Button 2 (active)"}),o.jsx(t,{variant:"outline",children:"Button 3"})]})})]}),o.jsxs("div",{children:[o.jsx("p",{style:{marginBottom:"0.5rem",fontSize:"0.875rem",color:"#64748b"},children:"Default"}),o.jsx(i,{children:o.jsxs(r,{children:[o.jsx(t,{variant:"default",children:"Button 1"}),o.jsx(t,{variant:"default",isActive:!0,children:"Button 2 (active)"}),o.jsx(t,{variant:"default",children:"Button 3"})]})})]})]})},T={render:()=>{const[e,l]=a.useState("left");return o.jsx(i,{"aria-label":"Text alignment",children:o.jsxs(P,{type:"single",value:e,children:[o.jsx(t,{isActive:e==="left",onClick:()=>l("left"),tooltip:"Align Left",children:"⬅"}),o.jsx(t,{isActive:e==="center",onClick:()=>l("center"),tooltip:"Align Center",children:"↔"}),o.jsx(t,{isActive:e==="right",onClick:()=>l("right"),tooltip:"Align Right",children:"➡"})]})})}},B={render:()=>{const[e,l]=a.useState("select");return o.jsxs(i,{orientation:"vertical","aria-label":"Drawing tools",style:{width:"fit-content"},children:[o.jsxs(r,{children:[o.jsx(t,{isActive:e==="select",onClick:()=>l("select"),tooltip:"Select",children:"↖"}),o.jsx(t,{isActive:e==="pen",onClick:()=>l("pen"),tooltip:"Pen",children:"✏️"}),o.jsx(t,{isActive:e==="eraser",onClick:()=>l("eraser"),tooltip:"Eraser",children:"🧹"})]}),o.jsx(n,{}),o.jsxs(r,{children:[o.jsx(t,{isActive:e==="rectangle",onClick:()=>l("rectangle"),tooltip:"Rectangle",children:"⬜"}),o.jsx(t,{isActive:e==="circle",onClick:()=>l("circle"),tooltip:"Circle",children:"⭕"}),o.jsx(t,{isActive:e==="line",onClick:()=>l("line"),tooltip:"Line",children:"➖"})]}),o.jsx(n,{}),o.jsxs(r,{children:[o.jsx(t,{isActive:e==="text",onClick:()=>l("text"),tooltip:"Text",children:"T"}),o.jsx(t,{isActive:e==="image",onClick:()=>l("image"),tooltip:"Image",children:"🖼"})]})]})}};var g,h,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Toolbar aria-label="Formatting options">
      <ToolbarGroup>
        <ToolbarButton tooltip="Bold">B</ToolbarButton>
        <ToolbarButton tooltip="Italic">I</ToolbarButton>
        <ToolbarButton tooltip="Underline">U</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton tooltip="Align Left">≡</ToolbarButton>
        <ToolbarButton tooltip="Align Center">≡</ToolbarButton>
        <ToolbarButton tooltip="Align Right">≡</ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,f,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [activeFormat, setActiveFormat] = useState<string | null>('bold');
    return <Toolbar aria-label="Text formatting">
        <ToolbarGroup>
          <ToolbarButton isActive={activeFormat === 'bold'} onClick={() => setActiveFormat(activeFormat === 'bold' ? null : 'bold')} tooltip="Bold" style={{
          fontWeight: 'bold'
        }}>
            B
          </ToolbarButton>
          <ToolbarButton isActive={activeFormat === 'italic'} onClick={() => setActiveFormat(activeFormat === 'italic' ? null : 'italic')} tooltip="Italic" style={{
          fontStyle: 'italic'
        }}>
            I
          </ToolbarButton>
          <ToolbarButton isActive={activeFormat === 'underline'} onClick={() => setActiveFormat(activeFormat === 'underline' ? null : 'underline')} tooltip="Underline" style={{
          textDecoration: 'underline'
        }}>
            U
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>;
  }
}`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,y,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Small</p>
        <Toolbar size="sm" aria-label="Small toolbar">
          <ToolbarGroup>
            <ToolbarButton>B</ToolbarButton>
            <ToolbarButton>I</ToolbarButton>
            <ToolbarButton>U</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarButton>Link</ToolbarButton>
        </Toolbar>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Medium (default)</p>
        <Toolbar size="md" aria-label="Medium toolbar">
          <ToolbarGroup>
            <ToolbarButton>B</ToolbarButton>
            <ToolbarButton>I</ToolbarButton>
            <ToolbarButton>U</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarButton>Link</ToolbarButton>
        </Toolbar>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Large</p>
        <Toolbar size="lg" aria-label="Large toolbar">
          <ToolbarGroup>
            <ToolbarButton>B</ToolbarButton>
            <ToolbarButton>I</ToolbarButton>
            <ToolbarButton>U</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarButton>Link</ToolbarButton>
        </Toolbar>
      </div>
    </div>
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,G,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Toolbar orientation="vertical" aria-label="Vertical toolbar">
      <ToolbarGroup>
        <ToolbarButton tooltip="Bold">B</ToolbarButton>
        <ToolbarButton tooltip="Italic">I</ToolbarButton>
        <ToolbarButton tooltip="Underline">U</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton tooltip="List">📋</ToolbarButton>
        <ToolbarButton tooltip="Image">🖼</ToolbarButton>
        <ToolbarButton tooltip="Link">🔗</ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
}`,...(I=(G=u.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var U,z,L;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    return <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
        <Toolbar aria-label="Text editor toolbar" style={{
        padding: '0.5rem',
        borderBottom: '1px solid #e2e8f0',
        background: '#f8fafc'
      }}>
          <ToolbarGroup spacing="none">
            <ToolbarButton isActive={bold} onClick={() => setBold(!bold)} tooltip="Bold (Ctrl+B)" style={{
            fontWeight: 'bold'
          }}>
              B
            </ToolbarButton>
            <ToolbarButton isActive={italic} onClick={() => setItalic(!italic)} tooltip="Italic (Ctrl+I)" style={{
            fontStyle: 'italic'
          }}>
              I
            </ToolbarButton>
            <ToolbarButton isActive={underline} onClick={() => setUnderline(!underline)} tooltip="Underline (Ctrl+U)" style={{
            textDecoration: 'underline'
          }}>
              U
            </ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup spacing="none">
            <ToolbarButton tooltip="Heading 1">H1</ToolbarButton>
            <ToolbarButton tooltip="Heading 2">H2</ToolbarButton>
            <ToolbarButton tooltip="Heading 3">H3</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup spacing="none">
            <ToolbarButton tooltip="Bullet list">•</ToolbarButton>
            <ToolbarButton tooltip="Numbered list">1.</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup spacing="none">
            <ToolbarButton tooltip="Insert link">🔗</ToolbarButton>
            <ToolbarButton tooltip="Insert image">🖼</ToolbarButton>
            <ToolbarButton tooltip="Insert code">{'</>'}</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
        <div contentEditable style={{
        padding: '1rem',
        minHeight: '150px',
        outline: 'none',
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italic ? 'italic' : 'normal',
        textDecoration: underline ? 'underline' : 'none'
      }} suppressContentEditableWarning>
          Start typing here...
        </div>
      </div>;
  }
}`,...(L=(z=b.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var D,F,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Ghost (default)</p>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton variant="ghost">Button 1</ToolbarButton>
            <ToolbarButton variant="ghost" isActive>Button 2 (active)</ToolbarButton>
            <ToolbarButton variant="ghost">Button 3</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Outline</p>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton variant="outline">Button 1</ToolbarButton>
            <ToolbarButton variant="outline" isActive>Button 2 (active)</ToolbarButton>
            <ToolbarButton variant="outline">Button 3</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
      <div>
        <p style={{
        marginBottom: '0.5rem',
        fontSize: '0.875rem',
        color: '#64748b'
      }}>Default</p>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton variant="default">Button 1</ToolbarButton>
            <ToolbarButton variant="default" isActive>Button 2 (active)</ToolbarButton>
            <ToolbarButton variant="default">Button 3</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    </div>
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var E,W,R;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [alignment, setAlignment] = useState('left');
    return <Toolbar aria-label="Text alignment">
        <ToolbarToggleGroup type="single" value={alignment}>
          <ToolbarButton isActive={alignment === 'left'} onClick={() => setAlignment('left')} tooltip="Align Left">
            ⬅
          </ToolbarButton>
          <ToolbarButton isActive={alignment === 'center'} onClick={() => setAlignment('center')} tooltip="Align Center">
            ↔
          </ToolbarButton>
          <ToolbarButton isActive={alignment === 'right'} onClick={() => setAlignment('right')} tooltip="Align Right">
            ➡
          </ToolbarButton>
        </ToolbarToggleGroup>
      </Toolbar>;
  }
}`,...(R=(W=T.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var w,V,O;B.parameters={...B.parameters,docs:{...(w=B.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [tool, setTool] = useState('select');
    return <Toolbar orientation="vertical" aria-label="Drawing tools" style={{
      width: 'fit-content'
    }}>
        <ToolbarGroup>
          <ToolbarButton isActive={tool === 'select'} onClick={() => setTool('select')} tooltip="Select">
            ↖
          </ToolbarButton>
          <ToolbarButton isActive={tool === 'pen'} onClick={() => setTool('pen')} tooltip="Pen">
            ✏️
          </ToolbarButton>
          <ToolbarButton isActive={tool === 'eraser'} onClick={() => setTool('eraser')} tooltip="Eraser">
            🧹
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton isActive={tool === 'rectangle'} onClick={() => setTool('rectangle')} tooltip="Rectangle">
            ⬜
          </ToolbarButton>
          <ToolbarButton isActive={tool === 'circle'} onClick={() => setTool('circle')} tooltip="Circle">
            ⭕
          </ToolbarButton>
          <ToolbarButton isActive={tool === 'line'} onClick={() => setTool('line')} tooltip="Line">
            ➖
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton isActive={tool === 'text'} onClick={() => setTool('text')} tooltip="Text">
            T
          </ToolbarButton>
          <ToolbarButton isActive={tool === 'image'} onClick={() => setTool('image')} tooltip="Image">
            🖼
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>;
  }
}`,...(O=(V=B.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const J=["Default","WithActiveButton","Sizes","VerticalOrientation","EditorToolbar","ButtonVariants","ToggleGroup","DrawingToolbar"];export{p as ButtonVariants,s as Default,B as DrawingToolbar,b as EditorToolbar,d as Sizes,T as ToggleGroup,u as VerticalOrientation,c as WithActiveButton,J as __namedExportsOrder,q as default};
