
-- USERS
INSERT INTO users (name, job_headline, profile_pict, bio, location, email) VALUES
('Yunus Dermawan', 'Fullstack Developer', 'yunus.jpg', 'Passionate about building modern web applications.', 'Jakarta, Indonesia', 'yunus@example.com'),
('Jane Doe', 'Frontend Developer', 'jane.jpg', 'Loves crafting beautiful UIs.', 'Bandung, Indonesia', 'jane@example.com'),
('John Smith', 'Red Team/Offensive Security', 'john.jpg', 'Ethical hacker and pentest enthusiast.', 'Surabaya, Indonesia', 'john@example.com');

-- SKILLS
INSERT INTO skills (name, icon_url, category) VALUES
('React', 'react.png', 'Frontend'),
('Node.js', 'node.png', 'Backend'),
('Python', 'python.png', 'Fullstack');

-- USER_SKILLS
INSERT INTO user_skills (user_id, skill_id, level) VALUES
(1, 1, 'Advanced/Expert'),
(1, 2, 'Intermediate'),
(2, 1, 'Advanced/Expert'),
(3, 3, 'Intermediate');

-- EXPERIENCES
INSERT INTO experiences (user_id, company, role, start_date, end_date, description, logo_url) VALUES
(1, 'PT Tech Nusantara', 'Software Engineer', '2021-06-01', '2023-05-01', 'Worked on backend services.', 'ptnusa.png'),
(2, 'Creative Studio', 'Frontend Intern', '2022-01-15', '2022-06-30', 'Built landing pages.', 'creativestudio.png'),
(3, 'CyberLabs', 'Security Analyst', '2020-03-01', '2021-12-31', 'Performed vulnerability assessments.', 'cyberlabs.png');

-- EDUCATIONS
INSERT INTO educations (user_id, school, degree, major, start_year, end_year, description, document_url) VALUES
(1, 'Universitas Indonesia', 'S.Kom', 'Computer Science', 2017, 2021, 'Focus on web development.', 'ui.pdf'),
(2, 'Telkom University', 'S.Kom', 'Informatics', 2018, 2022, 'Studied UI/UX and frontend.', 'telkom.pdf'),
(3, 'ITS', 'S.Kom', 'Cybersecurity', 2016, 2020, 'Red teaming techniques.', 'its.pdf');

-- CERTIFICATIONS
INSERT INTO certifications (user_id, title, issuer, issue_date, cert_url) VALUES
(1, 'AWS Certified Developer', 'Amazon', '2022-07-15', 'aws_cert.pdf'),
(2, 'Google UI Expert', 'Google', '2023-03-10', 'google_ui.pdf'),
(3, 'CEH v11', 'EC-Council', '2021-12-01', 'ceh.pdf');

-- SOCIAL_LINKS
INSERT INTO social_Links (user_id, platform, url, icon_url) VALUES
(1, 'GitHub', 'https://github.com/yunus', 'github.svg'),
(2, 'LinkedIn', 'https://linkedin.com/in/janedoe', 'linkedin.svg'),
(3, 'TryHackMe', 'https://tryhackme.com/john', 'tryhackme.svg');

-- PROJECTS
INSERT INTO projects (user_id, title, description, tech_stack, repo_url, live_url, image_url, start_date, end_date, is_featured) VALUES
(1, 'Portfolio Website', 'Personal portfolio built with Next.js', 'Next.js, Tailwind, Node.js', 'https://github.com/yunus/portfolio', 'https://yunus.dev', 'portfolio.png', '2023-01-01', '2023-02-01', true),
(2, 'E-Commerce UI', 'Frontend for a shop site', 'React, Redux, SCSS', 'https://github.com/jane/shop-ui', NULL, 'shopui.png', '2022-05-01', '2022-06-15', false),
(3, 'Vuln Scanner', 'Python-based vulnerability scanner tool', 'Python, Nmap', 'https://github.com/john/vulnscan', NULL, 'vulnscanner.png', '2021-10-01', '2022-01-01', true);
