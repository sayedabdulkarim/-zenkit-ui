import{j as r}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{ay as a,B as n,K as E}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const $={title:"Utilities/ErrorBoundary",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l=({shouldThrow:e})=>{if(e)throw new Error("This is a simulated error for demonstration purposes.");return r.jsxs("div",{style:{padding:"2rem",background:"#f0fdf4",borderRadius:"8px",textAlign:"center"},children:[r.jsx("span",{style:{fontSize:"2rem"},children:"✅"}),r.jsx("p",{style:{margin:"1rem 0 0",color:"#16a34a"},children:"Component rendered successfully!"})]})},m={render:()=>{const[e,o]=s.useState(!1);return r.jsxs("div",{style:{width:400},children:[r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsx(n,{onClick:()=>o(!e),children:e?"Fix Component":"Break Component"})}),r.jsx(a,{children:r.jsx(l,{shouldThrow:e})})]})}},h={render:()=>{const[e,o]=s.useState(!1),t=r.jsxs(E,{style:{padding:"2rem",textAlign:"center",background:"#fef2f2"},children:[r.jsx("span",{style:{fontSize:"3rem"},children:"🔧"}),r.jsx("h3",{style:{margin:"1rem 0 0.5rem",color:"#dc2626"},children:"Oops! Something went wrong"}),r.jsx("p",{style:{margin:0,color:"#7f1d1d"},children:"We're working on fixing this. Please try again later."}),r.jsx(n,{style:{marginTop:"1rem"},variant:"outline",colorScheme:"danger",onClick:()=>o(!1),children:"Try Again"})]});return r.jsxs("div",{style:{width:400},children:[r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsx(n,{onClick:()=>o(!e),children:e?"Reset":"Trigger Error"})}),r.jsx(a,{fallback:t,children:r.jsx(l,{shouldThrow:e})})]})}},u={render:()=>{const[e,o]=s.useState(!1),[t,i]=s.useState(0);return r.jsxs("div",{style:{width:400},children:[r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsx(n,{onClick:()=>o(!0),children:"Trigger Error"})}),r.jsx(a,{fallbackRender:({error:d,resetErrorBoundary:c})=>r.jsxs(E,{style:{padding:"2rem",background:"#fffbeb"},children:[r.jsx("h3",{style:{margin:"0 0 0.5rem",color:"#d97706"},children:"⚠️ Error Caught"}),r.jsx("p",{style:{margin:"0 0 1rem",color:"#92400e",fontSize:"0.875rem"},children:d.message}),r.jsx(n,{size:"sm",onClick:()=>{o(!1),i(f=>f+1),c()},children:"Reset"})]}),children:r.jsx(l,{shouldThrow:e})},t)]})}},g={render:()=>{const[e,o]=s.useState(!1),[t,i]=s.useState([]);return r.jsxs("div",{style:{width:500},children:[r.jsxs("div",{style:{marginBottom:"1rem"},children:[r.jsx(n,{onClick:()=>o(!0),children:"Trigger Error"}),r.jsx(n,{variant:"outline",style:{marginLeft:"0.5rem"},onClick:()=>{o(!1),i([])},children:"Reset"})]}),r.jsx(a,{onError:(d,c)=>{i(f=>[...f,`[${new Date().toLocaleTimeString()}] Error: ${d.message}`]),console.log("Error logged:",d,c)},children:r.jsx(l,{shouldThrow:e})},e?"error":"ok"),t.length>0&&r.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"#1e293b",borderRadius:"8px"},children:[r.jsx("div",{style:{color:"#94a3b8",marginBottom:"0.5rem",fontSize:"0.75rem"},children:"Error Log (onError callback):"}),t.map((d,c)=>r.jsx("div",{style:{color:"#f87171",fontSize:"0.875rem",fontFamily:"monospace"},children:d},c))]})]})}},p={render:()=>{const[e,o]=s.useState(!1),[t,i]=s.useState(!1);return r.jsxs("div",{style:{width:500},children:[r.jsxs("div",{style:{marginBottom:"1rem",display:"flex",gap:"0.5rem"},children:[r.jsx(n,{size:"sm",onClick:()=>o(!0),children:"Break Parent"}),r.jsx(n,{size:"sm",onClick:()=>i(!0),children:"Break Child"}),r.jsx(n,{size:"sm",variant:"outline",onClick:()=>{o(!1),i(!1)},children:"Reset All"})]}),r.jsx(a,{fallback:r.jsxs(E,{style:{padding:"2rem",background:"#fef2f2",textAlign:"center"},children:[r.jsx("h3",{style:{color:"#dc2626"},children:"Parent Error Boundary"}),r.jsx("p",{children:"The entire section has crashed."})]}),children:r.jsxs(E,{style:{padding:"1rem"},children:[r.jsx("h4",{style:{margin:"0 0 1rem"},children:"Parent Component"}),r.jsx(l,{shouldThrow:e}),r.jsx("div",{style:{marginTop:"1rem",padding:"1rem",background:"#f8fafc",borderRadius:"8px"},children:r.jsxs(a,{fallback:r.jsx("div",{style:{padding:"1rem",background:"#fef2f2",borderRadius:"8px",textAlign:"center"},children:r.jsx("span",{style:{color:"#dc2626"},children:"⚠️ Child Error (isolated)"})}),children:[r.jsx("h5",{style:{margin:"0 0 0.5rem"},children:"Nested Child Component"}),r.jsx(l,{shouldThrow:t})]},t?"child-error":"child-ok")})]})},e?"parent-error":"parent-ok")]})}},y={render:()=>{const[e,o]=s.useState(!0);return r.jsxs("div",{style:{width:300},children:[r.jsx("div",{style:{marginBottom:"1rem"},children:r.jsx(n,{onClick:()=>o(!e),children:"Toggle Error"})}),r.jsx(a,{fallback:r.jsx("div",{style:{color:"#dc2626",padding:"1rem"},children:"Error loading component"}),children:r.jsx(l,{shouldThrow:e})},e?"error":"ok")]})}};var x,k,B;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [hasError, setHasError] = useState(false);
    return <div style={{
      width: 400
    }}>
        <div style={{
        marginBottom: '1rem'
      }}>
          <Button onClick={() => setHasError(!hasError)}>
            {hasError ? 'Fix Component' : 'Break Component'}
          </Button>
        </div>
        <ErrorBoundary>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>;
  }
}`,...(B=(k=m.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var v,j,C;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [hasError, setHasError] = useState(false);
    const customFallback = <Card style={{
      padding: '2rem',
      textAlign: 'center',
      background: '#fef2f2'
    }}>
        <span style={{
        fontSize: '3rem'
      }}>🔧</span>
        <h3 style={{
        margin: '1rem 0 0.5rem',
        color: '#dc2626'
      }}>Oops! Something went wrong</h3>
        <p style={{
        margin: 0,
        color: '#7f1d1d'
      }}>
          We're working on fixing this. Please try again later.
        </p>
        <Button style={{
        marginTop: '1rem'
      }} variant="outline" colorScheme="danger" onClick={() => setHasError(false)}>
          Try Again
        </Button>
      </Card>;
    return <div style={{
      width: 400
    }}>
        <div style={{
        marginBottom: '1rem'
      }}>
          <Button onClick={() => setHasError(!hasError)}>
            {hasError ? 'Reset' : 'Trigger Error'}
          </Button>
        </div>
        <ErrorBoundary fallback={customFallback}>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>;
  }
}`,...(C=(j=h.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var b,S,w;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [hasError, setHasError] = useState(false);
    const [key, setKey] = useState(0);
    return <div style={{
      width: 400
    }}>
        <div style={{
        marginBottom: '1rem'
      }}>
          <Button onClick={() => setHasError(true)}>
            Trigger Error
          </Button>
        </div>
        <ErrorBoundary key={key} fallbackRender={({
        error,
        resetErrorBoundary
      }) => <Card style={{
        padding: '2rem',
        background: '#fffbeb'
      }}>
              <h3 style={{
          margin: '0 0 0.5rem',
          color: '#d97706'
        }}>⚠️ Error Caught</h3>
              <p style={{
          margin: '0 0 1rem',
          color: '#92400e',
          fontSize: '0.875rem'
        }}>
                {error.message}
              </p>
              <Button size="sm" onClick={() => {
          setHasError(false);
          setKey(k => k + 1);
          resetErrorBoundary();
        }}>
                Reset
              </Button>
            </Card>}>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>;
  }
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,R,H;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [hasError, setHasError] = useState(false);
    const [errorLog, setErrorLog] = useState<string[]>([]);
    return <div style={{
      width: 500
    }}>
        <div style={{
        marginBottom: '1rem'
      }}>
          <Button onClick={() => setHasError(true)}>
            Trigger Error
          </Button>
          <Button variant="outline" style={{
          marginLeft: '0.5rem'
        }} onClick={() => {
          setHasError(false);
          setErrorLog([]);
        }}>
            Reset
          </Button>
        </div>

        <ErrorBoundary key={hasError ? 'error' : 'ok'} onError={(error, errorInfo) => {
        setErrorLog(prev => [...prev, \`[\${new Date().toLocaleTimeString()}] Error: \${error.message}\`]);
        // In a real app, you might send this to an error tracking service
        console.log('Error logged:', error, errorInfo);
      }}>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>

        {errorLog.length > 0 && <div style={{
        marginTop: '1rem',
        padding: '1rem',
        background: '#1e293b',
        borderRadius: '8px'
      }}>
            <div style={{
          color: '#94a3b8',
          marginBottom: '0.5rem',
          fontSize: '0.75rem'
        }}>
              Error Log (onError callback):
            </div>
            {errorLog.map((log, i) => <div key={i} style={{
          color: '#f87171',
          fontSize: '0.875rem',
          fontFamily: 'monospace'
        }}>
                {log}
              </div>)}
          </div>}
      </div>;
  }
}`,...(H=(R=g.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var z,L,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [parentError, setParentError] = useState(false);
    const [childError, setChildError] = useState(false);
    return <div style={{
      width: 500
    }}>
        <div style={{
        marginBottom: '1rem',
        display: 'flex',
        gap: '0.5rem'
      }}>
          <Button size="sm" onClick={() => setParentError(true)}>
            Break Parent
          </Button>
          <Button size="sm" onClick={() => setChildError(true)}>
            Break Child
          </Button>
          <Button size="sm" variant="outline" onClick={() => {
          setParentError(false);
          setChildError(false);
        }}>
            Reset All
          </Button>
        </div>

        <ErrorBoundary key={parentError ? 'parent-error' : 'parent-ok'} fallback={<Card style={{
        padding: '2rem',
        background: '#fef2f2',
        textAlign: 'center'
      }}>
              <h3 style={{
          color: '#dc2626'
        }}>Parent Error Boundary</h3>
              <p>The entire section has crashed.</p>
            </Card>}>
          <Card style={{
          padding: '1rem'
        }}>
            <h4 style={{
            margin: '0 0 1rem'
          }}>Parent Component</h4>
            <BuggyComponent shouldThrow={parentError} />

            <div style={{
            marginTop: '1rem',
            padding: '1rem',
            background: '#f8fafc',
            borderRadius: '8px'
          }}>
              <ErrorBoundary key={childError ? 'child-error' : 'child-ok'} fallback={<div style={{
              padding: '1rem',
              background: '#fef2f2',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
                    <span style={{
                color: '#dc2626'
              }}>⚠️ Child Error (isolated)</span>
                  </div>}>
                <h5 style={{
                margin: '0 0 0.5rem'
              }}>Nested Child Component</h5>
                <BuggyComponent shouldThrow={childError} />
              </ErrorBoundary>
            </div>
          </Card>
        </ErrorBoundary>
      </div>;
  }
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var P,A,W;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [hasError, setHasError] = useState(true);
    return <div style={{
      width: 300
    }}>
        <div style={{
        marginBottom: '1rem'
      }}>
          <Button onClick={() => setHasError(!hasError)}>
            Toggle Error
          </Button>
        </div>
        <ErrorBoundary key={hasError ? 'error' : 'ok'} fallback={<div style={{
        color: '#dc2626',
        padding: '1rem'
      }}>Error loading component</div>}>
          <BuggyComponent shouldThrow={hasError} />
        </ErrorBoundary>
      </div>;
  }
}`,...(W=(A=y.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const I=["Default","WithCustomFallback","WithFallbackRender","WithOnError","NestedErrorBoundaries","MinimalFallback"];export{m as Default,y as MinimalFallback,p as NestedErrorBoundaries,h as WithCustomFallback,u as WithFallbackRender,g as WithOnError,I as __namedExportsOrder,$ as default};
