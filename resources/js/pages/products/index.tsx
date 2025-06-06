import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

export default function ProductsIndex() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-2xl font-bold">My Products</h1>
                <div className="mb-4 flex justify-end">
                    <Link
                        as="button"
                        className="cursor-pointer rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                        href={route('products.create')}
                    >
                        Create Product
                    </Link>
                </div>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Product 1</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Product 1 description</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
