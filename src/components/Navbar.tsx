import { Link } from 'react-router-dom'
import { Github, User, Briefcase } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Github className="h-8 w-8 text-gray-800" />
                            <span className="ml-2 text-xl font-bold text-gray-800">Superuser666-Sigil</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            Home
                        </Link>
                        <Link to="/projects" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
