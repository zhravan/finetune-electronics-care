import { SITE_URL } from './site';
import { WHATSAPP_PHONE, whatsappLink } from './whatsapp';

export const COMPANY_EMAIL = 'vinod@finetuneelectronics.com';
export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Finetune Electronics',
  url: SITE_URL,
  email: COMPANY_EMAIL,
  telephone: `+${WHATSAPP_PHONE}`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Project enquiries',
    email: COMPANY_EMAIL,
    telephone: `+${WHATSAPP_PHONE}`,
    url: whatsappLink(),
  },
};