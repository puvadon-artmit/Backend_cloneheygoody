'use strict';

/**
 * insurance-car service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::insurance-car.insurance-car');
