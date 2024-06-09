import { Badge, IconButton } from '@material-tailwind/react';
import { HomeIcon } from '@heroicons/react/24/solid';

export function BadgeOverlap({ cnt }) {
  return (
    <div className="flex items-center gap-8 m-6">
      <Badge content={cnt}>
        <IconButton>
          <HomeIcon className="h-4 w-4" />
        </IconButton>
      </Badge>
    </div>
  );
}
