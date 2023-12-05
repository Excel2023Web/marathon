import { lazy } from 'react'

const LandingPage = lazy(() => import('./LandingPage/LandingPage'));
const SuccessPage = lazy(() => import('./SuccessPage/SuccessPage'));

export { 
    LandingPage,
    SuccessPage
}