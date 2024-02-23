"use client";

import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Iconify, useBoolean } from "mui-eazy";
import { useRef } from "react";
import { RouterLink } from "src/routes/components";
import { paths } from "src/routes/paths";
import { LoginForm } from "./form";
// ----------------------------------------------------------------------

export default function LoginView() {
	const passwordShow = useBoolean();

	// const LoginSchema = Yup.object().shape({
	// 	email: Yup.string()
	// 		.required("Email is required")
	// 		.email("That is not an email"),
	// 	password: Yup.string()
	// 		.required("Password is required")
	// 		.min(6, "Password should be of minimum 6 characters length"),
	// });
	const fromRef = useRef<any>();
	const defaultValues = {
		email: "",
		password: "",
	};

	// const methods = useForm({
	// 	resolver: yupResolver(LoginSchema),
	// 	defaultValues,
	// });

	// const {
	// 	reset,
	// 	handleSubmit,
	// 	formState: { isSubmitting },
	// } = methods;

	// const onSubmit = handleSubmit(async (data) => {
	// 	try {
	// 		await new Promise((resolve) => setTimeout(resolve, 500));
	// 		reset();
	// 		console.log("DATA", data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// });

	const renderHead = (
		<div>
			<Typography variant="h3" paragraph>
				Login
			</Typography>

			<Typography variant="body2" sx={{ color: "text.secondary" }}>
				{`Don’t have an account? `}
				<Link
					component={RouterLink}
					href={paths.registerBackground}
					variant="subtitle2"
					color="primary"
				>
					Get started
				</Link>
			</Typography>
		</div>
	);

	// const renderSocials = (
	// 	<Stack direction="row" spacing={2}>
	// 		<Button fullWidth size="large" color="inherit" variant="outlined">
	// 			<Iconify icon="logos:google-icon" width={24} />
	// 		</Button>

	// 		<Button fullWidth size="large" color="inherit" variant="outlined">
	// 			<Iconify
	// 				icon="carbon:logo-facebook"
	// 				width={24}
	// 				sx={{ color: "#1877F2" }}
	// 			/>
	// 		</Button>

	// 		<Button color="inherit" fullWidth variant="outlined" size="large">
	// 			<Iconify
	// 				icon="carbon:logo-github"
	// 				width={24}
	// 				sx={{ color: "text.primary" }}
	// 			/>
	// 		</Button>
	// 	</Stack>
	// );

	return (
		<>
			{renderHead}

			<LoginForm defaultValues={{}} formRef={fromRef} />

			<Divider>
				<Typography variant="body2" sx={{ color: "text.disabled" }}>
					or continue with
				</Typography>
			</Divider>

			{/* {renderSocials} */}
		</>
	);
}
