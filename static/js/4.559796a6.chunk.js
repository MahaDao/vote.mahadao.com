(this["webpackJsonpmaker-governance-portal"]=this["webpackJsonpmaker-governance-portal"]||[]).push([[4],{2031:function(e,t,n){e.exports=n.p+"static/media/close-inline.c1dddb8c.svg"},2101:function(e,t,n){"use strict";n.r(t);var a=n(3),l=n.n(a),o=n(97),r=n(19),i=n(21),c=n(20),d=n(22),s=n(0),p=n.n(s),m=n(2),u=n(68),h=n(11),g=n(695),f=n(1),w=n(8),x=n(6),C=n(9),y=n(29),b=m.d.div.withConfig({displayName:"CreatePollInput__SectionWrapper",componentId:"sc-15pt672-0"})(["display:flex;flex-direction:row;padding-bottom:40px;"]),E=m.d.p.withConfig({displayName:"CreatePollInput__StyledBody",componentId:"sc-15pt672-1"})(["width:200px;text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;"]);function v(e){var t=e.title,n=Object(y.a)(e,["title"]);return p.a.createElement(s.Fragment,null,p.a.createElement(b,null,p.a.createElement(E,null,t,":"),p.a.createElement(f.k,Object.assign({width:"600px"},n))))}var P=n(15),_=m.d.p.withConfig({displayName:"CreatePollOverview__StyledBody",componentId:"sc-1i84z2e-0"})(["width:150px;text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;"]),k=m.d.div.withConfig({displayName:"CreatePollOverview__SectionWrapper",componentId:"sc-1i84z2e-1"})(["display:flex;flex-direction:row;padding-bottom:40px;"]),S=Object(m.d)(k).withConfig({displayName:"CreatePollOverview___StyledSectionWrapper",componentId:"sc-1i84z2e-2"})({marginTop:"20px"}),T=m.d.p.withConfig({displayName:"CreatePollOverview__SectionText",componentId:"sc-1i84z2e-3"})(["text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;margin-bottom:20px;"]),O=Object(m.d)(T).withConfig({displayName:"CreatePollOverview___StyledSectionText",componentId:"sc-1i84z2e-4"})({width:"600px",cursor:"pointer"}),I=m.d.pre.withConfig({displayName:"CreatePollOverview__Code",componentId:"sc-1i84z2e-5"})(["font-size:14px;padding:30px;border:1px solid black;white-space:pre-wrap;"]),j=Object(m.d)(I).withConfig({displayName:"CreatePollOverview___StyledCode",componentId:"sc-1i84z2e-6"})({width:"800px",overflow:"auto",cursor:"pointer"}),N=m.d.label.withConfig({displayName:"CreatePollOverview__Label",componentId:"sc-1i84z2e-7"})(["font-size:0.9em;color:#546978;margin-left:10px;"]),z=m.d.p.withConfig({displayName:"CreatePollOverview__WarningText",componentId:"sc-1i84z2e-8"})(["font-size:0.9em;color:#f35833;margin-top:11px;"]),M=Object(m.d)(f.c).withConfig({displayName:"CreatePollOverview___StyledButton",componentId:"sc-1i84z2e-9"})({marginTop:"10px"}),q=Object(m.d)(f.c).withConfig({displayName:"CreatePollOverview___StyledButton2",componentId:"sc-1i84z2e-10"})({width:"200px"}),R=m.d.div.withConfig({displayName:"CreatePollOverview___StyledDiv",componentId:"sc-1i84z2e-11"})({display:"flex",alignItems:"flex-start"}),A=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),d=0;d<a;d++)o[d]=arguments[d];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={confirmCreatePoll:!1},n.toggleCheckbox=function(){n.setState({confirmCreatePoll:!n.state.confirmCreatePoll})},n.render=function(){var e=n.props,t=e.start,a=e.end,o=e.markdown,r=e.hash,i=e.url,c=e.submitAttempted,d=e.handleParentState,m=e.execCreatePoll,u=e.allAccounts,h=i.match(C.i),g=c&&!h,y=u.length,b=c&&!y,E=new Date(t).toUTCString(),P=new Date(a).toUTCString();return p.a.createElement(s.Fragment,null,p.a.createElement(T,null,"This is an overview of the new poll. The polling window will be open from ",E.substring(0,E.length-4)," UTC and will close on ",P.substring(0,P.length-4)," UTC."),p.a.createElement(T,null,"The markdown and hash below should be copied into the cms and a the subsequent poll's content url should be retrieved and pasted in the input field below."),p.a.createElement(k,null,p.a.createElement(f.b,null,p.a.createElement(_,null,"Markdown:"),p.a.createElement(M,{variant:"secondary",onClick:function(){return Object(x.e)(o)}},"Copy")),p.a.createElement(j,{onClick:function(){return Object(x.e)(o)}},o)),p.a.createElement(k,null,p.a.createElement(_,null,"Hash:"),p.a.createElement(O,{onClick:function(){return Object(x.e)(r)}},r),p.a.createElement(q,{variant:"secondary",onClick:function(){return Object(x.e)(r)}},"Copy")),p.a.createElement(v,{title:"Poll URL",placeholder:"The URL from which the poll can be found",value:i,onChange:function(e){return function(e,t){e.stopPropagation(),d(Object(w.a)({},t,e.target.value))}(e,"url")},error:g,failureMessage:g&&"The Poll URL must be a valid url",width:"800px"}),p.a.createElement(R,null,p.a.createElement(f.f,{id:"createPollCheckbox",checked:n.state.confirmCreatePoll,onChange:n.toggleCheckbox}),p.a.createElement(N,{htmlFor:"createPollCheckbox"},"Confirm that you have copied the above content into the cms")),p.a.createElement(S,null,p.a.createElement(f.c,{onClick:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:d({submitAttempted:!0}),h&&y&&n.state.confirmCreatePoll&&m();case 2:case"end":return e.stop()}}))},disabled:b&&!n.state.confirmCreatePoll},"Create Poll"),p.a.createElement(f.b,{width:"32px"}),p.a.createElement(f.c,{variant:"secondary",onClick:function(){return d({step:0})}},"Edit")),b&&p.a.createElement(k,null,p.a.createElement(z,null,"User must have an account to create the poll")))},n}return Object(d.a)(t,e),t}(s.Component),D=Object(P.b)((function(e,t){return{allAccounts:e.accounts.allAccounts}}))(A),L=n(2031),U=n.n(L),B=n(2032),W=n.n(B),F=m.d.p.withConfig({displayName:"CreatePollTime__StyledBody",componentId:"aogen6-0"})(["width:200px;text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;"]),V=m.d.div.withConfig({displayName:"CreatePollTime__SectionWrapper",componentId:"aogen6-1"})(["display:flex;flex-direction:row;padding-bottom:40px;"]),H=Object(m.d)(F).withConfig({displayName:"CreatePollTime__TimeLabel",componentId:"aogen6-2"})(["width:400px;"]),G=m.d.p.withConfig({displayName:"CreatePollTime__WarningText",componentId:"aogen6-3"})(["font-size:0.9em;color:#f35833;margin-top:11px;"]),J=Object(m.d)(W.a).withConfig({displayName:"CreatePollTime___StyledDateTimePicker",componentId:"aogen6-4"})({width:"600px"}),Y=Object(m.d)(W.a).withConfig({displayName:"CreatePollTime___StyledDateTimePicker2",componentId:"aogen6-5"})({width:"600px"});function Z(e){var t=e.start,n=e.end,a=e.timeError,l=e.handleParentState,o=new Date(t).toUTCString(),r=new Date(n).toUTCString();return p.a.createElement(s.Fragment,null,p.a.createElement(V,null,p.a.createElement(F,null,"Poll Start Time (Local):"),p.a.createElement(J,{disableClock:!0,showLeadingZeros:!0,clearIcon:null,onChange:function(e){return l({start:e.getTime(),end:e.getTime()>n?e.getTime():n})},value:new Date(t)})),p.a.createElement(V,null,p.a.createElement(F,null,"Poll Start Time (UTC):"),p.a.createElement(f.b,{width:"600px"},p.a.createElement(H,null,o.substring(0,o.length-4)))),p.a.createElement(V,null,p.a.createElement(F,null,"Poll End Time (Local):"),p.a.createElement(Y,{disableClock:!0,showLeadingZeros:!0,clearIcon:null,onChange:function(e){return l({start:e.getTime()<t?e.getTime():t,end:e.getTime()})},value:new Date(n)})),p.a.createElement(V,null,p.a.createElement(F,null,"Poll Start Time (UTC):"),p.a.createElement(f.b,{width:"600px"},p.a.createElement(H,null,r.substring(0,r.length-4)))),p.a.createElement(V,null,p.a.createElement(F,null,"Poll Duration"),p.a.createElement(f.b,{width:"600px"},p.a.createElement(H,null,Object(x.c)(t,n)),a&&p.a.createElement(G,null,"Start time cannot be a past date"))))}var K=n(483),Q=n(2078),X=n.n(Q),$=n(2098),ee=(n(2099),new $.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0})),te=m.d.p.withConfig({displayName:"CreatePollMarkdown__WarningText",componentId:"q5byki-0"})(["font-size:0.9em;color:#f35833;margin-top:11px;"]),ne=m.d.div.withConfig({displayName:"CreatePollMarkdown__SectionWrapper",componentId:"q5byki-1"})(["display:flex;flex-direction:row;padding-bottom:40px;"]),ae=m.d.p.withConfig({displayName:"CreatePollMarkdown__StyledBody",componentId:"q5byki-2"})(["width:200px;text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;"]),le=m.d.p.withConfig({displayName:"CreatePollMarkdown__SectionText",componentId:"q5byki-3"})(["text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;margin-bottom:20px;"]),oe=m.d.div.withConfig({displayName:"CreatePollMarkdown__VoteOptionsGrid",componentId:"q5byki-4"})(["display:grid;grid-template-columns:1fr;grid-column-gap:10px;grid-row-gap:20px;"]),re=m.d.p.withConfig({displayName:"CreatePollMarkdown__OptionText",componentId:"q5byki-5"})(["text-align:left;line-height:30px;font-size:17px;color:#fff;"]),ie=m.d.p.withConfig({displayName:"CreatePollMarkdown__CloseIcon",componentId:"q5byki-6"})(["width:15px;height:15px;background-color:red;mask:url(",") center no-repeat;cursor:pointer;"],U.a),ce=m.d.p.withConfig({displayName:"CreatePollMarkdown__DropdownText",componentId:"q5byki-7"})(["text-overflow:ellipsis;overflow:hidden;width:",";margin-left:13px;margin-right:13px;color:black;"],(function(e){var t=e.width;return t||"125px"})),de=Object(m.d)(f.c).withConfig({displayName:"CreatePollMarkdown___StyledButton",componentId:"q5byki-8"})({alignSelf:"center",marginLeft:"10px"}),se=Object(m.d)(u.a).withConfig({displayName:"CreatePollMarkdown___StyledCard",componentId:"q5byki-9"})({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"600px",padding:"10px",backgroundColor:"#30BD9F"});function pe(e){var t=e.categories,n=e.voteTypes,a=e.parentState,l=e.addPollOption,o=e.removePollOption,r=e.handleParentState,i=e.resetPollState,c=e.parseMarkdown,d=a.title,m=a.summary,u=a.start,h=a.end,g=a.category,x=a.link,y=a.option,b=a.choices,E=a.content,P=a.selectedVoteType,_=a.submitAttempted,k=a.selectedTab,S=!!d,T=!!m,O=x.match(C.i),I=b.length>1,j=!!E,N=u>=C.e,z=S&&T&&O&&I&&j&&N,M=_&&!S,q=_&&!T,R=_&&!O,A=_&&!I,D=_&&!j,L=_&&!N,U=function(e,t){e.stopPropagation(),r(Object(w.a)({},t,e.target.value))};return p.a.createElement(s.Fragment,null,p.a.createElement(le,null,"This form will generate a formatted markdown file which can be copied and included in the cms"),[{title:"Title",placeholder:"This will be the poll title",value:d,onChange:function(e){return U(e,"title")},error:M,failureMessage:M&&"Title is required"},{title:"Summary",placeholder:"Give a short description of what this poll is for",value:m,onChange:function(e){return U(e,"summary")},error:q,failureMessage:q&&"Summary is required"},{title:"Discussion Link",placeholder:"Link to where this Polling proposal will be discussed",value:x,onChange:function(e){return U(e,"link")},error:R,failureMessage:R&&"Link must be a valid URL"},{title:"Vote Options",placeholder:"Add possible voting options",value:y,onChange:function(e){return U(e,"option")},error:A,failureMessage:A&&"Must be at least two voting options",after:p.a.createElement(de,{width:"190px",onClick:l},"Add Option")}].map((function(e,t){return p.a.createElement(v,Object.assign({key:t},e))})),p.a.createElement(ne,null,p.a.createElement(ae,null),p.a.createElement(oe,null,b.map((function(e,t){return p.a.createElement(se,{key:t},p.a.createElement(re,null,"#",t," - ",e),t>0&&p.a.createElement(ie,{onClick:function(){return o(t)}}))})))),p.a.createElement(Z,{start:u,end:h,timeError:L,handleParentState:r}),p.a.createElement(ne,null,p.a.createElement(ae,null,"Vote Type:"),p.a.createElement(f.b,{width:"600px"},p.a.createElement(K.a,{color:"light_grey2",items:n,renderItem:function(e){return p.a.createElement(ce,{width:"225px"},e)},renderRowItem:function(e){return p.a.createElement(ce,{width:"225px"},e)},value:P,onSelect:function(e){return r({selectedVoteType:e})},allowEmpty:!1}))),p.a.createElement(ne,null,p.a.createElement(ae,null,"Category:"),p.a.createElement(f.b,{width:"600px"},p.a.createElement(K.a,{color:"light_grey2",items:t,renderItem:function(e){return p.a.createElement(ce,{width:"225px"},e)},renderRowItem:function(e){return p.a.createElement(ce,{width:"225px"},e)},value:g,onSelect:function(e){return r({category:e})},allowEmpty:!1}))),p.a.createElement(ne,null,p.a.createElement(ae,null,"Proposal:"),p.a.createElement(f.b,{width:"600px"},p.a.createElement(X.a,{value:E,onChange:function(e){return r({content:e})},selectedTab:k,onTabChange:function(e){return r({selectedTab:e})},generateMarkdownPreview:function(e){return Promise.resolve(ee.makeHtml(e))}}),D&&p.a.createElement(te,null,"Proposal is required"))),p.a.createElement(ne,null,p.a.createElement(f.c,{onClick:function(){r({submitAttempted:!0}),z&&c()}},"Create Markdown"),p.a.createElement(f.b,{width:"32px"}),p.a.createElement(f.c,{variant:"secondary",onClick:i},"Reset Form")))}var me=n(38),ue=n(26),he=m.d.p.withConfig({displayName:"CreatePollResult__ResultTitle",componentId:"d3qay7-0"})(["text-align:center;line-height:35px;margin-top:20px;font-size:22px;color:#546978;"]),ge=m.d.div.withConfig({displayName:"CreatePollResult__SectionWrapper",componentId:"d3qay7-1"})(["display:flex;flex-direction:row;padding-bottom:40px;"]),fe=Object(m.d)(ge).withConfig({displayName:"CreatePollResult___StyledSectionWrapper",componentId:"d3qay7-2"})({marginTop:"20px"}),we=m.d.p.withConfig({displayName:"CreatePollResult__SectionText",componentId:"d3qay7-3"})(["text-align:left;line-height:30px;margin-top:5px;font-size:17px;color:#546978;margin-bottom:20px;"]),xe=Object(m.d)(we).withConfig({displayName:"CreatePollResult___StyledSectionText",componentId:"d3qay7-4"})({textAlign:"center",marginTop:"30px"}),Ce=Object(m.d)(f.c).withConfig({displayName:"CreatePollResult___StyledButton",componentId:"d3qay7-5"})({marginTop:"30px"});function ye(e){var t=e.pollTxStatus,n=e.id,a=e.handleParentState,l=e.resetPollState,o=e.title,r=e.txHash,i=Object(ue.b)(r,Object(ue.d)(window.maker.service("web3").networkId()));console.log(i);var c=C.f.LOADING,d=C.f.SUCCESS,m=C.f.ERROR;switch(t){case c:return p.a.createElement(s.Fragment,null,p.a.createElement(he,null,p.a.createElement(f.l,{href:i,target:"_blank"},"Transaction ",Object(x.f)(r,6)," is in progress...")),p.a.createElement(f.b,{alignSelf:"center",mt:"40px"},p.a.createElement(me.a,{size:40})));case d:return p.a.createElement(s.Fragment,null,p.a.createElement(he,null,p.a.createElement(f.l,{href:i,target:"_blank"},"Transaction ",Object(x.f)(r,6)," completed!")),p.a.createElement(he,null,"Poll #",n," - ",o," created!"),p.a.createElement(ge,null,p.a.createElement(xe,null,"The Poll ID should now be copied into the cms.")),p.a.createElement(fe,null,p.a.createElement(f.c,{onClick:function(){return Object(x.e)(n)},variant:"secondary"},"Copy Poll ID"),p.a.createElement(f.b,{width:"32px"}),p.a.createElement(f.c,{variant:"secondary",onClick:l},"Create New Poll")));case m:return p.a.createElement(s.Fragment,null,p.a.createElement(he,null,"Something is not quite right..."),p.a.createElement(Ce,{variant:"secondary",onClick:function(){return a({step:1})}},"Back"));default:return null}}var be=Object(m.e)(["0%{opacity:0;transform:translateY(15px);}100%{opacity:1;transform:translateY(0);}"]),Ee=m.d.div.withConfig({displayName:"CreatePoll__StyledTop",componentId:"aqapzy-0"})(["padding:54px 16px;display:flex;align-items:center;justify-content:space-between;max-width:1140px;margin:auto;"]),ve=m.d.p.withConfig({displayName:"CreatePoll__StyledTitle",componentId:"aqapzy-1"})(["font-size:28px;color:",";line-height:normal;font-weight:500;"],h.b.text.darker_default),Pe=m.d.div.withConfig({displayName:"CreatePoll__RiseUp",componentId:"aqapzy-2"})(["animation:"," 0.75s ease-in-out;"],be),_e=Object(m.d)(u.a).withConfig({displayName:"CreatePoll__ContentWrapper",componentId:"aqapzy-3"})(["display:flex;flex-direction:column;align-items:center;padding:80px 100px;"]),ke=["Ranked Choice IRV","Plurality Voting"],Se=["System Risk Variables","Protocol Changes","Procedural Changes","MIPs","Oracles","Collateral Onboarding","Other"],Te={title:"",summary:"",category:Se[0],selectedVoteType:ke[0],start:C.e,end:C.d,link:"",option:"",choices:["Abstain"],content:"",markdown:"",pollTxStatus:null,hash:"",submitAttempted:!1,selectedTab:"write",id:null,url:"",step:0,txHash:null},Oe=Object(m.d)(f.p).withConfig({displayName:"CreatePoll___StyledStepper",componentId:"aqapzy-4"})({paddingBottom:"30px"}),Ie=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,d=new Array(a),s=0;s<a;s++)d[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(d)))).state=Te,n.addPollOption=function(){var e=n.state,t=e.option,a=e.choices;t.length&&n.setState({option:"",choices:[].concat(Object(o.a)(a),[t])})},n.removePollOption=function(e){var t=n.state.choices;n.setState({choices:t.filter((function(t,n){return n!==e}))})},n.resetPollState=function(){n.setState(Te)},n.parseMarkdown=function(){var e,t,a,o,r,i,c,d,s,p,m,u;return l.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:return e=n.state,t=e.title,a=e.summary,o=e.category,r=e.link,i=e.choices,c=e.content,d=e.selectedVoteType,s=i.reduce((function(e,t,n){return"".concat(e,"   ").concat(n,": ").concat(t,"\n")}),""),p="---\ntitle: ".concat(t,"\nsummary: ").concat(a,"\ncategory: ").concat(o,"\ndiscussion_link: ").concat(r,"\nvote_type: ").concat(d,"\noptions:\n").concat(s,"---\n"),m="# Poll: ".concat(t,"\n\n").concat(c),h.next=6,l.a.awrap(Object(g.a)("".concat(p).concat(m),{encoding:"ascii"}));case 6:u=h.sent,n.setState({markdown:"".concat(p).concat(m),step:1,submitAttempted:!1,hash:u});case 8:case"end":return h.stop()}}))},n.execCreatePoll=function(){var e,t,a,o,r,i,c,d;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=n.state,t=e.start,a=e.end,o=e.hash,r=e.url,s.prev=1,i=window.maker.service("transactionManager"),c=window.maker.service("govPolling")._pollingContract().createPoll(Math.floor(t/1e3),Math.floor(a/1e3),o,r),i.listen(c,{pending:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({txHash:e.hash,step:2,pollTxStatus:C.f.LOADING});case 1:case"end":return t.stop()}}))}}),s.t0=parseInt,s.next=8,l.a.awrap(c);case 8:s.t1=s.sent.receipt.logs[0].topics[2],d=(0,s.t0)(s.t1),n.setState({id:d,pollTxStatus:C.f.SUCCESS}),s.next=17;break;case 13:s.prev=13,s.t2=s.catch(1),console.error(s.t2),n.setState({pollTxStatus:C.f.ERROR});case 17:case"end":return s.stop()}}),null,null,[[1,13]])},n.render=function(){var e=n.state,t=e.title,a=e.start,l=e.end,o=e.markdown,r=e.pollTxStatus,i=e.hash,c=e.url,d=e.submitAttempted,s=e.id,m=e.step,u=e.txHash;return p.a.createElement(Pe,null,p.a.createElement(Ee,null,p.a.createElement(ve,null,"Create a new Polling proposal")),p.a.createElement(_e,null,p.a.createElement(Oe,{selected:m,steps:["Create Poll Markdown","Deploy Poll Contract","Poll Result"]}),function(){switch(m){case 0:return p.a.createElement(pe,{categories:Se,voteTypes:ke,parentState:n.state,addPollOption:n.addPollOption,removePollOption:n.removePollOption,handleParentState:function(e){return n.setState(e)},resetPollState:n.resetPollState,parseMarkdown:n.parseMarkdown});case 1:return p.a.createElement(D,{title:t,start:a,end:l,markdown:o,hash:i,url:c,submitAttempted:d,handleParentState:function(e){return n.setState(e)},execCreatePoll:n.execCreatePoll});case 2:return p.a.createElement(ye,{pollTxStatus:r,id:s,title:t,txHash:u,handleParentState:function(e){return n.setState(e)},resetPollState:n.resetPollState});default:return null}}()))},n}return Object(d.a)(t,e),t}(s.Component);t.default=Ie}}]);
//# sourceMappingURL=4.559796a6.chunk.js.map