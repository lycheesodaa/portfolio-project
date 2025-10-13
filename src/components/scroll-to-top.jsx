import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        // For the home page, scroll to the top
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }
        
        // Then set up a small delay to handle dynamic content
        const timeoutId = setTimeout(() => {
            const voxelDog = document.querySelector('.voxel-dog')
            const navbar = document.querySelector('nav')

            if (voxelDog && navbar) {
                const navbarHeight = navbar.offsetHeight
                const voxelHeight = voxelDog.offsetHeight
                const scrollPosition = voxelHeight - navbarHeight

                window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
            }
        }, 100) // Small delay to allow for content to load

        // Cleanup timeout on unmount or route change
        return () => clearTimeout(timeoutId)
    }, [pathname])

    return null
}