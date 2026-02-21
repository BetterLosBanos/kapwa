import { Button } from '@kapwa/button';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { ExternalLink } from 'lucide-react';

type ListSectionItem = {
  id: number;
  title: string;
  category: string;
};

type ListsSectionProps = {
  title: string;
  headerTitle: string;
  headerSubtitle?: string;
  externalLinkText?: string;
  listItems: ListSectionItem[];
};

const List = ({
  headerTitle,
  headerSubtitle,
  externalLinkText,
  listItems,
  title,
}: {
  title: string;
  headerTitle: string;
  headerSubtitle?: string;
  externalLinkText?: string;
  listItems: ListSectionItem[];
}) => {
  return (
    <Card className='mb-8'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && <p className='text-gray-800'>{headerSubtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          <div>
            <h3 className='font-medium mb-4'>{title}</h3>
            <div className='space-y-4'>
              {listItems.map(item => (
                <div
                  key={item.id}
                  className='p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-500 transition-colors'
                >
                  <div className='flex items-start justify-between'>
                    <div>
                      <h4 className='text-lg font-medium text-gray-900'>
                        {item.title}
                      </h4>
                      <span className='inline-block px-2 py-1 mt-2 text-xs font-medium rounded-sm bg-gray-100 text-gray-800'>
                        {item.category}
                      </span>
                    </div>
                    {externalLinkText && (
                      <Button variant='ghost' size='sm'>
                        {externalLinkText}
                        <ExternalLink className='ml-2 h-4 w-4' />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { List };
export type { ListsSectionProps, ListSectionItem };
