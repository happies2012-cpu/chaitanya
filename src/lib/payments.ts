// Payment Gateway Integration for Horizon EB1
// Supports Stripe, PayPal, and Razorpay

export interface PaymentConfig {
    provider: 'stripe' | 'paypal' | 'razorpay';
    publicKey: string;
    secretKey?: string; // Server-side only
    currency: 'USD' | 'INR' | 'EUR';
}

export interface PaymentIntent {
    amount: number;
    currency: string;
    description: string;
    metadata?: Record<string, any>;
}

export interface PaymentResult {
    success: boolean;
    transactionId?: string;
    error?: string;
    paymentMethod?: string;
}

// ============================================
// STRIPE INTEGRATION
// ============================================

export class StripePaymentService {
    private publishableKey: string;

    constructor(publishableKey: string) {
        this.publishableKey = publishableKey;
    }

    /**
     * Initialize Stripe checkout session
     */
    async createCheckoutSession(
        amount: number,
        description: string,
        successUrl: string,
        cancelUrl: string
    ): Promise<{ sessionId: string; url: string }> {
        // This would call your backend API
        const response = await fetch('/api/payments/stripe/create-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount,
                description,
                successUrl,
                cancelUrl,
            }),
        });

        const data = await response.json();
        return data;
    }

    /**
     * Redirect to Stripe Checkout
     */
    async redirectToCheckout(sessionId: string): Promise<void> {
        // Load Stripe.js
        const stripe = await this.loadStripe();
        await stripe.redirectToCheckout({ sessionId });
    }

    private async loadStripe(): Promise<any> {
        // Dynamically load Stripe.js
        if (typeof window !== 'undefined' && !(window as any).Stripe) {
            const script = document.createElement('script');
            script.src = 'https://js.stripe.com/v3/';
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }

        return (window as any).Stripe(this.publishableKey);
    }
}

// ============================================
// RAZORPAY INTEGRATION (for Indian market)
// ============================================

export class RazorpayPaymentService {
    private keyId: string;

    constructor(keyId: string) {
        this.keyId = keyId;
    }

    /**
     * Create Razorpay order
     */
    async createOrder(amount: number, currency: string = 'INR'): Promise<any> {
        const response = await fetch('/api/payments/razorpay/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount * 100, currency }), // Razorpay uses paise
        });

        return response.json();
    }

    /**
     * Open Razorpay checkout
     */
    async openCheckout(
        orderId: string,
        amount: number,
        name: string,
        email: string,
        phone: string,
        description: string
    ): Promise<PaymentResult> {
        await this.loadRazorpay();

        return new Promise((resolve) => {
            const options = {
                key: this.keyId,
                amount: amount * 100,
                currency: 'INR',
                name: 'Horizon EB1 Tech Advisors',
                description,
                order_id: orderId,
                prefill: {
                    name,
                    email,
                    contact: phone,
                },
                theme: {
                    color: '#F55036', // Orange brand color
                },
                handler: (response: any) => {
                    resolve({
                        success: true,
                        transactionId: response.razorpay_payment_id,
                        paymentMethod: 'razorpay',
                    });
                },
                modal: {
                    ondismiss: () => {
                        resolve({
                            success: false,
                            error: 'Payment cancelled by user',
                        });
                    },
                },
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.open();
        });
    }

    private async loadRazorpay(): Promise<void> {
        if (typeof window !== 'undefined' && !(window as any).Razorpay) {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }
    }
}

// ============================================
// PAYPAL INTEGRATION
// ============================================

export class PayPalPaymentService {
    private clientId: string;

    constructor(clientId: string) {
        this.clientId = clientId;
    }

    /**
     * Create PayPal order
     */
    async createOrder(amount: number, currency: string = 'USD'): Promise<string> {
        const response = await fetch('/api/payments/paypal/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, currency }),
        });

