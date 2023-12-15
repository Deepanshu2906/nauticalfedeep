sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nauticalfe.controller.Home", {
            onInit: function () {

            },

            onPress: function() {
                
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutecreateVoyage");
                console.log("clicked");
            },
            onPress2: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBidCont");
            },
            onPress3: function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Routedashboard")
            }
        });
    });
