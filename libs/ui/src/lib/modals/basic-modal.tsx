import { Dialog } from '@headlessui/react';
import { useState } from 'react';

type BasicModalProps = {
  title: string;
  description: string;
  message: string;
};

export function BasicModal({ title, description, message }: BasicModalProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>

        <p>{message}</p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
}
