import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cm as t,cn as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const y={title:"Layout/Splitter",component:t,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={render:()=>e.jsx("div",{style:{height:"400px"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(i,{defaultSize:30,minSize:20,children:e.jsx("div",{style:{padding:"1rem",background:"#f5f5f5",height:"100%"},children:"Left Panel"})}),e.jsx(i,{minSize:20,children:e.jsx("div",{style:{padding:"1rem",height:"100%"},children:"Right Panel"})})]})})},d={render:()=>e.jsx("div",{style:{height:"400px"},children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(i,{defaultSize:40,children:e.jsx("div",{style:{padding:"1rem",background:"#f5f5f5",height:"100%"},children:"Top Panel"})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"1rem",height:"100%"},children:"Bottom Panel"})})]})})},n={render:()=>e.jsx("div",{style:{height:"400px"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(i,{defaultSize:25,minSize:15,children:e.jsx("div",{style:{padding:"1rem",background:"#e3e3e3",height:"100%"},children:"Sidebar"})}),e.jsx(i,{minSize:30,children:e.jsx("div",{style:{padding:"1rem",height:"100%"},children:"Main Content"})}),e.jsx(i,{defaultSize:25,minSize:15,children:e.jsx("div",{style:{padding:"1rem",background:"#e3e3e3",height:"100%"},children:"Properties"})})]})})},l={render:()=>e.jsx("div",{style:{height:"500px"},children:e.jsxs(t,{orientation:"horizontal",children:[e.jsx(i,{defaultSize:30,minSize:20,children:e.jsx("div",{style:{padding:"1rem",background:"#e3e3e3",height:"100%"},children:"Sidebar"})}),e.jsx(i,{children:e.jsxs(t,{orientation:"vertical",children:[e.jsx(i,{defaultSize:60,children:e.jsx("div",{style:{padding:"1rem",height:"100%"},children:"Editor"})}),e.jsx(i,{children:e.jsx("div",{style:{padding:"1rem",background:"#f5f5f5",height:"100%"},children:"Terminal"})})]})})]})})};var a,s,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px'
  }}>
      <Splitter orientation="horizontal">
        <SplitterPanel defaultSize={30} minSize={20}>
          <div style={{
          padding: '1rem',
          background: '#f5f5f5',
          height: '100%'
        }}>
            Left Panel
          </div>
        </SplitterPanel>
        <SplitterPanel minSize={20}>
          <div style={{
          padding: '1rem',
          height: '100%'
        }}>
            Right Panel
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var h,p,c;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px'
  }}>
      <Splitter orientation="vertical">
        <SplitterPanel defaultSize={40}>
          <div style={{
          padding: '1rem',
          background: '#f5f5f5',
          height: '100%'
        }}>
            Top Panel
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div style={{
          padding: '1rem',
          height: '100%'
        }}>
            Bottom Panel
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
}`,...(c=(p=d.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,S,m;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px'
  }}>
      <Splitter orientation="horizontal">
        <SplitterPanel defaultSize={25} minSize={15}>
          <div style={{
          padding: '1rem',
          background: '#e3e3e3',
          height: '100%'
        }}>
            Sidebar
          </div>
        </SplitterPanel>
        <SplitterPanel minSize={30}>
          <div style={{
          padding: '1rem',
          height: '100%'
        }}>
            Main Content
          </div>
        </SplitterPanel>
        <SplitterPanel defaultSize={25} minSize={15}>
          <div style={{
          padding: '1rem',
          background: '#e3e3e3',
          height: '100%'
        }}>
            Properties
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
}`,...(m=(S=n.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var v,u,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '500px'
  }}>
      <Splitter orientation="horizontal">
        <SplitterPanel defaultSize={30} minSize={20}>
          <div style={{
          padding: '1rem',
          background: '#e3e3e3',
          height: '100%'
        }}>
            Sidebar
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <Splitter orientation="vertical">
            <SplitterPanel defaultSize={60}>
              <div style={{
              padding: '1rem',
              height: '100%'
            }}>
                Editor
              </div>
            </SplitterPanel>
            <SplitterPanel>
              <div style={{
              padding: '1rem',
              background: '#f5f5f5',
              height: '100%'
            }}>
                Terminal
              </div>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const b=["Horizontal","Vertical","ThreePanels","Nested"];export{r as Horizontal,l as Nested,n as ThreePanels,d as Vertical,b as __namedExportsOrder,y as default};
