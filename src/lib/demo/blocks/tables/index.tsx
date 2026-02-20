import React from 'react';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { Button } from '@kapwa/button';

type TableDataItem = {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Pending' | 'Inactive';
};

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
    <Card className='mb-8'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-gray-800'>{subtitle}</p>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider'>
                  Name
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider'>
                  Email
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider'>
                  Status
                </th>
                <th className='px-6 py-3 text-right text-xs font-medium text-gray-800 uppercase tracking-wider'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {tableData.map(row => (
                <tr key={row.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-gray-900'>
                      {row.name}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-800'>{row.email}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        row.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : row.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <Button variant='ghost' size='sm'>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export { TablesSection };
export type { TableDataItem, TablesSectionProps };
