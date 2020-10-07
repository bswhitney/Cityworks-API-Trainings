namespace Examples
{
    partial class WoForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.listBoxWorkOrders = new System.Windows.Forms.ListBox();
            this.labelTitle = new System.Windows.Forms.Label();
            this.buttonRefreshWorkOrders = new System.Windows.Forms.Button();
            this.comboBoxWoEntityType = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.comboBoxWoTemplateId = new System.Windows.Forms.ComboBox();
            this.textBoxWoNotes = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.buttonCreateWorkOrder = new System.Windows.Forms.Button();
            this.comboBoxSubmitTo = new System.Windows.Forms.ComboBox();
            this.textBoxInspectionId = new System.Windows.Forms.TextBox();
            this.labelInspectionIds = new System.Windows.Forms.Label();
            this.listBoxInspections = new System.Windows.Forms.ListBox();
            this.label6 = new System.Windows.Forms.Label();
            this.buttonRefreshInspections = new System.Windows.Forms.Button();
            this.notifyIcon1 = new System.Windows.Forms.NotifyIcon(this.components);
            this.buttonAddInspectionToWorkOrder = new System.Windows.Forms.Button();
            this.richTextBoxCallbackNotes = new System.Windows.Forms.RichTextBox();
            this.labelCallbackNotes = new System.Windows.Forms.Label();
            this.buttonRefreshSRs = new System.Windows.Forms.Button();
            this.label7 = new System.Windows.Forms.Label();
            this.listBoxServiceRequests = new System.Windows.Forms.ListBox();
            this.inspRichTextBox = new System.Windows.Forms.RichTextBox();
            this.requestsRichTextBox = new System.Windows.Forms.RichTextBox();
            this.workOrderRichTextBox = new System.Windows.Forms.RichTextBox();
            this.SuspendLayout();
            // 
            // listBoxWorkOrders
            // 
            this.listBoxWorkOrders.FormattingEnabled = true;
            this.listBoxWorkOrders.Location = new System.Drawing.Point(66, 272);
            this.listBoxWorkOrders.Name = "listBoxWorkOrders";
            this.listBoxWorkOrders.Size = new System.Drawing.Size(195, 108);
            this.listBoxWorkOrders.TabIndex = 0;
            this.listBoxWorkOrders.SelectedIndexChanged += new System.EventHandler(this.listBoxWorkOrders_SelectedIndexChanged);
            // 
            // labelTitle
            // 
            this.labelTitle.AutoSize = true;
            this.labelTitle.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.labelTitle.Location = new System.Drawing.Point(47, 245);
            this.labelTitle.Name = "labelTitle";
            this.labelTitle.Size = new System.Drawing.Size(164, 24);
            this.labelTitle.TabIndex = 1;
            this.labelTitle.Text = "View Work Orders";
            // 
            // buttonRefreshWorkOrders
            // 
            this.buttonRefreshWorkOrders.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.buttonRefreshWorkOrders.Location = new System.Drawing.Point(66, 386);
            this.buttonRefreshWorkOrders.Name = "buttonRefreshWorkOrders";
            this.buttonRefreshWorkOrders.Size = new System.Drawing.Size(143, 41);
            this.buttonRefreshWorkOrders.TabIndex = 2;
            this.buttonRefreshWorkOrders.Text = "Refresh Work Orders";
            this.buttonRefreshWorkOrders.UseVisualStyleBackColor = true;
            this.buttonRefreshWorkOrders.Click += new System.EventHandler(this.buttonRefreshWorkOrders_Click);
            // 
            // comboBoxWoEntityType
            // 
            this.comboBoxWoEntityType.FormattingEnabled = true;
            this.comboBoxWoEntityType.Location = new System.Drawing.Point(103, 55);
            this.comboBoxWoEntityType.Name = "comboBoxWoEntityType";
            this.comboBoxWoEntityType.Size = new System.Drawing.Size(136, 21);
            this.comboBoxWoEntityType.TabIndex = 3;
            this.comboBoxWoEntityType.SelectedIndexChanged += new System.EventHandler(this.comboBoxWoEntityType_SelectedIndexChanged);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.label1.Location = new System.Drawing.Point(46, 18);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(168, 24);
            this.label1.TabIndex = 4;
            this.label1.Text = "Create Work Order";
            // 
            // comboBoxWoTemplateId
            // 
            this.comboBoxWoTemplateId.FormattingEnabled = true;
            this.comboBoxWoTemplateId.Location = new System.Drawing.Point(103, 82);
            this.comboBoxWoTemplateId.Name = "comboBoxWoTemplateId";
            this.comboBoxWoTemplateId.Size = new System.Drawing.Size(136, 21);
            this.comboBoxWoTemplateId.TabIndex = 5;
            // 
            // textBoxWoNotes
            // 
            this.textBoxWoNotes.Location = new System.Drawing.Point(103, 109);
            this.textBoxWoNotes.Name = "textBoxWoNotes";
            this.textBoxWoNotes.Size = new System.Drawing.Size(121, 20);
            this.textBoxWoNotes.TabIndex = 9;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(37, 55);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(60, 13);
            this.label2.TabIndex = 10;
            this.label2.Text = "Entity Type";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(34, 85);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(63, 13);
            this.label3.TabIndex = 11;
            this.label3.Text = "Template Id";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(63, 112);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(35, 13);
            this.label4.TabIndex = 12;
            this.label4.Text = "Notes";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(42, 138);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(55, 13);
            this.label5.TabIndex = 13;
            this.label5.Text = "Submit To";
            // 
            // buttonCreateWorkOrder
            // 
            this.buttonCreateWorkOrder.Location = new System.Drawing.Point(103, 188);
            this.buttonCreateWorkOrder.Name = "buttonCreateWorkOrder";
            this.buttonCreateWorkOrder.Size = new System.Drawing.Size(75, 23);
            this.buttonCreateWorkOrder.TabIndex = 14;
            this.buttonCreateWorkOrder.Text = "Create";
            this.buttonCreateWorkOrder.UseVisualStyleBackColor = true;
            this.buttonCreateWorkOrder.Click += new System.EventHandler(this.buttonCreateWorkOrder_Click);
            // 
            // comboBoxSubmitTo
            // 
            this.comboBoxSubmitTo.FormattingEnabled = true;
            this.comboBoxSubmitTo.Location = new System.Drawing.Point(103, 135);
            this.comboBoxSubmitTo.Name = "comboBoxSubmitTo";
            this.comboBoxSubmitTo.Size = new System.Drawing.Size(121, 21);
            this.comboBoxSubmitTo.TabIndex = 15;
            // 
            // textBoxInspectionId
            // 
            this.textBoxInspectionId.Location = new System.Drawing.Point(103, 162);
            this.textBoxInspectionId.Name = "textBoxInspectionId";
            this.textBoxInspectionId.Size = new System.Drawing.Size(121, 20);
            this.textBoxInspectionId.TabIndex = 17;
            // 
            // labelInspectionIds
            // 
            this.labelInspectionIds.AutoSize = true;
            this.labelInspectionIds.Location = new System.Drawing.Point(29, 165);
            this.labelInspectionIds.Name = "labelInspectionIds";
            this.labelInspectionIds.Size = new System.Drawing.Size(68, 13);
            this.labelInspectionIds.TabIndex = 18;
            this.labelInspectionIds.Text = "Inspection Id";
            // 
            // listBoxInspections
            // 
            this.listBoxInspections.FormattingEnabled = true;
            this.listBoxInspections.Location = new System.Drawing.Point(65, 533);
            this.listBoxInspections.Name = "listBoxInspections";
            this.listBoxInspections.Size = new System.Drawing.Size(196, 108);
            this.listBoxInspections.TabIndex = 19;
            this.listBoxInspections.SelectedIndexChanged += new System.EventHandler(this.listBoxInspections_SelectedIndexChanged);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.label6.Location = new System.Drawing.Point(46, 506);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(152, 24);
            this.label6.TabIndex = 20;
            this.label6.Text = "View Inspections";
            // 
            // buttonRefreshInspections
            // 
            this.buttonRefreshInspections.Location = new System.Drawing.Point(65, 647);
            this.buttonRefreshInspections.Name = "buttonRefreshInspections";
            this.buttonRefreshInspections.Size = new System.Drawing.Size(75, 35);
            this.buttonRefreshInspections.TabIndex = 21;
            this.buttonRefreshInspections.Text = "Refresh Inspections";
            this.buttonRefreshInspections.UseVisualStyleBackColor = true;
            this.buttonRefreshInspections.Click += new System.EventHandler(this.buttonRefreshInspections_Click);
            // 
            // notifyIcon1
            // 
            this.notifyIcon1.Text = "notifyIcon1";
            this.notifyIcon1.Visible = true;
            // 
            // buttonAddInspectionToWorkOrder
            // 
            this.buttonAddInspectionToWorkOrder.Location = new System.Drawing.Point(155, 647);
            this.buttonAddInspectionToWorkOrder.Name = "buttonAddInspectionToWorkOrder";
            this.buttonAddInspectionToWorkOrder.Size = new System.Drawing.Size(97, 35);
            this.buttonAddInspectionToWorkOrder.TabIndex = 23;
            this.buttonAddInspectionToWorkOrder.Text = "Add to selected Work Order";
            this.buttonAddInspectionToWorkOrder.UseVisualStyleBackColor = true;
            this.buttonAddInspectionToWorkOrder.Click += new System.EventHandler(this.buttonAddInspectionToWorkOrder_Click);
            // 
            // richTextBoxCallbackNotes
            // 
            this.richTextBoxCallbackNotes.Location = new System.Drawing.Point(303, 36);
            this.richTextBoxCallbackNotes.Name = "richTextBoxCallbackNotes";
            this.richTextBoxCallbackNotes.ReadOnly = true;
            this.richTextBoxCallbackNotes.Size = new System.Drawing.Size(232, 199);
            this.richTextBoxCallbackNotes.TabIndex = 25;
            this.richTextBoxCallbackNotes.Text = "";
            // 
            // labelCallbackNotes
            // 
            this.labelCallbackNotes.AutoSize = true;
            this.labelCallbackNotes.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.labelCallbackNotes.Location = new System.Drawing.Point(352, 9);
            this.labelCallbackNotes.Name = "labelCallbackNotes";
            this.labelCallbackNotes.Size = new System.Drawing.Size(135, 24);
            this.labelCallbackNotes.TabIndex = 26;
            this.labelCallbackNotes.Text = "Callback Notes";
            // 
            // buttonRefreshSRs
            // 
            this.buttonRefreshSRs.Location = new System.Drawing.Point(66, 848);
            this.buttonRefreshSRs.Name = "buttonRefreshSRs";
            this.buttonRefreshSRs.Size = new System.Drawing.Size(101, 35);
            this.buttonRefreshSRs.TabIndex = 29;
            this.buttonRefreshSRs.Text = "Refresh Service Requests";
            this.buttonRefreshSRs.UseVisualStyleBackColor = true;
            this.buttonRefreshSRs.Click += new System.EventHandler(this.buttonRefreshSRs_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 14F);
            this.label7.Location = new System.Drawing.Point(47, 707);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(204, 24);
            this.label7.TabIndex = 28;
            this.label7.Text = "View Service Requests";
            // 
            // listBoxServiceRequests
            // 
            this.listBoxServiceRequests.FormattingEnabled = true;
            this.listBoxServiceRequests.Location = new System.Drawing.Point(66, 734);
            this.listBoxServiceRequests.Name = "listBoxServiceRequests";
            this.listBoxServiceRequests.Size = new System.Drawing.Size(195, 108);
            this.listBoxServiceRequests.TabIndex = 27;
            this.listBoxServiceRequests.SelectedIndexChanged += new System.EventHandler(this.listBoxServiceRequests_SelectedIndexChanged);
            // 
            // inspRichTextBox
            // 
            this.inspRichTextBox.Location = new System.Drawing.Point(280, 533);
            this.inspRichTextBox.Name = "inspRichTextBox";
            this.inspRichTextBox.Size = new System.Drawing.Size(144, 108);
            this.inspRichTextBox.TabIndex = 30;
            this.inspRichTextBox.Text = "";
            // 
            // requestsRichTextBox
            // 
            this.requestsRichTextBox.Location = new System.Drawing.Point(280, 734);
            this.requestsRichTextBox.Name = "requestsRichTextBox";
            this.requestsRichTextBox.Size = new System.Drawing.Size(144, 108);
            this.requestsRichTextBox.TabIndex = 31;
            this.requestsRichTextBox.Text = "";
            // 
            // workOrderRichTextBox
            // 
            this.workOrderRichTextBox.Location = new System.Drawing.Point(280, 272);
            this.workOrderRichTextBox.Name = "workOrderRichTextBox";
            this.workOrderRichTextBox.Size = new System.Drawing.Size(144, 108);
            this.workOrderRichTextBox.TabIndex = 32;
            this.workOrderRichTextBox.Text = "";
            // 
            // WoForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1103, 971);
            this.Controls.Add(this.workOrderRichTextBox);
            this.Controls.Add(this.requestsRichTextBox);
            this.Controls.Add(this.inspRichTextBox);
            this.Controls.Add(this.buttonRefreshSRs);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.listBoxServiceRequests);
            this.Controls.Add(this.labelCallbackNotes);
            this.Controls.Add(this.richTextBoxCallbackNotes);
            this.Controls.Add(this.buttonAddInspectionToWorkOrder);
            this.Controls.Add(this.buttonRefreshInspections);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.listBoxInspections);
            this.Controls.Add(this.labelInspectionIds);
            this.Controls.Add(this.textBoxInspectionId);
            this.Controls.Add(this.comboBoxSubmitTo);
            this.Controls.Add(this.buttonCreateWorkOrder);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.textBoxWoNotes);
            this.Controls.Add(this.comboBoxWoTemplateId);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.comboBoxWoEntityType);
            this.Controls.Add(this.buttonRefreshWorkOrders);
            this.Controls.Add(this.labelTitle);
            this.Controls.Add(this.listBoxWorkOrders);
            this.Name = "WoForm";
            this.Text = "Cityworks API";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ListBox listBoxWorkOrders;
        private System.Windows.Forms.Label labelTitle;
        private System.Windows.Forms.Button buttonRefreshWorkOrders;
        private System.Windows.Forms.ComboBox comboBoxWoEntityType;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ComboBox comboBoxWoTemplateId;
        private System.Windows.Forms.TextBox textBoxWoNotes;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button buttonCreateWorkOrder;
        private System.Windows.Forms.ComboBox comboBoxSubmitTo;
        private System.Windows.Forms.TextBox textBoxInspectionId;
        private System.Windows.Forms.Label labelInspectionIds;
        private System.Windows.Forms.ListBox listBoxInspections;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Button buttonRefreshInspections;
        private System.Windows.Forms.NotifyIcon notifyIcon1;
        private System.Windows.Forms.Button buttonAddInspectionToWorkOrder;
        private System.Windows.Forms.RichTextBox richTextBoxCallbackNotes;
        private System.Windows.Forms.Label labelCallbackNotes;
        private System.Windows.Forms.Button buttonRefreshSRs;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.ListBox listBoxServiceRequests;
        private System.Windows.Forms.RichTextBox inspRichTextBox;
        private System.Windows.Forms.RichTextBox requestsRichTextBox;
        private System.Windows.Forms.RichTextBox workOrderRichTextBox;
    }
}

