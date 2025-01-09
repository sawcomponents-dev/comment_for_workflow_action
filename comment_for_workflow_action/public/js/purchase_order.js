frappe.ui.form.on("Purchase Order", {
    before_workflow_action: async (frm) => {
        let promise = new Promise((resolve, reject) => {
            frappe.dom.unfreeze()
            if (frm.selected_workflow_action.trim().toLowerCase() == __("Change Needed").toLowerCase()) {
                var d = new frappe.ui.Dialog({
                    title: __("What needs to be changed?"),
                    fields: [
                        {
                            fieldname: "change_needed",
                            fieldtype: "Text",
                            reqd: 1,
                        },
                    ],
                    primary_action: function () {
                        var data = d.get_values();
                        let change_needed = __("What needs to be revised: ") + data.change_needed;
    
                        frappe.call({
                            method: "frappe.desk.form.utils.add_comment",
                            args: {
                                reference_doctype: frm.doctype,
                                reference_name: frm.docname,
                                content: __(change_needed),
                                comment_email: frappe.session.user,
                                comment_by: frappe.session.user_fullname,
                            },
                            callback: function (r) {
                                d.hide();
                                resolve();
                            },
                        });
                    },
                });
                d.show();
            } else if (frm.selected_workflow_action.trim().toLowerCase() == __("Reject").toLowerCase()) {
                var d = new frappe.ui.Dialog({
                    title: __("Reason for Rejection"),
                    fields: [
                        {
                            fieldname: "reason_for_reject",
                            fieldtype: "Text",
                            reqd: 1,
                        },
                    ],
                    primary_action: function () {
                        var data = d.get_values();
                        let reason_for_reject = __("Reason for Rejection: ") + data.reason_for_reject;
    
                        frappe.call({
                            method: "frappe.desk.form.utils.add_comment",
                            args: {
                                reference_doctype: frm.doctype,
                                reference_name: frm.docname,
                                content: __(reason_for_reject),
                                comment_email: frappe.session.user,
                                comment_by: frappe.session.user_fullname,
                            },
                            callback: function (r) {
                                d.hide();
                                resolve();
                            },
                        });
                    },
                });
                d.show();
            } else if (frm.selected_workflow_action.trim().toLowerCase() == __("Change from Purchase Needed").toLowerCase()) {
                var d = new frappe.ui.Dialog({
                    title: __("What needs to be changed?"),
                    fields: [
                        {
                            fieldname: "reason_for_reject",
                            fieldtype: "Text",
                            reqd: 1,
                        },
                    ],
                    primary_action: function () {
                        var data = d.get_values();
                        let reason_for_reject = __("What needs to be change:") + data.reason_for_reject;
    
                        frappe.call({
                            method: "frappe.desk.form.utils.add_comment",
                            args: {
                                reference_doctype: frm.doctype,
                                reference_name: frm.docname,
                                content: __(reason_for_reject),
                                comment_email: frappe.session.user,
                                comment_by: frappe.session.user_fullname,
                            },
                            callback: function (r) {
                                d.hide();
                                resolve();
                            },
                        });
                    },
                });
                d.show();
            } else if (frm.selected_workflow_action.trim().toLowerCase() == __("Change Form Orderer Needed").toLowerCase()) {
                var d = new frappe.ui.Dialog({
                    title: __("What needs to be changed?"),
                    fields: [
                        {
                            fieldname: "reason_for_reject",
                            fieldtype: "Text",
                            reqd: 1,
                        },
                    ],
                    primary_action: function () {
                        var data = d.get_values();
                        let reason_for_reject = __("What needs to be change:") + data.reason_for_reject;
    
                        frappe.call({
                            method: "frappe.desk.form.utils.add_comment",
                            args: {
                                reference_doctype: frm.doctype,
                                reference_name: frm.docname,
                                content: __(reason_for_reject),
                                comment_email: frappe.session.user,
                                comment_by: frappe.session.user_fullname,
                            },
                            callback: function (r) {
                                d.hide();
                                resolve();
                            },
                        });
                    },
                });
                d.show();
            } else {
                resolve();
            }
    	});
    	await promise.catch(() => {});
    }
})