        const data = await response.json();
        return data.orderId;
    }

    /**
     * Capture PayPal payment
     */
    async capturePayment(orderId: string): Promise<PaymentResult> {
        const response = await fetch('/api/payments/paypal/capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId }),
        });

        const data = await response.json();
        return {
            success: data.status === 'COMPLETED',
            transactionId: data.id,
            paymentMethod: 'paypal',
        };
    }

    async loadPayPalScript(): Promise<void> {
        if (typeof window !== 'undefined' && !(window as any).paypal) {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=${this.clientId}&currency=USD`;
            document.head.appendChild(script);

            await new Promise((resolve) => {
                script.onload = resolve;
            });
        }
    }
}

// ============================================
// PAYMENT SERVICE PACKAGES
// ============================================

export interface ServicePackage {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    features: string[];
    popular?: boolean;
}

export const servicePackages: ServicePackage[] = [
    {
        id: 'eligibility_scan',
        name: 'Eligibility Scan',
        description: 'Comprehensive assessment of your EB-1A eligibility',
        price: 499,
        currency: 'USD',
        features: [
            'Detailed Kazarian criteria analysis',
            'Evidence strength assessment',
            'Personalized recommendation report',
            '30-minute consultation call',
            'Priority email support',
        ],
    },
    {
        id: 'case_strategy',
        name: 'Case Strategy Package',
        description: 'Complete strategic planning for your EB-1A petition',
        price: 2999,
        currency: 'USD',
        popular: true,
        features: [
            'Everything in Eligibility Scan',
            'Custom case strategy document',
            'Evidence collection roadmap',
            'Letter of recommendation templates',
            'Adjudicator sentiment analysis',
            '3 consultation calls',
            'Unlimited email support for 3 months',
        ],
    },
    {
        id: 'full_advisory',
        name: 'Full Advisory Service',
        description: 'End-to-end guidance from eligibility to approval',
        price: 7999,
        currency: 'USD',
        features: [
            'Everything in Case Strategy',
            'Petition letter drafting',
            'Evidence hardening & review',
            'RFE response preparation',
            'Mock adjudication sessions',
            'Weekly progress calls',
            'Unlimited support until approval',
            'Success guarantee program',
        ],
    },
];

// ============================================
// UNIFIED PAYMENT MANAGER
// ============================================

export class PaymentManager {
    private stripe?: StripePaymentService;
    private razorpay?: RazorpayPaymentService;
    private paypal?: PayPalPaymentService;

    constructor(config: {
        stripe?: { publishableKey: string };
        razorpay?: { keyId: string };
        paypal?: { clientId: string };
    }) {
        if (config.stripe) {
            this.stripe = new StripePaymentService(config.stripe.publishableKey);
        }
        if (config.razorpay) {
            this.razorpay = new RazorpayPaymentService(config.razorpay.keyId);
        }
        if (config.paypal) {
            this.paypal = new PayPalPaymentService(config.paypal.clientId);
        }
    }

    /**
     * Process payment with selected provider
     */
    async processPayment(
        provider: 'stripe' | 'razorpay' | 'paypal',
        packageId: string,
        userDetails: {
            name: string;
            email: string;
            phone?: string;
        }
    ): Promise<PaymentResult> {
        const pkg = servicePackages.find((p) => p.id === packageId);
        if (!pkg) {
            return { success: false, error: 'Package not found' };
        }

        try {
            switch (provider) {
                case 'stripe':
                    if (!this.stripe) throw new Error('Stripe not configured');
                    const session = await this.stripe.createCheckoutSession(
                        pkg.price,
                        pkg.name,
                        `${window.location.origin}/payment/success`,
                        `${window.location.origin}/payment/cancel`
                    );
                    await this.stripe.redirectToCheckout(session.sessionId);
                    return { success: true, transactionId: session.sessionId };

                case 'razorpay':
                    if (!this.razorpay) throw new Error('Razorpay not configured');
                    const order = await this.razorpay.createOrder(pkg.price);
                    return await this.razorpay.openCheckout(
                        order.id,
                        pkg.price,
                        userDetails.name,
                        userDetails.email,
                        userDetails.phone || '',
                        pkg.description
                    );

                case 'paypal':
                    if (!this.paypal) throw new Error('PayPal not configured');
                    const orderId = await this.paypal.createOrder(pkg.price);
                    // PayPal requires additional UI integration
                    return { success: true, transactionId: orderId };

                default:
                    return { success: false, error: 'Invalid payment provider' };
            }
        } catch (error: any) {
            return { success: false, error: error.message };
        }
    }

    getPackages(): ServicePackage[] {
        return servicePackages;
    }
}

// ============================================
// EXPORT
// ============================================

export default {
    StripePaymentService,
    RazorpayPaymentService,
    PayPalPaymentService,
    PaymentManager,
    servicePackages,
};
