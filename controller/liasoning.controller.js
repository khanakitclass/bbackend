const liasoning = require('../models/liasoning.models');

exports.createLiasoning = async (req, res) => {
    try {
        let { fileDate, fileNo, FQPayment, Amount, AmountDate, SerialNumber, SerialNumberDate,
            addmorephotos, SitePhoto, OtherPhoto, CheckBox1, CheckBox1date, CheckBox2, CheckBox2date, CheckBox3, CheckBox3date, CheckBox4, CheckBox4date, CheckBox5, CheckBox5date, Query1, Query2,
            Query3, Query4, Query5,
            MarketingType, Date, ConsumerName, PhoneNumber, ConsumerNumber, Address, City_Village, District_Location, Pincode, Latitude, Longitude, applicationStatus, fillNo,
            feasibilityStatus, fQGenrete, fqPaymentMode, fqPaid, fqPermission, Dealer, dealerpolicy, solarModuleMake, solarModulWp, solarModuleNos, systmSizeKw, inventrySize, stamp,
            netMeterDocumennt, meterInstall, subcidyclaimed, subcidyRecieved, liasoningQuery } = req.body;
        let checkLiasoning = await liasoning.findOne({ fillNo: req.body.fillNo })

        if (checkLiasoning) {
            return res.json({ status: 400, message: "liasoning Is Already Exiest.." })
        }

        if (!req.files || !req.files['SitePhoto'] || !req.files['OtherPhoto']) {
            return res.status(401).json({ status: 401, message: "Please upload all required files" });
        }

        checkLiasoning = await liasoning.create({
            fileDate,
            fileNo,
            FQPayment,
            Amount,
            AmountDate,
            SerialNumber,
            SerialNumberDate,
            // addmorephotos,
            // SitePhoto: req.files['SitePhoto'][0].path,
            // OtherPhoto: req.files['OtherPhoto'][0].path,
            CheckBox1,
            CheckBox1date,
            CheckBox2,
            CheckBox2date,
            CheckBox3,
            CheckBox3date,
            CheckBox4,
            CheckBox4date,
            CheckBox5,
            CheckBox5date,
            Query1,
            Query2,
            Query3,
            Query4,
            Query5,
            // fillNo,
            // MarketingType,
            // Date,
            // ConsumerName,
            // PhoneNumber,
            // ConsumerNumber,
            // Address,
            // City_Village,
            // District_Location,
            // Pincode,
            // Latitude,
            // Longitude,
            // applicationStatus,
            // feasibilityStatus,
            // fQGenrete,
            // fqPaymentMode,
            // fqPaid,
            // fqPermission,
            // Dealer,
            // dealerpolicy,
            // solarModuleMake,
            // solarModulWp,
            // solarModuleNos,
            // systmSizeKw,
            // inventrySize,
            // stamp,
            // netMeterDocumennt,
            // meterInstall,
            // subcidyclaimed,
            // subcidyRecieved,
            // liasoningQuery
        });

        return res.json({ status: 201, message: "liasoning Is Created successFully..", liasoning: checkLiasoning })
    } catch (error) {
        res.json({ status: 500, message: error.message });
        console.log(error);
    }
};

exports.getAllLiasoning = async (req, res) => {
    try {
        let page = parseInt(req.query.page);
        let pageSize = parseInt(req.query.pageSize);

        if (page < 1 || pageSize < 1) {
            return res.json({ status: 400, message: "Page And PageSize Can't Be Less Then 1" })
        }

        let paginatedLiasoning;
        paginatedLiasoning = await liasoning.find();
        let count = paginatedLiasoning.length;

        if (count === 0) {
            return res.json({ status: 404, message: "No liasoning Found.." })
        }

        if (page && pageSize) {
            startIndex = (page - 1) * pageSize;
            lastIndex = (startIndex + pageSize)
            paginatedLiasoning = paginatedLiasoning.slice(startIndex, lastIndex)
        }

        return res.json({ status: 200, Totallisoning: count, message: 'All liasoning Found Successfully..', liasoning: paginatedLiasoning })
    } catch (error) {
        res.json({ status: 500, message: error.message });
        console.log(error);
    }
}

exports.getLiasoningById = async (req, res) => {
    try {
        let id = req.params.id;
        let liasoningById = await liasoning.findById(id);
        if (!liasoningById) {
            return res.json({ status: 404, message: "liasoning Not Found" })
        }
        res.json({ status: 200, message: "Get liasoning Data Successfully...", liasoning: liasoningById })
    } catch (error) {
        res.json({ status: 500, message: error.message });
        console.log(error);
    }
}

exports.updateLiasoning = async (req, res) => {
    try {
        let id = req.params.id;

        let checkLiasoningId = await liasoning.findById(id);

        if (!checkLiasoningId) {
            return res.json({ status: 404, message: "liasoning Not Found" })
        }

        checkLiasoningId = await liasoning.findByIdAndUpdate(id, { ...req.body }, { new: true });

        return res.json({ status: 200, message: "liasoning Updated Successfully..", liasoning: checkLiasoningId })
    } catch (error) {
        res.json({ status: 500, message: error.message });
        console.log(error);
    }
};

exports.deleteLiasoning = async (req, res) => {
    try {
        let id = req.params.id;

        let checkLiasoningId = await liasoning.findById(id);

        if (!checkLiasoningId) {
            return res.json({ status: 404, message: "liasoning Not Found" })
        }

        await liasoning.findByIdAndDelete(id);

        return res.json({ status: 200, message: "liasoning Removed Successfully.." })
    } catch (error) {
        res.json({ status: 500, message: error.message });
        console.log(error);
    }
}
