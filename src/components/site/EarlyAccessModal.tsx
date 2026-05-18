import { EarlyAccessForm } from "@/components/site/EarlyAccessForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { type EarlyAccessIntent } from "@/lib/early-access";

type EarlyAccessModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultIntent?: EarlyAccessIntent;
};

export function EarlyAccessModal({
  open,
  onOpenChange,
  defaultIntent,
}: EarlyAccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-[2rem] border-border/60 bg-[#FDFCFB] p-6 sm:max-w-xl sm:p-8">
        <DialogHeader className="pr-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Join early access
          </p>
          <DialogTitle className="font-display text-3xl leading-tight text-ink sm:text-4xl">
            Be one of the first in.
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            Add your email and tell us if you want to use Provinear as a
            customer or a provider.
          </DialogDescription>
        </DialogHeader>

        <EarlyAccessForm defaultIntent={defaultIntent} />
      </DialogContent>
    </Dialog>
  );
}
