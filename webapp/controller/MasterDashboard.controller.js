sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.MasterDashboard", {
        onInit() {
        },
        navToVoyageType: function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMasterVoyageType" ,{}, true)

        },
        navToVesselType: function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMasterVesselType")

        },
        navToCurrencyType: function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMasterCurrencyType")

        },
        navToClassMaster: function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMasterClassMaster");

        }
      });
    }
  );
  