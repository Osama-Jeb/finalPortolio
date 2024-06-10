import Chart from "./components/Chart";

const Facts = () => {
    return (
        <section>
            <div>
                <div className="mb-12 flex items-center justify-center">
                    <p className="secTitle w-fit font-bold underline text-4xl">Facts && Hobbies</p>
                </div>

                <div>
                    <p className="text-2xl font-semibold underline">Wakatime </p>
                    <div className="flex items-center gap-5">
                        Total Time:
                        <a href="https://wakatime.com/@366b525a-a97a-45c2-9f9c-3b8d47bd5352">
                            <img src="https://wakatime.com/badge/user/366b525a-a97a-45c2-9f9c-3b8d47bd5352.svg" alt="Total time coded since Apr 3 2023" />
                        </a>
                    </div>

                    <div>
                        <p>Time Chart:</p>
                        <Chart />
                    </div>

                </div>
                <div>
                    <p className="text-2xl font-semibold underline">Hobbies </p>
                    <p>Watching Anime ? and Movies ?</p>
                    <p>Learning Languages.</p>
                    <p>Speed Typing, Touch typing. Maybe add Monkeytype ?</p>
                </div>
            </div>
        </section>
    )
}

export default Facts;