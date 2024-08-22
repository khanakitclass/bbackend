const mongoose = require('mongoose');

const liasoningSchema = mongoose.Schema({
    fileDate: {
        type: String,
        require: true
    },
    fileNo: {
        type: String,
        require: true
    },
    FQPayment: {
        type: String,
        require: true
    },
    Amount: {
        type: Number,
        require: true
    },
    AmountDate: {
        type: String,
        require: true
    },
    SerialNumber: {
        type: Number,
        require: true
    },
    SerialNumberDate: {
        type: String,
        require: true
    },
    // addmorephotos: [{
    //     SitePhoto: {
    //         type: String,
    //         require: true
    //     },
    //     OtherPhoto: {
    //         type: String,
    //         require: true
    //     },
    // }],
    CheckBox1: {
        type: Boolean,
        require: true
    },
    CheckBox2: {
        type: Boolean,
        require: true
    },
    CheckBox3: {
        type: Boolean,
        require: true
    },
    CheckBox4: {
        type: Boolean,
        require: true
    },
    CheckBox5: {
        type: Boolean,
        require: true
    },
    CheckBox1date: {
        type: String,
        require: true
    },
    CheckBox2date: {
        type: String,
        require: true
    },
    CheckBox3date: {
        type: String,
        require: true
    },
    CheckBox4date: {
        type: String,
        require: true
    },
    CheckBox5date: {
        type: String,
        require: true
    },
    Query1: {
        type: String,
        require: true
    },
    Query2: {
        type: String,
        require: true
    },
    Query3: {
        type: String,
        require: true
    },
    Query4: {
        type: String,
        require: true
    },
    Query5: {
        type: String,
        require: true
    },
    // fillNo: {
    //     type: String,
    //     require: true
    // },
    // MarketingType: {
    //     type: String,
    //     require: true
    // },
    // Date: {
    //     type: String,
    //     require: true
    // },
    // ConsumerName: {
    //     type: String,
    //     require: true
    // },
    // PhoneNumber: {
    //     type: String,
    //     require: true
    // },
    // ConsumerNumber: {
    //     type: String,
    //     require: true
    // },
    // Address: {
    //     type: String,
    //     require: true
    // },
    // City_Village: {
    //     type: String,
    //     require: true
    // },
    // District_Location: {
    //     type: String,
    //     require: true
    // },
    // Pincode: {
    //     type: Number,
    //     require: true
    // },
    // Latitude: {
    //     type: String,
    //     require: true
    // },
    // Longitude: {
    //     type: String,
    //     require: true
    // },
    // applicationStatus: {
    //     type: String,
    //     require: true
    // },
    // feasibilityStatus: {
    //     type: String,
    //     require: true
    // },
    // fQGenrete: {
    //     type: Boolean,
    //     require: true
    // },
    // fqPaymentMode: {
    //     type: Boolean,
    //     require: true
    // },
    // fqPaid: {
    //     type: Boolean,
    //     require: true
    // },
    // fqPermission: {
    //     type: Boolean,
    //     require: true
    // },
    // Dealer: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "dealer",
    //     require: true
    // },
    // dealerpolicy: {
    //     type: String,
    //     require: true
    // },
    // solarModuleMake: {
    //     type: String,
    //     require: true
    // },
    // solarModulWp: {
    //     type: String,
    //     require: true
    // },
    // solarModuleNos: {
    //     type: String,
    //     require: true
    // },
    // systmSizeKw: {
    //     type: String,
    //     require: true
    // },
    // inventrySize: {
    //     type: String,
    //     require: true
    // },
    // stamp: {
    //     type: Boolean,
    //     require: true
    // },
    // netMeterDocumennt: {
    //     type: Boolean,
    //     require: true
    // },
    // meterInstall: {
    //     type: Boolean,
    //     require: true
    // },
    // subcidyclaimed: {
    //     type: Boolean,
    //     require: true
    // },
    // subcidyRecieved: {
    //     type: Boolean,
    //     require: true
    // },
    // liasoningQuery: {
    //     type: Boolean,
    //     require: true
    // }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Liasoning', liasoningSchema); 