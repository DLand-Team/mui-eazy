import React from "react";
import FooterContainer from "@/components/Footer/index.style";

type FooterPropsType = {
	className?: string;
};

const Footer: React.ComponentType<FooterPropsType> = (props) => {
	return (
		<FooterContainer>
			<div className="content">
				<div className="block">
					<div className="title">客服支持</div>
					<div className="list">
						<div className="each">帮助中心</div>
						<div className="each">「AirCover 四海无忧」</div>
						<div className="each">支持残疾人士</div>
						<div className="each">取消预订的选择</div>
						<div className="each">爱彼迎针对新冠肺炎疫情的举措</div>
						<div className="each">举报街区问题</div>
					</div>
				</div>
				<div className="divide"></div>
				<div className="block">
					<div className="title">社区</div>
					<div className="list">
						<div className="each">Airbnb.org：灾难救助住宿</div>
						<div className="each">遏制歧视</div>
					</div>
				</div>
				<div className="divide"></div>
				<div className="block">
					<div className="title">出租房源</div>
					<div className="list">
						<div className="each">来爱彼迎发布房源</div>
						<div className="each">AirCover 四海无忧（房东版）</div>
						<div className="each">浏览出租资源</div>
						<div className="each">访问我们的社区论坛</div>
						<div className="each">如何负责任地出租</div>
					</div>
				</div>
				<div className="divide"></div>
				<div className="block">
					<div className="title">爱彼迎</div>
					<div className="list">
						<div className="each">新闻</div>
						<div className="each">了解新功能</div>
						<div className="each">创始人来信</div>
						<div className="each">工作机会</div>
						<div className="each">投资者</div>
					</div>
				</div>
			</div>
			<div className="bottom">页脚 xxxxxxxxx aaaaaaaaa 营业执照</div>
		</FooterContainer>
	);
};

export default Footer;
