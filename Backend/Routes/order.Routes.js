import express from 'express'
import adminAuth from '../Middlewares/adminAuth.js'
import authUser from '../Middlewares/authUser.js'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus, verifyStripe } from '../controllers/order.Controller.js'

const orderRouter = express.Router()


// Admin
orderRouter.post('/list',adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)


// payment feature
orderRouter.post('/place',authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

// User Features
orderRouter.post('/userorders', authUser, userOrder)

export default orderRouter
