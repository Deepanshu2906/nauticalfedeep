sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.Dashboard", {
        onInit() {
        },
        
           
            TransData: function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("TransView")
            },
            MasterData: function(){
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMasterDashboard")
            }
      });
    }
  );
  