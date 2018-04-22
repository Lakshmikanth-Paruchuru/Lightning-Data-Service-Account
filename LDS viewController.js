({
	editRecord : function(component, event, helper) {
		component.set("v.renderVal",'editView');
	},
    deleteRecord : function(component,event,helper){
        component.set("v.renderVal",'delView');
    }
})