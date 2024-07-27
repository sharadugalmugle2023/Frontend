"use strict";(self.webpackChunkmarket_content_app=self.webpackChunkmarket_content_app||[]).push([[1],{4001:(e,l,s)=>{s.r(l),s.d(l,{default:()=>x});var a=s(5043),t=s(184),n=s(423),r=s(579);const i=function(e){let{onClose:l,onAddRule:s}=e;const t=JSON.parse(localStorage.getItem("userData")),[n,i]=(0,a.useState)({title:"",description:"",mediaType:"",disclaimer:"",assigned_to:"",created_by:"".concat(t[1]," ").concat(t[2])}),[d,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{o()}),[]);const o=async()=>{try{const e=await fetch("/list_users"),l=await e.json();"SUCCESS"===l.body.status?c(l.body.data):console.error("Failed to fetch users:",l.data)}catch(e){console.error("Error fetching users:",e)}};console.log("USER in add rule: ",d);const u=e=>{const{name:l,value:s}=e.target;i({...n,[l]:s})};return(0,r.jsx)("div",{className:"add-new-rule-overlay",children:(0,r.jsxs)("div",{className:"add-new-rule",children:[(0,r.jsxs)("div",{className:"add-new-rule-header",children:[(0,r.jsx)("div",{children:"Add New Rule"}),(0,r.jsx)("button",{className:"add-new-rule-close",onClick:l,children:"\xd7"})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"add-new-rule-body",children:[(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsx)("input",{type:"text",name:"title",value:n.title,onChange:u,required:!0,placeholder:" "}),(0,r.jsx)("label",{children:"Rule Title*"})]}),(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsx)("input",{type:"text",name:"description",value:n.description,onChange:u,required:!0,placeholder:" "}),(0,r.jsx)("label",{children:"Description*"})]}),(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsx)("input",{type:"text",name:"disclaimer",value:n.disclaimer,onChange:u,required:!0,placeholder:" "}),(0,r.jsx)("label",{children:"Rule Definition*"})]}),(0,r.jsxs)("div",{className:"add-new-rule-field-row",children:[(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsxs)("select",{name:"assigned_to",value:n.assigned_to,onChange:u,required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Assignee"}),d.map((e=>"SuperAdmin"===e.role&&(0,r.jsx)("option",{value:e.email,children:e.email},e.userID)))]}),(0,r.jsx)("label",{children:"Assigned To*"})]}),(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsxs)("select",{name:"mediaType",value:n.mediaType,onChange:u,required:!0,children:[(0,r.jsx)("option",{value:"",disabled:!0,children:"Select Media Type"}),(0,r.jsx)("option",{value:"PDF/Image",children:"PDF/Image"}),(0,r.jsx)("option",{value:"Video",children:"Video"}),(0,r.jsx)("option",{value:"GIF",children:"GIF"})]}),(0,r.jsx)("label",{children:"Media Type*"})]})]})]}),(0,r.jsxs)("div",{className:"add-new-rule-footer",children:[(0,r.jsx)("button",{className:"add-new-rule-add",onClick:()=>{const{title:e,description:a,mediaType:t,disclaimer:r,assigned_to:i,created_by:d}=n;if(console.log("title is:",e),console.log("description is:",a),console.log("mediaType is:",t),console.log("disclaimer is:",r),console.log("assigned_to is:",i),console.log("created_by is:",d),e&&a&&t&&r&&i&&d){s({rulename:e,media_type:t,description:a,disclaimer:r,ruleStatus:"pending",assigned_to:i,created_by:d}),l()}else alert("Please enter all fields")},children:"Add"}),(0,r.jsx)("button",{className:"add-new-rule-cancel",onClick:l,children:"Cancel"})]})]})})};const d=function(e){let{onClose:l,rule:s}=e;const[t,n]=(0,a.useState)(""),[i,d]=(0,a.useState)(""),[c,o]=(0,a.useState)(""),[u,h]=(0,a.useState)("");return console.log("RULE in edit: ",s),(0,a.useEffect)((()=>{s&&(n(s.rulename),d(s.media_type),o(s.description),h(s.disclaimer))}),[s]),(0,r.jsx)("div",{className:"edit-rule-overlay",children:(0,r.jsxs)("div",{className:"edit-rule",children:[(0,r.jsxs)("div",{className:"edit-rule-header",children:[(0,r.jsx)("div",{children:"Edit Rule"}),(0,r.jsx)("button",{className:"edit-rule-close",onClick:l,children:"\xd7"})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"edit-rule-body",children:[(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsx)("input",{type:"text",value:t,onChange:e=>n(e.target.value),required:!0,placeholder:" "}),(0,r.jsx)("label",{children:"Rule Name"})]}),(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsx)("input",{type:"text",value:c,onChange:e=>o(e.target.value),required:!0,placeholder:" "}),(0,r.jsx)("label",{children:"Description"})]}),(0,r.jsxs)("div",{className:"floating-label-input",children:[(0,r.jsx)("input",{type:"text",value:u,onChange:e=>h(e.target.value),placeholder:" "}),(0,r.jsx)("label",{children:"Rule Defination"})]}),(0,r.jsx)("div",{className:"edit-rule-field-row",children:(0,r.jsxs)("div",{className:"select-container floating-label-input",children:[(0,r.jsxs)("select",{value:i,onChange:e=>d(e.target.value),disabled:!0,children:[(0,r.jsx)("option",{value:"PDF/Image",children:"PDF/Image"}),(0,r.jsx)("option",{value:"Video",children:"Video"}),(0,r.jsx)("option",{value:"GIF",children:"GIF"})]}),(0,r.jsx)("label",{children:"Media Type"})]})})]}),(0,r.jsxs)("div",{className:"edit-rule-footer",children:[(0,r.jsx)("button",{className:"edit-rule-save",onClick:async()=>{if(t&&c&&i)try{const e=await fetch("/edit_rule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:s.rule_id,rulename:t,description:c,disclaimer:u})}),a=await e.json();"SUCCESS"===a.status?(alert("Rule updated successfully!"),l()):alert("Failed to update rule: "+a.data)}catch(e){console.error("Error updating rule:",e),alert("Error updating rule")}else alert("Please enter all fields")},children:"Save"}),(0,r.jsx)("button",{className:"edit-rule-cancel",onClick:l,children:"Cancel"})]})]})})};const c=function(e){let{onClose:l,onDelete:s,rule:a}=e;return(0,r.jsx)("div",{className:"delete-rule-overlay",children:(0,r.jsxs)("div",{className:"delete-rule",children:[(0,r.jsxs)("div",{className:"delete-rule-header",children:[(0,r.jsx)("div",{children:"Delete Rule"}),(0,r.jsx)("button",{className:"delete-rule-close",onClick:l,children:"\xd7"})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"delete-rule-body",children:["Are you sure you want to delete rule '",(0,r.jsx)("strong",{children:a.rulename}),"'?"]}),(0,r.jsxs)("div",{className:"delete-rule-footer",children:[(0,r.jsx)("button",{className:"delete-rule-confirm",onClick:()=>{s(a.rule_id),l()},children:"Yes, Delete"}),(0,r.jsx)("button",{className:"delete-rule-cancel",onClick:l,children:"Cancel"})]})]})})};const o=function(e){let{onClose:l,rule:s,fetchRules:a}=e;console.log("Rule in ApproveDeclineStatus comp:  ",s);const t=async e=>{try{const t=await fetch("/change_rule_status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:s.rule_id,status:e})}),n=await t.json();"SUCCESS"===n.status?(alert("Rule status updated successfully!"),a(),l()):alert("Failed to update rule status: "+n.data)}catch(t){console.error("Error updating rule status:",t),alert("Error updating rule status")}};return(0,r.jsx)("div",{className:"approve-decline-overlay",children:(0,r.jsxs)("div",{className:"approve-decline",children:[(0,r.jsxs)("div",{className:"approve-decline-header",children:[(0,r.jsx)("div",{children:"Change Rule Status"}),(0,r.jsx)("button",{className:"approve-decline-close",onClick:l,children:"\xd7"})]}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"approve-decline-body",children:(0,r.jsxs)("p",{children:["Are you sure you want to change the status of the rule ",(0,r.jsx)("strong",{children:s.rulename}),"?"]})}),(0,r.jsxs)("div",{className:"approve-decline-footer",children:[(0,r.jsx)("button",{className:"approve-button",onClick:async()=>{await t("approved")},children:"Approve"}),(0,r.jsx)("button",{className:"decline-button",onClick:async()=>{await t("declined")},children:"Decline"})]})]})})};var u=s(9563);const h="SuperAdmin",p="Admin",j="Write";const x=function(){const[e,l]=(0,a.useState)([]),[s,x]=(0,a.useState)([]),[m,v]=(0,a.useState)(""),[g,y]=(0,a.useState)(!1),[N,f]=(0,a.useState)(!1),[C,b]=(0,a.useState)(!1),[S,_]=(0,a.useState)(!1),[w,R]=(0,a.useState)(null),[E,k]=(0,a.useState)(!1),[T,A]=(0,a.useState)(null),[D,F]=(0,a.useState)(""),[P,I]=(0,a.useState)(null);(0,a.useEffect)((()=>{O();const e=JSON.parse(localStorage.getItem("userData"));e&&I(e[6])}),[]);const O=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";k(!0);try{const s=await fetch("/list_rules?status=".concat(e)),a=await s.json();"SUCCESS"===a.status?(x(a.data),l(a.data)):console.error("Failed to fetch rules:",a.data)}catch(s){console.error("Error fetching rules:",s)}finally{k(!1)}},U=(0,a.useCallback)(function(e,l){let s;return function(){for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];const r=()=>{clearTimeout(s),e(...t)};clearTimeout(s),s=setTimeout(r,l)}}(((e,s)=>async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";k(!0);try{const a=await fetch("/filter_rules?search=".concat(e,"&status=").concat(s)),t=await a.json();"SUCCESS"===t.status?l(t.data):console.error("Failed to fetch rules:",t.data)}catch(a){console.error("Error fetching rules:",a)}finally{k(!1)}}(e,s)),300),[]),q=e=>{R(e),_(!0)},J=e=>{switch(e){case"approved":return(0,r.jsx)(n.dA7,{className:"status-icon approved"});case"pending":return(0,r.jsx)("span",{className:"status-icon pending",onClick:()=>q(w),children:(0,r.jsx)(n.i6r,{})});case"declined":return(0,r.jsx)(t._Hm,{className:"status-icon declined"});default:return null}};return(0,r.jsxs)("div",{className:"rules",children:[(0,r.jsxs)("div",{className:"rules-heading",children:[(0,r.jsxs)("div",{className:"rules-header",children:[(0,r.jsx)("div",{className:"rule-page-header",children:"Rules"}),(0,r.jsxs)("select",{className:"rules-status-dropdown",value:D,onChange:e=>{const{value:l}=e.target;F(l),O(l)},children:[(0,r.jsx)("option",{value:"",children:"All Rules"}),(0,r.jsx)("option",{value:"approved",children:"Approved Rules"}),(0,r.jsx)("option",{value:"pending",children:"Pending Rules"}),(0,r.jsx)("option",{value:"declined",children:"Declined Rules"})]})]}),(0,r.jsxs)("div",{className:"rules-search-add",children:[(0,r.jsxs)("div",{className:"rules-search-wrapper",children:[(0,r.jsx)("input",{type:"text",value:m,onChange:e=>{const{value:l}=e.target;v(l),U(l,D)},placeholder:"Search By Rule Name / Media Type",className:"rules-search-input"}),(0,r.jsx)(t.KSO,{className:"rules-search-icon"})]}),(P===h||P===p||P===j)&&(0,r.jsx)("button",{className:"rules__add-new-button",onClick:()=>y(!0),children:"+ Add New"})]})]}),(0,r.jsxs)("table",{className:"rules__content-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Rule Name"}),(0,r.jsx)("th",{children:"Media Type"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Created By"}),(0,r.jsx)("th",{children:"Rule Status"}),(P===h||P===p||P===j)&&(0,r.jsx)("th",{children:"Action"})]})}),E?(0,r.jsx)("div",{className:"loader",children:(0,r.jsx)(u.A,{})}):(0,r.jsx)("tbody",{children:e.length>0?e.map(((e,l)=>(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)("tr",{onClick:()=>(e=>{T===e.id?A(null):A(e.id)})(e),className:"rules__rule-row",children:[(0,r.jsx)("td",{children:e.rulename}),(0,r.jsx)("td",{children:e.media_type}),(0,r.jsx)("td",{children:e.description}),(0,r.jsx)("td",{children:e.created_by}),(0,r.jsxs)("td",{className:"testing",onClick:()=>"pending"===e.rule_status&&q(e),children:[J(e.rule_status)," ",e.rule_status]}),(P===h||P===p||P===j)&&(0,r.jsxs)("td",{className:"edit-delete-status",children:[(P===h||P===p||P===j)&&(0,r.jsx)("button",{className:"rules__edit-button",onClick:l=>{l.stopPropagation(),(e=>{R(e),f(!0)})(e)},children:(0,r.jsx)(t.uO9,{})}),P===h&&(0,r.jsx)("button",{className:"rules__delete-button",onClick:l=>{l.stopPropagation(),(e=>{R(e),b(!0)})(e)},children:(0,r.jsx)(t.qbC,{})})]})]})},l))):(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colSpan:P===h||P===p||P===j?6:5,children:"No rules found"})})})]}),g&&(0,r.jsx)(i,{onClose:()=>y(!1),onAddRule:async e=>{k(!0);try{const l=await fetch("/add_rule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await l.json();"SUCCESS"===s.status?(alert("Rule added successfully!"),O()):alert("Failed to add rule: "+s.data)}catch(l){console.error("Error adding rule:",l)}finally{k(!1)}}}),N&&(0,r.jsx)(d,{onClose:()=>{f(!1),O()},rule:w}),C&&(0,r.jsx)(c,{onClose:()=>b(!1),onDelete:()=>(async e=>{k(!0);try{const l=await fetch("/delete_rule",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({rule_id:e.rule_id})}),s=await l.json();"SUCCESS"===s.status?(alert("Rule deleted successfully!"),O()):alert("Failed to delete rule: "+s.data)}catch(l){console.error("Error deleting rule:",l),alert("Error deleting rule")}finally{k(!1)}})(w),rule:w}),S&&(0,r.jsx)(o,{onClose:()=>_(!1),rule:w,fetchRules:O})]})}},9563:(e,l,s)=>{s.d(l,{A:()=>t});s(5043);var a=s(579);const t=()=>(0,a.jsx)("div",{className:"spinner"})}}]);
//# sourceMappingURL=1.a7e44c7f.chunk.js.map