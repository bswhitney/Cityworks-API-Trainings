using System;
using System.Collections.Generic;
using System.Windows.Forms;
// After adding Cityworks SDK references, add a using statement here.
using Cityworks.Core;

namespace TaskDateMaker
{
    public partial class Form1 : Form
    {
        #region Initialization and Authentication
        // Initialize the Services Object.
        static string siteAddress = "https://training.cityworks.com/cityworks/";
        private Services services;

        public Form1()
        {
            InitializeComponent();
            // Add Cityworks Address to Services Object.
            Uri site = new Uri(siteAddress);
            services = new Services { Url = site };
        }

        private void btnLogIn_Click(object sender, EventArgs e)
        {
            // Set up the Authenticate request object.
            AuthenticationService.Authenticate authenticate = new AuthenticationService.Authenticate();
            // Add in all needed parameters (LoginName, Password).
            authenticate.LoginName = txtLoginName.Text;
            authenticate.Password = txtPassword.Text;
            // Make the Authenticate API call and set a callback function.
            services.General.Authentication(authenticate, AuthenticateCallback);
        }

        private void AuthenticateCallback(AuthenticationService.AuthenticateResponse response)
        {
            // Check the Status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Redefine the services object with the new token.
                services = new Services { Url = new Uri(siteAddress), AuthToken = response.Value };
                // Call the function that toggles enabled status and kicks off searches.
                LoadFormProcesses();
                // Inform the user that they have been signed in.
                rtbLog.Text += $"You have been signed in as {txtLoginName.Text.ToUpper()}.\n";
            }
            // If the response is bad...
            else
            {
                // Inform the user that they need to try again.
                rtbLog.Text += "Invalid credentials. Please try again.\n";
            }
        }
        #endregion

        #region Search for Tasks on Closed Work Orders
        private void WorkOrderSearch()
        {
            // Set up the Search request object.
            WorkOrderService.Search search = new WorkOrderService.Search();
            // Add in all needed parameters (Status).
            search.Status = new List<string> { "Closed" };
            // Make the Search API call and set a callback function.
            services.AMS.WorkOrder(search, TasksByWorkOrder);            
        }

