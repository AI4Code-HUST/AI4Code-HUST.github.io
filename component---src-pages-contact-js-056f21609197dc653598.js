(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Cuy+":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),i={_origin:"https://api.emailjs.com"},r=function(e,n,t){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!n)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,n,t){return n&&c(e.prototype,n),t&&c(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var m=o((function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=n.status,this.text=n.responseText})),u=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,l){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var n=e.target,t=new m(n);200===t.status||"OK"===t.text?a(t):l(t)})),r.addEventListener("error",(function(e){var n=e.target;l(new m(n))})),r.open("POST",i._origin+e,!0),Object.keys(t).forEach((function(e){r.setRequestHeader(e,t[e])})),r.send(n)}))},s=function(e,n,t,a){var l=a||i._userID;r(l,e,n);var c={lib_version:"3.2.0",user_id:l,service_id:e,template_id:n,template_params:t};return u("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},h=t("70lj"),g=t("Bl7J"),d=t("phDV"),p=function(e){var n=e.fieldName;return l.a.createElement("span",{style:{color:"#ff4542"}}," — "+n+" is required!")};n.default=function(e){var n=e.data.site,t=Object(d.b)().language,i=Object(a.useState)(!1),r=i[0],c=i[1],o=Object(a.useState)([]),m=o[0],u=o[1];return l.a.createElement(g.a,null,l.a.createElement(h.a,{title:"Contact | "+n.siteMetadata.title,description:"Contact page of "+n.siteMetadata.description}),l.a.createElement("div",{className:"two-grids -contact"},l.a.createElement("div",null,l.a.createElement("h1",{className:"post-title"},"en"===t?"Contact us":"Liên hệ"),l.a.createElement("div",{className:"primary-content"},"en"===t?l.a.createElement(l.a.Fragment,null,"If you're interested in joining the lab, collaborating, or have any inquiries, please don't hesitate to send us an email at",l.a.createElement("a",{href:"mailto:ai4code.hust@gmail.com"}," ai4code.hust@gmail.com "),"or use the form on this page →"):l.a.createElement(l.a.Fragment,null,"Nếu bạn sinh viên quan tâm đến việc tham gia, hợp tác hay có bất kì câu hỏi nào dành cho nhóm nghiên cứu, vui lòng liên hệ với chúng tôi tại",l.a.createElement("a",{href:"mailto:ai4code.hust@gmail.com"}," ai4code.hust@gmail.com "),"hoặc sử dụng biểu mẫu trên trang này →")),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"en"===t?"Student Recruitment for Research Team: ":"Tuyển sinh viên cho nhóm nghiên cứu: "),"en"===t?l.a.createElement(l.a.Fragment,null,"The Research Group of Artificial Intelligence for Code (AI4Code) is looking for undergraduate students driven by excellence, excited about innovation, and looking to make a difference. If this sounds like you, you have come to the right place!"):l.a.createElement(l.a.Fragment,null,"Nhóm nghiên cứu về Trí tuệ nhân tạo cho phân tích và sinh mã nguồn (AI4Code) đang tìm kiếm các sinh viên có sự hứng thú với việc nghiên cứu trong lĩnh vực Trí tuệ nhân tạo, hoặc Công nghệ phần mềm. Hãy đăng kí để đồng hành cùng chúng tôi!")),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"en"===t?"Opportunities & Benefit:":"Cơ hội & Lợi ích:"),l.a.createElement("ul",null,"en"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"To work on cutting-edge research topics in Software Engineering and Artificial Intelligence;"),l.a.createElement("li",null,"To be instructed and collaborated by/with prestigious professors and researchers from HUST and collaborated universities, e.g., University of Melbourne, and Singapore Management University, University of Adelaide;"),l.a.createElement("li",null,"To work in a professional, open-minded environment with energetic and experienced colleagues;"),l.a.createElement("li",null,"To have publications in top-tier journals and conferences in Software Engineering and Artificial Intelligence;"),l.a.createElement("li",null,"To be supported in applying for the scholarship in developed countries, e.g., US, Singapore and Australia, for postgraduate (Master's or Ph.D.).")):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"Được nghiên cứu về các chủ đề đáng quan tâm trong lĩnh vực Công nghệ phần mềm và Trí tuệ nhân tạo."),l.a.createElement("li",null,"Được hướng dẫn và hợp tác với các giáo sư và nhà nghiên cứu đầu ngành đến từ HUST, Melbourne University, Singapore Management University, University of Adelaide"),l.a.createElement("li",null,"Được làm việc trong môi trường chuyên nghiệp, cởi mở, giàu kinh nghiệm"),l.a.createElement("li",null,"Có cơ hội được công bố tại các hội nghị hàng đầu trong lĩnh vực Công nghệ phần mềm và Trí tuệ nhân tạo"),l.a.createElement("li",null,"Được hỗ trợ trong cho việc theo đuổi các chương trình đào tạo sau đại học tại các ngôi trường danh tiếng, hàng đầu thế giới")))),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"en"===t?"Your Role: ":"Nhiệm vụ: "),"en"===t?l.a.createElement(l.a.Fragment,null,"The students will be instructed by supervisors and participate in professional, scientific research. The research topics include but are not limited to:",l.a.createElement("ul",null,l.a.createElement("li",null,"AI for Software Engineering"),l.a.createElement("li",null,"Large Language Models for Code Generation and Analysis"),l.a.createElement("li",null,"AI for Software Security")),"The position holder will be required to perform the following tasks:",l.a.createElement("ul",null,l.a.createElement("li",null,"Complete the tasks assigned by mentors"),l.a.createElement("li",null,"Perform literature review and empirical studies on assigned topics"),l.a.createElement("li",null,"Implement solutions"),l.a.createElement("li",null,"Present and report at least once a week"),l.a.createElement("li",null,"Communicate and coordinate with partners"),l.a.createElement("li",null,"Plan and participate in project meetings"))):l.a.createElement(l.a.Fragment,null,"Nhận hướng dẫn bởi các mentor có kinh nghiệm, thực hiện các nghiên cứu khoa học thuộc các chủ đề sau:",l.a.createElement("ul",null,l.a.createElement("li",null,"Trí tuệ nhân tạo trong Công nghệ phần mềm"),l.a.createElement("li",null,"Mô hình ngôn ngữ lớn cho sinh và phân tích mã nguồn"),l.a.createElement("li",null,"Trí tuệ nhân tạo trong bảo mật phần mềm")),"Các bạn sinh khi tham gia vào nhóm sẽ phải thực hiện các nhiệm vụ sau:",l.a.createElement("ul",null,l.a.createElement("li",null,"Hoàn thành nhiệm vụ được mentor giao"),l.a.createElement("li",null,"Tìm hiểu các công bố khoa học chuyên ngành"),l.a.createElement("li",null,"Triển khai các giải pháp"),l.a.createElement("li",null,"Báo cáo hàng tuần"),l.a.createElement("li",null,"Giao tiếp, phối hợp với các bên"),l.a.createElement("li",null,"Lên kế hoạch và tham gia các cuộc họp dự án")))),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"en"===t?"Qualifications:":"Yêu cầu:"),l.a.createElement("ul",null,"en"===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"Have a passion for academic research or have a studying orientation in advanced countries for postgraduate (Master's or Ph.D.)"),l.a.createElement("li",null,"Interest in one of the following areas: Software Engineering, Artificial Intelligence, Machine Learning"),l.a.createElement("li",null,"English skills: reading and writing (optional)")):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,"Có đam mê nghiên cứu hoặc có định hướng học tập sau đại học"),l.a.createElement("li",null,"Quan tâm đến 1 trong các lĩnh vực sau: Công nghệ phần mềm, Trí tuệ nhân tạo"),l.a.createElement("li",null,"Kỹ năng tiếng Anh: đọc và viết (thành thạo là một điểm cộng)")))),l.a.createElement("div",{className:"primary-content"},l.a.createElement("b",null,"en"===t?"Office: ":"Văn phòng: "),"en"===t?l.a.createElement(l.a.Fragment,null,"Hanoi University of Science and Technology, B1 Building, Room 1001, Tran Dai Nghia Road, Hai Ba Trung District, Hanoi, Vietnam."):l.a.createElement(l.a.Fragment,null,"Đại học Bách Khoa Hà Nội, Tòa nhà B1, Phòng 1001, Đường Trần Đại Nghĩa, Quận Hai Bà Trưng, Hà Nội, Việt Nam."))),l.a.createElement("div",null,l.a.createElement("form",{className:"form-container",onSubmit:function(e){e.preventDefault();var n=new FormData(e.target),t={name:n.get("w3lName"),replyTo:n.get("w3lSender"),subject:n.get("w3lSubject"),message:n.get("w3lMessage")},a=[];Object.entries(t).forEach((function(e){var n=e[0];e[1]?a=a.filter((function(e){return e!==n})):a.push(n)})),u(a),0===a.length&&s("service_uqpndcg","template_m09ybqm",t,"t2_39GqpP09bl4pnN").then((function(e){console.log(e.text),c(!0)}),(function(e){console.error(e.text)}))}},r?l.a.createElement("p",{style:{margin:0,lineHeight:"1.5em"}},"en"===t?"Your message has successfully been sent! It generally takes one to two days for us to reply.":"Tin nhắn của bạn đã được gửi thành công! Thường mất từ một đến hai ngày để chúng tôi trả lời."):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lName"},"en"===t?"Name":"Tên",m.includes("name")&&l.a.createElement(p,{fieldName:"en"===t?"Name":"Tên"})),l.a.createElement("input",{type:"text",name:"w3lName",id:"w3lName"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lSender"},"Email",m.includes("replyTo")&&l.a.createElement(p,{fieldName:"Email"})),l.a.createElement("input",{type:"email",name:"w3lSender",id:"w3lSender"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lSubject"},"en"===t?"Subject":"Chủ đề",m.includes("subject")&&l.a.createElement(p,{fieldName:"en"===t?"Subject":"Chủ đề"})),l.a.createElement("input",{type:"text",name:"w3lSubject",id:"w3lSubject"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"w3lMessage"},"en"===t?"Message":"Tin nhắn",m.includes("message")&&l.a.createElement(p,{fieldName:"en"===t?"Message":"Tin nhắn"})),l.a.createElement("textarea",{name:"w3lMessage",id:"w3lMessage",placeholder:"en"===t?"Tell us about yourself and Why you'd like to enroll into our lab ...":"Hãy giới thiệu bản thân của bạn, cũng như lý do bạn muốn tham gia vào lab này ..."})),l.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("input",{type:"submit",className:"button -primary",style:{marginRight:0},value:"en"===t?"Send":"Gửi"})))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-056f21609197dc653598.js.map