import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { FormEvent } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Product',
        href: '/products/create',
    },
];

export default function ProductForm() {
    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        stock: '',
        image: null as File | null,
    });

    // Form submit handler
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('products.store'), {
            onSuccess: () => {
                console.log('success');
            },
        });
    };

    // File upload handler
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Link href={route('products.index')} className="text-muted-foreground flex items-center gap-2 text-sm">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Products
                </Link>
                <Card>
                    <CardHeader>
                        <CardTitle>Create Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="flex flex-col gap-4" autoComplete="off">
                            <div className="grid w-full items-center gap-4">
                                {/* Product Name */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Box"
                                        tabIndex={1}
                                    />
                                    <InputError message={errors.name} />
                                </div>
                                {/* Description */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        id="description"
                                        name="description"
                                        placeholder="Describe your product"
                                        rows={4}
                                        tabIndex={2}
                                        className={'rounded-md p-3 outline outline-white/10 focus-visible:outline-white/20'}
                                    />
                                    <InputError message={errors.description} />
                                </div>
                                {/* Stock */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="stock">Stock</Label>
                                    <Input
                                        value={data.stock}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        id="stock"
                                        name="stock"
                                        type="number"
                                        placeholder="100"
                                        tabIndex={3}
                                    />
                                    <InputError message={errors.stock} />
                                </div>
                                {/* Price */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        id="price"
                                        name="price"
                                        type="number"
                                        placeholder="100"
                                        tabIndex={4}
                                    />
                                    <InputError message={errors.price} />
                                </div>
                                {/* Category */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        id="category"
                                        name="category"
                                        type="text"
                                        placeholder="Category"
                                        tabIndex={5}
                                    />
                                    <InputError message={errors.category} />
                                </div>
                                {/* Brand */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="brand">Brand</Label>
                                    <Input
                                        value={data.brand}
                                        onChange={(e) => setData('brand', e.target.value)}
                                        id="brand"
                                        name="brand"
                                        type="text"
                                        placeholder="Brand"
                                        tabIndex={6}
                                    />
                                    <InputError message={errors.brand} />
                                </div>
                                {/* Image */}
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="image">Image</Label>
                                    <Input onChange={handleFileUpload} id="image" name="image" type="file" tabIndex={7} />
                                    <InputError message={errors.image} />
                                </div>
                                <Button type="submit" className="mt-4 w-fit cursor-pointer" tabIndex={8}>
                                    Create Product
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
