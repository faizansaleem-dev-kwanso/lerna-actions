import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomBreadcrumbs } from '@illumidesk/common-ui';

import { Assignment } from '../../../common/types';
import { BreadcrumbIcon } from '../../../assets';

interface CrumbsLink {
  title: string;
  url: string;
}

export const ContentBreadcrumbs: FC<{
  courseId: string;
  assignment: Assignment;
  filepath: string;
}> = ({ assignment, filepath }): JSX.Element => {
  let parts = filepath.split('/');
  parts = parts.filter((p) => p !== '');

  const location = useLocation();

  const partsData: CrumbsLink[] = [];
  parts.map((p, i) => {
    partsData.push({
      title: p,
      url: i !== parts.length - 1 ? `/assignment/${assignment.name}/${p}` : location.pathname,
    });
  });

  return (
    <>
      <CustomBreadcrumbs
        separator={BreadcrumbIcon}
        bCrumbsList={[
          {
            title: 'Assignments',
            url: '/manage-assignments',
          },
          {
            title: assignment.name,
            url: `/assignment/${assignment.name}`,
          },
          ...partsData,
        ]}
      />
    </>
  );
};
