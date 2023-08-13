import { createContext, useState } from 'react'
const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({ children }) => {
    const [points,setpoints] = useState(100);
    let contextData={
        points:points,
        setpoints:setpoints
    }
    return (
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}
