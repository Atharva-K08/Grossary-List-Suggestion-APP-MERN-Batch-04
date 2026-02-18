const {
  productCreateSrv,
  productFetchOneSrv,
} = require("../services/product.service");

module.exports.createProductController = async (req, res, next) => {
  try {
    const isExist = await productFetchOneSrv(req.body.productName);
    console.log("is Exist", isExist);
    if (isExist != null) {
      res.status(204).json({
        message: "product already exist in list",
        success: true,
      });
    } else {
      const db_res = await productCreateSrv(req.body);
      res.status(201).json({
        message: "product added in list",
        success: true,
        product: db_res,
      });
    }
  } catch (error) {
    next(error);
  }
};
