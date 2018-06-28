# Installation

First, install the package in your Ember project directory:

{{#docs-snippet name="install.sh"}}
  ember install ember-notifier
{{/docs-snippet}}

The addon does not automatically include styling. Instead you need to 
import the addon style yourself.

{{#docs-snippet name="app.css" title="styles/app.scss"}}
  @import "ember-notifier";
{{/docs-snippet}}
