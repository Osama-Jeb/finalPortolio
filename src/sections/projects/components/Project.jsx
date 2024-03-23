const Project = (props) => {
    return (
        <div className={`flex items-center justify-between ${props.index % 2 == 0 ? '' : 'flex-row-reverse'}`}>
            <div>
                <img src={props.img} width={550} alt="" />
            </div>
            <p className="text-balance w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quae, magnam aut ut quidem quos laboriosam asperiores et labore cupiditate qui aliquid aliquam esse, mollitia odio perferendis nemo dolorum hic!
            </p>
        </div>
    )
}

export default Project;