'use strict';

/**
 * travel-insurance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::travel-insurance.travel-insurance');
