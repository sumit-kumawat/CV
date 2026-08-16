import React, { useState, useEffect, useMemo } from 'react';
import Section from './Section';
import { projects as fallbackProjects } from '../constants';
import { 
  Github, 
  ExternalLink, 
  Copy, 
  Check, 
  RefreshCw, 
  Star, 
  GitFork, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  X, 
  Code2, 
  FolderGit2,
  Clock,
  SlidersHorizontal
} from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at?: string;
  topics?: string[];
  fork: boolean;
  clone_url: string;
  category?: string;
  highlights?: string[];
  techStack?: string[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  PowerShell: 'bg-blue-600',
  Python: 'bg-yellow-500',
  Shell: 'bg-emerald-600',
  Bash: 'bg-emerald-600',
  PHP: 'bg-indigo-600',
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-amber-400',
  Go: 'bg-cyan-500',
  Rust: 'bg-orange-600',
  HTML: 'bg-red-500',
  CSS: 'bg-purple-500',
  Docker: 'bg-sky-500',
  Default: 'bg-neutral-400'
};

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [copiedClone, setCopiedClone] = useState<string | null>(null);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'name'>('updated');

  const GITHUB_USERNAME = 'sumit-kumawat';

  const fetchRepositories = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
        { headers: { Accept: 'application/vnd.github.v3+json' } }
      );

      if (response.ok) {
        const data: GitHubRepo[] = await response.json();
        
        // Merge with curated project metadata if present
        const enhancedRepos = data
          .filter((repo) => !repo.fork) // prioritize original repos
          .map((repo) => {
            const matchedFallback = fallbackProjects.find(
              (p) => p.title.toLowerCase() === repo.name.toLowerCase() || p.repoName.endsWith(`/${repo.name}`)
            );

            return {
              ...repo,
              description: repo.description || matchedFallback?.description || 'Infrastructure automation and DevOps repository.',
              category: matchedFallback?.category || (repo.topics && repo.topics[0] ? repo.topics[0].replace(/-/g, ' ') : 'DevOps & Tooling'),
              highlights: matchedFallback?.highlights || [],
              techStack: matchedFallback?.techStack || (repo.language ? [repo.language] : [])
            };
          });

        if (enhancedRepos.length > 0) {
          setRepos(enhancedRepos);
          setIsLive(true);
        } else {
          loadFallbackData();
        }
      } else {
        loadFallbackData();
      }
    } catch (err) {
      console.warn('GitHub API unavailable, using curated portfolio data:', err);
      loadFallbackData();
    } finally {
      setLoading(false);
    }
  };

  const loadFallbackData = () => {
    const fallbackList: GitHubRepo[] = fallbackProjects.map((p, index) => ({
      id: index + 1,
      name: p.title,
      full_name: p.repoName,
      html_url: p.githubUrl,
      description: p.description,
      language: p.techStack[0] || 'PowerShell',
      stargazers_count: 3 + index,
      forks_count: 1 + (index % 3),
      updated_at: new Date(Date.now() - index * 86400000 * 5).toISOString(),
      topics: p.techStack.slice(0, 3),
      fork: false,
      clone_url: `https://github.com/${p.repoName}.git`,
      category: p.category,
      highlights: p.highlights,
      techStack: p.techStack
    }));
    setRepos(fallbackList);
    setIsLive(false);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const handleCopyClone = (cloneUrl: string, name: string) => {
    navigator.clipboard?.writeText(`git clone ${cloneUrl}`);
    setCopiedClone(name);
    setTimeout(() => setCopiedClone(null), 2000);
  };

  const handleCopyName = (name: string) => {
    navigator.clipboard?.writeText(name);
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  // Detailed Timestamp Formatter (Date + Exact Time)
  const formatTimestamp = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Recently';
    }
  };

  // Unique Languages across all repos
  const allLanguages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => {
      if (r.language) langs.add(r.language);
    });
    return Array.from(langs);
  }, [repos]);

  // Filtered & Sorted repositories
  const processedRepos = useMemo(() => {
    let list = [...repos];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          (r.description && r.description.toLowerCase().includes(q)) ||
          (r.language && r.language.toLowerCase().includes(q)) ||
          (r.category && r.category.toLowerCase().includes(q)) ||
          r.topics?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedLanguage !== 'all') {
      list = list.filter((r) => r.language?.toLowerCase() === selectedLanguage.toLowerCase());
    }

    list.sort((a, b) => {
      if (sortBy === 'stars') {
        return b.stargazers_count - a.stargazers_count;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

    return list;
  }, [repos, searchQuery, selectedLanguage, sortBy]);

  // Displayed repositories based on inline toggle state
  const displayedRepos = useMemo(() => {
    if (isExpanded) {
      return processedRepos;
    }
    return processedRepos.slice(0, 5);
  }, [processedRepos, isExpanded]);

  return (
    <Section id="projects" title="My Projects & GitHub Repositories" className="bg-neutral-50/60 relative">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Bar: Description + Quick Stats & Live Indicator */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left bg-white p-4 sm:p-5 rounded-3xl border border-neutral-200 shadow-xs">
          <div>
            <p className="text-neutral-700 font-medium text-sm sm:text-base">
              Open-source infrastructure scripts, hypervisor management tools, and automation repositories.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-1.5 text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'}`} />
                <span>{isLive ? 'Live GitHub Sync' : 'Curated Repositories'}</span>
              </span>
              <span>•</span>
              <span>{repos.length} Repositories</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchRepositories}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold rounded-xl border border-neutral-200 transition-colors disabled:opacity-60"
              title="Refresh repositories from GitHub"
              aria-label="Refresh repositories"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-primary' : ''}`} />
              <span className="hidden sm:inline">Sync</span>
            </button>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-primary text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/{GITHUB_USERNAME}</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Repositories Table */}
        <div className="bg-white rounded-3xl border border-neutral-200 shadow-xs overflow-hidden transition-all duration-300">
          
          {/* Filter Bar: Only active when user expands to view all or searches */}
          {isExpanded && (
            <div className="p-4 sm:p-5 border-b border-neutral-200 bg-neutral-50/80 space-y-3 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search repos by name, stack, description..."
                    className="w-full pl-9 pr-8 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort Selector */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <span className="text-xs text-neutral-500 font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'updated' | 'stars' | 'name')}
                    className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 text-xs font-medium rounded-xl focus:outline-none focus:border-primary"
                  >
                    <option value="updated">Recently Updated</option>
                    <option value="stars">Most Stars</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Language Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                <button
                  onClick={() => setSelectedLanguage('all')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                    selectedLanguage === 'all'
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  All ({repos.length})
                </button>
                {allLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                      selectedLanguage.toLowerCase() === lang.toLowerCase()
                        ? 'bg-primary text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Clean Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-neutral-100/70 border-b border-neutral-200 text-neutral-600 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 sm:px-6">Repository</th>
                  <th className="py-3.5 px-3 hidden md:table-cell">Category</th>
                  <th className="py-3.5 px-3">Primary Tech</th>
                  <th className="py-3.5 px-3 text-center hidden sm:table-cell">Last Updated Timestamp</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-normal text-neutral-700">
                {loading && repos.length === 0 ? (
                  // Skeleton loader
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="py-4 px-4 sm:px-6">
                        <div className="h-4 bg-neutral-200 rounded w-36 mb-2"></div>
                        <div className="h-3 bg-neutral-100 rounded w-64"></div>
                      </td>
                      <td className="py-4 px-3 hidden md:table-cell">
                        <div className="h-3 bg-neutral-200 rounded w-24"></div>
                      </td>
                      <td className="py-4 px-3">
                        <div className="h-4 bg-neutral-200 rounded w-20"></div>
                      </td>
                      <td className="py-4 px-3 hidden sm:table-cell">
                        <div className="h-3 bg-neutral-200 rounded w-32 mx-auto"></div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right">
                        <div className="h-7 bg-neutral-200 rounded-lg w-16 ml-auto"></div>
                      </td>
                    </tr>
                  ))
                ) : displayedRepos.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-neutral-500">
                      No repositories found matching your query.
                    </td>
                  </tr>
                ) : (
                  displayedRepos.map((repo) => (
                    <tr 
                      key={repo.name}
                      className="hover:bg-neutral-50/90 transition-colors group"
                    >
                      {/* Column 1: Repo Title & Description */}
                      <td className="py-3.5 px-4 sm:px-6 align-top">
                        <div className="flex items-start gap-2.5">
                          <FolderGit2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-neutral-900 group-hover:text-primary transition-colors text-sm hover:underline"
                              >
                                {repo.name}
                              </a>
                              <button
                                onClick={() => handleCopyName(repo.name)}
                                className="text-neutral-400 hover:text-neutral-700 transition-colors p-0.5"
                                title="Copy repository name"
                              >
                                {copiedName === repo.name ? (
                                  <Check className="w-3 h-3 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                            <p className="text-xs text-neutral-500 line-clamp-2 max-w-lg leading-relaxed">
                              {repo.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Column 2: Category */}
                      <td className="py-3.5 px-3 align-top hidden md:table-cell whitespace-nowrap">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200">
                          <Layers className="w-3 h-3 text-primary shrink-0" />
                          <span>{repo.category || 'Infrastructure'}</span>
                        </span>
                      </td>

                      {/* Column 3: Primary Language */}
                      <td className="py-3.5 px-3 align-top whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span 
                            className={`w-2.5 h-2.5 rounded-full ${
                              repo.language && LANGUAGE_COLORS[repo.language] 
                                ? LANGUAGE_COLORS[repo.language] 
                                : LANGUAGE_COLORS.Default
                            }`} 
                          />
                          <span className="font-medium text-xs text-neutral-800">
                            {repo.language || 'Multi-stack'}
                          </span>
                        </div>
                      </td>

                      {/* Column 4: Last Updated Timestamp with Exact Time */}
                      <td className="py-3.5 px-3 align-top hidden sm:table-cell text-center whitespace-nowrap">
                        <div className="inline-flex flex-col items-center justify-center gap-1 text-neutral-600 text-xs font-mono bg-neutral-50 px-2.5 py-1.5 rounded-lg border border-neutral-200/80">
                          <span className="flex items-center gap-1 text-neutral-700 font-semibold">
                            <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>{formatTimestamp(repo.updated_at)}</span>
                          </span>
                          <span className="flex items-center gap-2 text-[10px] text-neutral-400">
                            <span className="flex items-center gap-0.5">
                              <Star className="w-2.5 h-2.5 text-amber-500" />
                              <span>{repo.stargazers_count} stars</span>
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-0.5">
                              <GitFork className="w-2.5 h-2.5 text-neutral-400" />
                              <span>{repo.forks_count} forks</span>
                            </span>
                          </span>
                        </div>
                      </td>

                      {/* Column 5: Action Buttons */}
                      <td className="py-3.5 px-4 sm:px-6 align-top text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleCopyClone(repo.clone_url, repo.name)}
                            className="p-1.5 text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-lg border border-neutral-200 transition-colors"
                            title="Copy git clone command"
                            aria-label="Copy clone command"
                          >
                            {copiedClone === repo.name ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>

                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-neutral-900 hover:bg-primary text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
                          >
                            <Code2 className="w-3 h-3" />
                            <span>View Repo</span>
                            <ExternalLink className="w-2.5 h-2.5 text-neutral-300" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer: Inline Toggle */}
          <div className="p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-neutral-500 font-medium">
              Showing {displayedRepos.length} of {repos.length} repositories
            </span>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-100 text-neutral-800 hover:text-primary text-xs sm:text-sm font-bold rounded-xl border border-neutral-300 shadow-xs transition-all duration-200 group"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-primary group-hover:rotate-45 transition-transform" />
              <span>
                {isExpanded ? 'Collapse to Top 5' : `View All Repositories (${repos.length})`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-neutral-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-500" />
              )}
            </button>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Projects;
