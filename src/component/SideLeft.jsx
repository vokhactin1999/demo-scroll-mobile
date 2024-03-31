import React from "react";
import "./SideLeft.css";
import { useGetElementById } from "../hook";

function SideLeft(props) {
	const selectedElement = useGetElementById();
	return (
		<div
			className='side gauche'
			style={{ backgroundImage: `url('${selectedElement.image}')` }}>
			<div className='w-layout-vflex flex-block-6'>
				<div id='temoinContainer'>
					<div className='temoin'>
						<div className='bloc-temoin bac3'>
							<div className='bloc-text'>
								<div className='wrapper-btn-view-more'>
									<div className='row'>
										<div
											className='col-12 w-col-tiny-8 p-0'
											style={{ textAlign: "left" }}>
											<h3
												className='titre-temoin black'
												style={{
													color: `${selectedElement.mainColor}`,
												}}>
												{selectedElement?.title}
											</h3>
											<div
												id='undermeContent'
												className='texte-temoin'
												style={{
													color: `${selectedElement.itemColor}`,
												}}>
												{selectedElement?.content}
											</div>
										</div>
										<div
											className='viewMore'
											style={{ textAlign: "right" }}>
											<a
												target='_blank'
												href='https://www.behance.net/gallery/184295181/Mascot-Design-UNDERME'>
												<button
													className='btn-view-more link-view-more'
													style={{
														backgroundColor: `${selectedElement.mainColor}`,
														color: "#ffff",
													}}>
													<svg
														width={24}
														height={24}
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'>
														<path
															d='M14.43 5.92993L20.5 11.9999L14.43 18.0699'
															stroke='#ffff'
															strokeWidth='1.5'
															strokeMiterlimit={
																10
															}
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
														<path
															d='M3.5 12H20.33'
															stroke='#ffff'
															strokeWidth='1.5'
															strokeMiterlimit={
																10
															}
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>{" "}
													<span className='view-more-content'>
														View more
													</span>
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideLeft;
