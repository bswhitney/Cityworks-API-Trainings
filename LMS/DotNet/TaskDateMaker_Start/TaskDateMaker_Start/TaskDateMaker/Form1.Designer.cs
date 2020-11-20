namespace TaskDateMaker
{
    partial class Form1
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
            this.label1 = new System.Windows.Forms.Label();
            this.txtLoginName = new System.Windows.Forms.TextBox();
            this.grpAuthenticate = new System.Windows.Forms.GroupBox();
            this.btnLogIn = new System.Windows.Forms.Button();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.grpMainFunctionality = new System.Windows.Forms.GroupBox();
            this.btnUpdateAll = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.calFinishDate = new System.Windows.Forms.DateTimePicker();
            this.label4 = new System.Windows.Forms.Label();
            this.calStartDate = new System.Windows.Forms.DateTimePicker();
            this.label3 = new System.Windows.Forms.Label();
            this.rdbManualDate = new System.Windows.Forms.RadioButton();
            this.rdbWorkOrderDate = new System.Windows.Forms.RadioButton();
            this.rtbTaskDetails = new System.Windows.Forms.RichTextBox();
            this.lstTasks = new System.Windows.Forms.ListBox();
            this.rtbLog = new System.Windows.Forms.RichTextBox();
            this.grpLog = new System.Windows.Forms.GroupBox();
            this.btnClearLog = new System.Windows.Forms.Button();
            this.grpAuthenticate.SuspendLayout();
            this.grpMainFunctionality.SuspendLayout();
            this.grpLog.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(6, 26);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(64, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "LoginName:";
            // 
            // txtLoginName
            // 
            this.txtLoginName.Location = new System.Drawing.Point(76, 23);
            this.txtLoginName.Name = "txtLoginName";
            this.txtLoginName.Size = new System.Drawing.Size(100, 20);
            this.txtLoginName.TabIndex = 1;
            this.txtLoginName.Text = "cwadmin";
            // 
            // grpAuthenticate
            // 
            this.grpAuthenticate.Controls.Add(this.btnLogIn);
            this.grpAuthenticate.Controls.Add(this.txtPassword);
            this.grpAuthenticate.Controls.Add(this.label2);
            this.grpAuthenticate.Controls.Add(this.txtLoginName);
            this.grpAuthenticate.Controls.Add(this.label1);
            this.grpAuthenticate.Location = new System.Drawing.Point(12, 12);
            this.grpAuthenticate.Name = "grpAuthenticate";
            this.grpAuthenticate.Size = new System.Drawing.Size(560, 54);
            this.grpAuthenticate.TabIndex = 2;
            this.grpAuthenticate.TabStop = false;
            this.grpAuthenticate.Text = "User Authentication";
            // 
            // btnLogIn
            // 
            this.btnLogIn.Location = new System.Drawing.Point(479, 21);
            this.btnLogIn.Name = "btnLogIn";
            this.btnLogIn.Size = new System.Drawing.Size(75, 23);
            this.btnLogIn.TabIndex = 4;
            this.btnLogIn.Text = "Log In";
            this.btnLogIn.UseVisualStyleBackColor = true;
            this.btnLogIn.Click += new System.EventHandler(this.btnLogIn_Click);
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(244, 23);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.PasswordChar = '*';
            this.txtPassword.Size = new System.Drawing.Size(100, 20);
            this.txtPassword.TabIndex = 3;
            this.txtPassword.Text = "Training1";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(182, 26);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(56, 13);
            this.label2.TabIndex = 2;
            this.label2.Text = "Password:";
            // 
            // grpMainFunctionality
            // 
            this.grpMainFunctionality.Controls.Add(this.btnUpdateAll);
            this.grpMainFunctionality.Controls.Add(this.label5);
            this.grpMainFunctionality.Controls.Add(this.calFinishDate);
            this.grpMainFunctionality.Controls.Add(this.label4);
            this.grpMainFunctionality.Controls.Add(this.calStartDate);
            this.grpMainFunctionality.Controls.Add(this.label3);
            this.grpMainFunctionality.Controls.Add(this.rdbManualDate);
            this.grpMainFunctionality.Controls.Add(this.rdbWorkOrderDate);
            this.grpMainFunctionality.Controls.Add(this.rtbTaskDetails);
            this.grpMainFunctionality.Controls.Add(this.lstTasks);
            this.grpMainFunctionality.Enabled = false;
            this.grpMainFunctionality.Location = new System.Drawing.Point(12, 72);
            this.grpMainFunctionality.Name = "grpMainFunctionality";
            this.grpMainFunctionality.Size = new System.Drawing.Size(301, 295);
            this.grpMainFunctionality.TabIndex = 3;
            this.grpMainFunctionality.TabStop = false;
            this.grpMainFunctionality.Text = "Action Panel";
            // 
            // btnUpdateAll
            // 
            this.btnUpdateAll.Location = new System.Drawing.Point(220, 266);
            this.btnUpdateAll.Name = "btnUpdateAll";
            this.btnUpdateAll.Size = new System.Drawing.Size(75, 23);
            this.btnUpdateAll.TabIndex = 10;
            this.btnUpdateAll.Text = "Update All";
            this.btnUpdateAll.UseVisualStyleBackColor = true;
            this.btnUpdateAll.Click += new System.EventHandler(this.btnUpdateAll_Click);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(31, 244);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(63, 13);
            this.label5.TabIndex = 9;
            this.label5.Text = "Finish Date:";
            // 
            // calFinishDate
            // 
            this.calFinishDate.Enabled = false;
            this.calFinishDate.Location = new System.Drawing.Point(95, 240);
            this.calFinishDate.Name = "calFinishDate";
            this.calFinishDate.Size = new System.Drawing.Size(200, 20);
            this.calFinishDate.TabIndex = 8;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(31, 218);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(58, 13);
            this.label4.TabIndex = 7;
            this.label4.Text = "Start Date:";
            // 
            // calStartDate
            // 
            this.calStartDate.Enabled = false;
            this.calStartDate.Location = new System.Drawing.Point(95, 214);
            this.calStartDate.Name = "calStartDate";
            this.calStartDate.Size = new System.Drawing.Size(200, 20);
            this.calStartDate.TabIndex = 6;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(9, 149);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(266, 13);
            this.label3.TabIndex = 5;
            this.label3.Text = "Select an option to use for actual start and finish dates:";
            // 
            // rdbManualDate
            // 
            this.rdbManualDate.AutoSize = true;
            this.rdbManualDate.Location = new System.Drawing.Point(9, 191);
            this.rdbManualDate.Name = "rdbManualDate";
            this.rdbManualDate.Size = new System.Drawing.Size(90, 17);
            this.rdbManualDate.TabIndex = 4;
            this.rdbManualDate.Text = "Manual Entry:";
            this.rdbManualDate.UseVisualStyleBackColor = true;
            // 
            // rdbWorkOrderDate
            // 
            this.rdbWorkOrderDate.AutoSize = true;
            this.rdbWorkOrderDate.Checked = true;
            this.rdbWorkOrderDate.Location = new System.Drawing.Point(9, 168);
            this.rdbWorkOrderDate.Name = "rdbWorkOrderDate";
            this.rdbWorkOrderDate.Size = new System.Drawing.Size(279, 17);
            this.rdbWorkOrderDate.TabIndex = 3;
            this.rdbWorkOrderDate.TabStop = true;
            this.rdbWorkOrderDate.Text = "Use Work Order\'s ProjStartDate and ActualFinishDate";
            this.rdbWorkOrderDate.UseVisualStyleBackColor = true;
            this.rdbWorkOrderDate.CheckedChanged += new System.EventHandler(this.rdbWorkOrderDate_CheckedChanged);
            // 
            // rtbTaskDetails
            // 
            this.rtbTaskDetails.Enabled = false;
            this.rtbTaskDetails.Location = new System.Drawing.Point(84, 19);
            this.rtbTaskDetails.Name = "rtbTaskDetails";
            this.rtbTaskDetails.Size = new System.Drawing.Size(211, 121);
            this.rtbTaskDetails.TabIndex = 2;
            this.rtbTaskDetails.Text = "";
            // 
            // lstTasks
            // 
            this.lstTasks.FormattingEnabled = true;
            this.lstTasks.Location = new System.Drawing.Point(6, 19);
            this.lstTasks.Name = "lstTasks";
            this.lstTasks.Size = new System.Drawing.Size(72, 121);
            this.lstTasks.TabIndex = 0;
            this.lstTasks.SelectedIndexChanged += new System.EventHandler(this.lstTasks_SelectedIndexChanged);
            // 
            // rtbLog
            // 
            this.rtbLog.Location = new System.Drawing.Point(6, 19);
            this.rtbLog.Name = "rtbLog";
            this.rtbLog.Size = new System.Drawing.Size(241, 241);
            this.rtbLog.TabIndex = 0;
            this.rtbLog.Text = "";
            // 
            // grpLog
            // 
            this.grpLog.Controls.Add(this.btnClearLog);
            this.grpLog.Controls.Add(this.rtbLog);
            this.grpLog.Location = new System.Drawing.Point(319, 72);
            this.grpLog.Name = "grpLog";
            this.grpLog.Size = new System.Drawing.Size(253, 295);
            this.grpLog.TabIndex = 4;
            this.grpLog.TabStop = false;
            this.grpLog.Text = "Log";
            // 
            // btnClearLog
            // 
            this.btnClearLog.Location = new System.Drawing.Point(172, 266);
            this.btnClearLog.Name = "btnClearLog";
            this.btnClearLog.Size = new System.Drawing.Size(75, 23);
            this.btnClearLog.TabIndex = 1;
            this.btnClearLog.Text = "Clear Log";
            this.btnClearLog.UseVisualStyleBackColor = true;
            this.btnClearLog.Click += new System.EventHandler(this.btnClearLog_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(589, 381);
            this.Controls.Add(this.grpLog);
            this.Controls.Add(this.grpMainFunctionality);
            this.Controls.Add(this.grpAuthenticate);
            this.Name = "Form1";
            this.Text = "Cityworks Work Order Task Updater";
            this.grpAuthenticate.ResumeLayout(false);
            this.grpAuthenticate.PerformLayout();
            this.grpMainFunctionality.ResumeLayout(false);
            this.grpMainFunctionality.PerformLayout();
            this.grpLog.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtLoginName;
        private System.Windows.Forms.GroupBox grpAuthenticate;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.GroupBox grpMainFunctionality;
        private System.Windows.Forms.Button btnLogIn;
        private System.Windows.Forms.ListBox lstTasks;
        private System.Windows.Forms.RichTextBox rtbLog;
        private System.Windows.Forms.GroupBox grpLog;
        private System.Windows.Forms.Button btnClearLog;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.DateTimePicker calStartDate;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.RadioButton rdbManualDate;
        private System.Windows.Forms.RadioButton rdbWorkOrderDate;
        private System.Windows.Forms.RichTextBox rtbTaskDetails;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.DateTimePicker calFinishDate;
        private System.Windows.Forms.Button btnUpdateAll;
    }
}

