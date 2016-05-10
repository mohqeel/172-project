'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'thoughts-secret',

  FACEBOOK_ID:      '1623958921257596',
  FACEBOOK_SECRET:  'b546fbd791044f846e5080bc2ede0b4d',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
