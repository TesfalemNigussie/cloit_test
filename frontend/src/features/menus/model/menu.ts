interface Menu {
    id: string;

    name: string;

    parentId: string | null;

    depth: number;

    createdAt: string;

    updatedAt: string;

    children: Menu[];
}