import { SITE_URL } from './site';
import { WHATSAPP_PHONE, whatsappLink } from './whatsapp';

export const COMPANY_EMAIL = 'vinod@finetuneelectronics.com';
export const OFFICE_ADDRESS = 'Opp. Arasu Nilaya Apartments, 1st Main Rd, CMR Layout, Lingarajapuram, Bengaluru, Karnataka 560084';
export const OFFICE_MAP_URL = 'https://www.google.com/maps/@13.0083083,77.625118,932a,75y,163.86h,89.34t/data=!3m7!1e1!3m5!1sMObcyjoSkrS-g0oWaR1e9g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0.6647864104627956%26panoid%3DMObcyjoSkrS-g0oWaR1e9g%26yaw%3D163.8569922235526!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D';
export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Finetune Electronics',
  url: SITE_URL,
  email: COMPANY_EMAIL,
  telephone: `+${WHATSAPP_PHONE}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Opp. Arasu Nilaya Apartments, 1st Main Rd, CMR Layout, Lingarajapuram',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560084',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Project enquiries',
    email: COMPANY_EMAIL,
    telephone: `+${WHATSAPP_PHONE}`,
    url: whatsappLink(),
  },
};