export const vanillaJavaScriptValidation = (emailString) => {
    const validDomains = [`com`, `org`, `gov`, `edu`];
    let errorString = "Please enter a valid email!";
    // includes returns true/false
    let emailHasAtSymbol = emailString.includes(`@`);
    if (emailHasAtSymbol === true) {
        // split returns an array
        let emailWebsite = emailString.split(`@`)[1];
        let emailDomain = emailWebsite.split(`.`)[1];
        let emailHasValidDomain = validDomains.includes(emailDomain);
        // all of these have to be true for the email to be valid
        return emailString !== `` && emailHasValidDomain == true ? true : errorString;
    } else {
        errorString = `Email Addresses Need to have the @ Symbol`;
        return errorString;
    }
};

export const getGithubData = async () => {
    let username = `furkanc1`;
    const repoURL = `https://api.github.com/users/${username}/repos`;
    const githubURL = `https://api.github.com/users/${username}`;
    const repositories = JSON.parse(localStorage.getItem(`repositories`)) || [];
    const responseRepos = await fetch(repoURL);
    const response = await fetch(githubURL);

    let projects = [];
  
    if (!response.ok || !responseRepos.ok) {
      console.log(`Fetch Error`);
      console.clear();
    } else {
      const github = await response.json();
      const githubRepos = await responseRepos.json();
      const { name, html_url, bio, blog, avatar_url, login, public_repos, repos_url, starred_url, followers, following } = github;
  
      githubRepos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((repo) => {
        const { name, html_url, created_at, owner, topics, license, updated_at, deployments_url, language, homepage, description } = repo;
        const filteredRepo = { name, owner, url: html_url, topics, date: created_at, license, updated: updated_at, homepage, language, deployment: deployments_url, description };
        repositories.push(filteredRepo);
        // Make sure to return something inside the end of a .map
        return filteredRepo;
      });
  
      let rawGithubData = {
        github,
        githubRepos
      }
  
      const gitUser = { id: `1 Furk 6:00 PM 1-10-2024`, name, url: html_url, bio, projects: repositories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), website: blog, avatar: avatar_url, login, repoLink: repos_url, repoNum: public_repos, starred: starred_url, followers, following, lastSignin: new Date().getTime(), rawGithubData };
  
      console.log(`Gihub API Data`, gitUser);
      localStorage.setItem(`projects`, JSON.stringify(gitUser?.projects));
  
      projects = gitUser?.projects;
    };

    return projects;
};







