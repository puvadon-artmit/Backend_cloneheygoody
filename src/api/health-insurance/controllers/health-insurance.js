'use strict';

/**
 * health-insurance controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health-insurance.health-insurance');
