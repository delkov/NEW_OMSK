/**
 * angular-permission
 * Fully featured role and permission based access control for your angular applications
 * @version v6.0.0 - 2018-01-20
 * @link https://github.com/Narzerus/angular-permission
 * @author Rafael Vidaurre <narzerus@gmail.com> (http://www.rafaelvidaurre.com), Blazej Krysiak <blazej.krysiak@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function () {
  // 'use strict';

  // var permission = require('./dist/angular-permission.js'),
    // var ngPermission = require('./dist/angular-permission-ng.js'),
    var uiPermission = require('./dist/angular-permission-ui.js');

  module.exports = {
    // permission: permission,
    // ngPermission: ngPermission,
    uiPermission: uiPermission
  };
})();
