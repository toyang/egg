'use strict';

module.exports = {
  // enable plugins

  /**
   * app global Error Handling
   * @member {Object} Plugin#onerror
   * @property {Boolean} enable - `true` by default
   */
  onerror: {
    enable: true,
    package: 'egg-onerror',
  },

  /**
   * userservice
   * @member {Object} Plugin#userservice
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  userservice: {
    enable: true,
    package: 'egg-userservice',
  },

  /**
   * userrole
   * @member {Object} Plugin#userrole
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  userrole: {
    enable: true,
    package: 'egg-userrole',
  },

  /**
   * session
   * @member {Object} Plugin#session
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  session: {
    enable: true,
    package: 'egg-session',
  },

  /**
   * i18n
   * @member {Object} Plugin#i18n
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  i18n: {
    enable: true,
    package: 'egg-i18n',
  },

  /**
   * Validate Plugin
   * @member {Object} Plugin#validate
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  /**
   * file and dir watcher
   * @member {Object} Plugin#watcher
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  watcher: {
    enable: true,
    package: 'egg-watcher',
  },

  /**
   * multipart
   * @member {Object} Plugin#multipart
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  multipart: {
    enable: true,
    package: 'egg-multipart',
  },

  /**
   * security middlewares and extends
   * @member {Object} Plugin#security
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  security: {
    enable: true,
    package: 'egg-security',
  },

  /**
   * local development helper
   * @member {Object} Plugin#development
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  development: {
    enable: true,
    package: 'egg-development',
  },

  /**
   * logger file rotater
   * @member {Object} Plugin#logrotator
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  logrotator: {
    enable: true,
    package: 'egg-logrotator',
  },

  /**
   * schedule tasks
   * @member {Object} Plugin#schedule
   * @property {Boolean} enable - `true` by default
   * @since 2.7.0
   */
  schedule: {
    enable: true,
    package: 'egg-schedule',
  },

  /**
   * `app/public` dir static serve
   * @member {Object} Plugin#static
   * @property {Boolean} enable - `true` by default
   * @since 1.0.0
   */
  static: {
    enable: true,
    package: 'egg-static',
  },
};
