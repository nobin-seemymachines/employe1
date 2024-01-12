import { Outlet, Navigate } from 'react-router-dom'
import { fetchToken } from '../helpers/fetchToken'

const ProtectedRoutes = () => {
    let token = fetchToken()
    return (
        token ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoutes
