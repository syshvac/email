import { VercelInviteUserEmail } from './emails/vercel-invite-user';
import { render } from '@react-email/render';

const html = render(<VercelInviteUserEmail/>, {
  pretty: true,
});

console.log(html);