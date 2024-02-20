import { Progress } from "@/Components/ui/progress"

const Skills = () => {
    const Skills = [
        { Skill: "HTML/CSS", Expertise: "85" },
        { Skill: "Web Design", Expertise: "80" },
        { Skill: "JavaScript", Expertise: "95" },
        { Skill: "React JS", Expertise: "75" },
    ]

    const OtherSkills = [
        { Skill: "Express.js", Expertise: "85" },
        { Skill: "TypeScript", Expertise: "75" },
        { Skill: "Python", Expertise: "95" },
        { Skill: "Flask", Expertise: "80" },
    ]
    return (
        <>
            <div className="mt-[-200px] py-32">
                <div className="max-w-screen-xl px-10 m-auto flex flex-col gap-16 max-[1000px]:px-0 ">

                    <div className="text-center flex flex-col gap-8 max-[1200px]:gap-2 ">
                        <p className="paragraph">My level of knowledge in some tools</p>
                        <h2 className="heading3">My Skills</h2>
                        <div class="h-1 m-auto bg-[#009e66] w-24"></div>


                    </div>
                    <div className="flex gap-36">
                        <div className="w-1/2 flex flex-col gap-14">
                            {Skills.map((data, i) => (
                                <article key={i}>
                                    <div className="flex flex-col gap-2">
                                        <p>{data.Skill}</p>
                                        <Progress value={data.Expertise} />
                                    </div>
                                </article>
                            ))}
                        </div>


                        <div className="w-1/2 flex flex-col gap-14">
                            {OtherSkills.map((data, i) => (
                                <article key={i}>
                                    <div className="flex flex-col gap-2">
                                        <p>{data.Skill}</p>
                                        <Progress value={data.Expertise} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Skills
