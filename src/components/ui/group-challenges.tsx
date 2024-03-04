"use client";
import { LeetCodeGroupChallenges } from "@/constants/challengesContent"
import { Badge } from "./badge";

const GroupChallenges = () => {

    const LeetCodeAPIReq = async (item: string) => {
        const body = {
            query:
                "\n    query studyPlanDetail($slug: String!) {\n  studyPlanV2Detail(planSlug: $slug) {\n    slug\n    name\n    highlight\n    staticCoverPicture\n    colorPalette\n    threeDimensionUrl\n    description\n    premiumOnly\n    needShowTags\n    awardDescription\n    defaultLanguage\n    award {\n      name\n      config {\n        icon\n        iconGif\n        iconGifBackground\n      }\n    }\n    relatedStudyPlans {\n      cover\n      highlight\n      name\n      slug\n      premiumOnly\n    }\n    planSubGroups {\n      slug\n      name\n      premiumOnly\n      questionNum\n      questions {\n        translatedTitle\n        titleSlug\n        title\n        questionFrontendId\n        paidOnly\n        id\n        difficulty\n        hasOfficialSolution\n        topicTags {\n          slug\n          name\n        }\n        solutionInfo {\n          solutionSlug\n          solutionTopicId\n        }\n      }\n    }\n  }\n}\n    ",
            variables: {
                slug: { item },
            },
            operationName: "studyPlanDetail",
        };

        const request = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await request.json();
        console.log(data);
    };

    return (
        <main>
            <div className={"flex py-3 gap-3 border-b"}>
                {LeetCodeGroupChallenges.map((item) => (
                    <Badge role="button" onClick={() => LeetCodeAPIReq(item)}>
                        {item}
                    </Badge>
                ))}
            </div>
        </main>
    )
}
export { GroupChallenges }