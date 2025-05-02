export type MenuSidebar = {
    link_name: string;
    id: string,
    link: null;
    icon: string;
    active: boolean;
    sub_menu: {
    link_name: string;
    link: string;
    }[]
    }