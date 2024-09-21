import profileImage from "../store/profile_picture.png";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary side-content" style={{ width: "250px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Main Menu</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto side-content">
                <li className="nav-item" onClick={() => setSelectedTab("Home")}>
                    <a href="#" className={`nav-link ${selectedTab === 'Home' ? 'active' : 'link-body-emphasis'}`} aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li className="nav-item" onClick={() => setSelectedTab("Create Post")}>
                    <a href="#"className={`nav-link ${selectedTab === 'Create Post' ? 'active' : 'link-body-emphasis'} `}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Create Post
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={profileImage} alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>Pushpraj Upadhyay</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;