import React from 'react'
import Header from '../../organisms/header/Header'

export default PageLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
