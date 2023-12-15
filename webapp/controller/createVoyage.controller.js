sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nauticalfe.controller.createVoyage", {
            onInit: function () {

            },

            populateInputField: function (inputField, selectedValue) {
                inputField.setValue(selectedValue);
            },
            showValueHelpDialog1: function () {
                // Create a dialog
                console.log("clicked voyage");
                var oDialog = new sap.m.Dialog({
                    title: "Select: Voyage Types",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,

                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Voyage Type" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Description" }),
                            }),
                        ],
                        // items: [
                        //     new sap.m.ColumnListItem({
                        //         cells: [
                        //             new sap.m.Text({ text: "1001" }),
                        //             new sap.m.Text({ text: "chater" }),
                        //         ],
                        //     }),

                        // Add more ColumnListItems as needed
                        // ],
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("_IDGenInput2"); // Input field for Voyage Type
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),

                });
                // var oModel = this.getView().getModel(); // Replace with your OData model reference
                var oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element

                // oValueHelpTable.setModel(oModel);

                oValueHelpTable.bindItems({
                    path: "/VoyTypeSet", // Replace with your entity set
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{Voycd}" }),
                            new sap.m.Text({ text: "{Voydes}" }),
                        ],
                    }),
                });
                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            showValueHelpDialog2: function () {
                // Create a dialog
                console.log("clicked Biding Type");
                var oDialog = new sap.m.Dialog({
                    title: "Select: Biding Types",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,

                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Biding Type" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Biding Description" }),
                            }),
                        ],
                        items: [
                            new sap.m.ColumnListItem({
                                cells: [
                                    new sap.m.Text({ text: "TB" }),
                                    new sap.m.Text({ text: "2 Bid System" }),
                                ],
                            }),
                            new sap.m.ColumnListItem({
                                cells: [
                                    new sap.m.Text({ text: "SB" }),
                                    new sap.m.Text({ text: "1 Bid System" }),
                                ],
                            })

                            // Add more ColumnListItems as needed
                        ],
                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("_IDGenInput3"); // Input field for Voyage Type
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),

                });
                // var oModel = this.getView().getModel(); // Replace with your OData model reference
                // var oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element

                // // oValueHelpTable.setModel(oModel);

                // oValueHelpTable.bindItems({
                //     path: "/VOYTYP", // Replace with your entity set
                //     template: new sap.m.ColumnListItem({
                //         cells: [
                //             new sap.m.Text({ text: "{VOYCD}" }),
                //             new sap.m.Text({ text: "{VOYDES}" }),
                //         ],
                //     }),
                // });
                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },

            //                                       CARGO VALUE HELP DIALOG SECTION
            showValueHelpDialog3: function () {
                // Create a dialog
                console.log("clicked cargo");
                var oDialog = new sap.m.Dialog({
                    title: "Select: Cargo Types",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,

                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Cargo Type" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Description" }),
                            }),
                        ],

                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("_IDGenInput4"); // Input field for Voyage Type
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),

                });
                // var oModel = this.getView().getModel(); // Replace with your OData model reference
                var oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element

                // oValueHelpTable.setModel(oModel);

                oValueHelpTable.bindItems({
                    path: "/CarTypeSet", // Replace with your entity set
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{Carcd}" }),
                            new sap.m.Text({ text: "{Cardes}" }),
                        ],
                    }),
                });
                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            showValueHelpDialog4: function () {
                // Create a dialog
                console.log("clicked Currency");
                var oDialog = new sap.m.Dialog({
                    title: "Select: Currency Types",
                    contentWidth: "60%",
                    contentHeight: "60%",
                    content: new sap.m.Table({
                        mode: sap.m.ListMode.SingleSelectMaster,

                        columns: [
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Currency Type" }),
                            }),
                            new sap.m.Column({
                                header: new sap.m.Text({ text: "Description" }),
                            }),
                        ],

                        selectionChange: function (oEvent) {
                            var oSelectedItem = oEvent.getParameter("listItem");
                            var oSelectedValue = oSelectedItem.getCells()[0].getText();
                            var inputVoyageType = this.getView().byId("_IDGenInput5"); // Input field for Voyage Type
                            this.populateInputField(inputVoyageType, oSelectedValue);
                            oDialog.close();
                        }.bind(this),
                    }),
                    beginButton: new sap.m.Button({
                        text: "Cancel",
                        type: "Reject",
                        press: function () {
                            oDialog.close();
                        },
                    }),

                });
                // var oModel = this.getView().getModel(); // Replace with your OData model reference
                var oValueHelpTable = oDialog.getContent()[0]; // Assuming the table is the first content element

                // oValueHelpTable.setModel(oModel);

                oValueHelpTable.bindItems({
                    path: "/CurTypeSet", // Replace with your entity set
                    template: new sap.m.ColumnListItem({
                        cells: [
                            new sap.m.Text({ text: "{Navoycur}" }),
                            new sap.m.Text({ text: "{Navoygcurdes}" }),
                        ],
                    }),
                });
                // Bind the dialog to the view
                this.getView().addDependent(oDialog);

                // Open the dialog
                oDialog.open();
            },
            
            onCreateVoyage: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
            },
            navToFreightSimulator: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView4");
            },
        });
    });
