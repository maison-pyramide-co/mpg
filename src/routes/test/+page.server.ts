// import { fail } from '@sveltejs/kit';
// import nodemailer from 'nodemailer';
// import {
// 	HR_EMAIL,
// 	SMTP_HOST,
// 	SMTP_PORT,
// 	SMTP_SECURE,
// 	SMTP_USER,
// 	SMTP_PASS,
// 	MAIL_FROM
// } from '$app/env/private';

// const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB per file
// const ALLOWED_EXT = ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.zip', '.key'];
// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const POSITION = 'Senior PR Executive';

// const escapeHtml = (s) =>
// 	s.replace(
// 		/[&<>"']/g,
// 		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
// 	);

// /** @param {File} file */
// function fileProblem(file, label) {
// 	if (!(file instanceof File) || file.size === 0) return `${label} is required`;
// 	if (file.size > MAX_FILE_SIZE) return `${label} must be under 8MB`;
// 	const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
// 	if (!ALLOWED_EXT.includes(ext)) return `${label} must be one of: ${ALLOWED_EXT.join(', ')}`;
// 	return null;
// }

// function createTransport() {
// 	return nodemailer.createTransport({
// 		host: SMTP_HOST,
// 		port: Number(SMTP_PORT || 465),
// 		secure: (SMTP_SECURE ?? 'true') === 'true',
// 		auth: { user: SMTP_USER, pass: SMTP_PASS }
// 	});
// }

// export const actions = {
// 	default: async ({ request }) => {
// 		const data = await request.formData();

// 		const values = {
// 			firstName: String(data.get('firstName') ?? '').trim(),
// 			lastName: String(data.get('lastName') ?? '').trim(),
// 			email: String(data.get('email') ?? '').trim(),
// 			phone: String(data.get('phone') ?? '').trim(),
// 			coverLetter: String(data.get('coverLetter') ?? '').trim()
// 		};
// 		const cv = data.get('cv');
// 		const portfolio = data.get('portfolio');

// 		// Honeypot: bots fill this, humans never see it. Pretend success.
// 		if (String(data.get('website') ?? '') !== '') return { success: true };

// 		/** @type {Record<string, string>} */
// 		const errors: any = {};
// 		if (!values.firstName) errors.firstName = 'First name is required';
// 		if (!values.lastName) errors.lastName = 'Last name is required';
// 		if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email address';
// 		if (values.phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a valid phone number';
// 		const cvErr = fileProblem(cv, 'CV');
// 		if (cvErr) errors.cv = cvErr;
// 		const portfolioErr = fileProblem(portfolio, 'Portfolio');
// 		if (portfolioErr) errors.portfolio = portfolioErr;
// 		if (!values.coverLetter) errors.coverLetter = 'Cover letter is required';

// 		if (Object.keys(errors).length) {
// 			// never echo files back; only text values
// 			return fail(400, { errors, values });
// 		}

// 		if (!HR_EMAIL || !SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
// 			console.error('Missing HR_EMAIL / SMTP_* environment variables');
// 			return fail(500, {
// 				errors: { form: 'Mail is not configured. Please try again later.' },
// 				values
// 			});
// 		}

// 		const fullName = `${values.firstName} ${values.lastName}`;

// 		const attachments = await Promise.all(
// 			[cv, portfolio].map(async (f: any) => ({
// 				filename: f.name,
// 				content: Buffer.from(await f.arrayBuffer()),
// 				contentType: f.type || undefined
// 			}))
// 		);

// 		const html = `
// 			<h2>New application: ${POSITION}</h2>
// 			<table cellpadding="6" style="border-collapse:collapse">
// 				<tr><td><b>Name</b></td><td>${escapeHtml(fullName)}</td></tr>
// 				<tr><td><b>Email</b></td><td>${escapeHtml(values.email)}</td></tr>
// 				<tr><td><b>Phone</b></td><td>${escapeHtml(values.phone)}</td></tr>
// 				<tr><td><b>CV</b></td><td>${escapeHtml(attachments[0].filename)} (attached)</td></tr>
// 				<tr><td><b>Portfolio</b></td><td>${escapeHtml(attachments[1].filename)} (attached)</td></tr>
// 			</table>
// 			<h3>Cover letter</h3>
// 			<p style="white-space:pre-wrap">${escapeHtml(values.coverLetter)}</p>`;

// 		const text = [
// 			`New application: ${POSITION}`,
// 			`Name: ${fullName}`,
// 			`Email: ${values.email}`,
// 			`Phone: ${values.phone}`,
// 			`CV: ${attachments[0].filename} (attached)`,
// 			`Portfolio: ${attachments[1].filename} (attached)`,
// 			'',
// 			'Cover letter:',
// 			values.coverLetter
// 		].join('\n');

// 		try {
// 			await createTransport().sendMail({
// 				from: MAIL_FROM || SMTP_USER,
// 				to: HR_EMAIL,
// 				replyTo: `${fullName} <${values.email}>`,
// 				subject: `${POSITION} application: ${fullName}`,
// 				text,
// 				html,
// 				attachments
// 			});
// 		} catch (err) {
// 			console.error('Failed to send application email', err);
// 			return fail(500, {
// 				errors: { form: 'Something went wrong sending your application. Please try again.' },
// 				values
// 			});
// 		}

// 		return { success: true };
// 	}
// };
