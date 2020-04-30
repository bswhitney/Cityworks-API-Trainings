# Questions Pending Research
The following are questions from courses that are in the process of being answered.
* Are there any differences in authentication when using single-sign-on?
* How would you sort the results of a work activity search/byIds by a field other than the ID?


# Answered Questions
## General Questions

**Question:** Is there a way of accessing a range of values using the API? For example, if I wanted to search for work orders with a WorkOrderId between 100 and 140, how would I do that?

**Answer:** In a discussion with the API Subject Matter Expert, we determined that the best way would be to use some sort of loop to build out an array of ID numbers, then use that array for generating a `WorkOrderService/ByIds` API call. This could be done in any language you are familiar with if you are simply trying to generate an HTTP request using the URL. If you are trying to do it within a specific application, match it with the language you are working with.

---

**Question:** When you add an activity link (type: parent) between two work activities, does the source activity become the parent or the child?

**Answer:** It is not possible to create a parent-child relationship using the Activity Link Add API. You must use a Create From API call.

---

**Question:** When you remove an activity link rather than deleting the link, does it set the relationship type to `null`?

**Answer:** Having tested both the Activity Link Delete and Activity Link Remove API calls, they seem to operate identically. Both APIs removed entries from the database.

---

**Question:** Are we able to use Windows Authentication with Cityworks?

**Answer:** Yes. Many organizations choose to do so. It is an option when installing Cityworks. [This is a link](https://mycityworks.force.com/s/article/12712-HOW-TO-Enable-Windows-Authentication-for-Cityworks-2015-and-Newer) to an article I found about enabling Windows Authentication on the software post-installation.

---

**Question:** Is there an API method that allows us to view licensing?

**Answer:** As of right now, that functionality has not been made public yet, and I have no word on if it will be made public.

---

## JavaScript / Web Development Questions
**Question:** Is there a proper format for the Cityworks Plugin UID property (number of characters, valid characters, etc.)?

**Answer:** Cityworks plugin UIDs are 24-byte sequences represented as hexidecimal strings. In plainer terms, the UID must be 48 characters long and may only contain numbers 0-9 and letters a-f. They must also be unique, meaning that two plugins cannot have the same UID. This should be easy to manage, given the requirements.
