import { Icons } from "../svgs/icons";

const Footer = () => {
    return (
        <main
            className={"container flex justify-between text-center border-t-[1px] py-3 fixed bottom-0 right-0 left-0 bg-background"}
        >
            <p>
                made with 🧡 by&nbsp;
                <a
                    href="https://github.com/Kyori-kyo"
                    className={"underline text-orange-500"}
                >
                    Kyori
                </a>
            </p>
            <div className={"flex gap-3 items-center"}>
                <a target="_blank"
                    className={"scale-75 hover:scale-100"} href="https://twitter.com/Kyori_G" rel="noreferrer">
                    <Icons.Twitter />
                </a>
                <a target="_blank"
                    className={"scale-75 hover:scale-100"} href="https://github.com/Kyori-kyo" rel="noreferrer">
                    <Icons.GitHub />
                </a>
                <a
                    target="_blank"
                    className={"scale-75 hover:scale-100"}
                    href="https://www.linkedin.com/in/richardlucascm/"
                    rel="noreferrer"
                >
                    <Icons.Linkedin />
                </a>
            </div>
        </main>
    );
};
export { Footer };
