interface PropsType
{
    className?: string;
    children?: React.ReactNode;
}

function MainBackground (props?: PropsType)
{
    return (
        <div className={`flex flex-col justify-start items-start bg-[#23292C] text-white text-base leading-[200%] 
                         w-full h-screen p-4 lg:p-12 ${props?.className ? props.className : ''}`}>
            {props?.children}
        </div>
    );
}

export { MainBackground };
