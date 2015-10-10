# Website
MEAN stack website

While on the surface this is being called a website, a more accurate appraisal
of the software is that it is (meant to be) a knowledgebase/wiki.

A good starting point for a KB of this kind (something bespoke for the formula
team and its needs) would be Confluence.  Confluence though, has a few issues,
primarily:

* It is prohibitively expensive
* It has a fairly shallow set of permissions for users
* It has few user types/classes
* It is feature-rich -- read: bloated
* It is geared toward agile development methodologies
* It is its own system and cannot serve static pages
* It carries a high degree of interoperability with other Atlassian systems

So in addition to the goals of improving upon these deficiencies, namely:

* Make something bespoke for the team, by the team
* Make something intended for the team's year-long development cycle
* Make something that carries minimal bloat and only does exactly what we want

We also aim to include some of the better features present in Confluence and
other common knowledge base / wiki systems, such as:

* Functionality to serve static pages as a main website
* Login capabilities and a rich set of user types
* A rich permission set
* Pages composed of discrete sections
* Functionality to include attachments to sections (not pages)
* A hierarchical, expandable, hidable sidebar from which all pages are
accessible
* A clean codebase such that adding features is easy
* Nothing else!  Keep It Simple, Stupid!

Yeah I know those last two are a bit contradictory but if you think about it
they actually are not.  No features should be implemented if they are not
needed.  However, this project is going to undergo requirement changes, and as
such, development needs to be fluid and dynamic.

As such, this project will adhere to agile development methodologies, utilizing
either 2- or 4- week sprints (to be finalized at software meeting[s]) and tasks
will be given assignees and these assignees will be held accountable.  Software
meetings will serve as scrum meetings.

I mean it, if you accept assignment to a task, I'm going to hold you to it.  If
I have to, I'll get something close to JIRA and we'll track progress with fine
granularity.

Since this is a multi-person project, there needs to be a high degree (bordering
on excessive) of commenting in the code.  Seriously, it's really easy to get
lost in your own code in JS, let alone someone else's code.


Since Trello fucking sucks, the first sprint is going to be kept track of right
here.  Whine away, I don't care.

The current backlog is as follows:

* Finalize preliminary models (jwrg)
  * Finalize user classes/types
* Implement static page serving (no assignee)
* Implement login system utilizing encryption (no assignee, presumable jwrg)
  * Create a page for registration
  * Constrain registration as team member to some list of names
* Create some knowledgebase pages using a generate.js file (no assignee)
* Implement a top-bar for login and common user actions (no assignee)


Future sprints will see the following items added to the backlog (estimated
t-shirt sizes are included but are very rough estimates)

* Implement page creating and editing (XL)
* Implement administrator action page (L)
  * Displaying all pages hierarchically for deletion
  * Displaying all users for editing/deletion
  * Displaying all user classes for editing/adding
  * A global settings page
* Create a page for editing user profiles (M)
* Page history and version comparison (L)
* User history (S)
* Constrain viewing pages in certain sections to certain user classes (L)
* Implement the hierarchical nav sidebar (XL)
* Implement table insertion into sections (M)
* Delineation of pages into spaces (S)
* Implement some means to alter the KB stylesheet (M)


I'm aware that this is a fairly incorrect use for a README.  Again, whine away,
I don't care.  Shit has to get done one way or another.
