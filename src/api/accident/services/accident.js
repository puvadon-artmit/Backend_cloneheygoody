'use strict';

/**
 * accident service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accident.accident');
