import { Github } from 'lucide-react'

interface Language {
    name: string
    percent: number
}

interface Project {
    name: string
    description: string
    excerpt?: string
    repo: string
    languages: Language[]
}

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const getLanguageColor = (lang: string) => {
        const colors: { [key: string]: string } = {
            'Jupyter Notebook': 'bg-orange-400',
            'Python': 'bg-blue-500',
            'Shell': 'bg-green-500',
            'Rust': 'bg-red-500',
            'HTML': 'bg-red-600',
            'TypeScript': 'bg-blue-600',
            'JavaScript': 'bg-yellow-500',
            'CSS': 'bg-purple-500',
            'Dockerfile': 'bg-blue-700',
            'Other': 'bg-gray-500'
        }
        return colors[lang] || 'bg-gray-500'
    }

    return (
        <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <Github className="h-5 w-5 text-gray-500" />
            </div>
            {project.excerpt ? (
                <p className="text-gray-700 italic mb-2">{project.excerpt}</p>
            ) : null}
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Languages:</h4>
                <div className="space-y-1">
                    {project.languages.map((lang) => (
                        <div key={lang.name} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full ${getLanguageColor(lang.name)} mr-2`}></div>
                                <span className="text-sm text-gray-700">{lang.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lang.percent}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard
