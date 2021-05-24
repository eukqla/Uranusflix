const mongoose = require('mongoose')

const SettingsSchema = new mongoose.Schema({
    main_title: { type: String },
    main_subtitle: { type: String },
    first_services_title: { type: String },
    first_services: { type: String },
    second_services_title: { type: String },
    second_services: { type: String },
    third_services_title: { type: String },
    third_services: { type: String },
    site_motto: { type: String }
})

module.exports = mongoose.model('Settings', SettingsSchema)