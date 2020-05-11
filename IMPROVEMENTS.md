


Following is the list of **Improvements** that can be made in the Mock UI :-

1. Filter/Search :- 
    * In the current mockup searching of emails is done using range of dates. This system will be used to archive a         large number of emails coming from throughout the organization. Filtering data by even a day will output in           **multiple emails** from various users. It would be **inefficient to manually** filter through emails trying to       find the concering parties.  
    * The solution would be to provide an enhanced capability of filtering/searching emails by allowing search based        on **email ids** and search through **content (subject/body)** for any input keyword(s). 
    * Option for **advanced search** must be provided which will open up a panel where options can be customised. 
      For example - Date range- 2020/06/05-2020/06/15, Email Id - From - 'aaa@example.com', To - '', Keyword - 'some keyword'. The result will based on the combination of all inputs. These inputs must be optional.
    
2. Marking E-mails :- 
    * Even the most effiecient search result can output a lot of emails. Going through all the mails can become quite       **cumbersome** and hard to keep track of mails. If in future user wants to **refer** to some mail, they will have     to search through all the mail again.
    * In such a case, providing a marking capability would prove to be quite beneficial. If a user feels that a certain     mail is of some importance then by selecting a check box option, present on all the resultant emails, the             particular email will get marked. The user may also be able to view only marked emails. We can further                **enhance Point 1** to allow fitering emails based on "marked/unmarked".

3. Highlighting text :- 
    * An email's importance is defined by the content of it. While assessing an email, user may find certain **text         snippet of importance** in a rather long email. Now even though the email can be marked but in order to find the      important text whole email message must be **analysed again**.
    * It would be much more **simplified** if any text was **highlighted**. This way user will be able to mark the          **reasoning** behind the importance of this email.

4. Group/Tag :-
    * It can be a good addition to provide a capability to **group/tag some emails together** other than marked for         future reference. This group will be **user defined** and will act as a **container** that the user can               **search** for and be able to access all the mails belonging to that group/tag. New emails can be **added** or        existing emails can be **removed** from a group.

5. Multi select :-
    * Capability for user to be able to select multiple emails and mark/unmark them together. Also adding and deleting      multiple emails to/from a group will become much simpler.

6. View list of recipeints :-
    * Existing UI hides the emails if their text is too long. It provides no way to view the remaining emails. This         can be resolved either by **displaying a tooltip** when cursor moves over the text or a **vertical list** upon        clicking the text representing the number of hidden email ids above the rest of the UI hence not interrupting         existing UI.

7. Editable date :-
    * In the mockup user can select a range of date but is not able to edit it. It's inefficient if a **longer range** of   date needs to be selected. 
    * We can display dates inside **editable text boxes** and when search is clicked after changing the data the list       will be updated with the newer list.
