/** Site enquiry recipient — update here or via env if needed later */
export const INQUIRY_EMAIL = "hello@elevatum.co";

export type InquiryMailtoFields = Record<string, string>;

export function buildInquiryMailtoUrl(subject: string, fields: InquiryMailtoFields): string {
  const header = "Elevatum website enquiry";
  const divider = "—".repeat(32);
  const bodyParts = [
    header,
    divider,
    "",
    ...Object.entries(fields).map(([label, value]) => `${label}: ${value.trim() || "—"}`),
    "",
    divider,
    `Reply to: ${fields.Email?.trim() || fields.email?.trim() || "—"}`,
  ];

  const params = new URLSearchParams({
    subject,
    body: bodyParts.join("\n"),
  });

  return `mailto:${INQUIRY_EMAIL}?${params.toString()}`;
}

export function openInquiryMailto(subject: string, fields: InquiryMailtoFields): void {
  window.location.href = buildInquiryMailtoUrl(subject, fields);
}
