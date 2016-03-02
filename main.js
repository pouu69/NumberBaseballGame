var BB = {};
BB.Controller = Controller || {};
BB.Model = Model || {};
BB.View = View || {};

window.onload = function(){
	var model = BB.Model();
	var numberViews = BB.View('number',true);
	var controller = BB.Controller(model, numberViews);

	controller1.initialize();

	document.getElementById("myBtn").addEventListener("click", function(){
		var ret = controller1.execute();
		numberViews.renderResult(ret);
	});
}