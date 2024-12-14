const {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilerService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,
    ReviewListService
} = require('../services/ProductService');





exports.ProductBrandList = async(req, res)=>{

    let result = await BrandListService()
    return res.status(200).json(result)
}

exports.ProductCategoryList = async(req, res)=>{

    let result = await CategoryListService()
    return res.status(200).json(result)
}

exports.ProductSliderList = async(req, res)=>{

    let result = await SliderListService()
    return res.status(200).json(result)
}


exports.ProductListByBrand = async (req, res) => {
    try {
        const BrandID = req.params.BrandID;
        let result = await ListByBrandService(BrandID);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ status: "Failed", data: err.toString() });
    }
};


exports.ProductListByCategory= async(req, res)=>{
    let result = await ListByCategoryService()
    return res.status(200).json(result)
}

exports.ProductListBySmiler= async(req, res)=> {

}

exports.ProductListByKeyword= async(req, res)=>{

}

exports.ProductListByRemark= async(req, res)=>{

}

exports.ProductDetails= async(req, res)=>{

}

exports.ProductReviewList= async(req, res)=>{

}


