import { useEffect, useRef, useState } from "react";

export default function Skill() {

    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

    const stats = [
    { value: 5, label: "Design Tools Mastered" },
    { value: 20, label: "Projects Completed" },
    { value: 4, label: "Years Experience" },
    ]

    useEffect (() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {threshold : 0.5}
        );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();

    }, [])
    return (
        <section
        id="Skill"
        ref={sectionRef}
        className="md:h-[100vh] h-[100vh] flex flex-col justify-center items-center text-center text-white px-5">
            
            {/* 📝 Judul */}
            <h1 className="text-xl md:text-4xl font-QuickSand font-bold leading-snug max-w-[800px]">
                With a strong foundation in{" "}
                <span className="text-prim">UI/UX principles</span>, I create{" "}
                <span className="text-prim">thoughtful designs</span> that enhance
                <span className="text-prim"> usability </span> and elevate
                <span className="text-prim"> brand identity</span>.
            </h1>

            {/* 🔢 Statistik */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-20">
                {stats.map((stat, index) => (
                <Counter key={index} value={stat.value} label={stat.label} visible={visible} />
                ))}
            </div>
        </section>
    )
};

// 🧮 Component untuk animasi angka
function Counter({ value, label, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return; // belum kelihatan, jangan animasi dulu

    let start = 0;
    const duration = 2000; // 2 detik
    const stepTime = 20; // update tiap 20ms
    const increment = value / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(counter);
  }, [visible, value]);

  return (
    <div
      className={`flex flex-col items-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-[80px] font-extrabold font-Poppins text-prim/40">{count}+</h2>
      <p className="text-xl font-semibold font-QuickSand">{label}</p>
    </div>
  );
}