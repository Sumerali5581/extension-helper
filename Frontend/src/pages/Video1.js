import Base1 from "../components/Base1";
import './Video.css'

const Video1=()=>
{
    return(
        <Base1>
        <body>
            <header>
                <h1>We make developers!</h1>
                <h3>Boost your career with the free courses.</h3>
            </header>
            <nav>
                Every student, irrespective of their college or branch, can make it big.
            </nav>
            <div class="courses">
            <h1>Courses</h1>
            </div>
            <main>
                <section id="course1" className="coures1">
                    <div class="image-box">
                        {/* <!-- Add your image here --> */}
                        <img src="https://i.ytimg.com/vi/rZ41y93P2Qo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCVLdFTYGBOx_XHYIv_sHrVY9shRw" alt="Course 1 Image"/>
                        <h3>Data Structures & Algorithms in Java</h3>
                        <p>
                        Get interview-ready with this course that has no prerequisites and is designed to make you an expert in solving easy to hard LeetCode problems with ease.
                        </p>
                        <a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" class="playlist-button1">Playlist</a>
                    </div>
                </section>
                <section id="course2">
                    <div class="image-box">
                        {/* <!-- Add your image here --> */}
                        <img src="https://i.ytimg.com/vi/6mbwJ2xhgzM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBvlMuWkLXMncxKtS-odl1tOp17Mw" alt="Course 2 Image"/>
                        <h3>Web Development for Beginners</h3>
                        <p>
                        This Web development course will teach you about how to create a website from scratch. This web development course is designed for beginners with an aim to take HTML5, CSS3, JavaScript and other concepts to advanced level.
                        </p>
                        <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" class="playlist-button">Playlist</a>
                    </div>
                </section>
                {/* <!-- Add more sections for different courses --> */}
            </main>
            <footer>
                <p>&copy; 2023 ExtensionHelper. All rights reserved.</p>
            </footer>
        </body>
        </Base1>
    );
};

export default Video1;