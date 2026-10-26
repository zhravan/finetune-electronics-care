export const WHATSAPP_PHONE = '919986338671';

const DEFAULT_MESSAGE = 'Hi Finetune Electronics, I’d like to discuss a project.';

export function whatsappLink(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
