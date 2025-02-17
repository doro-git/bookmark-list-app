const Button = ({ children, as = "button", anotherClasses = "", ...props }) => {
    let Component = as;
    return (
        <Component
            className={`text-white font-bold py-2 px-4 rounded ${anotherClasses}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
