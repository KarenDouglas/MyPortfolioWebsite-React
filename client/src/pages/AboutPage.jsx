import react from 'react';



export default function AboutPage() {
    return (
        <>
        <main>
            <picture>
                <img className='profilePic' src="../assets/profilePic.png" alt="" />

            </picture>
            <section className='pitch'>
                <h1>Compelling Title Sentence</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab quia recusandae praesentium tenetur saepe rerum ipsa ratione, soluta magnam velit, ipsum est sint provident quos alias dolore perferendis! Blanditiis?
                Natus neque et maxime omnis itaque voluptatem facilis nihil, reprehenderit dignissimos minus! Omnis obcaecati incidunt natus nam odit commodi recusandae accusamus necessitatibus excepturi, beatae illum itaque distinctio cupiditate provident! Perferendis.</p>
                <p><a href="/contact">Hire Me</a></p>
            </section>
        </main>
        </>
    )
}