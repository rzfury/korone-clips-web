/**
 * RazorWind UI
 * 
 * RZFury's Tailwind UI Components
 * 
 */

declare namespace RazorWindProps {

  interface Layout extends React.HTMLAttributes<HTMLElement> {
    title?: string;
    sidebar?: boolean;
  }

  interface Sidebar extends React.HTMLAttributes<HTMLElement> {
    show?: boolean;
    links?: Sidebar.Link[];
    nav?: Navigation;
  }

  interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    role?: 'danger' | 'default' | 'primary';
    outline?: boolean;
    rounded?: boolean;
    block?: boolean;
  }

  interface Card extends React.HTMLAttributes<HTMLDivElement> {
    /** @type Use shadow instead of border */
    shadow?: boolean;

    /** @type Simple card title */
    title?: string;
  }

  interface Modal extends React.HTMLAttributes<HTMLDivElement> {
    show?: boolean;
    onHide?: () => void;
  }

  namespace Card {
    interface Body extends React.HTMLAttributes<HTMLDivElement> { }
    interface Heading extends React.HTMLAttributes<HTMLDivElement> {
      shadow?: boolean;
    }
  }

  namespace Form {
    interface Form extends React.FormHTMLAttributes<HTMLFormElement> { }

    interface Group {
      children: React.ReactNode;
    }

    interface AutoComplete {
      disabled?: boolean;
      label?: string;
      minChar?: number;
      name?: string;
      readonly?: boolean;
      onSelect?: (value: string) => void;
      source?: ((keyword: string) => string[]) | ((keyword: string) => AutoCompleteOption[]) | string[] | AutoCompleteOption[] | any;
    }

    type AutoCompleteOption = { label: string, value: string };

    interface Checkbox extends React.InputHTMLAttributes<HTMLInputElement> {
      label?: string;
      className?: string;
      containerProps?: React.HTMLAttributes<HTMLLabelElement>;
      backdropClassName?: string;
      iconClassName?: string;
      labelClassName?: string;
    }

    interface Radio extends React.InputHTMLAttributes<HTMLInputElement> {
      name: string;
      label?: string;
      className?: string;
      containerProps?: React.HTMLAttributes<HTMLLabelElement>;
      backdropClassName?: string;
      iconClassName?: string;
      labelClassName?: string;
    }

    interface Field {
      /** @type Container Class Name */
      className?: string;

      /** @type Input Attributes */
      inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

      /** @type Label Attributes */
      labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;

      /** @type Label Children or Label Text */
      label?: React.ReactNode;

      /** @type Enable Floating Label */
      labelFloat?: boolean;

      /** @type Input Name */
      name?: string;

      /** @type Disable Input */
      disabled?: boolean;

      /** @type */
      readonly?: boolean;

      /** @type Input OnChange Event */
      onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    interface FieldArea {
      /** @type Container Class Name */
      className?: string;

      /** @type Input Attributes */
      textareaProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;

      /** @type Label Attributes */
      labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;

      /** @type Label Children or Label Text */
      label?: React.ReactNode;

      /** @type Enable Floating Label */
      labelFloat?: boolean;

      /** @type Input Name */
      name?: string;

      /** @type Input Value */
      value?: string;

      /** @type Disable Input */
      disabled?: boolean;

      /** @type */
      readonly?: boolean;

      /** @type Input OnChange Event */
      onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }

    interface FieldGroup extends React.HTMLAttributes<HTMLDivElement> { }

    namespace FieldGroup {
      interface Addons extends React.HTMLAttributes<HTMLDivElement> { }
    }

    interface Select extends React.SelectHTMLAttributes<HTMLSelectElement> {
      label?: React.ReactNode;
      options: { label: string, value: string }[];
    }
  }

  namespace Navigation {
    interface Nav {
      brand?: string;
      links: Link[];
      sidebar?: boolean;
      isSidebarOpen?: boolean;
      onToggleSidebar?: () => void;
    }

    interface Brand extends React.HTMLAttributes<HTMLAnchorElement> {
      show?: boolean;
    }

    interface Link {
      dropdown?: Dropdown[];
      href?: string;
      label: string;
      mobile?: boolean;
      target?: '_blank' | '_self' | '_parent' | '_top';
    }

    interface Dropdown {
      noParent?: boolean;
      href?: string;
      label: string;
    }
  }

  namespace Sidebar {
    interface Link {
      label?: string;
      links?: Navigation.Link[];
    }
  }

}

declare namespace RazorWindStates {
  namespace Form {
    interface AutoComplete {
      highlightIndex: number;
      matches: (RazorWindProps.Form.AutoCompleteOption | string)[];
      showDropdown: boolean;
    }
  }

  interface Modal {
    show?: boolean;
  }
}
