import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function TasksIndex() {
    return (
        <AppLayout>
            <Head title="Tasks" />
            <div>Tasks</div>
        </AppLayout>
    );
}
