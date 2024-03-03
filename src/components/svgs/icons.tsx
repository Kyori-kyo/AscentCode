
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
} satisfies Record<string, Icon>;

export { Icons };
