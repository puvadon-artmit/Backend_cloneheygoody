'use strict';

/**
 * health-insurance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-insurance.health-insurance');
