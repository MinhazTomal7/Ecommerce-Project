const {CreateInvoiceService, PaymentFailService, PaymentSuccessService
, InvoiceListService, InvoiceProductListService, PaymentCancelService
, PaymentIPNService} = require("../services/InvoiceServices")

exports.CreateInvoice = async (req, res)=>{
    let result = await CreateInvoiceService(req);
    return res.status(200).json(result)
}


exports.PaymentFail = async (req, res)=>{
    let result = await PaymentFailService(req);
    return res.redirect('localhost:5050/profile')
}


exports.PaymentSuccess = async (req, res)=>{
    let result = await PaymentSuccessService(req);
    return res.redirect('localhost:5050/profile')
}


exports.PaymentCancel = async (req, res)=>{
    let result = await PaymentCancelService(req);
    return res.redirect('localhost:5050/profile')
}


exports.PaymentIPN = async (req, res)=>{
    let result = await PaymentIPNService(req);
    return res.status(200).json(result)
}


exports.InvoiceList = async (req, res)=>{
    let result = await InvoiceListService(req);
    return res.status(200).json(result)
}

exports.InvoiceProductList= async (req, res)=>{
    let result = await InvoiceProductListService(req);
    return res.status(200).json(result)
}