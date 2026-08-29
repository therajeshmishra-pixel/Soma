/**
 * Soma Lead Scoring Engine (0-100)
 * 
 * Based on CRM Strategy:
 * - Assessment Score (50%): High intensity = High score
 * - Professional Context (25%): HR/C-Suite = Multiplier
 * - Intake Depth (15%): Emotional goals, specific roadblocks = Engagement
 * - Program Readiness (10%): Categorical urgency (Burnout vs Wellness)
 */

export const calculateLeadScore = (inquiry) => {
  let score = 0;
  const details = inquiry.details || {};

  // 1. Assessment Intensity (The "Burnout" Factor)
  // Check common assessment keys like totalScore, stressLevel, etc.
  if (details.totalScore) {
    const rawScore = parseInt(details.totalScore);
    const maxPossible = 100; // Adjust based on your assessment scale
    score += (rawScore / maxPossible) * 50;
  } else if (details.assessmentType) {
    score += 30; // Base score for taking the time to do an assessment
  }

  // 2. Professional Context (Persona)
  const role = (details.designation || details.role || "").toLowerCase();
  const org = (details.organization || details.company || "").toLowerCase();
  
  let persona = "Individual";
  if (role.includes('hr') || role.includes('chief') || role.includes('manager') || role.includes('ceo') || role.includes('founder')) {
    score += 25;
    persona = "Institutional";
  } else if (org.length > 2) {
    score += 10;
    persona = "Institutional";
  }

  // 3. Intake Depth
  const fieldsFilled = Object.keys(details).length;
  if (fieldsFilled > 8) score += 15;
  else if (fieldsFilled > 4) score += 7;

  // 4. Program Readiness / Purpose
  const purpose = (inquiry.purpose || inquiry.type || "").toLowerCase();
  if (purpose.includes('burnout') || purpose.includes('counselling') || purpose.includes('urgent')) {
    score += 10;
  } else if (purpose.includes('corporate') || purpose.includes('workshop')) {
    score += 5;
  }

  // Cap at 100
  score = Math.min(Math.round(score), 100);

  // Assign Tiers
  let tier = "Awareness";
  if (score >= 75) tier = "High (Burnout Zone)";
  else if (score >= 45) tier = "Medium (Threshold Zone)";
  else tier = "Low (Awareness Zone)";

  return { score, tier, persona };
};
