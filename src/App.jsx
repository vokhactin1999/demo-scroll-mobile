import ContactList from "./component/ContactList";
import GagoLogoAndIconLeft from "./component/GagoLogoAndIconLeft";
import SideLeft from "./component/SideLeft";
import SideRight from "./component/SideRight";
import Spinner from "./component/Spinner";
import {
	useLoadingSpinner,
	useLockRoateHorizontallyOnMobile,
	useWindowSize,
} from "./hook";
import NotAllowBackground from "./component/NotAllowBackground";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const windowSize = useWindowSize();
	const { loading } = useLoadingSpinner();
	const { showOverlay } = useLockRoateHorizontallyOnMobile();

	const widthBrowser = windowSize.width;
	const isMobile = widthBrowser <= 450;
	const allowSee = isMobile || widthBrowser >= 1000;
	if (showOverlay)
		return <Spinner text={"Please rotate the mobile screen vertically"} />;
	if (loading) return <Spinner />;
	if (!allowSee) return <NotAllowBackground />;
	return (
		<div className='body'>
			<div className='cover-body'>
				<ContactList />
				<GagoLogoAndIconLeft />
				<div className='w-layout-hflex flex-block'>
					<SideLeft />
					<SideRight />
				</div>
			</div>
		</div>
	);
}

export default App;
