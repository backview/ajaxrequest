/*
 * Powered by Davide Baraldo (https://github.com/backview)
 * GitHub: https://github.com/backview/ajaxrequest
 * */

// Constructor
function Request(page, method, parameters, callback) {
  this.page = page;
  this.method = method;
  this.parameters = parameters;
  this.callback = callback;
}
// class methods
Request.prototype.send = function() {
	var xhttp = new XMLHttpRequest();
	if(this.method=="POST"){
		(function(callback){
			xhttp.onreadystatechange=function() {
			    if (this.readyState == 4 && this.status == 200) {
			    	callback(false, this.responseText);
			    }else if(this.readyState == 4 && this.status != 200){
			    	callback(true, this.status);
			    }
		  };
		})(this.callback);
	  var parameters_str = "";
	  for(var i = 0; i < this.parameters.length; i++){
	  	parameters_str = parameters_str + "&";
	  	parameters_str = parameters_str + this.parameters[i].name;
	  	parameters_str = parameters_str + "="+this.parameters[i].value;
	  }
	  xhttp.open("POST", this.page, true);
	  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  xhttp.send("cache=" +Date.now()+ encodeURI(parameters_str));
	}else if(this.method=="GET"){
		(function(callback){
			xhttp.onreadystatechange=function() {
			    if (this.readyState == 4 && this.status == 200) {
			    	callback(false, this.responseText);
			    }else if(this.readyState == 4 && this.status != 200){
			    	callback(true, this.status);
			    }
		  };
		})(this.callback);
	  var parameters_str = "";
	  for(var i = 0; i < this.parameters.length; i++){
	  	parameters_str = parameters_str + "&";
	  	parameters_str = parameters_str + this.parameters[i].name;
	  	parameters_str = parameters_str + "="+this.parameters[i].value;
	  }
	  xhttp.open("GET", this.page+"?cache=" +Date.now()+ encodeURI(parameters_str), true);
	  xhttp.send();
	}else{
		console.log("Error ... the type of the request is not valid.");
	}
};
// export the class
if (typeof exports === "object" && typeof module !== "undefined") {
  module.exports = Request;
}
// RequireJS
else if (typeof define === "function" && define.amd) {
  define(['Request'], Request);
}
else {
  var g;

  if (typeof window !== "undefined") {
    g = window;
  }
  else if (typeof global !== "undefined") {
    g = global;
  }
  else if (typeof self !== "undefined") {
    g = self;
  }

  g.Request = Request;
}