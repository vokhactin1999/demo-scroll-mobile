import React from "react";
import "./GagoLogoAndIconLeft.css";
import SelectLanguage from "./SelectLanguage";
function GagoLogoAndIconLeft(props) {
	return (
		<a
			href='#'
			aria-current='page'
			className='logo-link w-inline-block w--current'>
			<div className='logo-embed w-embed w-100 '>
				<div className='logo-member container h-80'>
					<div className='row align-items-start w-100'>
						<div className='col-3 p-0'>
							<img id='logo' src='Logo.png' alt='' />
						</div>
						<div className='col-9 ' style={{ paddingLeft: 20 }}>
							<div className='row align-items-start pb-1'>
								<div className='col-2'>
									<div className='rounded'>
										<div className='member-content'>
											<img
												className='member'
												src='Frame 4.png'
												style={{
													backgroundRepeat:
														"no-repeat",
													backgroundSize: "cover",
												}}
											/>
										</div>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 5.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 6.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 7.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 8.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
							</div>
							<div className='row align-items-start'>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 9.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 10.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 11.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
								<div className='col-2 '>
									<div className='member-content'>
										<img
											className='member'
											src='Frame 12.png'
											style={{
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container-select m-0 p-0 '>
				<SelectLanguage />
			</div>
		</a>
	);
}

export default GagoLogoAndIconLeft;
