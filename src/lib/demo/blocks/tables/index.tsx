import React from 'react';
import { Table, TableDataItem } from '@kapwa/table';

type TablesSectionProps = {
  title: string;
  subtitle?: string;
  tableData: TableDataItem[];
};

const TablesSection: React.FC<TablesSectionProps> = ({
  title,
  subtitle,
  tableData,
}: TablesSectionProps) => {
  return (
    <Table title={title} subtitle={subtitle || ''} tableData={tableData} />
  );
};

export { TablesSection };
export type { TableDataItem, TablesSectionProps };
