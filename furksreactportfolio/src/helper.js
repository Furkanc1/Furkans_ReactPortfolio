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
        return emailString !== `` && emailHasValidDomain === true ? true : errorString;
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



export const githubRaw = [
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
        "topics": [
            "apollo-graphql",
            "javascript",
            "mern-stack",
            "react",
            "vite"
        ],
        "date": "2024-01-03T01:05:44Z",
        "license": null,
        "updated": "2024-01-11T21:41:18Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Adopt-A-Paw/deployments",
        "description": "Group-Project #3, creation of a M.E.R.N. full stack application to solve a real world problem: Basis- Creating a Pet Adoption website where user will be able to both view the pets other users will be putting up on the website, as well as get into contact with them for adopting. furthermore there will be Log in access to edit and upload (cards)/Pets"
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
        "topics": [
            "api",
            "javascript",
            "react",
            "reactjs"
        ],
        "date": "2023-12-28T00:06:29Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T21:40:01Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Furkans_ReactPortfolio/deployments",
        "description": "Recreating portfolio (First React Application!)- Basis: Creating a React App which takes the static portfolio page created using only HTML and CSS, and revamping it to a more modern application using React!"
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
        "topics": [
            "express-js",
            "handlebars",
            "routes",
            "sequelize",
            "sql",
            "user-validation"
        ],
        "date": "2023-12-12T22:52:06Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T21:47:41Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/BLOGPOINT_wk14/deployments",
        "description": "MVC-BLOGGING WEBSITE- Basis: where creators can post problems / issues with their code, and viewers can comment tips, tricks, resolutions, or advice on these posts"
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
        "topics": [
            "crud-application",
            "insomia",
            "javascript",
            "mongodb",
            "routes"
        ],
        "date": "2023-12-11T21:56:34Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T21:44:10Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/FakeBook-SocialNetworkHw/deployments",
        "description": "Social_Network_FakeBook- Basis: Creating a social network website where users can share thoughts react to friends thoughts + create a friend-list! (Back-End)"
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
        "topics": [
            "crud-application",
            "express-js",
            "insomnia",
            "mysql-database",
            "routes-api",
            "sequelize",
            "sql"
        ],
        "date": "2023-11-29T02:05:52Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T21:54:52Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/ECommerce-Back-End/deployments",
        "description": "E-Commerce: Back-End Application- Basis: Using MySql database, creating an Online Retail Back-end which will serve the purpose of creating, editing, deleting - Categories, -Products, -ProductTags, - Tags, in order to successfully handle data for an Internet Retail Service! "
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
        "topics": [
            "gist",
            "regex",
            "tutorial"
        ],
        "date": "2023-11-28T01:03:14Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:31:08Z",
        "homepage": "",
        "language": "HTML",
        "deployment": "https://api.github.com/repos/Furkanc1/Regex-Guide/deployments",
        "description": "Regex-Gist.md Guide: Basis - Creating a gist.md which essentially gives a quick refresher as to what regex is, and an explanation of it components / functionality, while focusing in on specifically Email Validation aspects of Regex."
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
        "topics": [
            "database-schema",
            "inquirer-prompt",
            "javascript",
            "mysql"
        ],
        "date": "2023-11-10T00:25:32Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:03:15Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Employee-Tracker/deployments",
        "description": "Employee-Tracker: Basis- Creation of an employee tracker using MySQL Database. Command-Line application(inquirer) used to View, Add, Edit, Update and Delete: -Departments, -Roles, -Employees... As well as Relate each section to one another for processing Updates, Deletes, and Addition. (includes further info {salary, names, etc.} )"
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
        "topics": [
            "api-routes",
            "backend",
            "express-js",
            "javascript"
        ],
        "date": "2023-11-09T00:28:01Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:11:45Z",
        "homepage": "https://furkanc1.github.io/Note-Taker/",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Note-Taker/deployments",
        "description": "Note-Taker-Application: Basis - Creating an app where users are able to go to the website, choose between creating new notes, editing existing notes, and ordering notes in any particular order."
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
        "topics": [
            "inquirer",
            "javascript",
            "nodejs",
            "orm"
        ],
        "date": "2023-11-08T23:57:42Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:06:30Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Logo-Builder/deployments",
        "description": "Simple-Logo-Builder: Basis- Creating a inquirer Application which allows users to create SVG logos allowing for customization such as: Shape, shapeColor, Text and textColor!"
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
        "topics": [
            "command-line-application",
            "inquirer",
            "javascript"
        ],
        "date": "2023-10-23T20:36:09Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:18:33Z",
        "homepage": "https://furkanc1.github.io/Furkans_ReadMe_Factory/",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Furkans_ReadMe_Factory/deployments",
        "description": "Read-Me-Generator: Basis - Creating an application which will use inquirer prompts in order to create a ReadMe based on the users preferences, and answers to certain questions!"
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
        "topics": [
            "form-handling",
            "javascript",
            "localstorage",
            "location-services",
            "server-side-api"
        ],
        "date": "2023-09-03T17:27:51Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:38:18Z",
        "homepage": "https://furkanc1.github.io/Furkans-Weather-Report-hw/",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Furkans-Weather-Report-hw/deployments",
        "description": "Weather-Report-Application: Basis- Creating a weather-report app which uses Server-Side-Api's in order to dynamically fill in weather cards on the application home screen, as well as show upcoming weather predictions depending on where you put the location as."
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
        "topics": [
            "css",
            "day-js",
            "html",
            "jquery",
            "localstorage"
        ],
        "date": "2023-08-24T19:34:30Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:28:07Z",
        "homepage": "https://furkanc1.github.io/Furkans-calendar-HW5/",
        "language": "HTML",
        "deployment": "https://api.github.com/repos/Furkanc1/Furkans-calendar-HW5/deployments",
        "description": "Calendar-Application: Basis- designed around a 9-5 Day, essentially a TO_DO list, which powered by Jquery will feature dynamically updated HTML+CSS. Current hour on the 9-5 will be colored Green, outdated hours will be set back to webpage color, and upcoming hours will be a light blue, representing what is still left to be done!"
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
        "topics": [
            "css",
            "html",
            "javascript",
            "web-api"
        ],
        "date": "2023-08-16T23:17:01Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:41:59Z",
        "homepage": "",
        "language": "JavaScript",
        "deployment": "https://api.github.com/repos/Furkanc1/Furkans-Quiz_hw/deployments",
        "description": "Coding-Quiz: Basis - one of my first JavaScript applications, Creating a Quiz using JavaScript, allowing for user inputs as well as flipping questions, giving/taking away points, and a timer which decreases based on incorrect answer choices. "
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
        "topics": [
            "css",
            "html",
            "javascript"
        ],
        "date": "2023-08-10T22:29:47Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:46:07Z",
        "homepage": "https://furkanc1.github.io/RandomPasswordGenerator/",
        "language": "CSS",
        "deployment": "https://api.github.com/repos/Furkanc1/RandomPasswordGenerator/deployments",
        "description": "Random-Password-Generator! Basis- Creating a Password Generator using plain vanilla JavaScript and HTML+CSS"
    },
    {
        "name": "StaticPortfolio",
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
        "url": "https://github.com/Furkanc1/StaticPortfolio",
        "topics": [
            "css",
            "html"
        ],
        "date": "2023-08-01T18:24:42Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:48:49Z",
        "homepage": "https://furkanc1.github.io/02-Stu-Challenge/",
        "language": "CSS",
        "deployment": "https://api.github.com/repos/Furkanc1/StaticPortfolio/deployments",
        "description": "First Shot at creating a Portfolio PAGE! (Newly refurbished REACT-Portfolio can be found in Repositories section) Creating a simple HTML + CSS webpage, with a navbar which located the section you want to navigate to and brings you there!"
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
        "topics": [
            "css",
            "html"
        ],
        "date": "2023-07-05T16:33:20Z",
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "updated": "2024-01-11T22:45:09Z",
        "homepage": "",
        "language": "HTML",
        "deployment": "https://api.github.com/repos/Furkanc1/prework-study-guide/deployments",
        "description": "BootCamp Prework- (first ever time touching code (EVER), creating a simple index.HTML + CSS webpage"
    }
]



export const cachedProjects = githubRaw;

