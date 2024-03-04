import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { LeetCodeChallenges } from "@/constants/challengesContent";
import { Icons } from "@/components/svgs/icons";
import Link from "next/link";
import { GroupChallenges } from "@/components/ui/group-challenges";

const Challenges = () => {
    return (
        <main className={"container pb-16 pt-3"}>
            <h1 className={"font-bold text-xl"}>Welcome!</h1>
            <h1>Select a data structure and choose your challenge!</h1>
            <GroupChallenges />

            {LeetCodeChallenges.data.studyPlanV2Detail.planSubGroups.map(
                (challenge, index) => {
                    return (
                        <Accordion key={challenge.name} type="single" collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>{challenge.name}</AccordionTrigger>
                                <AccordionContent>
                                    <Table>
                                        <TableCaption>A list of challenges.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className={"w-1/4"}>Free</TableHead>
                                                <TableHead className={"w-2/4"}>Problem</TableHead>
                                                <TableHead>Difficulty</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {challenge.questions?.map((problem, index) => {
                                                return (
                                                    <TableRow key={challenge.questions[index].title}>
                                                        <TableCell>
                                                            {problem.paidOnly === false ? "✔️" : "❌"}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Link
                                                                target="_blank"
                                                                href={`https://leetcode.com/problems/${problem.titleSlug}`}
                                                                className={
                                                                    "hover:underline flex items-center gap-2"
                                                                }
                                                            >
                                                                {problem.title} <Icons.External_Link />
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell
                                                            className={`${problem.difficulty === "EASY"
                                                                ? "text-green-500"
                                                                : problem.difficulty === "MEDIUM"
                                                                    ? "text-yellow-500"
                                                                    : "text-red-500"
                                                                }`}
                                                        >
                                                            {problem.difficulty.toLowerCase()}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    );
                },
            )}
        </main>
    );
};
export default Challenges;
