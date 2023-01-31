
import person from '../../assets/icons/person.svg';
import section from '../../assets/icons/card.svg';
import service from '../../assets/icons/service.svg';
import menu from '../../assets/icons/menu.svg';
import card from '../../assets/icons/card.svg';

const Tabs = [
    {
        icon: card,
        title: "بطاقة ماركة",
        route: "/"
    },
    {
        icon: card,
        title: "بطاقة موديل",
        route: "/"
    },
    {
        icon: card,
        title: "بطاقة قطعة",
        route: "/piece-card"
    },
    {
        icon: person,
        title: "بطاقة فني",
        route: "/"
    },
    {
        icon: section,
        title: "بطاقة قسم",
        route: "/"
    },
    {
        icon: service,
        title: "بطاقة خدمة",
        route: "/"
    },
];

export default Tabs;