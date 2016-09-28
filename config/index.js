'use strict'

module.exports = {
  baseurl: process.env.VISMA_BASEURL || 'http://url-to-visma:8290/hrm_ws/secure/persons/ssn/',
  auth: {
    user: process.env.VISMA_USER || 'user',
    password: process.env.VISMA_PASSWORD || 'pass'
  }
}
