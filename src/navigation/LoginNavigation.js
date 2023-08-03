import React, { useContext } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { UserContext } from '../Context/UserContext';
import UserNavigation from '../navigation/UserNavigation'
import AppNavigation from '../navigation/AppNavigation'

const LoginNavigation = () => {
    const { user } = useContext(UserContext)
    return (
        <NavigationContainer>
            {
                user ? <AppNavigation /> : <UserNavigation />
            }
        </NavigationContainer>
    )
}

export default LoginNavigation