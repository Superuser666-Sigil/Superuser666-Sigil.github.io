import ProjectCard from '../components/ProjectCard'

const projects = [
    {
        name: 'SigilDERG-Finetuner',
        description: 'Model finetuner for the SigilDERG Ecosystem',
        repo: 'Superuser666-Sigil/SigilDERG-Finetuner',
        languages: [
            { name: 'Jupyter Notebook', percent: 89.6 },
            { name: 'Python', percent: 9.3 },
            { name: 'Shell', percent: 1.1 }
        ]
    },
    {
        name: 'sigil-mmf-codex-priv',
        description: 'Private repository for SigilDERG MMF Codex',
        repo: 'Superuser666-Sigil/sigil-mmf-codex-priv',
        languages: [
            { name: 'Rust', percent: 99.8 },
            { name: 'Other', percent: 0.2 }
        ]
    },
    {
        name: 'SigilDERG-Custom-MCP',
        description: 'This is a standalone, code-aware custom MCP server for local or remote use',
        repo: 'Superuser666-Sigil/SigilDERG-Custom-MCP',
        languages: [
            { name: 'Python', percent: 48.7 },
            { name: 'HTML', percent: 40.2 },
            { name: 'TypeScript', percent: 7.9 },
            { name: 'JavaScript', percent: 1.2 },
            { name: 'Shell', percent: 0.9 },
            { name: 'CSS', percent: 0.9 },
            { name: 'Dockerfile', percent: 0.2 }
        ]
    },
    {
        name: 'SigilDERG-Lambda-Package',
        description: 'Documentation and setup scripts for evaluation of the SigilDERG ecosystem',
        repo: 'Superuser666-Sigil/SigilDERG-Lambda-Package',
        languages: [
            { name: 'Shell', percent: 53.4 },
            { name: 'Python', percent: 46.6 }
        ]
    },
    {
        name: 'SigilDERG-Data_Production',
        description: 'SigilDERG Data Production is an enterprise-grade Rust pipeline that crawls crates, runs rigorous scans (Clippy, Geiger, license checks), and generates instruction-style JSONL shards. It features semantic chunking, configurable splits, observability, and seamless SigilDERG ecosystem integration.',
        repo: 'Superuser666-Sigil/SigilDERG-Data_Production',
        languages: [
            { name: 'Python', percent: 99.3 },
            { name: 'Other', percent: 0.7 }
        ]
    },
    {
        name: 'human-eval-Rust',
        description: 'Rust-centric fork of OpenAI\'s HumanEval',
        repo: 'Superuser666-Sigil/human-eval-Rust',
        languages: [
            { name: 'Python', percent: 100 }
        ]
    }
]

const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My SigilDERG Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
