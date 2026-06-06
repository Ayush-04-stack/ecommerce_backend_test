const {Router}=require('express');
const {getproduct,createproduct,updateproduct,deleteproduct,createmanyproducts}=require('../controllers/productcontroller')
let router=Router();
router.post('/',createproduct)
router.get('/',getproduct)
router.put('/:id',updateproduct)
router.delete('/:id',deleteproduct)
router.post('/many', createmanyproducts);
module.exports=router