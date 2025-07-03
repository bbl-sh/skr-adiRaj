export function slugify(text = '') {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w-]+/g, '') // Remove all non-word chars except hyphen
		.replace(/--+/g, '-'); // Replace multiple - with single -
}
