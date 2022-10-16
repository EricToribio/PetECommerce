import { loadStripe } from "@stripe/stripe-js";

export async function checkout(lineItems){
	let stripePromise = null
    const pubKey = 'pk_test_51LsxfWAH4EU9xHXdAUxOpbdcNEEfPcYe1qr75XkOJRD900ZUWZILRPQIJh93lgpDnoor7MrVlCbV3OWKT1xSNGCE005Fa6f1Y0'

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe(pubKey)
		}
		return stripePromise
	}

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		automatic_tax:{
			enabled: true,
		},
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin
	})

}