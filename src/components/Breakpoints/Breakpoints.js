import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
    return (useMediaQuery({ minWidth: 992 })) ? children : null
}

export const Mobile = ({ children }) => {
    return (useMediaQuery({ maxWidth: 991 })) ? children : null
}