import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-900">
            <div className="flex items-center justify-center h-screen">
                {children}
            </div>
        </div>
    );
}
