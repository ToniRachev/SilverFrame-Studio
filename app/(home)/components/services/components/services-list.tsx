import Service from "./service";
import { ServiceInterface } from "../lib/types";

interface ServicesListProps {
    services: ServiceInterface[];
    activeService: number | null;
    handleMouseEnter: (e: React.MouseEvent<HTMLLIElement>, index: number) => void;
    handleMouseLeave: () => void;
}

export default function ServicesList({ services, activeService, handleMouseEnter, handleMouseLeave }: Readonly<ServicesListProps>) {
    return (
        <ul className="pt-[5vh] w-full" onMouseLeave={handleMouseLeave}>
            {services.map((service, index) => (
                <Service
                    key={service.title}
                    {...service}
                    setActiveService={(e) => handleMouseEnter(e, index)}
                    active={activeService === index}
                />
            ))}
        </ul>
    )
}