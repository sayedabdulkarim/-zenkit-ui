import{j as e}from"./jsx-runtime-DiklIkkE.js";import{cj as i}from"./index-DkFsMHmE.js";import"./index-DRjF_FHU.js";import"./index-DIvcuAjW.js";const L={title:"Navigation/SpeedDial",component:i,parameters:{layout:"fullscreen"},tags:["autodocs"]},o=[{key:"copy",icon:"📋",label:"Copy"},{key:"save",icon:"💾",label:"Save"},{key:"print",icon:"🖨️",label:"Print"},{key:"share",icon:"📤",label:"Share"}],s={render:()=>e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsx(i,{actions:o,onActionClick:t=>console.log("Action:",t)})})},r={render:()=>e.jsxs("div",{style:{height:"500px",position:"relative",display:"flex",flexWrap:"wrap"},children:[e.jsxs("div",{style:{width:"50%",height:"50%",position:"relative",border:"1px solid #eee"},children:[e.jsx(i,{actions:o,direction:"up",position:"bottom-right"}),e.jsx("span",{style:{position:"absolute",top:10,left:10},children:"Up"})]}),e.jsxs("div",{style:{width:"50%",height:"50%",position:"relative",border:"1px solid #eee"},children:[e.jsx(i,{actions:o,direction:"down",position:"top-right"}),e.jsx("span",{style:{position:"absolute",top:10,left:10},children:"Down"})]}),e.jsxs("div",{style:{width:"50%",height:"50%",position:"relative",border:"1px solid #eee"},children:[e.jsx(i,{actions:o,direction:"left",position:"bottom-right"}),e.jsx("span",{style:{position:"absolute",top:10,left:10},children:"Left"})]}),e.jsxs("div",{style:{width:"50%",height:"50%",position:"relative",border:"1px solid #eee"},children:[e.jsx(i,{actions:o,direction:"right",position:"bottom-left"}),e.jsx("span",{style:{position:"absolute",top:10,left:10},children:"Right"})]})]})},n={render:()=>e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsx(i,{actions:o,trigger:"hover",onActionClick:t=>console.log("Action:",t)})})},l={render:()=>e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsx(i,{actions:o,icon:"✨",onActionClick:t=>console.log("Action:",t)})})},a={render:()=>e.jsx("div",{style:{height:"400px",position:"relative"},children:e.jsx(i,{actions:o,showLabels:!0,onActionClick:t=>console.log("Action:",t)})})};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px',
    position: 'relative'
  }}>
      <SpeedDial actions={actions} onActionClick={key => console.log('Action:', key)} />
    </div>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,v,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '500px',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap'
  }}>
      <div style={{
      width: '50%',
      height: '50%',
      position: 'relative',
      border: '1px solid #eee'
    }}>
        <SpeedDial actions={actions} direction="up" position="bottom-right" />
        <span style={{
        position: 'absolute',
        top: 10,
        left: 10
      }}>Up</span>
      </div>
      <div style={{
      width: '50%',
      height: '50%',
      position: 'relative',
      border: '1px solid #eee'
    }}>
        <SpeedDial actions={actions} direction="down" position="top-right" />
        <span style={{
        position: 'absolute',
        top: 10,
        left: 10
      }}>Down</span>
      </div>
      <div style={{
      width: '50%',
      height: '50%',
      position: 'relative',
      border: '1px solid #eee'
    }}>
        <SpeedDial actions={actions} direction="left" position="bottom-right" />
        <span style={{
        position: 'absolute',
        top: 10,
        left: 10
      }}>Left</span>
      </div>
      <div style={{
      width: '50%',
      height: '50%',
      position: 'relative',
      border: '1px solid #eee'
    }}>
        <SpeedDial actions={actions} direction="right" position="bottom-left" />
        <span style={{
        position: 'absolute',
        top: 10,
        left: 10
      }}>Right</span>
      </div>
    </div>
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,m;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px',
    position: 'relative'
  }}>
      <SpeedDial actions={actions} trigger="hover" onActionClick={key => console.log('Action:', key)} />
    </div>
}`,...(m=(y=n.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,b,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px',
    position: 'relative'
  }}>
      <SpeedDial actions={actions} icon="✨" onActionClick={key => console.log('Action:', key)} />
    </div>
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,k,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '400px',
    position: 'relative'
  }}>
      <SpeedDial actions={actions} showLabels onActionClick={key => console.log('Action:', key)} />
    </div>
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const W=["Default","Directions","HoverTrigger","CustomIcon","WithLabels"];export{l as CustomIcon,s as Default,r as Directions,n as HoverTrigger,a as WithLabels,W as __namedExportsOrder,L as default};
