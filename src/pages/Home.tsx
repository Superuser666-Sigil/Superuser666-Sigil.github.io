import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const Home = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to My GitHub Profile</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Hi, I'm Superuser666-Sigil, a developer passionate about building innovative solutions in the SigilDERG ecosystem.
                    I specialize in AI/ML, Rust, and full-stack development.
                </p>
                <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Explore My Projects
                    <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About the SigilDERG Ecosystem</h2>
                <p className="text-gray-700 mb-4">
                    SigilDERG is an innovative ecosystem focused on advanced AI and machine learning solutions.
                    My projects contribute to this ecosystem by providing tools for model fine-tuning, data production pipelines,
                    custom servers, and evaluation frameworks.
                </p>
                <p className="text-gray-700">
                    I work with a variety of technologies including Python, Rust, TypeScript, and more to build robust,
                    scalable applications that push the boundaries of what's possible in AI and software development.
                </p>
            </div>
        </div>
    )
}

export default Home
