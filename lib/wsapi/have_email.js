/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const
db = require('../db.js');

// return if an email is known to browserid

exports.method = 'get';
exports.writes_db = false;
exports.authed = false;
exports.args = ['email'];
exports.i18n = false;

exports.process = function(req, resp) {
  var email = url.parse(req.url, true).query['email'];
  db.emailKnown(email, function(known) {
    resp.json({ email_known: known });
  });
};
