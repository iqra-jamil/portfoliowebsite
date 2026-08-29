import { motion } from "framer-motion";
import { frontendSkills, otherSkills } from "../data/skills";
import SectionHeading from "./SectionHeading";

const SkillBar = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-violet/40"
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${skill.color}1a`, color: skill.color }}
        >
          <Icon size={18} />
        </div>
        <span className="font-medium text-text">{skill.name}</span>
        <span className="ml-auto font-mono text-xs text-text-dim">
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, var(--color-violet))`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: index * 0.06 + 0.15, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-ink-soft py-24 md:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Tools I build with" />

        <div className="mb-14">
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-dim">
            Frontend
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {frontendSkills.map((skill, i) => (
              <SkillBar skill={skill} index={i} key={skill.name} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-dim">
            Other
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherSkills.map((skill, i) => (
              <SkillBar skill={skill} index={i} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
