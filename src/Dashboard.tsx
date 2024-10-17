import { useDebugValue } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


export const Dashboard = () => {
    const isOnline: boolean = false;
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return (
        <>
            <Navbar />
            <h1>Dashboard</h1>
            <Sidebar />
        </>
    )
}