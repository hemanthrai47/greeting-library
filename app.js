var greeter = G$("hemanth","Rai",)

$('#login').click(function(){
    $('#loginDiv').hide()
    greeter.setLang($('#lng').val()).HTMLgreeting('#greeting',"formal").log()
})


