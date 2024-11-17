import React from 'react';

const MyFirstHTML5Page = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My Website</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <article>
                    <h2>My First Blog Post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>
                <section>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </section>
                <aside>
                    <h3>Related Links</h3>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                    </ul>
                </aside>
            </main>
            <footer>
                <p>&copy; 2021 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyFirstHTML5Page;