const b=()=>({select:l,encode:d,download:m,getExtension:f,getExtensionByBase64:g,getFileTypeByExtension:x,getFileName:u,getExtensionByFilename:w,urlToFile:h}),l=async(o=["image"])=>{const e=[];o.forEach(a=>{switch(a){case"image":e.push(".jpg, .jpeg, .png");break;case"audio":e.push("audio/*");break;case"video":e.push("video/*");break;case"document":e.push("application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation");break;case"text":e.push("text/plain, .txt");break}});const n=e.join(", "),t=document.createElement("input");t.type="file",t.accept=n;const r=new Promise(a=>{t.onchange=async s=>{if(s.target!==null){const c=s.target;if(c.files&&c.files.length>0){const p=c.files[0],i=p.name;a({file:p,name:i,blob:URL.createObjectURL(p)})}else a(null)}else a(null)},document.body.onfocus=()=>{setTimeout(()=>{(!t.files||t.files.length===0)&&a(null),document.body.onfocus=null},500)}});return t.click(),r},d=async o=>new Promise(async(e,n)=>{try{const r=await(await fetch(o)).blob(),a=new FileReader;a.onload=s=>{s.target&&typeof s.target.result=="string"?e(s.target.result):n(new Error("Failed to read file as base64."))},a.onerror=n,a.readAsDataURL(r)}catch(t){n(t)}}),m=(o,e)=>{const n=document.createElement("a");n.href=o,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n)},u=o=>{const e=o.split("/");return e[e.length-1]},f=async o=>{try{const n=(await fetch(o)).headers.get("Content-Type");let t="";switch(n){case"image/jpeg":t="jpg";break;case"image/png":t="png";break;case"audio/mpeg":t="mp3";break;case"audio/wav":t="wav";break;case"video/mp4":t="mp4";break;case"application/pdf":t="pdf";break;case"application/msword":t="doc";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="docx";break;case"application/vnd.ms-excel":t="xls";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="xlsx";break;case"application/vnd.ms-powerpoint":t="ppt";break;case"application/vnd.openxmlformats-officedocument.presentationml.presentation":t="pptx";break;case"text/plain":t="txt";break;default:throw new Error("Unsupported file type")}return t}catch(e){throw new Error(`Failed to get file extension: ${e}`)}},g=o=>{const e=o.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);if(!e||e.length<2)throw new Error("Invalid Base64 data");switch(e[1]){case"image/jpeg":return"jpg";case"image/png":return"png";case"audio/mpeg":return"mp3";case"audio/wav":return"wav";case"video/mp4":return"mp4";case"application/pdf":return"pdf";case"application/msword":return"doc";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"application/vnd.ms-excel":return"xls";case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"application/vnd.ms-powerpoint":return"ppt";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";default:throw new Error("Unsupported file type")}},x=o=>{const e=["jpg","jpeg","png","gif","bmp","svg","JPG","JPEG","PNG","GIF","BMP","SVG"],n=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","PDF","DOC","DOCX","XLS","XLSX","PPT","PPTX","TXT"];return e.includes(o)?"image":n.includes(o)?"document":"other"},w=o=>{const e=o.lastIndexOf(".");return e===-1?"":o.substring(e+1)},h=async(o,e="",n="")=>{var s;const r=await(await fetch(o)).arrayBuffer();if(!e){const c=o.split("/");e=c[c.length-1]}if(!n){const c=((s=e.split(".").pop())==null?void 0:s.toLowerCase())||"";n={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp"}[c]||"application/octet-stream"}const a=new Blob([r],{type:n});return new File([a],e,{type:n})};export{b as u};