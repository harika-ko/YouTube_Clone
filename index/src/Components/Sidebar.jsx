import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { HouseDoorFill, Compass, CameraReels, CollectionPlay, Wallet2, List } from 'react-bootstrap-icons';
import './CSS/Sidebar.css'

const Sidebar = () => {
    return (
        <SidebarMenu className="main-sidebar">
            <div className='home-div'>
                <SidebarMenu.Brand>
                    <List className='side-icons list' />
                </SidebarMenu.Brand>
            </div>

            <SidebarMenu.Body>
                <SidebarMenu.Nav>
                    <div className='home-div'>
                        <div>
                            <SidebarMenu.Nav.Icon>
                                <HouseDoorFill className='side-icons home-icon' />
                            </SidebarMenu.Nav.Icon>
                        </div>
                        <div>
                            <SidebarMenu.Nav.Title>
                                <p className="sidebar-text">Home</p>
                            </SidebarMenu.Nav.Title>
                        </div>
                    </div>

                    <div className='home-div'>
                        <div>
                            <SidebarMenu.Nav.Icon>
                                <Compass className='side-icons' />
                            </SidebarMenu.Nav.Icon>
                        </div>
                        <div>
                            <SidebarMenu.Nav.Title>
                                <p className="sidebar-text">Explore</p>
                            </SidebarMenu.Nav.Title>
                        </div>
                    </div>

                    <div className='home-div'>
                        <div>
                            <SidebarMenu.Nav.Icon>
                                <CameraReels className='side-icons' />
                            </SidebarMenu.Nav.Icon>
                        </div>
                        <div>
                            <SidebarMenu.Nav.Title>
                                <p className="sidebar-text">Shorts</p>
                            </SidebarMenu.Nav.Title>
                        </div>
                    </div>

                    <div className='home-div'>
                        <div>
                            <SidebarMenu.Nav.Icon>
                                <CollectionPlay className='side-icons' />
                            </SidebarMenu.Nav.Icon>
                        </div>
                        <div>
                            <SidebarMenu.Nav.Title>
                                <p className="sidebar-text">Subscriptions</p>
                            </SidebarMenu.Nav.Title>
                        </div>
                    </div>

                    <div className='home-div'>
                        <div>
                            <SidebarMenu.Nav.Icon>
                                <Wallet2 className='side-icons' />
                            </SidebarMenu.Nav.Icon>
                        </div>
                        <div>
                            <SidebarMenu.Nav.Title>
                                <p className="sidebar-text">Library</p>
                            </SidebarMenu.Nav.Title>
                        </div>
                    </div>
                </SidebarMenu.Nav>
            </SidebarMenu.Body>
        </SidebarMenu >


    )
}

export default Sidebar