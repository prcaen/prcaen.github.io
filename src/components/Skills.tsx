import { skillCategories } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-cream-dark/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-4">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({ category }: { category: typeof skillCategories[0] }) {
  return (
    <div className="bg-cream rounded-3xl p-8 border border-charcoal/5 hover:shadow-xl transition-all">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{category.icon}</span>
        <h3 className="text-xl font-bold text-charcoal">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium text-charcoal/80 group-hover:text-accent transition-colors">
                {skill.name}
              </span>
              <SkillLevel level={skill.level} />
            </div>
            <div className="h-1.5 bg-charcoal/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full transition-all group-hover:scale-x-100"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level ? 'bg-accent' : 'bg-charcoal/10'
          }`}
        />
      ))}
    </div>
  );
}

