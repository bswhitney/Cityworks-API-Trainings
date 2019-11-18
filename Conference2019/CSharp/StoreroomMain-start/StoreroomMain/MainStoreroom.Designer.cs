namespace StoreroomMain
{
    partial class MainStoreroom
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
            this.lbxMainStocks = new System.Windows.Forms.ListBox();
            this.rtbStockInfo = new System.Windows.Forms.RichTextBox();
            this.btnRefreshStocks = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.numTransferQuantity = new System.Windows.Forms.NumericUpDown();
            this.label1 = new System.Windows.Forms.Label();
            this.cboDestinationStoreroom = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.btnTransfer = new System.Windows.Forms.Button();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.btnReceive = new System.Windows.Forms.Button();
            this.numReceiveQuantity = new System.Windows.Forms.NumericUpDown();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.rtbCallbackNotes = new System.Windows.Forms.RichTextBox();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numTransferQuantity)).BeginInit();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numReceiveQuantity)).BeginInit();
            this.groupBox4.SuspendLayout();
            this.SuspendLayout();
            // 
            // lbxMainStocks
            // 
            this.lbxMainStocks.FormattingEnabled = true;
            this.lbxMainStocks.Location = new System.Drawing.Point(6, 19);
            this.lbxMainStocks.Name = "lbxMainStocks";
            this.lbxMainStocks.Size = new System.Drawing.Size(276, 121);
            this.lbxMainStocks.TabIndex = 0;
            this.lbxMainStocks.SelectedIndexChanged += new System.EventHandler(this.lbxMainStocks_SelectedIndexChanged);
            // 
            // rtbStockInfo
            // 
            this.rtbStockInfo.BackColor = System.Drawing.SystemColors.Control;
            this.rtbStockInfo.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.rtbStockInfo.Enabled = false;
            this.rtbStockInfo.Location = new System.Drawing.Point(6, 146);
            this.rtbStockInfo.Name = "rtbStockInfo";
            this.rtbStockInfo.Size = new System.Drawing.Size(197, 57);
            this.rtbStockInfo.TabIndex = 1;
            this.rtbStockInfo.Text = "";
            // 
            // btnRefreshStocks
            // 
            this.btnRefreshStocks.Location = new System.Drawing.Point(207, 146);
            this.btnRefreshStocks.Name = "btnRefreshStocks";
            this.btnRefreshStocks.Size = new System.Drawing.Size(75, 23);
            this.btnRefreshStocks.TabIndex = 2;
            this.btnRefreshStocks.Text = "Refresh";
            this.btnRefreshStocks.UseVisualStyleBackColor = true;
            this.btnRefreshStocks.Click += new System.EventHandler(this.btnRefreshStocks_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.lbxMainStocks);
            this.groupBox1.Controls.Add(this.btnRefreshStocks);
            this.groupBox1.Controls.Add(this.rtbStockInfo);
            this.groupBox1.Location = new System.Drawing.Point(12, 12);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(289, 209);
            this.groupBox1.TabIndex = 3;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Main Storeroom Stocks";
            // 
            // numTransferQuantity
            // 
            this.numTransferQuantity.Location = new System.Drawing.Point(73, 59);
            this.numTransferQuantity.Name = "numTransferQuantity";
            this.numTransferQuantity.Size = new System.Drawing.Size(160, 20);
            this.numTransferQuantity.TabIndex = 4;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(6, 35);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(63, 13);
            this.label1.TabIndex = 5;
            this.label1.Text = "Destination:";
            // 
            // cboDestinationStoreroom
            // 
            this.cboDestinationStoreroom.FormattingEnabled = true;
            this.cboDestinationStoreroom.Location = new System.Drawing.Point(73, 32);
            this.cboDestinationStoreroom.Name = "cboDestinationStoreroom";
            this.cboDestinationStoreroom.Size = new System.Drawing.Size(160, 21);
            this.cboDestinationStoreroom.TabIndex = 6;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(20, 61);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(49, 13);
            this.label2.TabIndex = 7;
            this.label2.Text = "Quantity:";
            // 
            // btnTransfer
            // 
            this.btnTransfer.Location = new System.Drawing.Point(158, 85);
            this.btnTransfer.Name = "btnTransfer";
            this.btnTransfer.Size = new System.Drawing.Size(75, 23);
            this.btnTransfer.TabIndex = 8;
            this.btnTransfer.Text = "Transfer";
            this.btnTransfer.UseVisualStyleBackColor = true;
            this.btnTransfer.Click += new System.EventHandler(this.btnTransfer_Click);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.label4);
            this.groupBox2.Controls.Add(this.label1);
            this.groupBox2.Controls.Add(this.btnTransfer);
            this.groupBox2.Controls.Add(this.cboDestinationStoreroom);
            this.groupBox2.Controls.Add(this.numTransferQuantity);
            this.groupBox2.Controls.Add(this.label2);
            this.groupBox2.Location = new System.Drawing.Point(308, 12);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(239, 116);
            this.groupBox2.TabIndex = 9;
            this.groupBox2.TabStop = false;
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.label5);
            this.groupBox3.Controls.Add(this.numReceiveQuantity);
            this.groupBox3.Controls.Add(this.label3);
            this.groupBox3.Controls.Add(this.btnReceive);
            this.groupBox3.Location = new System.Drawing.Point(308, 134);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(239, 87);
            this.groupBox3.TabIndex = 10;
            this.groupBox3.TabStop = false;
            // 
            // btnReceive
            // 
            this.btnReceive.Location = new System.Drawing.Point(158, 58);
            this.btnReceive.Name = "btnReceive";
            this.btnReceive.Size = new System.Drawing.Size(75, 23);
            this.btnReceive.TabIndex = 0;
            this.btnReceive.Text = "Receive";
            this.btnReceive.UseVisualStyleBackColor = true;
            this.btnReceive.Click += new System.EventHandler(this.btnReceive_Click);
            // 
            // numReceiveQuantity
            // 
            this.numReceiveQuantity.Location = new System.Drawing.Point(73, 32);
            this.numReceiveQuantity.Name = "numReceiveQuantity";
            this.numReceiveQuantity.Size = new System.Drawing.Size(160, 20);
            this.numReceiveQuantity.TabIndex = 9;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(20, 34);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(49, 13);
            this.label3.TabIndex = 10;
            this.label3.Text = "Quantity:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(6, 16);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(214, 13);
            this.label4.TabIndex = 9;
            this.label4.Text = "Transfer the selected material from MAIN to:";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(6, 16);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(200, 13);
            this.label5.TabIndex = 10;
            this.label5.Text = "Receive the selected material into MAIN:";
            // 
            // groupBox4
            // 
            this.groupBox4.Controls.Add(this.rtbCallbackNotes);
            this.groupBox4.Location = new System.Drawing.Point(554, 13);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(234, 208);
            this.groupBox4.TabIndex = 11;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "Callback Notes";
            // 
            // rtbCallbackNotes
            // 
            this.rtbCallbackNotes.BackColor = System.Drawing.SystemColors.Control;
            this.rtbCallbackNotes.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.rtbCallbackNotes.Enabled = false;
            this.rtbCallbackNotes.Location = new System.Drawing.Point(6, 19);
            this.rtbCallbackNotes.Name = "rtbCallbackNotes";
            this.rtbCallbackNotes.Size = new System.Drawing.Size(222, 183);
            this.rtbCallbackNotes.TabIndex = 3;
            this.rtbCallbackNotes.Text = "";
            // 
            // MainStoreroom
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 234);
            this.Controls.Add(this.groupBox4);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Name = "MainStoreroom";
            this.Text = "Main Storeroom Portal";
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.numTransferQuantity)).EndInit();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.groupBox3.ResumeLayout(false);
            this.groupBox3.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numReceiveQuantity)).EndInit();
            this.groupBox4.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.ListBox lbxMainStocks;
        private System.Windows.Forms.RichTextBox rtbStockInfo;
        private System.Windows.Forms.Button btnRefreshStocks;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.NumericUpDown numTransferQuantity;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ComboBox cboDestinationStoreroom;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnTransfer;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.NumericUpDown numReceiveQuantity;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btnReceive;
        private System.Windows.Forms.GroupBox groupBox4;
        private System.Windows.Forms.RichTextBox rtbCallbackNotes;
    }
}

