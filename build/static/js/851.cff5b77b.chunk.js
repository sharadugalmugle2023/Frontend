(self.webpackChunkmarket_content_app=self.webpackChunkmarket_content_app||[]).push([[851],{9563:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});a(5043);var l=a(579);const t=()=>(0,l.jsx)("div",{className:"spinner"})},5099:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var l=a(5043),t=a(2450),n=a(3722),i=a(184),d=a(9563),r=a(579);const c=function(){const[e,s]=(0,l.useState)([]),[a,c]=(0,l.useState)(""),[o,h]=(0,l.useState)(""),[u,j]=(0,l.useState)(""),[x,m]=(0,l.useState)([]),[p,v]=(0,l.useState)(!1),[f,N]=(0,l.useState)(!1),[b,y]=(0,l.useState)(""),[g,S]=(0,l.useState)(!1),R=(0,l.useRef)(null);(0,l.useEffect)((()=>{w()}),[]);const w=async()=>{try{const e=await fetch("/list_programs"),a=await e.json();"success"===a.body.status?s(a.body.data):console.error("Failed to fetch programs:",a.body.data)}catch(e){console.error("Error fetching programs:",e)}},C=async e=>{e.preventDefault();const s=R.current.files[0];if(!s||!o||!u)return void alert("Please select a file, media type, and program type.");const a=new FormData;a.append("file",s),a.append("program_type",u),a.append("media_type",o),S(!0),v(!1),N(!1);try{const e=await fetch("/validation",{method:"POST",body:a}),s=await e.json();"SUCCESS"===s.status?(console.log("Validation successful:",s.data),m(s.data),v(!0)):(console.error("Validation failed:",s.data),y(s.data),N(!0))}catch(l){console.error("Error during validation:",l),v(!1),y(l.message),N(!0)}finally{S(!1)}},V=e=>{const s=e[2];if("string"===typeof s){return s.toLowerCase().includes("no")?"failed":"success"}return"failed"},k=()=>{const e=x.map(((e,s)=>({"Sr. No.":s+1,"Rule Name":e[0],Rule:e[1],"Validation Result":e[2],"Validation Comment":e[3]}))),s=new n.iX({fields:["Sr. No.","Rule Name","Rule","Validation Result","Validation Comment"]}).parse(e),a=new Blob([s],{type:"text/csv;charset=utf-8;"});(0,t.saveAs)(a,"Validation_Results.csv")};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"validate-content",children:[(0,r.jsx)("div",{className:"validate-content-header",children:"Validate Content"}),(0,r.jsxs)("form",{className:"validate-content-form",onSubmit:C,children:[(0,r.jsxs)("div",{className:"validate-content-form-group floating-label-input",children:[(0,r.jsxs)("select",{value:u,onChange:e=>{j(e.target.value)},required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Product Type"}),e.map((e=>(0,r.jsx)("option",{value:e.programName,children:e.programName},e.programID)))]}),(0,r.jsx)("label",{children:"Product Type"})]}),(0,r.jsxs)("div",{className:"validate-content-form-group floating-label-input",children:[(0,r.jsxs)("select",{value:o,onChange:e=>{h(e.target.value)},required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Media Type"}),(0,r.jsx)("option",{value:"pdf",children:"PDF/Image"}),(0,r.jsx)("option",{value:"GIF",children:"GIF"})]}),(0,r.jsx)("label",{children:"Media Type"})]}),(0,r.jsx)("div",{className:"validate-content-form-group media-type-group floating-label-input",children:(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("input",{type:"text",placeholder:" ",readOnly:!0,value:a}),(0,r.jsx)("label",{children:"Browse"}),(0,r.jsx)("button",{type:"button",className:"browse-button",onClick:()=>{R.current.click()},children:"Browse"}),(0,r.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},ref:R,onChange:e=>{const s=e.target.files[0];s&&c(s.name)}})]})})]}),(0,r.jsx)("div",{className:"uploaded-and-analyze",children:(0,r.jsx)("div",{className:"analyze-button-repositioning",children:(0,r.jsx)("button",{onClick:C,className:"analyze-button",children:"Analyze"})})})]}),g&&(0,r.jsx)("div",{className:"loader",children:(0,r.jsx)(d.A,{})}),p&&"pdf"===o&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Validation Results"}),(0,r.jsxs)("button",{className:"download-button",onClick:k,children:[(0,r.jsx)(i.WCW,{className:"download-icon"})," Download Excel"]}),(0,r.jsxs)("table",{className:"results-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Sr. No."}),(0,r.jsx)("th",{children:"Rule Name"}),(0,r.jsx)("th",{children:"Rule"}),(0,r.jsx)("th",{children:"Validation Result"}),(0,r.jsx)("th",{children:"Validation Comment"})]})}),(0,r.jsx)("tbody",{children:x.map(((e,s)=>(0,r.jsxs)("tr",{className:V(e),children:[(0,r.jsx)("td",{children:s+1}),(0,r.jsx)("td",{children:e[0]}),(0,r.jsx)("td",{children:e[1]}),(0,r.jsx)("td",{children:e[2]}),(0,r.jsx)("td",{children:e[3]})]},s)))})]})]}),f&&"pdf"===o&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Failed Validation Results"}),(0,r.jsx)("div",{className:"failed-message",children:b})]}),p&&"GIF"===o&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Validation Results"}),(0,r.jsxs)("button",{className:"download-button",onClick:k,children:[(0,r.jsx)(i.WCW,{className:"download-icon"})," Download Excel"]}),(0,r.jsxs)("table",{className:"results-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Sr. No."}),(0,r.jsx)("th",{children:"Rule Name"}),(0,r.jsx)("th",{children:"Rule"}),(0,r.jsx)("th",{children:"Validation Result"}),(0,r.jsx)("th",{children:"Validation Comment"})]})}),(0,r.jsx)("tbody",{children:x.map(((e,s)=>(0,r.jsxs)("tr",{className:V(e),children:[(0,r.jsx)("td",{children:s+1}),(0,r.jsx)("td",{children:e[0]}),(0,r.jsx)("td",{children:e[1]}),(0,r.jsx)("td",{children:e[2]}),(0,r.jsx)("td",{children:e[3]})]},s)))})]})]}),f&&"GIF"===o&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Failed Validation Results"}),(0,r.jsx)("div",{className:"failed-message",children:b})]}),p&&"Video"===o&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Validation Results"}),(0,r.jsxs)("table",{className:"results-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Sr. No."}),(0,r.jsx)("th",{children:"Title"}),(0,r.jsx)("th",{children:"Validation Result"})]})}),(0,r.jsx)("tbody",{children:x.map(((e,s)=>(0,r.jsxs)("tr",{className:V(e),children:[(0,r.jsx)("td",{children:s+1}),(0,r.jsx)("td",{children:Object.keys(e)[0]}),(0,r.jsxs)("td",{children:[Object.values(e)[0]," sec"]})]},s)))})]})]})]})}},3779:()=>{},7199:()=>{}}]);
//# sourceMappingURL=851.cff5b77b.chunk.js.map