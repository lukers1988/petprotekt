import { auth } from '@appConfig/firebase';
import { signOut } from 'firebase/auth';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '@appStore/UserReducer';
import { Menubar } from 'primereact/menubar';
import { Chart } from 'primereact/chart';
import { PanelMenu } from 'primereact/panelmenu';
import { Card } from 'react-bootstrap';


const Main = () => {
    const loggedInUser = useSelector((state: any) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth);
        dispatch(logout());
    }
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
        },
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
        },
        {
            label: 'Help',
            icon: 'pi pi-fw pi-question',
        },
    ];

    const menuItems = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            items: [
                {
                    label: 'Statistics',
                    icon: 'pi pi-fw pi-chart-bar',
                },
                {
                    label: 'Reports',
                    icon: 'pi pi-fw pi-file',
                },
            ],
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-users',
            items: [
                {
                    label: 'Manage Users',
                    icon: 'pi pi-fw pi-user-edit',
                },
                {
                    label: 'User Roles',
                    icon: 'pi pi-fw pi-user-plus',
                },
            ],
        },
        {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            items: [
                {
                    label: 'General',
                    icon: 'pi pi-fw pi-sliders-h',
                },
                {
                    label: 'Security',
                    icon: 'pi pi-fw pi-shield',
                },
            ],
        },
    ];

    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5',
            },
            {
                label: 'Expenses',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#FFA726',
            },
        ],
    };

    return (
        <div className="dashboard">
        {!loggedInUser && <>
            <Link to={'/auth/login'}>Login</Link><br/>
            <Link to={'/auth/register'}>Register</Link>
        </>}
        {loggedInUser && <Button icon="pi pi-logout" onClick={handleLogout}>Logout</Button>}
            <Menubar model={items} />
            <div className="p-grid p-mt-4">
                <div className="p-col-12 p-md-3">
                    <PanelMenu model={menuItems} style={{ width: '100%' }} />
                </div>
                <div className="p-col-12 p-md-9">
                    <Card title="Sales Overview">
                        <Chart type="line" data={chartData} />
                    </Card>
                </div>
            </div>
        </div>
    );
    

    // return  <div className="card flex justify-content-center">
    // </div>
}

export default Main;