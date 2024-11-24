export interface AccordionItemProps {
  panelId: string;
  expanded: boolean;
  handleChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  title: string;
  composer: string;
  details: string;
}
