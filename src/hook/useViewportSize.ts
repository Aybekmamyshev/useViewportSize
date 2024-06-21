import {useEffect, useState} from "react";

interface IObject {
    width?: number
    height?: number
}

export const useViewportSize = () => {
    const [viewPort, setViewPort] = useState<IObject>({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        const handleViewportSize = () => {
            setViewPort({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleViewportSize);
        handleViewportSize()

        return () => window.removeEventListener('resize', handleViewportSize)

    }, [])

    return viewPort
}