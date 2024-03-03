import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { challenges } from "@/constants/challengesContent"

const Challenges = () => {
    return (
        <main className={"container"}>
            {
                challenges.map((challenge, index) => {
                    return (
                        <Accordion key={challenge.title} type="single" collapsible>
                            <AccordionItem value={`item-${index}`}>
                                <AccordionTrigger>{challenge.title}</AccordionTrigger>
                                <AccordionContent>
                                    <Table>
                                        <TableCaption>A list of challenges.</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Problem</TableHead>
                                                <TableHead>Difficulty</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {
                                                challenge.content.map((problem, index) => {
                                                    return (
                                                        <TableRow key={challenge.content[index].problem}>
                                                            <TableCell>{problem.status}</TableCell>
                                                            <TableCell>{problem.problem}</TableCell>
                                                            <TableCell>{problem.difficulty}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )
                })
            }
        </main>
    )
}
export default Challenges;