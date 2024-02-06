"use client";
import image1 from "@/assets/image/test-image-1.jpg";
import image2 from "@/assets/image/test-image-2.jpg";
import image3 from "@/assets/image/test-image-3.webp";
import image4 from "@/assets/image/test-image-4.webp";
import user1 from "@/assets/image/user-icon-1.webp";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import styles from "./detail.module.scss";
import MapArea from "./sub/MapArea";

const DetailView = () => {
	let isMobile = false;

	return (
		<div className={styles.container}>
			{isMobile && "移动端"}
			<div className={styles.content}>
				<div className={styles.titleBlock}>
					<div className={styles.titleBlockLeft}>
						<div className={styles.title}>海路</div>
						<div className={styles.subTitle}>
							<div className={styles.subTitleLeft}>
								曼彻斯特，加利福尼亚，美国
							</div>
							<div className={styles.subTitleRight}>
								<Button
									variant="outlined"
									startIcon={<FavoriteBorderOutlinedIcon />}
									size="small"
								>
									收藏
								</Button>
								<Button
									variant="outlined"
									startIcon={<IosShareOutlinedIcon />}
									size="small"
								>
									分享
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.images}>
					<div className={styles.imageAutoHeightContainer}>
						<div className={styles.left}>
							<img src={image1.src} alt="" />
						</div>
						<div className={styles.right}>
							<img src={image1.src} alt="" />
							<img src={image2.src} alt="" />
							<img src={image3.src} alt="" />
							<img src={image4.src} alt="" />
						</div>
					</div>
				</div>
				<div className={styles.doubleArea}>
					<div className={styles.leftContent}>
						<div className={styles.titleBlock}>
							<div className={styles.titleBlockLeft}>
								<div className={styles.title}>
									由Jon出租的整套民居
								</div>
								<div className={styles.subTitle}>
									<div className={styles.subTitleLeft}>
										可住 6 人2 间卧室3 张床2 个卫生间
									</div>
								</div>
							</div>
							<div className={styles.titleBlockRight}>
								<img
									className={styles.titleIcon}
									src={user1.src}
									alt=""
								/>
							</div>
						</div>
						<div className={styles.divideLine}></div>
						<div className={styles.itemList}>
							{[
								{
									icon: (
										<LibraryAddCheckOutlinedIcon
											sx={{ fontSize: 28 }}
										/>
									),
									title: "自助入住",
									value: "使用密码钥匙盒自助入住。",
								},
								{
									icon: (
										<AddReactionOutlinedIcon
											sx={{ fontSize: 28 }}
										/>
									),
									title: "Jon是超赞房东",
									value: "超赞房东经验丰富、评分很高，他们致力于为房客提供优质的住宿体验。",
								},
								{
									icon: (
										<LocationOnOutlinedIcon
											sx={{ fontSize: 28 }}
										/>
									),
									title: "绝佳房源位置",
									value: "近期 100% 的房客对房源位置给出了 5 星好⁠评。",
								},
							].map((each, i) => {
								return (
									<div className={styles.item} key={i}>
										<div className={styles.itemIcon}>
											{each.icon}
										</div>
										<div className={styles.itemText}>
											<div className={styles.itemHeader}>
												{each.title}
											</div>
											<div className={styles.itemLabel}>
												{each.value}
											</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className={styles.divideLine}></div>
					</div>
					<div className={styles.rightContent}>
						<div className={styles.stickyCard}>
							<div className={styles.cardTitle}>
								<div className={styles.cardTitleText}>
									￥2,862晚
								</div>
								<div className={styles.cardTitleSubText}>
									4.96 · 246条评价
								</div>
							</div>
							<div className={styles.cardContent}>
								<div className={styles.outlinePanel}>
									<div className={styles.panelTop}>
										<div
											className={
												styles.panelTopLeft +
												" " +
												styles.panelBlock
											}
										>
											<div
												className={
													styles.panelBlockTitle
												}
											>
												入住日期
											</div>
											<div
												className={
													styles.panelBlockText
												}
											>
												2023-07-07
											</div>
										</div>
										<div
											className={
												styles.panelTopRight +
												" " +
												styles.panelBlock
											}
										>
											<div
												className={
													styles.panelBlockTitle
												}
											>
												退房日期
											</div>
											<div
												className={
													styles.panelBlockText
												}
											>
												2023-07-07
											</div>
										</div>
									</div>
									<div
										className={
											styles.panelBottom +
											" " +
											styles.panelBlock
										}
									>
										<div className={styles.panelBlockTitle}>
											房客
										</div>
										<div className={styles.panelBlockText}>
											2023-07-07
										</div>
									</div>
								</div>
							</div>
							<Button variant="contained">选择其他日期</Button>
						</div>
					</div>
					<div style={{ padding: "500px 0" }}></div>
				</div>
				<Divider />
				<MapArea className={styles.map}></MapArea>
			</div>
		</div>
	);
};

export default DetailView;
