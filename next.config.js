const { PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    console.log("I'm in prod mode")

    return defaultConfig
  }

  console.log("I'm in dev mode")

  return defaultConfig
} 