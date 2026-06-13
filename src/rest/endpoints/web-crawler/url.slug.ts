export const AEPS_MAIN_WEB_CRAWLER: string = 'wc';

export const AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_POST: string = 'submit-otp/:fingerprint/:id';
export const AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_GET: string = `${AEPS_WEB_CRAWLER_SUBMIT_OTP_VIA_POST}/:otp`;
