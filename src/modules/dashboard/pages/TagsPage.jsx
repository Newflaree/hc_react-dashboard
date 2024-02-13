// React
import { useEffect, useState } from 'react';
// Layouts
import { DashboardLayout } from '../ui/layouts';
// Hooks
import { useTags } from '../hooks';
// Views
import { TagsView } from '../ui/views';


export const TagsPage = () => {
  const { countTags } = useTags();

  return (
    <DashboardLayout>
      <TagsView />
    </DashboardLayout>
  );
}