export const cachedProjects = [
  {
      "name": "FurksLibrary",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/FurksLibrary",
      "topics": [],
      "date": "2024-01-03T18:20:31Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2024-01-03T22:51:42Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/FurksLibrary/deployments",
      "description": "week 21 Homework (creating a full stack MERN webpage where i can search for books and descriptions of them."
  },
  {
      "name": "Adopt-A-Paw",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Adopt-A-Paw",
      "topics": [],
      "date": "2024-01-03T01:05:44Z",
      "license": null,
      "updated": "2024-01-04T00:25:30Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Adopt-A-Paw/deployments",
      "description": "Group-Project #3, creation of a M.E.R.N. full stack application to solve a real world problem."
  },
  {
      "name": "Furkans_ReactPortfolio",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Furkans_ReactPortfolio",
      "topics": [],
      "date": "2023-12-28T00:06:29Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-12-28T00:26:47Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Furkans_ReactPortfolio/deployments",
      "description": "Recreating portfolio from week 2 using react!"
  },
  {
      "name": "week14MVCwow",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/week14MVCwow",
      "topics": [],
      "date": "2023-12-15T03:03:27Z",
      "license": null,
      "updated": "2023-12-15T03:03:34Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/week14MVCwow/deployments",
      "description": "Model-View-Controller (MVC) Challenge: Tech Blog"
  },
  {
      "name": "gh-actions-demo",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/gh-actions-demo",
      "topics": [],
      "date": "2023-12-15T01:15:12Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-12-15T01:15:12Z",
      "homepage": null,
      "language": null,
      "deployment": "https://api.github.com/repos/Furkanc1/gh-actions-demo/deployments",
      "description": "Testing GITHUB ACTIONS WORKFLOW"
  },
  {
      "name": "BLOGPOINT_wk14",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/BLOGPOINT_wk14",
      "topics": [],
      "date": "2023-12-12T22:52:06Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-12-12T23:05:41Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/BLOGPOINT_wk14/deployments",
      "description": "Week 14 homework creating an MVC BLOGGING website where creators can post tips and tricks and viewers can comment on these posts."
  },
  {
      "name": "FakeBook-SocialNetworkHw",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/FakeBook-SocialNetworkHw",
      "topics": [],
      "date": "2023-12-11T21:56:34Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-12-11T22:15:06Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/FakeBook-SocialNetworkHw/deployments",
      "description": "week 18 homework, creating a social network website where people can post comment and add each other as friends"
  },
  {
      "name": "ECommerce-Back-End",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/ECommerce-Back-End",
      "topics": [],
      "date": "2023-11-29T02:05:52Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-11-29T02:16:38Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/ECommerce-Back-End/deployments",
      "description": "week 13 homework, back end Ecommerce application"
  },
  {
      "name": "Regex-Guide",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Regex-Guide",
      "topics": [],
      "date": "2023-11-28T01:03:14Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-11-29T00:52:06Z",
      "homepage": null,
      "language": "HTML",
      "deployment": "https://api.github.com/repos/Furkanc1/Regex-Guide/deployments",
      "description": "Creating a tutorial on using Regex (specifically email validation) and explaining its processes / functions"
  },
  {
      "name": "Employee-Tracker",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Employee-Tracker",
      "topics": [],
      "date": "2023-11-10T00:25:32Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-11-10T02:01:40Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Employee-Tracker/deployments",
      "description": "Employee tracker hw WEEK 12"
  },
  {
      "name": "Note-Taker",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Note-Taker",
      "topics": [],
      "date": "2023-11-09T00:28:01Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-11-15T00:31:00Z",
      "homepage": "https://furkanc1.github.io/Note-Taker/",
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Note-Taker/deployments",
      "description": "Note Taker Week 11 HW"
  },
  {
      "name": "Logo-Builder",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Logo-Builder",
      "topics": [],
      "date": "2023-11-08T23:57:42Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-11-29T22:29:44Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Logo-Builder/deployments",
      "description": "build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file"
  },
  {
      "name": "Furkans_ReadMe_Factory",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Furkans_ReadMe_Factory",
      "topics": [],
      "date": "2023-10-23T20:36:09Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-10-30T23:13:07Z",
      "homepage": "https://furkanc1.github.io/Furkans_ReadMe_Factory/",
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Furkans_ReadMe_Factory/deployments",
      "description": "creating a professional readMe Generator"
  },
  {
      "name": "Furkans-Weather-Report-hw",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Furkans-Weather-Report-hw",
      "topics": [],
      "date": "2023-09-03T17:27:51Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-10-19T00:46:42Z",
      "homepage": "https://furkanc1.github.io/Furkans-Weather-Report-hw/",
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Furkans-Weather-Report-hw/deployments",
      "description": "Week 6 homework assignment ( same week as project )"
  },
  {
      "name": "Furkans-calendar-HW5",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Furkans-calendar-HW5",
      "topics": [],
      "date": "2023-08-24T19:34:30Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-08-24T23:27:24Z",
      "homepage": null,
      "language": "HTML",
      "deployment": "https://api.github.com/repos/Furkanc1/Furkans-calendar-HW5/deployments",
      "description": "HW week 5 calendar"
  },
  {
      "name": "Banana-random",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Banana-random",
      "topics": [],
      "date": "2023-08-18T00:22:48Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-08-18T00:25:10Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Banana-random/deployments",
      "description": null
  },
  {
      "name": "Furkans-Quiz_hw",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/Furkans-Quiz_hw",
      "topics": [],
      "date": "2023-08-16T23:17:01Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-08-17T20:55:25Z",
      "homepage": null,
      "language": "JavaScript",
      "deployment": "https://api.github.com/repos/Furkanc1/Furkans-Quiz_hw/deployments",
      "description": "Week 4's Homework assignment, Creating a word puzzle game using javascript and implementing WEB-API's"
  },
  {
      "name": "RandomPasswordGenerator",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/RandomPasswordGenerator",
      "topics": [],
      "date": "2023-08-10T22:29:47Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-08-11T01:52:17Z",
      "homepage": null,
      "language": "CSS",
      "deployment": "https://api.github.com/repos/Furkanc1/RandomPasswordGenerator/deployments",
      "description": "Week 3 homework, Random Password Generator."
  },
  {
      "name": "02-Stu-Challenge",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/02-Stu-Challenge",
      "topics": [],
      "date": "2023-08-01T18:24:42Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-08-03T19:01:31Z",
      "homepage": null,
      "language": "CSS",
      "deployment": "https://api.github.com/repos/Furkanc1/02-Stu-Challenge/deployments",
      "description": "Homework for second week of CU-Course"
  },
  {
      "name": "BananaRama",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/BananaRama",
      "topics": [],
      "date": "2023-07-21T00:06:23Z",
      "license": null,
      "updated": "2023-07-26T02:18:38Z",
      "homepage": null,
      "language": "HTML",
      "deployment": "https://api.github.com/repos/Furkanc1/BananaRama/deployments",
      "description": "7/20/23 In-class assignment labeled homework (MINIPROJECT)"
  },
  {
      "name": "prework-study-guide",
      "owner": {
          "login": "Furkanc1",
          "id": 138514808,
          "node_id": "U_kgDOCEGReA",
          "avatar_url": "https://avatars.githubusercontent.com/u/138514808?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Furkanc1",
          "html_url": "https://github.com/Furkanc1",
          "followers_url": "https://api.github.com/users/Furkanc1/followers",
          "following_url": "https://api.github.com/users/Furkanc1/following{/other_user}",
          "gists_url": "https://api.github.com/users/Furkanc1/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Furkanc1/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Furkanc1/subscriptions",
          "organizations_url": "https://api.github.com/users/Furkanc1/orgs",
          "repos_url": "https://api.github.com/users/Furkanc1/repos",
          "events_url": "https://api.github.com/users/Furkanc1/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Furkanc1/received_events",
          "type": "User",
          "site_admin": false
      },
      "url": "https://github.com/Furkanc1/prework-study-guide",
      "topics": [],
      "date": "2023-07-05T16:33:20Z",
      "license": {
          "key": "mit",
          "name": "MIT License",
          "spdx_id": "MIT",
          "url": "https://api.github.com/licenses/mit",
          "node_id": "MDc6TGljZW5zZTEz"
      },
      "updated": "2023-07-06T17:58:18Z",
      "homepage": null,
      "language": "HTML",
      "deployment": "https://api.github.com/repos/Furkanc1/prework-study-guide/deployments",
      "description": "Bootcamp Study Guide for students"
  },
]

