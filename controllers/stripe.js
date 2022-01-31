require('dotenv').config();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);

const addCheckoutSession = async (req, res) => {
    let prices = ['price_1KBLJqDl91JA29TDLtfCIiLW', 'price_1KBLJ6Dl91JA29TDNFnXX05n', 'price_1KBLJbDl91JA29TDRamOPr1r', 'price_1KH7ryDl91JA29TDpD5JEaUx']
    let obj = req.body.seatsQuantity;
    let result = {}
    Object.keys(obj).forEach((key, i) => {
        if (obj[key] === 0) {
            delete obj[key];
        } else {
            result[key] = {
                quantity: obj[key],
                price: prices[i]
            }
        }
    });
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `https://cinema-tickets-app-client.herokuapp.com`,
            cancel_url: 'https://cinema-tickets-app-client.herokuapp.com',
            line_items: Object.values(result)
        })
        completePurchase();
        res.json({ id: session.id })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

const completePurchase = async (stripeSessionId, userId) => {
    const session = await stripe.checkout.sessions.retrieve(stripeSessionId);
    const purchase = await PurchaseModel.findOne({
      stripe_sessionId: session.id,
    });
  
    console.log(purchase);
    return
}

module.exports = { addCheckoutSession }