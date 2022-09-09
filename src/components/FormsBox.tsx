interface PropsType
{
    className?: string;
    children?: React.ReactNode;
}

function FormsBox (props?: PropsType)
{
    return (
        <div className={`w-full sm:w-1/2 lg:w-1/4 flex flex-col justify-start items-center gap-2 ${props?.className ? props.className : ''}`}>
            {props?.children}
        </div>
    );
}

export { FormsBox };
