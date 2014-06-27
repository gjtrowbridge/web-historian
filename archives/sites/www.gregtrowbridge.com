<!DOCTYPE html>
<html>
<head>
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    
    <title>Greg Trowbridge</title>
    <meta name="description" content="Software Engineer at Hack Reactor" />

    <meta name="HandheldFriendly" content="True" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="/favicon.ico">

    
    <link rel="stylesheet" type="text/css" href="/assets/css/screen.css?v=bd4e326c96" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Noto+Serif:400,700,400italic|Open+Sans:700,400" />

    
    <meta name="generator" content="Ghost 0.4" />
<link rel="alternate" type="application/rss+xml" title="Greg Trowbridge" href="/rss/">
<link rel="canonical" href="http://gregtrowbridge.com/" />
</head>
<body class="home-template">

    
    




<header class="site-head" style="background-image: url(/content/images/2014/Jun/1369.JPG)">
    <div class="vertical">
        <div class="site-head-content inner">
            
            <h1 class="blog-title">Greg Trowbridge</h1>
            <h2 class="blog-description">Software Engineer at Hack Reactor</h2>
        </div>
    </div>
</header>


<main class="content" role="main">

    
    

    <article class="post">
        <header class="post-header">
            <span class="post-meta"><time datetime="2014-06-18">18 Jun 2014</time> </span>
            <h2 class="post-title"><a href="/a-bitwise-solution-to-the-n-queens-problem-in-javascript/">A bitwise solution to the N Queens problem in Javascript</a></h2>

        </header>
        <section class="post-excerpt">
            <p>The N Queens problem is a fairly well-known puzzle in the computer science community. The goal is to place N queens on an N x N chessboard in such a way that none of the queens can attack one another. Above is an example solution for N=4 (that is&hellip;</p>
        </section>
    </article>

    

    <article class="post">
        <header class="post-header">
            <span class="post-meta"><time datetime="2014-06-16">16 Jun 2014</time> </span>
            <h2 class="post-title"><a href="/understanding-how-arguments-are-passed-to-functions-part-ii/">Understanding how arguments are passed to functions in Javascript (Part 2 of 2)</a></h2>

        </header>
        <section class="post-excerpt">
            <p>As I mentioned in part I, when I started coding in Javascript, I didn't fully understand how Javascript passes arguments to functions.  I had questions like: "If I modify this parameter inside a function, will the corresponding argument OUTSIDE the function be modified as well?" and "Are variables passed by&hellip;</p>
        </section>
    </article>

    

    <article class="post">
        <header class="post-header">
            <span class="post-meta"><time datetime="2014-06-13">13 Jun 2014</time> </span>
            <h2 class="post-title"><a href="/understanding-how-arguments-are-passed-to-functions-part-i/">Understanding how arguments are passed to functions in Javascript (Part 1 of 2)</a></h2>

        </header>
        <section class="post-excerpt">
            <p>When I started coding in Javascript, I was fairly confused about how Javascript passes arguments to functions.  I had questions like: "If I modify this parameter inside a function, will the corresponding argument OUTSIDE the function be modified as well?" and "Are variables passed by object or by reference?" There&hellip;</p>
        </section>
    </article>

    

    
    <nav class="pagination" role="navigation">
    
    <span class="page-number">Page 1 of 1</span>
    
</nav>

</main>

    <footer class="site-footer">
        <a class="subscribe icon-feed" href="http://gregtrowbridge.com/rss/"><span class="tooltip">Subscribe!</span></a>
        <div class="inner">
             <section class="copyright">All content copyright <a href="http://gregtrowbridge.com/">Greg Trowbridge</a> &copy; 2014 &bull; All rights reserved.</section>
             <section class="poweredby">Proudly published with <a class="icon-ghost" href="https://ghost.org">Ghost</a></section>
        </div>
    </footer>

    
    <script src="/public/jquery.min.js?v=bd4e326c96"></script>

    
    <script type="text/javascript" src="/assets/js/jquery.fitvids.js?v=bd4e326c96"></script>
    <script type="text/javascript" src="/assets/js/index.js?v=bd4e326c96"></script>

</body>
</html>
