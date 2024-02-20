import { Progress } from "@/Components/ui/progress"

const Skills = () => {
    const Skills = [
        { Skill: "HTML/CSS", Expertise: "90" },
        { Skill: "HTML/CSS", Expertise: "90" },
        { Skill: "HTML/CSS", Expertise: "90" },
        { Skill: "HTML/CSS", Expertise: "90" },
    ]

    const OtherSkills = [
        { Skill: "HTML/CSS", Expertise: "90" },
        { Skill: "HTML/CSS", Expertise: "90" },
        { Skill: "HTML/CSS", Expertise: "90" },
        { Skill: "HTML/CSS", Expertise: "90" },
    ]
    return (
        <>
            <div className="mt-[-60px]">
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
                                        <Progress value={data.Skill} />
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
