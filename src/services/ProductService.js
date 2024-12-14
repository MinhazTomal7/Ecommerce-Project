const mongoose = require("mongoose");
const BrandModel = require('../models/BrandModel');
const CategoryModel = require('../models/CategoryModel');
const ProductSliderModel = require('../models/ProductSliderModel');
const ProductModel = require('../models/ProductModel');
const ProductDetailModel = require('../models/ProductDetailModel');
const ReviewModel = require('../models/ReviewModel');
const ObjectID = mongoose.Types.ObjectId;




const BrandListService = async ()=>{
    try{
       let data = await BrandModel.find()
        return{status:"Success", data:data}

    }
    catch (err){
        return{status:"Failed", data:err}.toString()
    }

}

const CategoryListService = async ()=>{
    try{
        let data = await CategoryModel.find()
        return{status:"Success", data:data}

    }
    catch (err){
        return{status:"Failed", data:err}.toString()
    }

}

const SliderListService = async ()=>{
    try{
        let data = await ProductSliderModel.find()
        return{status:"Success", data:data}

    }
    catch (err){
        return{status:"Failed", data:err}.toString()
    }

}

const ListByBrandService = async (BrandID) => {
    try {
        let MatchStage = { $match: { brandID: new ObjectID(BrandID) } };
        let JoinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brands",
            },
        };
        let JoinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "categories",
            },
        };

        let UnwindBrandStage = {$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0, 'category._id':0, 'brandID':0, 'categoryID':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage, UnwindCategoryStage, ProjectionStage
        ]);

        return { status: "Success", data: data };
    } catch (err) {
        return { status: "Failed", data: err.toString() };
    }
};


const ListByCategoryService = async ()=>{

}

const ListBySmilerService = async ()=>{

}

const ListByKeywordService = async ()=>{

}

const ListByRemarkService = async ()=>{

}

const DetailsService = async ()=>{

}

const ReviewListService = async ()=>{

}



module.exports = {
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
}















