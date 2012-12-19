
var HelloBonFranco = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloBonFranco.init()");

//			// attach an event to an HTML element
//			var self = this;
//			jQuery(".HelloBonFranco .myElementClass").click(function() {
//				self.myMethod();
//				// do something
//				...
//			});
		},
		
		myMethod: function() {
			alert("HelloBonFranco.myMethod()");
		}
		// no comma after last method
	};
}();

//jQuery(HelloBonFranco.init()); // Run after page loads