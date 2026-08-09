export interface DialogProps {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
}
