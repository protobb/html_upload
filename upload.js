unction uploadPic() { 
var form = document.getElementById('upload'), 
formData = new FormData(form); 
$.ajax({ 
url:"https://sscpre.boe.com/v1/medical-console/medical/file/upload", 
type:"post", 
data:formData, 
processData:false, 
contentType:false, 
success:function(res){ 
if(res){ 
alert("上傳成功！"); 
} 
console.log(res); 
$("#pic").val(""); 
$(".showUrl").html(res); 
$(".showPic").attr("src",res); 
}, 
error:function(err){ 
alert("網路連線失敗,稍後重試",err); 
} 
}) 
} 
