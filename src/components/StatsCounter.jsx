
import { useState, useEffect } from "react";

function StatsCounter() {
    const stats = [
        { label: "Projects Completed", target: 50, suffix: "+" },
        { label: "Happy Clients", target: 30, suffix: "+" },
        { label: "Years Experience", target: 5, suffix: "+" }
    ];

    const [counts, setCounts] = useState([0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prevCounts) =>
                prevCounts.map((count, index) =>
                    Math.min(count + 1, stats[index].target)
                )
            );
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-stats">
            {stats.map((stat, index) => (
                <div key={stat.label}>
                    <h3>
                        {counts[index]}{stat.suffix}
                    </h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
}

export default StatsCounter;