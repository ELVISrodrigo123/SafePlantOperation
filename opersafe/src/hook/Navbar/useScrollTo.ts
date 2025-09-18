import { useCallback, RefObject } from 'react';

export function useScrollTo(topRef?: RefObject<HTMLElement | null>) {
    return useCallback(() => {
        if (topRef?.current) {
            topRef.current.scrollIntoView({ 
                behavior: "smooth",
                block: "start"
            });
            return;
        }

        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [topRef]);
}