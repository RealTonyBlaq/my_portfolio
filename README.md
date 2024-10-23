<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./home.css">
    <title>Ifeanyi Ikpenyi | Portfolio</title>
</head>
<body>
    <div class="container">
        <header class="top">
            <div class="header">
                <a href="./home.html">
                    <h1>Dev-ify</h1>
                </a>
            </div>

            <nav class="links">
                <a href="#home" class="link">Home</a>
                <a href="#about" class="link">About</a>
                <a href="#projects" class="link">Projects</a>
                <a href="#contact" class="link">Contact</a>
            </nav>
        </header>


        <section id="home" class="hero-section">
            <div class="hero-content">
                <h2>Welcome to My Portfolio</h2>
                <p>I'm a software engineer specializing in backend development. Graduated from ALX Africa in 2024. Check out my projects below.</p>
                <a href="#projects" class="cta-button">View Projects</a>
            </div>
        </section>

        <section id="about" class="about-section">
            <h2>About Me</h2>
            <br>
            <p>I'm Ifeanyi Ikpenyi, a passionate software engineer with a background in backend development and a love for solving complex problems.
            </p>
        </section>

        <section id="projects" class="projects-section">
            <h2>My Projects</h2>
            <div class="projects-grid">
                <!-- Add project cards here -->
                <div class="project-card">
                    <a href="https://github.com/RealTonyBlaq/WeBlog" id="project-link" target="_blank">
                        <h3>WeBlog</h3>
                    </a>
                    <br>
                    <p>A Modern Blog Platform</p>
                </div>
                <div class="project-card">
                    <a href="https://github.com/RealTonyBlaq/Expense_tracker" id="project-link" target="_blank">
                        <h3>Expense Tracker App</h3>
                    </a>
                    <br>
                    <p>A web-based expense tracker built with Flask and SQLAlchemy.</p>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-section">
            <h2>Contact Me</h2>
            <p>Feel free to reach out through the links below.</p>
            <!-- Contact links can be added here -->
        </section>

        <footer>
            <p>&copy; 2024 Ifeanyi Ikpenyi. All Rights Reserved.</p>
        </footer>
    </div>

    <script src="./home.js"></script>
</body>
</html>
