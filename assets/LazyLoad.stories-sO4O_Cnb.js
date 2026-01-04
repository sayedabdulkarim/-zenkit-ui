import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a_ as r,K as s}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const F={title:"Utilities/LazyLoad",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{threshold:{control:{type:"range",min:0,max:1,step:.1},description:"Intersection threshold"},rootMargin:{control:"text",description:"Root margin for intersection"},once:{control:"boolean",description:"Only trigger once"}}},p=({index:n})=>e.jsxs(s,{style:{padding:"2rem",textAlign:"center",background:"#f8fafc"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"1rem"},children:["🖼️","📊","📈","🎨","📦"][n%5]}),e.jsxs("h3",{style:{margin:"0 0 0.5rem"},children:["Component ",n+1]}),e.jsx("p",{style:{margin:0,color:"#64748b"},children:"This content was lazily loaded when it came into view."})]}),t={render:()=>e.jsxs("div",{style:{height:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("p",{style:{marginBottom:"1rem",color:"#64748b"},children:"Scroll down to see lazy loaded content..."}),e.jsx("div",{style:{height:300}}),e.jsx(r,{placeholder:e.jsx("div",{style:{height:150,background:"#e2e8f0",borderRadius:"8px"}}),children:e.jsx(p,{index:0})}),e.jsx("div",{style:{height:50}}),e.jsx(r,{placeholder:e.jsx("div",{style:{height:150,background:"#e2e8f0",borderRadius:"8px"}}),children:e.jsx(p,{index:1})}),e.jsx("div",{style:{height:50}}),e.jsx(r,{placeholder:e.jsx("div",{style:{height:150,background:"#e2e8f0",borderRadius:"8px"}}),children:e.jsx(p,{index:2})})]})},o={render:()=>{const n=["https://picsum.photos/400/300?random=1","https://picsum.photos/400/300?random=2","https://picsum.photos/400/300?random=3","https://picsum.photos/400/300?random=4","https://picsum.photos/400/300?random=5","https://picsum.photos/400/300?random=6"];return e.jsxs("div",{style:{height:500,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("h3",{style:{marginTop:0},children:"Image Gallery with Lazy Loading"}),e.jsx("p",{style:{color:"#64748b"},children:"Scroll to load images as they come into view."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"1rem"},children:n.map((i,m)=>e.jsx(r,{placeholder:e.jsx("div",{style:{height:150,background:"#e2e8f0",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#94a3b8"},children:"Loading..."})}),rootMargin:"50px",children:e.jsx("img",{src:i,alt:`Image ${m+1}`,style:{width:"100%",height:150,objectFit:"cover",borderRadius:"8px"}})},m))})]})}},d={render:()=>e.jsxs("div",{style:{height:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("p",{style:{color:"#64748b"},children:'With rootMargin="100px", content loads 100px before it enters the viewport.'}),e.jsx("div",{style:{height:400}}),[0,1,2,3,4].map(n=>e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(r,{rootMargin:"100px",placeholder:e.jsx("div",{style:{height:100,background:"#e2e8f0",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("span",{style:{color:"#94a3b8"},children:["Placeholder ",n+1]})}),children:e.jsxs(s,{style:{padding:"1rem",background:"#f0fdf4"},children:[e.jsxs("h4",{style:{margin:0},children:["Content Block ",n+1]}),e.jsx("p",{style:{margin:"0.5rem 0 0",color:"#16a34a"},children:"Loaded early thanks to 100px root margin!"})]})})},n))]})},a={render:()=>e.jsxs("div",{style:{height:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("p",{style:{color:"#64748b"},children:"With threshold=0.5, content loads when 50% visible."}),e.jsx("div",{style:{height:300}}),[0,1,2].map(n=>e.jsx("div",{style:{marginBottom:"2rem"},children:e.jsx(r,{threshold:.5,placeholder:e.jsx("div",{style:{height:200,background:"#e2e8f0",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{color:"#94a3b8"},children:"Scroll more to load..."})}),children:e.jsx(s,{style:{padding:"2rem",height:200,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("span",{style:{fontSize:"2rem"},children:"✅"}),e.jsx("h4",{style:{margin:"0.5rem 0 0"},children:"Loaded at 50% visibility"})]})})})},n))]})},l={render:()=>{const n=i=>{console.log(`Component ${i+1} is now visible!`)};return e.jsxs("div",{style:{height:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("p",{style:{color:"#64748b"},children:"Check console for visibility callbacks (onVisible prop)."}),e.jsx("div",{style:{height:300}}),[0,1,2,3].map(i=>e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(r,{onVisible:()=>n(i),placeholder:e.jsx("div",{style:{height:80,background:"#e2e8f0",borderRadius:"8px"}}),children:e.jsxs(s,{style:{padding:"1rem"},children:[e.jsxs("strong",{children:["Item ",i+1]})," - onVisible fired when this appeared"]})})},i))]})}},h={render:()=>e.jsxs("div",{style:{height:400,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("style",{children:`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .lazy-animated {
            animation: fadeSlideIn 0.5s ease-out forwards;
          }
        `}),e.jsx("p",{style:{color:"#64748b"},children:"Content animates in when it becomes visible."}),e.jsx("div",{style:{height:300}}),[0,1,2,3,4].map(n=>e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(r,{placeholder:e.jsx("div",{style:{height:100,background:"#e2e8f0",borderRadius:"8px"}}),children:e.jsxs(s,{className:"lazy-animated",style:{padding:"1.5rem"},children:[e.jsxs("h4",{style:{margin:0},children:["Animated Content ",n+1]}),e.jsx("p",{style:{margin:"0.5rem 0 0",color:"#64748b"},children:"This card faded and slid in when it became visible."})]})})},n))]})},c={render:()=>e.jsxs("div",{style:{height:500,overflow:"auto",border:"1px solid #e2e8f0",borderRadius:"8px",padding:"1rem"},children:[e.jsx("style",{children:`
          @keyframes skeleton-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .skeleton {
            animation: skeleton-pulse 1.5s ease-in-out infinite;
          }
        `}),e.jsx("h3",{style:{marginTop:0},children:"Card Feed with Skeleton Placeholders"}),e.jsx("div",{style:{height:200}}),[0,1,2,3].map(n=>e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(r,{rootMargin:"50px",placeholder:e.jsxs(s,{style:{padding:"1rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsx("div",{className:"skeleton",style:{width:60,height:60,borderRadius:"50%",background:"#e2e8f0"}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{className:"skeleton",style:{height:16,width:"60%",background:"#e2e8f0",borderRadius:4,marginBottom:8}}),e.jsx("div",{className:"skeleton",style:{height:12,width:"40%",background:"#e2e8f0",borderRadius:4}})]})]}),e.jsx("div",{className:"skeleton",style:{height:12,width:"100%",background:"#e2e8f0",borderRadius:4,marginTop:12}}),e.jsx("div",{className:"skeleton",style:{height:12,width:"80%",background:"#e2e8f0",borderRadius:4,marginTop:8}})]}),children:e.jsxs(s,{style:{padding:"1rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs("div",{style:{width:60,height:60,borderRadius:"50%",background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:600},children:["U",n+1]}),e.jsxs("div",{children:[e.jsxs("h4",{style:{margin:0},children:["User ",n+1]}),e.jsxs("p",{style:{margin:"0.25rem 0 0",color:"#64748b",fontSize:"0.875rem"},children:["@user",n+1]})]})]}),e.jsx("p",{style:{margin:"1rem 0 0"},children:"This is some content that was lazily loaded to improve initial page performance."})]})})},n))]})};var y,g,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 400,
    overflow: 'auto',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1rem'
  }}>
      <p style={{
      marginBottom: '1rem',
      color: '#64748b'
    }}>
        Scroll down to see lazy loaded content...
      </p>
      <div style={{
      height: 300
    }} />
      <LazyLoad placeholder={<div style={{
      height: 150,
      background: '#e2e8f0',
      borderRadius: '8px'
    }} />}>
        <HeavyComponent index={0} />
      </LazyLoad>
      <div style={{
      height: 50
    }} />
      <LazyLoad placeholder={<div style={{
      height: 150,
      background: '#e2e8f0',
      borderRadius: '8px'
    }} />}>
        <HeavyComponent index={1} />
      </LazyLoad>
      <div style={{
      height: 50
    }} />
      <LazyLoad placeholder={<div style={{
      height: 150,
      background: '#e2e8f0',
      borderRadius: '8px'
    }} />}>
        <HeavyComponent index={2} />
      </LazyLoad>
    </div>
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,b,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const images = ['https://picsum.photos/400/300?random=1', 'https://picsum.photos/400/300?random=2', 'https://picsum.photos/400/300?random=3', 'https://picsum.photos/400/300?random=4', 'https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6'];
    return <div style={{
      height: 500,
      overflow: 'auto',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1rem'
    }}>
        <h3 style={{
        marginTop: 0
      }}>Image Gallery with Lazy Loading</h3>
        <p style={{
        color: '#64748b'
      }}>Scroll to load images as they come into view.</p>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem'
      }}>
          {images.map((src, i) => <LazyLoad key={i} placeholder={<div style={{
          height: 150,
          background: '#e2e8f0',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
                  <span style={{
            color: '#94a3b8'
          }}>Loading...</span>
                </div>} rootMargin="50px">
              <img src={src} alt={\`Image \${i + 1}\`} style={{
            width: '100%',
            height: 150,
            objectFit: 'cover',
            borderRadius: '8px'
          }} />
            </LazyLoad>)}
        </div>
      </div>;
  }
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,j,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 400,
    overflow: 'auto',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1rem'
  }}>
      <p style={{
      color: '#64748b'
    }}>
        With rootMargin="100px", content loads 100px before it enters the viewport.
      </p>
      <div style={{
      height: 400
    }} />
      {[0, 1, 2, 3, 4].map(i => <div key={i} style={{
      marginBottom: '1rem'
    }}>
          <LazyLoad rootMargin="100px" placeholder={<div style={{
        height: 100,
        background: '#e2e8f0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
                <span style={{
          color: '#94a3b8'
        }}>Placeholder {i + 1}</span>
              </div>}>
            <Card style={{
          padding: '1rem',
          background: '#f0fdf4'
        }}>
              <h4 style={{
            margin: 0
          }}>Content Block {i + 1}</h4>
              <p style={{
            margin: '0.5rem 0 0',
            color: '#16a34a'
          }}>
                Loaded early thanks to 100px root margin!
              </p>
            </Card>
          </LazyLoad>
        </div>)}
    </div>
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,L,R;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 400,
    overflow: 'auto',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1rem'
  }}>
      <p style={{
      color: '#64748b'
    }}>
        With threshold=0.5, content loads when 50% visible.
      </p>
      <div style={{
      height: 300
    }} />
      {[0, 1, 2].map(i => <div key={i} style={{
      marginBottom: '2rem'
    }}>
          <LazyLoad threshold={0.5} placeholder={<div style={{
        height: 200,
        background: '#e2e8f0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
                <span style={{
          color: '#94a3b8'
        }}>Scroll more to load...</span>
              </div>}>
            <Card style={{
          padding: '2rem',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
              <div style={{
            textAlign: 'center'
          }}>
                <span style={{
              fontSize: '2rem'
            }}>✅</span>
                <h4 style={{
              margin: '0.5rem 0 0'
            }}>Loaded at 50% visibility</h4>
              </div>
            </Card>
          </LazyLoad>
        </div>)}
    </div>
}`,...(R=(L=a.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var C,z,S;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const handleVisible = (index: number) => {
      console.log(\`Component \${index + 1} is now visible!\`);
    };
    return <div style={{
      height: 400,
      overflow: 'auto',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      padding: '1rem'
    }}>
        <p style={{
        color: '#64748b'
      }}>
          Check console for visibility callbacks (onVisible prop).
        </p>
        <div style={{
        height: 300
      }} />
        {[0, 1, 2, 3].map(i => <div key={i} style={{
        marginBottom: '1rem'
      }}>
            <LazyLoad onVisible={() => handleVisible(i)} placeholder={<div style={{
          height: 80,
          background: '#e2e8f0',
          borderRadius: '8px'
        }} />}>
              <Card style={{
            padding: '1rem'
          }}>
                <strong>Item {i + 1}</strong> - onVisible fired when this appeared
              </Card>
            </LazyLoad>
          </div>)}
      </div>;
  }
}`,...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var I,T,B;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 400,
    overflow: 'auto',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1rem'
  }}>
      <style>
        {\`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .lazy-animated {
            animation: fadeSlideIn 0.5s ease-out forwards;
          }
        \`}
      </style>
      <p style={{
      color: '#64748b'
    }}>
        Content animates in when it becomes visible.
      </p>
      <div style={{
      height: 300
    }} />
      {[0, 1, 2, 3, 4].map(i => <div key={i} style={{
      marginBottom: '1rem'
    }}>
          <LazyLoad placeholder={<div style={{
        height: 100,
        background: '#e2e8f0',
        borderRadius: '8px'
      }} />}>
            <Card className="lazy-animated" style={{
          padding: '1.5rem'
        }}>
              <h4 style={{
            margin: 0
          }}>Animated Content {i + 1}</h4>
              <p style={{
            margin: '0.5rem 0 0',
            color: '#64748b'
          }}>
                This card faded and slid in when it became visible.
              </p>
            </Card>
          </LazyLoad>
        </div>)}
    </div>
}`,...(B=(T=h.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var N,M,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 500,
    overflow: 'auto',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '1rem'
  }}>
      <style>
        {\`
          @keyframes skeleton-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .skeleton {
            animation: skeleton-pulse 1.5s ease-in-out infinite;
          }
        \`}
      </style>
      <h3 style={{
      marginTop: 0
    }}>Card Feed with Skeleton Placeholders</h3>
      <div style={{
      height: 200
    }} />
      {[0, 1, 2, 3].map(i => <div key={i} style={{
      marginBottom: '1rem'
    }}>
          <LazyLoad rootMargin="50px" placeholder={<Card style={{
        padding: '1rem'
      }}>
                <div style={{
          display: 'flex',
          gap: '1rem'
        }}>
                  <div className="skeleton" style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: '#e2e8f0'
          }} />
                  <div style={{
            flex: 1
          }}>
                    <div className="skeleton" style={{
              height: 16,
              width: '60%',
              background: '#e2e8f0',
              borderRadius: 4,
              marginBottom: 8
            }} />
                    <div className="skeleton" style={{
              height: 12,
              width: '40%',
              background: '#e2e8f0',
              borderRadius: 4
            }} />
                  </div>
                </div>
                <div className="skeleton" style={{
          height: 12,
          width: '100%',
          background: '#e2e8f0',
          borderRadius: 4,
          marginTop: 12
        }} />
                <div className="skeleton" style={{
          height: 12,
          width: '80%',
          background: '#e2e8f0',
          borderRadius: 4,
          marginTop: 8
        }} />
              </Card>}>
            <Card style={{
          padding: '1rem'
        }}>
              <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
                <div style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 600
            }}>
                  U{i + 1}
                </div>
                <div>
                  <h4 style={{
                margin: 0
              }}>User {i + 1}</h4>
                  <p style={{
                margin: '0.25rem 0 0',
                color: '#64748b',
                fontSize: '0.875rem'
              }}>@user{i + 1}</p>
                </div>
              </div>
              <p style={{
            margin: '1rem 0 0'
          }}>
                This is some content that was lazily loaded to improve initial page performance.
              </p>
            </Card>
          </LazyLoad>
        </div>)}
    </div>
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const G=["Default","ImageGallery","WithRootMargin","WithThreshold","OnVisibleCallback","AnimatedAppearance","SkeletonPlaceholders"];export{h as AnimatedAppearance,t as Default,o as ImageGallery,l as OnVisibleCallback,c as SkeletonPlaceholders,d as WithRootMargin,a as WithThreshold,G as __namedExportsOrder,F as default};
