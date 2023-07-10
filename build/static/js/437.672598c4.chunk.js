"use strict";(self.webpackChunkfailean_client=self.webpackChunkfailean_client||[]).push([[437],{8437:function(e,a,t){t.r(a),t.d(a,{default:function(){return Q}});var r=t(1889),o=t(890),n=t(3366),i=t(7462),d=t(2791),s=t(8182),l=t(4419);var c=d.createContext(),p=t(1402),u=t(6934),v=t(5878),h=t(1217);function g(e){return(0,h.Z)("MuiTable",e)}(0,v.Z)("MuiTable",["root","stickyHeader"]);var m=t(184),f=["className","component","padding","size","stickyHeader"],y=(0,u.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.stickyHeader&&a.stickyHeader]}})((function(e){var a=e.theme,t=e.ownerState;return(0,i.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,i.Z)({},a.typography.body2,{padding:a.spacing(2),color:(a.vars||a).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})})),Z="table",x=d.forwardRef((function(e,a){var t=(0,p.Z)({props:e,name:"MuiTable"}),r=t.className,o=t.component,u=void 0===o?Z:o,v=t.padding,h=void 0===v?"normal":v,x=t.size,b=void 0===x?"medium":x,j=t.stickyHeader,k=void 0!==j&&j,w=(0,n.Z)(t,f),H=(0,i.Z)({},t,{component:u,padding:h,size:b,stickyHeader:k}),T=function(e){var a=e.classes,t={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,l.Z)(t,g,a)}(H),C=d.useMemo((function(){return{padding:h,size:b,stickyHeader:k}}),[h,b,k]);return(0,m.jsx)(c.Provider,{value:C,children:(0,m.jsx)(y,(0,i.Z)({as:u,role:u===Z?null:"table",ref:a,className:(0,s.Z)(T.root,r),ownerState:H},w))})}));var b=d.createContext();function j(e){return(0,h.Z)("MuiTableHead",e)}(0,v.Z)("MuiTableHead",["root"]);var k=["className","component"],w=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,a){return a.root}})({display:"table-header-group"}),H={variant:"head"},T="thead",C=d.forwardRef((function(e,a){var t=(0,p.Z)({props:e,name:"MuiTableHead"}),r=t.className,o=t.component,d=void 0===o?T:o,c=(0,n.Z)(t,k),u=(0,i.Z)({},t,{component:d}),v=function(e){var a=e.classes;return(0,l.Z)({root:["root"]},j,a)}(u);return(0,m.jsx)(b.Provider,{value:H,children:(0,m.jsx)(w,(0,i.Z)({as:d,className:(0,s.Z)(v.root,r),ref:a,role:d===T?null:"rowgroup",ownerState:u},c))})})),M=t(4942),R=t(2065);function z(e){return(0,h.Z)("MuiTableRow",e)}var N=(0,v.Z)("MuiTableRow",["root","selected","hover","head","footer"]),S=["className","component","hover","selected"],P=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.head&&a.head,t.footer&&a.footer]}})((function(e){var a,t=e.theme;return a={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,M.Z)(a,"&.".concat(N.hover,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),(0,M.Z)(a,"&.".concat(N.selected),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,R.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,R.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}),a})),A=d.forwardRef((function(e,a){var t=(0,p.Z)({props:e,name:"MuiTableRow"}),r=t.className,o=t.component,c=void 0===o?"tr":o,u=t.hover,v=void 0!==u&&u,h=t.selected,g=void 0!==h&&h,f=(0,n.Z)(t,S),y=d.useContext(b),Z=(0,i.Z)({},t,{component:c,hover:v,selected:g,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),x=function(e){var a=e.classes,t={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,l.Z)(t,z,a)}(Z);return(0,m.jsx)(P,(0,i.Z)({as:c,ref:a,className:(0,s.Z)(x.root,r),role:"tr"===c?null:"row",ownerState:Z},f))})),B=A,O=t(4036);function q(e){return(0,h.Z)("MuiTableCell",e)}var D=(0,v.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),F=["align","className","component","padding","scope","size","sortDirection","variant"],I=(0,u.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a[t.variant],a["size".concat((0,O.Z)(t.size))],"normal"!==t.padding&&a["padding".concat((0,O.Z)(t.padding))],"inherit"!==t.align&&a["align".concat((0,O.Z)(t.align))],t.stickyHeader&&a.stickyHeader]}})((function(e){var a=e.theme,t=e.ownerState;return(0,i.Z)({},a.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?"1px solid ".concat(a.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===a.palette.mode?(0,R.$n)((0,R.Fq)(a.palette.divider,1),.88):(0,R._j)((0,R.Fq)(a.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===t.variant&&{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium},"body"===t.variant&&{color:(a.vars||a).palette.text.primary},"footer"===t.variant&&{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)},"small"===t.size&&(0,M.Z)({padding:"6px 16px"},"&.".concat(D.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default})})),_=d.forwardRef((function(e,a){var t,r=(0,p.Z)({props:e,name:"MuiTableCell"}),o=r.align,u=void 0===o?"inherit":o,v=r.className,h=r.component,g=r.padding,f=r.scope,y=r.size,Z=r.sortDirection,x=r.variant,j=(0,n.Z)(r,F),k=d.useContext(c),w=d.useContext(b),H=w&&"head"===w.variant,T=f;"td"===(t=h||(H?"th":"td"))?T=void 0:!T&&H&&(T="col");var C=x||w&&w.variant,M=(0,i.Z)({},r,{align:u,component:t,padding:g||(k&&k.padding?k.padding:"normal"),size:y||(k&&k.size?k.size:"medium"),sortDirection:Z,stickyHeader:"head"===C&&k&&k.stickyHeader,variant:C}),R=function(e){var a=e.classes,t=e.variant,r=e.align,o=e.padding,n=e.size,i={root:["root",t,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat((0,O.Z)(r)),"normal"!==o&&"padding".concat((0,O.Z)(o)),"size".concat((0,O.Z)(n))]};return(0,l.Z)(i,q,a)}(M),z=null;return Z&&(z="asc"===Z?"ascending":"descending"),(0,m.jsx)(I,(0,i.Z)({as:t,ref:a,className:(0,s.Z)(R.root,v),"aria-sort":z,scope:T,ownerState:M},j))})),W=_;function J(e){return(0,h.Z)("MuiTableBody",e)}(0,v.Z)("MuiTableBody",["root"]);var L=["className","component"],$=(0,u.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,a){return a.root}})({display:"table-row-group"}),E={variant:"body"},G="tbody",K=d.forwardRef((function(e,a){var t=(0,p.Z)({props:e,name:"MuiTableBody"}),r=t.className,o=t.component,d=void 0===o?G:o,c=(0,n.Z)(t,L),u=(0,i.Z)({},t,{component:d}),v=function(e){var a=e.classes;return(0,l.Z)({root:["root"]},J,a)}(u);return(0,m.jsx)(b.Provider,{value:E,children:(0,m.jsx)($,(0,i.Z)({className:(0,s.Z)(v.root,r),as:d,ref:a,role:d===G?null:"rowgroup",ownerState:u},c))})})),Q=function(){return(0,m.jsxs)(r.ZP,{container:!0,direction:"column",rowSpacing:10,alignItems:"center",children:[(0,m.jsx)(r.ZP,{item:!0,children:(0,m.jsx)(o.Z,{variant:"h3",children:"Idea Backlog:"})}),(0,m.jsx)(r.ZP,{item:!0,children:(0,m.jsxs)(x,{children:[(0,m.jsx)(C,{children:(0,m.jsxs)(B,{children:[(0,m.jsx)(W,{children:"Idea:"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"})]})}),(0,m.jsxs)(K,{children:[(0,m.jsxs)(B,{children:[(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"})]}),(0,m.jsxs)(B,{children:[(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"}),(0,m.jsx)(W,{children:"asdasdasdasdasdasd"})]})]})]})})]})}}}]);
//# sourceMappingURL=437.672598c4.chunk.js.map