        private void TasksByWorkOrder(WorkOrderService.SearchResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Set up the ByWorkOrder request object.
                TasksService.ByWorkOrder byWorkOrder = new TasksService.ByWorkOrder();
                // Add in all needed parameters (WorkOrderIds).
                byWorkOrder.WorkOrderIds = response.Value;
                // Make the ByWorkOrder API call and set a callback function.
                services.AMS.Tasks(byWorkOrder, TasksByWorkOrderCallback);
            }
            // If the response is bad...
            else
            {
                // Inform the user that the Search API call failed.
                rtbLog.Text += "Failed to search for work orders.\n";
            }
        }

        private void TasksByWorkOrderCallback(TasksService.ByWorkOrderResponse response)
        {
            // Set up a DateTime object that has the value of a blank date in Cityworks.
            DateTime blankDate = new DateTime(0001, 1, 1, 0, 0, 0);
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Set up a blank list for WOTask objects that have a blank ActFinishDate or ActStartDate.
                List<WOTask> datelessTasks = new List<WOTask>();
                // Iterate through the list of returned tasks and add any with bad dates to the list.
                foreach(WOTask task in response.Value)
                {
                    if (task.ActFinishDate == blankDate || task.ActStartDate == blankDate)
                    {
                        datelessTasks.Add(task);
                    }
                }
                // Populate the task list box with the newly filled list.
                lstTasks.DataSource = datelessTasks;
                lstTasks.ValueMember = "WOTaskId";
                // Inform the user of the number of tasks with one or more invalid date.
                rtbLog.Text += $"{datelessTasks.Count} tasks found without proper dates.\n";
            }
            // If the response is bad...
            else
            {
                // Inform the user that the ByWorkOrder API call failed.
                rtbLog.Text += "Failed to search for tasks by work orders.\n";
            }
        }
        #endregion

        #region Display Task Information
        private void lstTasks_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected task.
            WOTask task = GetSelectedTask();
            // Display pertinent information about the task in the rich text box.
            rtbTaskDetails.Text =
                $"ID: {task.WOTaskId}\n" +
                $"Work Order: {task.WorkOrderId}\n" +
                $"Start: {task.ActStartDate}\n" +
                $"Finish: {task.ActFinishDate}\n" +
                $"Assigned: {task.AssignedToName}\n" +
                $"Task: {task.Description}";
        }
        #endregion

        #region Update Tasks
        private void UpdateTaskDates(int workOrderTaskId, DateTime startDate, DateTime finishDate)
        {
            // Set up the Update request object.
            TasksService.Update update = new TasksService.Update();
            // Add in all needed parameters (WOTaskId, ActualStartDate, ActualFinishDate).
            update.WOTaskId = workOrderTaskId;
            update.ActualStartDate = startDate;
            update.ActualFinishDate = finishDate;
            // Make the Update API call and set a callback function.
            services.AMS.Tasks(update, UpdateTaskDatesCallback);
        }

        private void UpdateTaskDatesCallback(TasksService.UpdateResponse response)
        {
            // Check the status of the response. If the response is good...
            if (response.Status == 0)
            {
                // Inform the user that the Update API call was successful.
                rtbLog.Text += $"Task {response.Value.WOTaskId} successfully updated.\n";
            }
            // If the response is bad...
            else
            {
                // Inform the user that the Update API call failed.
                rtbLog.Text += $"Update failed. Task will remain in list.\n";
            }
        }

        private void btnUpdateAll_Click(object sender, EventArgs e)
        {
            // Determine the date method to be used. If manual...
            if (rdbManualDate.Checked == true)
            {
                // Get the entered dates.
                DateTime start = calStartDate.Value;
                DateTime finish = calFinishDate.Value;
                // Iterate through list of tasks to do the following...
                foreach (WOTask task in lstTasks.Items)
                {
                    // Call the function that will attempt to update the task dates.
                    UpdateTaskDates(task.WOTaskId, start, finish);
                }
            }
            // If using the work order's ActualFinishDate...
            else
            {
                // Iterate through list of tasks to do the following...
                foreach (WOTask task in lstTasks.Items)
                {
                    // Get the work order's ActualFinishDate and ActualStartDate.
                    WorkOrderBase wo = services.AMS.WorkOrder(new WorkOrderService.ById { WorkOrderId = task.WorkOrderId }).Value;
                    DateTime start = wo.ProjStartDate;
                    DateTime finish = wo.ActualFinishDate;
                    // Call the function that will attempt to update the task dates.
                    UpdateTaskDates(task.WOTaskId, start, finish);
                }
            }
            // Once done updating tasks, refresh the list of tasks by calling the work order search function.
            rtbTaskDetails.Clear();
            WorkOrderSearch();
        }
        #endregion

        #region Prewritten Functions
        private void LoadFormProcesses()
        {
            // Turn off the authentication section of the form.
            grpAuthenticate.Enabled = false;
            // Turn on the main functionality section of the form.
            grpMainFunctionality.Enabled = true;
            // Begin the search for work order tasks on closed work orders.
            WorkOrderSearch();
        }

        private void btnClearLog_Click(object sender, EventArgs e)
        {
            // Set the log's Text property to an empty string.
            rtbLog.Text = "";
        }

        private WOTask GetSelectedTask()
        {
            // Get the selected item in the task list, cast it as a WOTask item, and return it.
            return (WOTask)lstTasks.SelectedItem;
        }

        private void rdbWorkOrderDate_CheckedChanged(object sender, EventArgs e)
        {
            // If user selects to use the work order closing date, disable the DateTime pickers.
            if (rdbWorkOrderDate.Checked == true)
            {
                calFinishDate.Enabled = false;
                calStartDate.Enabled = false;
                // Inform the user of their choice.
                rtbLog.Text += "You have selected to use WO date.\n";
            }
            // If user selects to manually select dates, enable the DateTime pickers.
            else
            {
                calFinishDate.Enabled = true;
                calStartDate.Enabled = true;
                // Inform the user of their choice.
                rtbLog.Text += "You have selected to input dates.\n";
            }
        }
        #endregion
    }
}
