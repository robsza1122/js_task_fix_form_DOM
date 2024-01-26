document.querySelectorAll("input").forEach(function(e){var t=e.getAttribute("id"),l=e.getAttribute("name").replace(/([a-z])([A-Z])/g,"$1 $2"),a=document.createElement("label");a.textContent=l,a.className="field-label",a.setAttribute("for",t),e.after(a),e.placeholder=l.slice(0,1).toUpperCase()+l.slice(1)});
//# sourceMappingURL=index.8a8bfd8a.js.map
