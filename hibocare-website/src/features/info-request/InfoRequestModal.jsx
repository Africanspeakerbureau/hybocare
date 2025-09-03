import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useInfoRequest } from './InfoRequestContext';

export default function InfoRequestModal() {
  const { isOpen, close } = useInfoRequest();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request More Information</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <p className="text-sm text-muted-foreground">
            Our team will reach out with more details shortly.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
