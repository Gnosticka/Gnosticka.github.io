import{g as u,a4 as l,I as a,X as s,aM as c}from"./index.7d689aa6.js";function g(){let t=null;const e=u();function o(){t!==null&&(clearTimeout(t),t=null)}return l(o),a(o),{removeTimeout:o,registerTimeout(i,n){o(),s(e)===!1&&(t=setTimeout(()=>{t=null,i()},n))}}}const r={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},d=Object.keys(r);r.all=!0;function v(t){const e={};for(const o of d)t[o]===!0&&(e[o]=!0);return Object.keys(e).length===0?r:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const f=["INPUT","TEXTAREA"];function p(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&f.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function h(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),c.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{h as c,v as g,p as s,g as u};
