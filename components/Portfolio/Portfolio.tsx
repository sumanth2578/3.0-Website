import styles from './Portfolio.module.css';

const projects = [
    {
        title: 'Blue Cross Hyderabad',
        image: '/blue-cross-mockup.png',
        width: 598,
        height: 409
    },
    {
        title: 'Starlink',
        image: '/Starlink.png',
        width: 598,
        height: 409
    },
    {
        title: 'Bhoomibox',
        image: '/bb.png',
        width: 601,
        height: 360

    },
    {
        title: 'NaviPrep',
        image: '/Naviprep.png',
        width: 607,
        height: 354
    }
];

const Portfolio = () => {
    return (
        <section className={styles.portfolio} id="work">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        How we <span className={styles.accentText}>transformed</span> idea and <br />
                        requirement into Product
                    </h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div
                                className={styles.imgWrapper}
                                style={{
                                    maxWidth: `${project.width}px`,
                                    aspectRatio: `${project.width}/${project.height}`
                                }}
                            >
                                <img src={project.image} alt={project.title} />
                            </div>
                            <h4 className={styles.projTitle}>{project.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
