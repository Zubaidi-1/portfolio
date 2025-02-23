export default function Nav({ shadow, scrollToSection }) {
  return (
    <div
      className="flex gap-4 rounded-sm bg-[#ffc300] text-sm p-3  z-20"
      style={{ boxShadow: `0 0 10px 5px #${shadow}` }}
    >
      <button onClick={() => scrollToSection("section-1")}>About</button>
      <button onClick={() => scrollToSection("section-2")}>Projects</button>
      <button onClick={() => scrollToSection("section-3")}>Contact</button>
    </div>
  );
}
