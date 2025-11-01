// Define tipos icone
type IconName = 'pill' | 'sun' | 'moon';

//Define as propriedades do Icon
interface IconProps {
    name: IconName;
    className?: string;
}

//Mapeia os emojis
const IconMap: Record<IconName, string> = {
    pill: '💊',
    sun: '☀️',
    moon: '🌙',
};

//Componente Icon
export default function Icon ({ name, className }: IconProps) {
    const ClassName = className;
    const symbol = IconMap[name];

    return (
        <span className={ClassName} aria-hidden = "true"> {symbol} </span>
    );
}