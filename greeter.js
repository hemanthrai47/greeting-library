(function(global,$){

    var Greeter = function(firstName,lastName,Language){
        return new Greeter.init(firstName,lastName,Language)
    }
    var supportedlanguages = ["eng","es"];
    var greetings = {
        eng : "hi",
        es : "hoi"
    }
    var formalGreetings = {
        eng : 'hello',
        es : 'hola'
    }
    var logMessages = {
        eng : 'logged in',
        es : 'iniciao sesion'
    }

    Greeter.prototype = {
        fullName : function(){
            return this.firstName + " " + this.lastName;
        },
        validate : function(){
           if(supportedlanguages.indexOf(this.Language) === -1){
               throw "invalid language"
           } 
        },
        greeting : function(){
            return greetings[this.Language] + " " + this.firstName
        },
        formalGreetings : function(){
            return formalGreetings[this.Language] + " " + this.fullName()
        },
        greet : function(formal){
            var msg;
            if(formal){
                msg = this.formalGreetings()
            }else{
                msg = this.greeting()
            }
            if(console){
                console.log(msg)
            }

            return this;

        },
        log : function(){
            if(console){
                console.log(logMessages[this.Language] + ": " + this.firstName) 
            }
            return this;
        },
        setLang : function(lang){
            this.Language = lang;
            this.validate();
            return this;
        },
        HTMLgreeting : function(selector,formal){
            if(!$){
                throw "jquerry not difined"
            }
            else if(!selector){
                throw 'missing JQuerry selector'
            }
            var msg;
            if(formal){
               msg =  this.formalGreetings();
            }else{
                msg = this.greeting();
            }
            $(selector).html(msg)
            return this;
        }

    }
    Greeter.init = function(firstName,lastName,Language){
        var self = this;
        self.firstName = firstName || " ";
        self.lastName = lastName || " ";
        self.Language = Language || 'eng'
    }
    Greeter.init.prototype = Greeter.prototype;
    global.greeter = G$ = Greeter;
})(window,$)