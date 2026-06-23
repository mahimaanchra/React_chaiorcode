import React, { useState, useEffect } from "react";

export default function Card() {
    // Initialize state to hold the API data
    const [githubData, setGithubData] = useState(null);

    //  Fetch data from the GitHub API when the component loads
    useEffect(() => {
        fetch('https://api.github.com/users/mahimaanchra')
            .then((response) => response.json())
            .then((data) => {
                // Map the API response properties to your card's data structure
                setGithubData({
                    name: data.name || "Mahima Anchra",
                    username: data.login || "mahimaanchra",
                    avatarUrl: data.avatar_url || "https://github.com/mahimaanchra.png",
                    bio: data.bio || "Frontend Developer",
                    publicRepos: data.public_repos || 0,
                    followers: data.followers || 0
                });
            })
            .catch((err) => console.error("Error fetching GitHub profile:", err));
    }, []); 

    // Render a loading placeholder until the data arrives
    if (!githubData) {
        return (
            <div className="w-full max-w-sm mx-auto p-6 bg-white dark:bg-gray-800 text-center rounded-lg shadow border border-gray-200 dark:border-gray-700">
                <span className="text-gray-500 dark:text-gray-400 font-medium">Loading Profile...</span>
            </div>
        );
    }

    // Render the UI once the state is populated
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
            {/* Top decorative header banner */}
            <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
            
            <div className="px-5 pb-5 relative">
                {/* Profile Image - Offset to overlap the banner */}
                <div className="flex justify-start -mt-12 mb-4">
                    <img 
                        className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-md" 
                        src={githubData.avatarUrl} 
                        alt={`${githubData.name}'s profile`} 
                    />
                </div>

                {/* Name and Handle */}
                <a href={`https://github.com/${githubData.username}`} target="_blank" rel="noreferrer" className="block group">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {githubData.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        @{githubData.username}
                    </span>
                </a>

                {/* Bio / Description */}
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 min-h-[40px]">
                    {githubData.bio}
                </p>

                {/* Stats Section */}
                <div className="flex items-center gap-4 mt-4 mb-6 border-t border-b border-gray-100 dark:border-gray-700 py-3">
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900 dark:text-white">{githubData.publicRepos}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Repositories</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900 dark:text-white">{githubData.followers}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Followers</span>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-blue-400 px-2.5 py-1 rounded">
                        Open for Collabs
                    </span>
                    <a
                        href={`https://github.com/${githubData.username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
}