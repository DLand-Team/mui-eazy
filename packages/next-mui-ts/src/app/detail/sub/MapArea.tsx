import { styled } from "@mui/material/styles";
import HighlightText from "@/common/components/Text/HighlightText";
import GoogleMap from "@/common/components/GoogleMap/GoogleMap";
import LowlightText from "@/common/components/Text/LowlightText";

type MapAreaPropsType = {
	className?: string;
};

const MapArea = styled((props: MapAreaPropsType) => {
	return (
		<div className={props.className} {...props}>
			<HighlightText className="title">位置</HighlightText>
			<GoogleMap
				street={"15044-15298 Irish Beach Dr"}
				state={"Manchester California"}
				country={"USA"}
			></GoogleMap>
			<HighlightText className="sub-title" size="small">
				曼彻斯特，加利福尼亚，美国
			</HighlightText>
			<LowlightText>
				房源位于一个小住宅区内，房源分开。
				距离曼彻斯特镇5分钟路程，那里有一个完整的市场和五金店。 Point
				Arena向南仅15分钟路程，那里有餐厅和美丽的Point竞技场灯塔。
				北边是Elk、Albion和Mendocino （ 40分钟）。 距离安德森谷（
				Anderson Valley ） 40分钟车程，这是一个崭露头角的葡萄酒种植区。
				附近有许多远足步道和海滩。 您可以在线轻松找到其他活动。
			</LowlightText>
		</div>
	);
})((theme) => ({
	display: "flex",
	flexDirection: "column",
	padding: "24px 0",
	width: "100%",

	"& > .title": {
		marginBottom: "24px",
	},

	"& > .sub-title": {
		marginTop: "24px",
		marginBottom: "24px",
	},
}));

export default MapArea;
