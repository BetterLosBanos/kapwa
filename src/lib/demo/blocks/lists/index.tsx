import React from 'react';
import { List } from '@kapwa/list';

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

const ListsSection: React.FC<ListsSectionProps> = ({
  title,
  headerTitle,
  headerSubtitle,
  externalLinkText,
  listItems,
}: ListsSectionProps) => {
  return (
    <List
      title={title}
      headerTitle={headerTitle}
      headerSubtitle={headerSubtitle}
      externalLinkText={externalLinkText}
      listItems={listItems}
    />
  );
};

export { ListsSection };
export type { ListSectionItem, ListsSectionProps };
