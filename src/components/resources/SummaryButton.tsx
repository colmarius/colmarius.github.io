import { Button } from '../ui/Button';
import { DocumentIcon } from '../ui/DocumentIcon';

type SummaryButtonProps = {
  onClick: () => void;
  label?: string;
  controlId: string;
};

export function SummaryButton({
  onClick,
  label = 'Read summary',
  controlId,
}: SummaryButtonProps) {
  return (
    <Button
      variant="secondary"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-controls={controlId}
      aria-expanded="false"
    >
      <DocumentIcon />
      {label}
    </Button>
  );
}
