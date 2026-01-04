import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";import{bS as o}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const te={title:"Data Entry/RichTextEditor",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"Disable the editor"},readOnly:{control:"boolean",description:"Make the editor read-only"}}},a={render:()=>{const[t,r]=i.useState("");return e.jsx("div",{style:{width:600},children:e.jsx(o,{value:t,onChange:r,placeholder:"Start typing..."})})}},l={render:()=>{const[t,r]=i.useState("<h2>Welcome to the Rich Text Editor</h2><p>This is a <strong>bold</strong> text and this is <em>italic</em>.</p><p>You can also create <u>underlined</u> text.</p><ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>");return e.jsx("div",{style:{width:600},children:e.jsx(o,{value:t,onChange:r})})}},d={render:()=>{const[t,r]=i.useState("");return e.jsx("div",{style:{width:700},children:e.jsx(o,{value:t,onChange:r,controls:["bold","italic","underline","strikethrough","heading1","heading2","heading3","bulletList","orderedList","link","blockquote","code","clear"],placeholder:"Try all the formatting options..."})})}},c={render:()=>{const[t,r]=i.useState("");return e.jsx("div",{style:{width:500},children:e.jsx(o,{value:t,onChange:r,controls:["bold","italic","link"],placeholder:"Simple editor with minimal controls..."})})}},u={render:()=>{const[t,r]=i.useState("");return e.jsx("div",{style:{width:600},children:e.jsx(o,{value:t,onChange:r,minHeight:300,placeholder:"This editor has a minimum height of 300px..."})})}},h={render:()=>e.jsx("div",{style:{width:600},children:e.jsx(o,{value:"<p>This editor is <strong>disabled</strong>. You cannot edit this content.</p>",onChange:()=>{},disabled:!0})})},m={render:()=>e.jsx("div",{style:{width:600},children:e.jsx(o,{value:"<h3>Read-Only Content</h3><p>This content can be selected and copied, but not edited.</p><ul><li>Point one</li><li>Point two</li><li>Point three</li></ul>",onChange:()=>{},readOnly:!0})})},p={render:()=>{const[t,r]=i.useState(""),n=500,s=(U=>{var b;const y=document.createElement("div");return y.innerHTML=U,((b=y.textContent)==null?void 0:b.length)||0})(t);return e.jsxs("div",{style:{width:600},children:[e.jsx(o,{value:t,onChange:r,placeholder:"Start typing..."}),e.jsxs("div",{style:{marginTop:"0.5rem",fontSize:"0.875rem",color:s>n?"#dc2626":"#64748b",textAlign:"right"},children:[s," / ",n," characters"]})]})}},g={render:()=>{const[t,r]=i.useState(""),[n,x]=i.useState("");return e.jsxs("div",{style:{width:700},children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Post Title"}),e.jsx("input",{type:"text",value:t,onChange:s=>r(s.target.value),placeholder:"Enter post title...",style:{width:"100%",padding:"0.75rem",fontSize:"1.25rem",border:"1px solid #e2e8f0",borderRadius:"8px"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:500},children:"Content"}),e.jsx(o,{value:n,onChange:x,controls:["bold","italic","underline","heading1","heading2","heading3","bulletList","orderedList","blockquote","link","code"],minHeight:400,placeholder:"Write your blog post content..."})]})]})}},v={render:()=>{const[t,r]=i.useState("");return e.jsx("div",{style:{width:500},children:e.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"0.5rem"},children:[e.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center"},children:"👤"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(o,{value:t,onChange:r,controls:["bold","italic","link","code"],placeholder:"Write a comment...",minHeight:80}),e.jsx("div",{style:{marginTop:"0.5rem",display:"flex",justifyContent:"flex-end"},children:e.jsx("button",{style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer"},children:"Post Comment"})})]})]})})}};var C,f,T;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 600
    }}>
        <RichTextEditor value={value} onChange={setValue} placeholder="Start typing..." />
      </div>;
  }
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var S,j,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('<h2>Welcome to the Rich Text Editor</h2><p>This is a <strong>bold</strong> text and this is <em>italic</em>.</p><p>You can also create <u>underlined</u> text.</p><ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>');
    return <div style={{
      width: 600
    }}>
        <RichTextEditor value={value} onChange={setValue} />
      </div>;
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var E,L,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 700
    }}>
        <RichTextEditor value={value} onChange={setValue} controls={['bold', 'italic', 'underline', 'strikethrough', 'heading1', 'heading2', 'heading3', 'bulletList', 'orderedList', 'link', 'blockquote', 'code', 'clear']} placeholder="Try all the formatting options..." />
      </div>;
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var k,V,W;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 500
    }}>
        <RichTextEditor value={value} onChange={setValue} controls={['bold', 'italic', 'link']} placeholder="Simple editor with minimal controls..." />
      </div>;
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var P,H,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 600
    }}>
        <RichTextEditor value={value} onChange={setValue} minHeight={300} placeholder="This editor has a minimum height of 300px..." />
      </div>;
  }
}`,...(B=(H=u.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var O,D,M;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 600
  }}>
      <RichTextEditor value="<p>This editor is <strong>disabled</strong>. You cannot edit this content.</p>" onChange={() => {}} disabled />
    </div>
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 600
  }}>
      <RichTextEditor value="<h3>Read-Only Content</h3><p>This content can be selected and copied, but not edited.</p><ul><li>Point one</li><li>Point two</li><li>Point three</li></ul>" onChange={() => {}} readOnly />
    </div>
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,Y,_;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 500;

    // Strip HTML tags to count actual characters
    const getTextLength = (html: string) => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent?.length || 0;
    };
    const charCount = getTextLength(value);
    return <div style={{
      width: 600
    }}>
        <RichTextEditor value={value} onChange={setValue} placeholder="Start typing..." />
        <div style={{
        marginTop: '0.5rem',
        fontSize: '0.875rem',
        color: charCount > maxLength ? '#dc2626' : '#64748b',
        textAlign: 'right'
      }}>
          {charCount} / {maxLength} characters
        </div>
      </div>;
  }
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var F,G,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return <div style={{
      width: 700
    }}>
        <div style={{
        marginBottom: '1rem'
      }}>
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 500
        }}>
            Post Title
          </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter post title..." style={{
          width: '100%',
          padding: '0.75rem',
          fontSize: '1.25rem',
          border: '1px solid #e2e8f0',
          borderRadius: '8px'
        }} />
        </div>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: 500
        }}>
            Content
          </label>
          <RichTextEditor value={content} onChange={setContent} controls={['bold', 'italic', 'underline', 'heading1', 'heading2', 'heading3', 'bulletList', 'orderedList', 'blockquote', 'link', 'code']} minHeight={400} placeholder="Write your blog post content..." />
        </div>
      </div>;
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,N,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      width: 500
    }}>
        <div style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '0.5rem'
      }}>
          <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: '#e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            👤
          </div>
          <div style={{
          flex: 1
        }}>
            <RichTextEditor value={value} onChange={setValue} controls={['bold', 'italic', 'link', 'code']} placeholder="Write a comment..." minHeight={80} />
            <div style={{
            marginTop: '0.5rem',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
              <button style={{
              padding: '0.5rem 1rem',
              background: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(Q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const re=["Default","WithInitialContent","WithAllControls","MinimalControls","CustomHeight","Disabled","ReadOnly","WithCharacterCount","BlogPostEditor","CommentEditor"];export{g as BlogPostEditor,v as CommentEditor,u as CustomHeight,a as Default,h as Disabled,c as MinimalControls,m as ReadOnly,d as WithAllControls,p as WithCharacterCount,l as WithInitialContent,re as __namedExportsOrder,te as default};
