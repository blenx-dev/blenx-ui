"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Input, Label } from "@/components/ui/Input/input";
import { Textarea } from "@/components/ui/Textarea/textarea";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody } from "@/components/ui/Card/card";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { contactStyles } from "./contact-01.styles";

type ContactInfo = {
	address?: string;
	phone?: string;
	email?: string;
};

type FormValues = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = PropsWithStylex<{
	title?: string;
	description?: string;
	contactInfo?: ContactInfo;
	onSubmit?: (values: FormValues) => void;
	subjects?: { value: string; label: string }[];
}>;

const defaultSubjects = [
	{ value: "general", label: "General inquiry" },
	{ value: "support", label: "Technical support" },
	{ value: "billing", label: "Billing question" },
	{ value: "partnership", label: "Partnership" },
	{ value: "other", label: "Other" },
];

export function Contact01({
	title = "Get in touch",
	description = "Have a question or feedback? We'd love to hear from you.",
	contactInfo,
	onSubmit,
	subjects = defaultSubjects,
	style,
}: Props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState(subjects[0]?.value ?? "");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit?.({ name, email, subject, message });
		setSubmitted(true);
	};

	if (submitted) {
		return (
			<section {...stylex.props(contactStyles.section, style)}>
				<Card>
					<CardBody>
						<div {...stylex.props(contactStyles.successState)}>
							<div {...stylex.props(contactStyles.successIcon)}>
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
								</svg>
							</div>
							<Text variant="h3">Message sent!</Text>
							<Text variant="body1" style={contactStyles.description}>
								Thank you for reaching out. We&apos;ll get back to you as soon
								as possible.
							</Text>
							<Button variant="ghost" onClick={() => setSubmitted(false)}>
								Send another message
							</Button>
						</div>
					</CardBody>
				</Card>
			</section>
		);
	}

	return (
		<section {...stylex.props(contactStyles.section, style)}>
			<div {...stylex.props(contactStyles.inner)}>
				<div {...stylex.props(contactStyles.header)}>
					<Text variant="h2">{title}</Text>
					<Text variant="body1" style={contactStyles.description}>
						{description}
					</Text>
				</div>

				<Card>
					<CardBody>
						<form
							onSubmit={handleSubmit}
							aria-label="Contact form"
							{...stylex.props(contactStyles.form)}
						>
							<div {...stylex.props(contactStyles.formRow)}>
								<div {...stylex.props(contactStyles.fieldGroup)}>
									<Label htmlFor="contact-name">Name</Label>
									<Input
										id="contact-name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
										autoComplete="name"
									/>
								</div>
								<div {...stylex.props(contactStyles.fieldGroup)}>
									<Label htmlFor="contact-email">Email</Label>
									<Input
										id="contact-email"
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										autoComplete="email"
									/>
								</div>
							</div>

							<div {...stylex.props(contactStyles.fieldGroup)}>
								<Label htmlFor="contact-subject">Subject</Label>
								<select
									id="contact-subject"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									required
									{...stylex.props(contactStyles.select)}
								>
									{subjects.map((s) => (
										<option key={s.value} value={s.value}>
											{s.label}
										</option>
									))}
								</select>
							</div>

							<div {...stylex.props(contactStyles.fieldGroup)}>
								<Label htmlFor="contact-message">Message</Label>
								<Textarea
									id="contact-message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
									rows={5}
								/>
							</div>

							<Button type="submit" variant="primary" fullWidth>
								Send message
							</Button>
						</form>
					</CardBody>
				</Card>

				{contactInfo && (
					<div {...stylex.props(contactStyles.infoSidebar)}>
						{contactInfo.address && (
							<div {...stylex.props(contactStyles.infoItem)}>
								<Text variant="caption" style={contactStyles.infoLabel}>
									Address
								</Text>
								<Text variant="body2" style={contactStyles.infoValue}>
									{contactInfo.address}
								</Text>
							</div>
						)}
						{contactInfo.phone && (
							<div {...stylex.props(contactStyles.infoItem)}>
								<Text variant="caption" style={contactStyles.infoLabel}>
									Phone
								</Text>
								<Text variant="body2" style={contactStyles.infoValue}>
									{contactInfo.phone}
								</Text>
							</div>
						)}
						{contactInfo.email && (
							<div {...stylex.props(contactStyles.infoItem)}>
								<Text variant="caption" style={contactStyles.infoLabel}>
									Email
								</Text>
								<Text variant="body2" style={contactStyles.infoValue}>
									{contactInfo.email}
								</Text>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
