(self.webpackChunkmarket_content_app=self.webpackChunkmarket_content_app||[]).push([[825],{9773:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>o});var l=s(5043),t=s(1458),i=s(2450),n=s(3722),d=s(184),r=s(579);const o=function(){const[e,a]=(0,l.useState)(""),[s,o]=(0,l.useState)(""),[c,u]=(0,l.useState)([]),[h,m]=(0,l.useState)([]),[x,j]=(0,l.useState)(!1),[p,f]=(0,l.useState)(!1),[v,y]=(0,l.useState)(""),[g,b]=(0,l.useState)(!1),[N,_]=(0,l.useState)([]),[S,V]=(0,l.useState)([]),[w,C]=(0,l.useState)(null),R=(0,l.useRef)(null),k=[{value:"frame_analysis",label:"Frame Analysis"},{value:"audio_analysis",label:"Audio Analysis"}];(0,l.useEffect)((()=>{D(),V(k)}),[]);const D=async()=>{try{const e=await fetch("/list_programs"),a=await e.json();"success"===a.body.status?_(a.body.data):console.error("Failed to fetch programs:",a.data)}catch(e){console.error("Error fetching programs:",e)}},A=async e=>{e.preventDefault();const a=R.current.files[0];if(!a||!s)return void alert("Please select a file and program type.");const l=new FormData;l.append("file",a),l.append("program_type",s),l.append("operation",JSON.stringify(S.map((e=>e.value)))),b(!0),j(!1),f(!1);try{const e=await fetch("/video_validation",{method:"POST",body:l}),a=await e.json();"SUCCESS"===a.frame.status&&"SUCCESS"===a.audio.status?2===S.length&&S.some((e=>"frame_analysis"===e.value))&&S.some((e=>"audio_analysis"===e.value))?(u(a.frame.data),console.log("Validation frame result: ",a.frame.data),m(a.audio.data[1].Data2),console.log("Validation audio result: ",a.audio.data[1].Data2),j(!0)):1===S.length&&"frame_analysis"===S[0].value?(u(a.frame.data),m([]),j(!0)):1===S.length&&"audio_analysis"===S[0].value&&a.audio&&a.audio.data[1]&&a.audio.data[1].Data2&&(m(a.audio.data[1].Data2),u([]),j(!0)):(y(a.data),f(!0))}catch(t){y(t.message),f(!0)}finally{b(!1)}},F=e=>{const a=e.Validation_result;return"string"===typeof a?a.toLowerCase().includes("no")?"failed":"success":"failed"};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"validate-video-content",children:[(0,r.jsx)("div",{className:"validate-video-content-header",children:"Validate Video Content"}),(0,r.jsxs)("form",{className:"validate-video-content-form",onSubmit:A,children:[(0,r.jsxs)("div",{className:"validate-video-content-form-group floating-label-input",children:[(0,r.jsxs)("select",{value:s,onChange:e=>{o(e.target.value)},required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Program Type"}),N.map((e=>(0,r.jsx)("option",{value:e.programName,children:e.programName},e.programID)))]}),(0,r.jsx)("label",{children:"Program Type"})]}),(0,r.jsxs)("div",{className:"select-container validate-video-content-form-group",children:[(0,r.jsx)(t.Ay,{isMulti:!0,closeMenuOnSelect:!1,name:"operations",options:k,value:S,className:"basic-multi-select",classNamePrefix:"select",onChange:e=>{V(e)},placeholder:"Search",required:!0}),(0,r.jsx)("label",{children:"Operation Type*"})]}),(0,r.jsx)("div",{className:"validate-video-content-form-group media-type-group floating-label-input",children:(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("input",{type:"text",placeholder:" ",readOnly:!0,value:e}),(0,r.jsx)("label",{children:"Browse"}),(0,r.jsx)("button",{type:"button",className:"browse-button",onClick:()=>{R.current.click()},children:"Browse"}),(0,r.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},ref:R,onChange:e=>{const s=e.target.files[0];s&&a(s.name)}})]})})]}),(0,r.jsx)("div",{className:"uploaded-and-analyze",children:(0,r.jsx)("div",{className:"analyze-button-repositioning",children:(0,r.jsx)("button",{onClick:A,className:"analyze-button",children:"Analyze"})})})]}),g&&(0,r.jsx)("div",{className:"loader",children:"Loading..."}),x&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Validation Results"}),(0,r.jsxs)("button",{className:"download-button",onClick:()=>{const e=c.map(((e,a)=>({"Sr. No.":a+1,Frames:e.frame_name,"Validation Result":e.validation_result}))),a=new n.iX({fields:["Sr. No.","Frames","Validation Result"]}).parse(e),s=new Blob([a],{type:"text/csv;charset=utf-8;"});(0,i.saveAs)(s,"Video_Validation_Results.csv")},children:[(0,r.jsx)(d.WCW,{className:"download-icon"})," Download Excel"]}),c.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Frame Analysis Results"}),(0,r.jsxs)("table",{className:"frame_analysis_results-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Image"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:c.map(((e,a)=>(0,r.jsxs)(l.Fragment,{children:[(0,r.jsx)("tr",{onClick:()=>(e=>{C(w===e?null:e)})(a),className:"frame-analysis-row",children:(0,r.jsxs)("td",{className:"frame-open-close",children:[e.file_name,w===a?(0,r.jsx)(d.Ucs,{}):(0,r.jsx)(d.Vr3,{})]})}),w===a&&(0,r.jsx)("tr",{className:"details-row",children:(0,r.jsx)("td",{colSpan:"2",children:(0,r.jsxs)("table",{className:"details-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Rule Name"}),(0,r.jsx)("th",{children:"Rule Definition"}),(0,r.jsx)("th",{children:"Validation Result"}),(0,r.jsx)("th",{children:"Validation Comment"})]})}),(0,r.jsx)("tbody",{children:e.results.map(((e,a)=>(0,r.jsxs)("tr",{className:F(e),children:[(0,r.jsx)("td",{children:e.rule_name}),(0,r.jsx)("td",{children:e.rule_defination}),(0,r.jsx)("td",{children:e.Validation_result}),(0,r.jsx)("td",{children:e.Validation_comment})]},a)))})]})})})]},a)))})]})]}),h.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:"Audio Analysis Results"}),(0,r.jsxs)("table",{className:"audio_analysis_results-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Rule Name"}),(0,r.jsx)("th",{children:"Rule Definition"}),(0,r.jsx)("th",{children:"Validation Result"}),(0,r.jsx)("th",{children:"Validation Comment"})]})}),(0,r.jsx)("tbody",{children:h.map(((e,a)=>(0,r.jsxs)("tr",{className:F(e),children:[(0,r.jsx)("td",{children:e.rule_name}),(0,r.jsx)("td",{children:e.rule_defination}),(0,r.jsx)("td",{children:e.Validation_result}),(0,r.jsx)("td",{children:e.Validation_comment})]},a)))})]})]})]}),p&&(0,r.jsxs)("div",{className:"validation-results",children:[(0,r.jsx)("h3",{children:"Failed Validation Results"}),(0,r.jsx)("div",{className:"failed-message",children:v})]})]})}},3779:()=>{},7199:()=>{}}]);
//# sourceMappingURL=825.7661e22a.chunk.js.map