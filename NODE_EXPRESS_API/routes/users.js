import express from 'express'

const router =express.Router();

const users=[{
    firstName:"John",
    lastName:"Doe",
    age:21
     }
];
router.get('/', (req,res)=>{
    console.log(users);
res.send('Hello')
});

export default router;