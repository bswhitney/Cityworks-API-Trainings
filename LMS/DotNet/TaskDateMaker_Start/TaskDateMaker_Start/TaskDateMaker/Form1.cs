using System;
using System.Collections.Generic;
using System.Windows.Forms;
// After adding Cityworks SDK references, add a using statement here.

namespace TaskDateMaker
{
    public partial class Form1 : Form
    {
        #region Initialization and Authentication
        // Initialize the Services Object.

        public Form1()
        {
            InitializeComponent();
            // Add Cityworks Address to Services Object.
        }

        private void btnLogIn_Click(object sender, EventArgs e)
        {
            // Set up the Authenticate request object.
            // Add in all needed parameters (LoginName, Password).
            // Make the Authenticate API call and set a callback function.
        }

        private void AuthenticateCallback(AuthenticationService.AuthenticateResponse response)
        {
            // Check the Status of the response. If the response is good...
                // Redefine the services object with the new token.
                // Call the function that toggles enabled status and kicks off searches.
                // Inform the user that they have been signed in.
            // If the response is bad...
                // Inform the user that they need to try again.
        }
        #endregion

        #region Search for Tasks on Closed Work Orders
        private void WorkOrderSearch()
        {
            // Set up the Search request object.
            // Add in all needed parameters (Status).
            // Make the Search API call and set a callback function.    
        }

        private void TasksByWorkOrder(WorkOrderService.SearchResponse response)
        {
            // Check the status of the response. If the response is good...
                // Set up the ByWorkOrder request object.
                // Add in all needed parameters (WorkOrderIds).
                // Make the ByWorkOrder API call and set a callback function.
            // If the response is bad...
                // Inform the user that the Search API call failed.
        }

        private void TasksByWorkOrderCallback(TasksService.ByWorkOrderResponse response)
        {
            // Set up a DateTime object that has the value of a blank date in Cityworks.
            // Check the status of the response. If the response is good...
                // Set up a blank list for WOTask objects that have a blank ActFinishDate or ActStartDate.
                // Iterate through the list of returned tasks and add any with bad dates to the list.
                // Populate the task list box with the newly filled list.
                // Inform the user of the number of tasks with one or more invalid date.
            // If the response is bad...
                // Inform the user that the ByWorkOrder API call failed.
        }
        #endregion

        #region Display Task Information
        private void lstTasks_SelectedIndexChanged(object sender, EventArgs e)
        {
            // Get the currently selected task.
            // Display pertinent information about the task in the rich text box.
        }
        #endregion

        #region Update Tasks
        private void UpdateTaskDates(int workOrderTaskId, DateTime startDate, DateTime finishDate)
        {
            // Set up the Update request object.
            // Add in all needed parameters (WOTaskId, ActualStartDate, ActualFinishDate).
            // Make the Update API call and set a callback function.
        }

        private void UpdateTaskDatesCallback(TasksService.UpdateResponse response)
        {
            // Check the status of the response. If the response is good...           
                // Inform the user that the Update API call was successful.
            // If the response is bad...
                // Inform the user that the Update API call failed.
        }

        private void btnUpdateAll_Click(object sender, EventArgs e)
        {
            // Determine the date method to be used. If manual...
                // Get the entered dates.
                // Iterate through list of tasks to do the following...
                    // Call the function that will attempt to update the task dates.
            // If using the work order's ActualFinishDate...
                // Iterate through list of tasks to do the following...
                    // Get the work order's ActualFinishDate and ActualStartDate.
                    // Call the function that will attempt to update the task dates.
            // Once done updating tasks, refresh the list of tasks by calling the work order search function.
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
