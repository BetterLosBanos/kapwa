type TableDataItem = {
    id: number;
    name: string;
    email: string;
    status: 'Active' | 'Pending' | 'Inactive';
};
declare const Table: ({ title, subtitle, tableData, }: {
    title: string;
    subtitle: string;
    tableData: TableDataItem[];
}) => import("react/jsx-runtime").JSX.Element;
export { Table };
export type { TableDataItem };
