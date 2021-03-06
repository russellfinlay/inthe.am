What's New?
===========

16 October 2020
---------------

* Docker: Inthe.am's development and production environments have been containerized.
  You can now start up a development environment much more easily than before;
  see :ref:`development-environment-setup`.

15 December 2018
----------------

* Bugwarrior support removed (see https://github.com/coddingtonbear/inthe.am/issues/303)

6 April 2017
------------

Features
~~~~~~~~

* (Public Beta) Zapier Integration!

25 July 2015
------------

Features
~~~~~~~~

* Bugwarrior: Bugwarrior is a tool that allows you to synchronize issues
  assigned to you from JIRA, Github, and other services with your Taskwarrior
  task list.  Now, you can use Bugwarrior directly with Inthe.AM.

5 July 2015
-----------

Features
~~~~~~~~

* iCal feeds: In addition to our existing RSS and Pebble Cards feeds, you can
  now enable two iCal feeds showing the due dates or waiting dates of your
  tasks.
* (Public Beta) Trello Integration: By turning on this feature,
  Inthe.AM will create a new Trello board on your account, and will automatically
  synchronize changes between your Trello board, Inthe.AM and your local
  Taskwarrior task list. Relatedly, cancelled earlier Kanban Boards Project:
  `#146 Kanban Board <https://github.com/coddingtonbear/inthe.am/issues/146>`.
* Added `Gitter channel <https://gitter.im/coddingtonbear/inthe.am>`
  replacing the existing Freenode IRC channel.

Technical
~~~~~~~~~

* Altered the way synchronizations and task changes are announced within
  the system for triggering synchronizations to use Redis' PubSub rather than
  periodically synchronizing and announcing newly-found events.
* Various changes to testing behavior to increase speed including enabling
  fast-fail of tests, and installing Taskserver and Taskwarrior from
  ``deb`` packages. 
* Disabled full integration testing of the Google log-in process.  Google
  has began requiring that the user walk through a verification process
  after signing-in, and the complexities involved in making a bot able to
  walk through that verification process outweighs the risks of the feature
  breaking.
* Began sending logging events to Loggly for easier analysis.

19 April 2015
-------------

Deprecations
~~~~~~~~~~~~

* Non-local Sync: Synchronization with non-local taskservers was deprecated.
  See `#167: Deprecate synchronization using non-local Taskservers <https://github.com/coddingtonbear/inthe.am/issues/167>`_ for more information.

19 February 2015
----------------

Features
~~~~~~~~

* Added functionality allowing a user to configure under what circumstances
  should Inthe.AM reply to incoming text messages;
  `this addresses concerns raised in  #164 <https://github.com/coddingtonbear/inthe.am/issues/174>`_.

16 February 2015
----------------

Features
~~~~~~~~

* (Private Beta) Team Kanban Boards: Added configurable Kanban Board
  functionality allowing teams to collaborate on shared tasks.
  Completes Phase 1 of `#146 Kanban Board <https://github.com/coddingtonbear/inthe.am/issues/146>`_.

Technical
~~~~~~~~~

* Updated sync behavior in a few fundamental ways:

  * Inthe.AM will automatically synchronize local user task lists as sync
    events are seen in the Taskserver logs.
  * Rather than periodically initiating a sync while connected to the
    status stream; simply waits for head changes from the synchronization
    operation finished in the above step.
  * Users using non-local Taskservers will no longer have access to streaming
    task information, and will instead need to click the 'Refresh' button
    to synchronize tasks.

* Removed functionality allowing one to disable the task update stream.  Very
  few users were using the functionality allowing one to disable it.

Deprecation Warnings
~~~~~~~~~~~~~~~~~~~~

* Synchronization using non-local Taskservers will be disabled after
  1 April 2015.  Configuring an existing account to synchronize
  with a non-local Taskserver will be disabled in the near future.
  See `#167: Deprecate synchronization using non-local Taskservers <https://github.com/coddingtonbear/inthe.am/issues/167>`_ for more information.

30 January 2015
---------------

Features
~~~~~~~~

* Attachment annotations: New attachments will now add annotations containing
  a link to the uploaded attachment in S3; this makes it easier to access your
  annotations when using Taskwarrior clients other than Inthe.AM.
* Automatic SMS arguments: You can now specify default tags and attributes for
  incoming SMS messages; this makes it easy for you to make sure you can those
  messages you wrote while on a bumpy bus or train so you can clean up those
  tasks later.

18 January 2015
---------------

Features
~~~~~~~~

* Updated `documentation <http://intheam.readthedocs.org/en/latest/index.html>`_ and added link to documentation to the page UI.

Technical
~~~~~~~~~

* Updated front-end Javascript code to use `Ember-CLI <http://www.ember-cli.com/>`_ to remove the
  existing one-off Javascript bundle build process.
* Completed `#133: "Switch from using one-off $.ajax requests to using promises." <https://github.com/coddingtonbear/inthe.am/issues/133>`_.
* Completed `#132: "Show loading animation when performing XHRs from the configuration page." <https://github.com/coddingtonbear/inthe.am/issues/132>`_.
* Completed `#131: "Display returned errors rather than a generic error message when interacting with the configuration page." <https://github.com/coddingtonbear/inthe.am/issues/131>`_.

Bugfixes
~~~~~~~~

* Fixed `#141: "Single-byte characters in task content may cause UnicodeDecodeError to be raised." <https://github.com/coddingtonbear/inthe.am/issues/141>`_.

1 January 2015
--------------

Bugfixes
~~~~~~~~

* Fixed `#134: "Emailing tasks does not work if you use an alias" <https://github.com/coddingtonbear/inthe.am/issues/134>`_.

15 December 2014
----------------

Features
~~~~~~~~

* Added keyboard shortcuts and the ``?`` UI.
* Created `Taskwarrior Inthe.AM Utility <https://github.com/coddingtonbear/taskwarrior-inthe.am>`_.
