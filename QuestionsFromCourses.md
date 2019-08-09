# Questions Pending Research
The following are questions from courses that are in the process of being answered.
* When you add an activity link (type: parent) between two work activities, does the source activity become the parent or the child?
* When you remove an activity link rather than deleting the link, does it set the relationship type to `null`?
* Is there a proper format for the Cityworks Plugin UID property (number of characters, valid characters, etc.)? *Status: Awaiting information from development.*

# Answered Questions
## General Questions

**Question:** Is there a way of accessing a range of values using the API? For example, if I wanted to search for work orders with a WorkOrderId between 100 and 140, how would I do that?

**Answer:** In a discussion with the API Subject Matter Expert, we determined that the best way would be to use some sort of loop to build out an array of ID numbers, then use that array for generating a `WorkOrderService/ByIds` API call. This could be done in any language you are familiar with if you are simply trying to generate an HTTP request using the URL. If you are trying to do it within a specific application, match it with the language you are working with.

---

## JavaScript / Web Development Questions


## C# Questions

