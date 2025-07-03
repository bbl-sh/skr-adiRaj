import { error } from '@sveltejs/kit';
import { DB } from '$lib/api/database.js';
import { slugify } from '$lib/utils.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const recruitmentData = DB.recruitment_list.find(
		(item) => slugify(item.recruitment_title) === params.slug
	);

	if (!recruitmentData) {
		error(404, {
			message: 'Recruitment not found'
		});
	}

	// --- Recruitment Details ---
	const recruitmentDetails = [];
	const appDetails = recruitmentData.application_details; // Shortcut

	if (appDetails?.vacancies) {
		recruitmentDetails.push({ label: 'Vacancies', value: appDetails.vacancies });
	}
	if (appDetails?.form_opening_date && appDetails?.form_closing_date) {
		recruitmentDetails.push({
			label: 'Application Dates',
			value: `${appDetails.form_opening_date} to ${appDetails.form_closing_date}`
		});
	}
	if (appDetails?.exam_date) {
		recruitmentDetails.push({ label: 'Exam Date', value: appDetails.exam_date });
	}
	if (appDetails?.mode_of_exam) {
		recruitmentDetails.push({ label: 'Mode of Exam', value: appDetails.mode_of_exam });
	}
	if (appDetails?.selection_process) {
		recruitmentDetails.push({ label: 'Selection Process', value: appDetails.selection_process });
	}

	// --- Eligibility Details ---
	const eligibilityDetails = [];
	const eligibility = recruitmentData.eligibility_criteria; // Shortcut

	if (eligibility?.age_limit?.min_age && eligibility?.age_limit?.max_age) {
		eligibilityDetails.push({
			label: 'Age Limit',
			value: `${eligibility.age_limit.min_age} - ${eligibility.age_limit.max_age} years`
		});
	}
	if (eligibility?.education_qualification) {
		eligibilityDetails.push({
			label: 'Education Qualification',
			value: eligibility.education_qualification
		});
	}
	if (eligibility?.age_relaxation) {
		const relaxationDetails = Object.entries(eligibility.age_relaxation)
			.map(([key, value]) => `${key.replace(/_/g, ' ').toUpperCase()}: ${value}`)
			.join(', ');
		eligibilityDetails.push({ label: 'Age Relaxation', value: relaxationDetails });
	}

	// --- Application Fee Details ---
	const feeDetails = [];
	const fees = recruitmentData.application_details?.application_fee; // Shortcut

	if (fees?.general_obc) {
		feeDetails.push({ label: 'General / OBC', value: fees.general_obc });
	}
	if (fees?.sc_st) {
		feeDetails.push({ label: 'SC / ST', value: fees.sc_st });
	}
	if (fees?.payment_mode) {
		feeDetails.push({ label: 'Payment Mode', value: fees.payment_mode });
	}

	const pageData = {
		recruitment: recruitmentData,
		// Safely access featuredJobs with a fallback to an empty array
		featuredJobs: recruitmentData.featuredJobs ?? [],
		recruitmentDetails,
		eligibilityDetails,
		feeDetails
	};

	return {
		pageData
	};
}
