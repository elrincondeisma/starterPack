import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <GuestLayout  
        >
            <section className="bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">Laravel Starter Pack</h1>
                    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400">Free starter pack with Laravel + Breeze + React + Shadcn UI</p>
                    <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400">Designed by <a href='https://www.youtube.com/@elrincondeisma?sub_confirmation=1' target='_blank'>El Rincón de Isma</a></p>
                </div>
            </section>
            
        </GuestLayout>
    );
}
