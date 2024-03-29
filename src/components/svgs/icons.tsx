
type IconProps = React.ComponentPropsWithoutRef<"svg">;
type Icon = (props: IconProps) => React.ReactElement;

const Icons = {
    Logo: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            fill="none"
            viewBox="0 0 95 111"
            role="img"
            aria-label="Logo Ascent"
            {...props}
        >
            <mask
                id="mask0_855_355"
                style={{ maskType: "luminance" }}
                width="95"
                height="111"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="#fff" d="M0 0h95v111H0V0z" />
            </mask>
            <g mask="url(#mask0_855_355)">
                <mask
                    id="mask1_855_355"
                    style={{ maskType: "luminance" }}
                    width="95"
                    height="111"
                    x="0"
                    y="0"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        d="M47.5 0L95 27.75v55.5L47.5 111 0 83.25v-55.5L47.5 0z"
                    />
                </mask>
                <g mask="url(#mask1_855_355)">
                    <path
                        stroke="currentColor"
                        strokeWidth="25.994"
                        d="M47.5 0L95 27.75v55.5L47.5 111 0 83.25v-55.5L47.5 0z"
                    />
                </g>
            </g>
            <path
                fill="currentColor"
                d="M58.105 66.184H36.918l-4.042 9.771H22.064L42.397 30.33h10.416L73.21 75.955H62.147l-4.042-9.77zm-3.333-8.02l-7.23-17.459-7.229 17.458h14.459z"
            />
        </svg>
    ),
    GitHub: (props) => (
        <svg
            fill='currentColor'
            viewBox="-2.7 0 21 15.5"
            aria-hidden="true"
            className={'w-12'}
            {...props}
        >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
    ),
    Instagram: (props) => (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={'w-10'} {...props}>
            <defs>
                <linearGradient id=":r7:" x1="69.27%" x2="128.20%" y1="129.46%" y2="29.46%">
                    <stop offset="0" stopColor="#FDD074">
                    </stop>
                    <stop offset="25%" stopColor="#F77F34" /><stop offset="50%" stopColor="#DD326E">
                    </stop>
                    <stop offset="75%" stopColor="#D82B7E">
                    </stop>
                    <stop offset="100%" stopColor="#A432B1">
                    </stop>
                </linearGradient><mask id=":r8:">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="100%" height="100%" aria-label="Instagram Icon" role="img">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 7.207a4.793 4.793 0 1 0 0 9.586 4.793 4.793 0 0 0 0-9.586zm0 7.904a3.111 3.111 0 1 1 0-6.222 3.111 3.111 0 0 1 0 6.222z">
                        </path>
                        <path d="M16.982 8.138a1.12 1.12 0 1 0 0-2.24 1.12 1.12 0 0 0 0 2.24z">
                        </path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.667c-2.535 0-2.853.01-3.848.056-.994.045-1.672.203-2.266.433a4.574 4.574 0 0 0-1.653 1.077 4.574 4.574 0 0 0-1.076 1.653c-.231.594-.389 1.272-.434 2.266-.046.995-.056 1.313-.056 3.848s.01 2.852.056 3.848c.045.993.203 1.672.433 2.266a4.573 4.573 0 0 0 1.077 1.653c.519.518 1.04.838 1.653 1.076.594.23 1.272.389 2.266.434.995.045 1.313.056 3.848.056s2.852-.01 3.848-.056c.993-.045 1.672-.203 2.266-.434a4.574 4.574 0 0 0 1.653-1.076 4.574 4.574 0 0 0 1.076-1.653c.23-.594.389-1.273.434-2.266.045-.996.056-1.313.056-3.848s-.01-2.853-.056-3.848c-.045-.994-.203-1.672-.434-2.266a4.575 4.575 0 0 0-1.076-1.653 4.573 4.573 0 0 0-1.653-1.076c-.594-.231-1.273-.389-2.266-.434-.996-.046-1.313-.056-3.848-.056zm0 1.681c2.492 0 2.787.01 3.771.055.91.041 1.404.193 1.733.321.436.17.747.372 1.074.698.326.327.529.638.698 1.073.128.33.28.824.321 1.733.045.985.054 1.28.054 3.772s-.009 2.787-.054 3.771c-.041.91-.193 1.404-.321 1.733-.17.436-.372.747-.698 1.074a2.891 2.891 0 0 1-1.074.698c-.329.128-.823.28-1.733.321-.984.045-1.279.054-3.771.054s-2.788-.009-3.771-.054c-.91-.041-1.405-.193-1.734-.321a2.89 2.89 0 0 1-1.073-.698 2.891 2.891 0 0 1-.698-1.074c-.128-.329-.28-.823-.321-1.733-.045-.984-.055-1.279-.055-3.771s.01-2.787.055-3.771c.041-.91.193-1.405.321-1.734a2.89 2.89 0 0 1 .698-1.073 2.89 2.89 0 0 1 1.073-.698c.33-.128.824-.28 1.733-.321.985-.045 1.28-.055 3.772-.055z">
                        </path>
                    </svg>
                </mask>
            </defs><rect fill="url(#:r7:)" height="100%" mask="url(#:r8:)" width="100%">
            </rect>
        </svg>
    ),
    Linkedin: (props) => (
        <svg fill='currentColor' viewBox="0 0 24 24" aria-hidden="true" className={'w-10'} {...props}>
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
            </path>
        </svg>
    ),
    Twitter: (props) => (
        <svg fill="currentColor" viewBox="0 0 256 256" version="1.1" width="30" height="30" aria-label="Twitter Icon" role="img"  {...props}>
            <defs>
            </defs>
            <g transform="translate(1.4 1.4) scale(2.81 2.81)" >
                <path d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
        </svg>
    ),
    External_Link: (props) => (
        <svg fill="currentColor" className={"scale-125"} height="8" viewBox="0 0 8 8" width="8" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="External link icon" {...props}><path d="m0 0v8h8v-2h-1v1h-6v-6h1v-1zm4 0 1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4z" /></svg>
    ),

} satisfies Record<string, Icon>;

export { Icons };
