export interface CreateMenuDto {
    name: string | null;

    parentId: string | null;

    order?: number | null;

    depth: number | null;
}
