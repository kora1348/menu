import { Injectable } from "@angular/core";
import { MenuSidebar } from "./types/navigation";


@Injectable()
export class NavigationService {
  constructor() {}

  getMenus(): MenuSidebar[] {
    return [
      {
        link_name: "Administration" /* Administration */,
        id: "administration",
        link: null,
        icon: "far fa-address-card",
        active: false,
        sub_menu: [
          {
            link_name:
              "Sélection d'un portefeuille" /* Sélection d'un portefeuille */,
            link: "/administrations/select-portfolio",
          },
          {
            link_name: "Rechercher un n° compt" /* Rechercher un n° compte */,
            link: "/administrations/reference-search",
          },
        ],
      },
      {
        link_name: "Agence" /* Agence */,
        id: "agence",
        link: null,
        icon: "fa fa-home",
        active: false,
        sub_menu: [
          {
            link_name: "Echéancier titres" /* Echéancier titres */,
            link: "/agencies/maturity-securities",
          },
          {
            link_name:
              "Aperçu des ordres en note" /* Aperçu des ordres en note */,
            link: "/agencies/overview-note-orders",
          },
          {
            link_name:
              "Aperçu des ordres exécutés" /* Aperçu des ordres exécutés */,
            link: "/agencies/overview-executed-orders",
          },
          {
            link_name: "Aperçu montant global" /* Aperçu montant global */,
            link: "/agencies/overview-total-amount",
          },
          {
            link_name:
              "Aperçu des opérations sur titres" /* Aperçu des opérations sur titres */,
            link: "/agencies/overview-corporate-actions",
          },
          {
            link_name: "Aperçu des transferts" /* Aperçu des transferts */,
            link: "/agencies/overview-transfers",
          },
        ],
      },
    ];
  }
}
