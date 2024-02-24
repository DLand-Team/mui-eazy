// @mui
import Box from "@mui/material/Box";
import { Image } from "../../../image";
import { fileFormat } from "../../../../components/file-thumbnail/utils";
import { Iconify } from "../../../iconify";
// ----------------------------------------------------------------------

type Props = {
	imgUrl?: string;
	type?: string;
};

export default function SingleFilePreview({ imgUrl = "" }: Props) {
	const format = fileFormat(imgUrl);
	return (
		<>
			<Box
				sx={{
					p: 1,
					top: 0,
					left: 0,
					width: 1,
					height: 1,
					position: "absolute",
				}}
			>
				{format == "image" ? (
					<Image
						alt="file preview"
						src={imgUrl}
						sx={{
							width: 1,
							height: 1,
							borderRadius: 1,
						}}
					/>
				) : (
					<Box
						component={() => (
							<Iconify icon={"mdi:file-code-outline"} />
						)}
						sx={{
							width: 1,
							height: 1,
							borderRadius: 1,
						}}
					/>
				)}
			</Box>
		</>
	);
}
