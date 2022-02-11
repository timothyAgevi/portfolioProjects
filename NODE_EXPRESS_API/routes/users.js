import express from 'express'

const router =express.Router();

const users=[{
    
    "firstName":"John",
    "lastName":"Doe",
    "age":21
      

}
];
router.get('/users', (req,res)=>{
res.send('Hello')
});

export default router;