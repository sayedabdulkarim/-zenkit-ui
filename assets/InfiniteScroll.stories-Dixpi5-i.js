import{j as n}from"./jsx-runtime-DiklIkkE.js";import{r}from"./index-DRjF_FHU.js";import{aV as c,K as T}from"./index-DkFsMHmE.js";import"./index-DIvcuAjW.js";const B={title:"Data Display/InfiniteScroll",component:c,parameters:{layout:"centered"},tags:["autodocs"]},y=t=>new Promise(d=>setTimeout(d,t)),h={render:()=>{const[t,d]=r.useState(Array.from({length:20},(e,s)=>s+1)),[l,m]=r.useState(!0),[o,i]=r.useState(!1),g=r.useCallback(async()=>{if(o)return;i(!0),await y(1e3);const e=Array.from({length:10},(s,a)=>t.length+a+1);d(s=>[...s,...e]),t.length>=50&&m(!1),i(!1)},[t.length,o]);return n.jsx("div",{style:{height:400,width:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px"},children:n.jsx(c,{loadMore:g,hasMore:l,loading:o,loader:n.jsx("div",{style:{padding:"1rem",textAlign:"center"},children:"Loading more..."}),endMessage:n.jsx("div",{style:{padding:"1rem",textAlign:"center",color:"#64748b"},children:"No more items"}),children:t.map(e=>n.jsxs("div",{style:{padding:"1rem",borderBottom:"1px solid #e2e8f0",background:e%2===0?"#f8fafc":"#fff"},children:["Item ",e]},e))})})}},p={render:()=>{const[t,d]=r.useState(Array.from({length:6},(e,s)=>({id:s+1,title:`Card ${s+1}`,description:`This is the description for card ${s+1}`}))),[l,m]=r.useState(!0),[o,i]=r.useState(!1),g=r.useCallback(async()=>{if(o)return;i(!0),await y(1500);const e=Array.from({length:6},(s,a)=>({id:t.length+a+1,title:`Card ${t.length+a+1}`,description:`This is the description for card ${t.length+a+1}`}));d(s=>[...s,...e]),t.length>=30&&m(!1),i(!1)},[t.length,o]);return n.jsx("div",{style:{height:500,width:600,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:n.jsx(c,{loadMore:g,hasMore:l,loading:o,loader:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:[1,2].map(e=>n.jsx("div",{style:{height:150,background:"#e2e8f0",borderRadius:"8px",animation:"pulse 1.5s infinite"}},e))}),endMessage:n.jsx("div",{style:{padding:"2rem",textAlign:"center",color:"#64748b"},children:"You've reached the end!"}),children:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:t.map(e=>n.jsxs(T,{style:{padding:"1rem"},children:[n.jsx("h4",{style:{margin:"0 0 0.5rem"},children:e.title}),n.jsx("p",{style:{margin:0,color:"#64748b"},children:e.description})]},e.id))})})})}},f={render:()=>{const[t,d]=r.useState(Array.from({length:15},(e,s)=>s+1)),[l,m]=r.useState(!0),[o,i]=r.useState(!1),g=r.useCallback(async()=>{if(o)return;i(!0),await y(800);const e=Array.from({length:10},(s,a)=>t.length+a+1);d(s=>[...s,...e]),t.length>=100&&m(!1),i(!1)},[t.length,o]);return n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"1rem",color:"#64748b"},children:"Loads when 300px from bottom (higher threshold = earlier load)"}),n.jsx("div",{style:{height:400,width:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px"},children:n.jsx(c,{loadMore:g,hasMore:l,loading:o,threshold:300,loader:n.jsx("div",{style:{padding:"1rem",textAlign:"center"},children:"Loading..."}),children:t.map(e=>n.jsxs("div",{style:{padding:"1rem",borderBottom:"1px solid #e2e8f0"},children:["Item ",e]},e))})})]})}},u={render:()=>{const[t,d]=r.useState(Array.from({length:20},(e,s)=>({id:20-s,text:`Message ${20-s}`,time:new Date(Date.now()-s*6e4).toLocaleTimeString()}))),[l,m]=r.useState(!0),[o,i]=r.useState(!1),g=r.useCallback(async()=>{if(o)return;i(!0),await y(1e3);const e=t[0].id,s=Array.from({length:10},(a,v)=>({id:e-v-1,text:`Message ${e-v-1}`,time:new Date(Date.now()-(t.length+v)*6e4).toLocaleTimeString()}));d(a=>[...s.reverse(),...a]),t.length>=50&&m(!1),i(!1)},[t,o]);return n.jsxs("div",{children:[n.jsx("p",{style:{marginBottom:"1rem",color:"#64748b"},children:"Chat-style: scroll up to load older messages"}),n.jsx("div",{style:{height:400,width:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",display:"flex",flexDirection:"column-reverse"},children:n.jsx(c,{loadMore:g,hasMore:l,loading:o,reverse:!0,loader:n.jsx("div",{style:{padding:"1rem",textAlign:"center"},children:"Loading older messages..."}),children:t.map(e=>n.jsxs("div",{style:{padding:"0.75rem 1rem",borderBottom:"1px solid #e2e8f0"},children:[n.jsx("div",{style:{fontWeight:500},children:e.text}),n.jsx("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:e.time})]},e.id))})})]})}};var x,M,b;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(Array.from({
      length: 20
    }, (_, i) => i + 1));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(1000);
      const newItems = Array.from({
        length: 10
      }, (_, i) => items.length + i + 1);
      setItems(prev => [...prev, ...newItems]);
      if (items.length >= 50) {
        setHasMore(false);
      }
      setLoading(false);
    }, [items.length, loading]);
    return <div style={{
      height: 400,
      width: 400,
      overflow: 'auto',
      border: '1px solid #e2e8f0',
      borderRadius: '8px'
    }}>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loading={loading} loader={<div style={{
        padding: '1rem',
        textAlign: 'center'
      }}>Loading more...</div>} endMessage={<div style={{
        padding: '1rem',
        textAlign: 'center',
        color: '#64748b'
      }}>No more items</div>}>
          {items.map(item => <div key={item} style={{
          padding: '1rem',
          borderBottom: '1px solid #e2e8f0',
          background: item % 2 === 0 ? '#f8fafc' : '#fff'
        }}>
              Item {item}
            </div>)}
        </InfiniteScroll>
      </div>;
  }
}`,...(b=(M=h.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var w,S,I;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(Array.from({
      length: 6
    }, (_, i) => ({
      id: i + 1,
      title: \`Card \${i + 1}\`,
      description: \`This is the description for card \${i + 1}\`
    })));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(1500);
      const newItems = Array.from({
        length: 6
      }, (_, i) => ({
        id: items.length + i + 1,
        title: \`Card \${items.length + i + 1}\`,
        description: \`This is the description for card \${items.length + i + 1}\`
      }));
      setItems(prev => [...prev, ...newItems]);
      if (items.length >= 30) {
        setHasMore(false);
      }
      setLoading(false);
    }, [items.length, loading]);
    return <div style={{
      height: 500,
      width: 600,
      overflow: 'auto',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1rem'
    }}>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loading={loading} loader={<div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
              {[1, 2].map(i => <div key={i} style={{
          height: 150,
          background: '#e2e8f0',
          borderRadius: '8px',
          animation: 'pulse 1.5s infinite'
        }} />)}
            </div>} endMessage={<div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#64748b'
      }}>
              You've reached the end!
            </div>}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem'
        }}>
            {items.map(item => <Card key={item.id} style={{
            padding: '1rem'
          }}>
                <h4 style={{
              margin: '0 0 0.5rem'
            }}>{item.title}</h4>
                <p style={{
              margin: 0,
              color: '#64748b'
            }}>{item.description}</p>
              </Card>)}
          </div>
        </InfiniteScroll>
      </div>;
  }
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var j,L,A;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(Array.from({
      length: 15
    }, (_, i) => i + 1));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(800);
      const newItems = Array.from({
        length: 10
      }, (_, i) => items.length + i + 1);
      setItems(prev => [...prev, ...newItems]);
      if (items.length >= 100) {
        setHasMore(false);
      }
      setLoading(false);
    }, [items.length, loading]);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#64748b'
      }}>
          Loads when 300px from bottom (higher threshold = earlier load)
        </p>
        <div style={{
        height: 400,
        width: 400,
        overflow: 'auto',
        border: '1px solid #e2e8f0',
        borderRadius: '8px'
      }}>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loading={loading} threshold={300} loader={<div style={{
          padding: '1rem',
          textAlign: 'center'
        }}>Loading...</div>}>
            {items.map(item => <div key={item} style={{
            padding: '1rem',
            borderBottom: '1px solid #e2e8f0'
          }}>
                Item {item}
              </div>)}
          </InfiniteScroll>
        </div>
      </div>;
  }
}`,...(A=(L=f.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var C,_,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [messages, setMessages] = useState(Array.from({
      length: 20
    }, (_, i) => ({
      id: 20 - i,
      text: \`Message \${20 - i}\`,
      time: new Date(Date.now() - i * 60000).toLocaleTimeString()
    })));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(1000);
      const oldestId = messages[0].id;
      const newMessages = Array.from({
        length: 10
      }, (_, i) => ({
        id: oldestId - i - 1,
        text: \`Message \${oldestId - i - 1}\`,
        time: new Date(Date.now() - (messages.length + i) * 60000).toLocaleTimeString()
      }));
      setMessages(prev => [...newMessages.reverse(), ...prev]);
      if (messages.length >= 50) {
        setHasMore(false);
      }
      setLoading(false);
    }, [messages, loading]);
    return <div>
        <p style={{
        marginBottom: '1rem',
        color: '#64748b'
      }}>
          Chat-style: scroll up to load older messages
        </p>
        <div style={{
        height: 400,
        width: 400,
        overflow: 'auto',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column-reverse'
      }}>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loading={loading} reverse loader={<div style={{
          padding: '1rem',
          textAlign: 'center'
        }}>Loading older messages...</div>}>
            {messages.map(msg => <div key={msg.id} style={{
            padding: '0.75rem 1rem',
            borderBottom: '1px solid #e2e8f0'
          }}>
                <div style={{
              fontWeight: 500
            }}>{msg.text}</div>
                <div style={{
              fontSize: '0.75rem',
              color: '#64748b'
            }}>{msg.time}</div>
              </div>)}
          </InfiniteScroll>
        </div>
      </div>;
  }
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const W=["Default","WithCards","WithThreshold","ReverseScroll"];export{h as Default,u as ReverseScroll,p as WithCards,f as WithThreshold,W as __namedExportsOrder,B as default};
