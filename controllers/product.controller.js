const {
  productCreateSrv,
  productFetchOneSrv,
  productsFetchSrv,
  productUpdateSrv,
  productFetchOneSrvWithID,
  productDeleteSrv,
} = require("../services/product.service");

module.exports.createProductController = async (req, res, next) => {
  try {
    const userId = req.userId;
    req.body.userId = userId;
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

module.exports.getProductsController = async (req, res, next) => {
  try {
    const db_res = await productsFetchSrv(req.userId);
    if (db_res.length == 0) {
      res.status(200).json({
        message: "product list is empty",
        success: true,
        list: db_res,
      });
    }
    res.status(200).json({
      message: "produts fetched successfully",
      success: true,
      list: db_res,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.updateProductController = async (req, res, next) => {
  try {
    const product = await productFetchOneSrv(req.body.productName);
    if (!product) {
      throw new Error("product not found");
    }
    const db_res = await productUpdateSrv(req.body._id, req.body);

    res.status(200).json({
      message: "product updated sucessfully",
      success: true,
      updated_data: db_res,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProductController = async (req, res, next) => {
  try {
    const product = await productFetchOneSrvWithID(req.params.id);
    if (!product) {
      throw new Error("product not found");
    } else {
      await productDeleteSrv(req.params.id);
      res.status(200).json({
        message: "product deleted sucessfully",
        success: true,
      });
    }
  } catch (error) {
    next(error);
  }
};
