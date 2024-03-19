'use strict';

/**
 * protection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::protection.protection');
