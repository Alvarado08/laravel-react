import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Eye, Pencil } from 'lucide-react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string | null;
    category: string;
    brand: string;
    created_at: string;
}

export default function ProductsIndex({ ...props }: { products: Product[] }) {
    const { products } = props;
    const { flash } = usePage<{ flash?: { success?: string; error?: string } }>().props;
    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            {(flash?.success || flash?.error) && (
                <ToastContainer
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    pauseOnHover={false}
                />
            )}
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
                    {products.map((product, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <p>{product.id}</p>
                                <CardTitle>{product.name}</CardTitle>
                                <p>{product.created_at}</p>
                            </CardHeader>
                            <CardContent>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p>{product.stock}</p>
                                <p>{product.category}</p>
                                <p>{product.brand}</p>
                                {product.image && <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />}
                                <div className="flex gap-2">
                                    <Link
                                        as="button"
                                        className="mt-4 inline-flex cursor-pointer items-center rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                                        href={route('products.show', product.id)}
                                    >
                                        See Product <Eye size={16} className="ml-2" />
                                    </Link>
                                    <Link
                                        as="button"
                                        className="mt-4 inline-flex cursor-pointer items-center rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
                                        href={route('products.edit', product.id)}
                                    >
                                        Edit Product <Pencil size={16} className="ml-2" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
