<?php
if (1 == $_GET['json']) {
    header('Content-Type: application/json');

    $pageJson = file_get_contents('index.json', 1);
    die($pageJson);
}
include('header.php');

$pageData = json_decode(file_get_contents('index.json', 1), 1);
?>

<div class="container">
    <div class="introduction">
        <h3 class="title"><?= $pageData['title'] ?></h3>
        <h5 class="snippet"><?= $pageData['snippet'] ?></h5>
        <p class="description"><?= $pageData['description'] ?></p>
        <div class="social">
            <a href="<?= $pageData['social']['linkedin']['url'] ?>" target="_blank"><img src="<?= $pageData['social']['linkedin']['icon'] ?>" style="width: 28px; padding-right: 9px" /></a><a href="<?= $pageData['social']['github']['url'] ?>" target="_blank"><img src="<?= $pageData['social']['github']['icon'] ?>" style="width: 26px" /></a> <a href="<?= $pageData['social']['medium']['url'] ?>" target="_blank"><img src="<?= $pageData['social']['medium']['icon'] ?>" style="width: 27px; padding-left: 6px;" /></a>
        </div>
    </div>
    <div class="section">
        <div class="section-title projects">👩🏻‍💻 Side Projects</div>
        <span>Present</span>
        <ul class="current-projects">
            <li>🎧 Working on <strong><a href="https://github.com/ebru/euphony" target="_blank">Euphony</a></strong>, a little side project to improve my React, Node.js, Docker and AWS knowledge.</li>
        </ul>
        <span>Past</span>
        <ul class="past-projects">
            <li>✔️ Built <strong><a href="https://apps.apple.com/us/app/listpie/id1434060708" target="_blank">Listpie</a></strong>, the very first app that I have developed during my journey to learn mobile development as a personal interest in my free time. <em class="year-date">(2018)</em></li>
            <li>🧶 Co-founded <strong><a href="https://www.instagram.com/mukavvaco/" target="_blank">MUKAVVA</a></strong>, a design brand that we created together with my two close friends in a very amateur way, an adventure inspired by nature and our travels... <em class="year-date">(2018)</em></li>
            <li>🚀 Created <strong><a href="https://www.youtube.com/user/hayallerimdeben" target="_blank">Hayallerimde Ben</a></strong>, a storytelling project that I started to share my experiences through my bucket list journey between ages 18 and 25. <em class="year-date">(2013)</em></li>
        </ul>
    </div>
    <div class="section">
        <div class="section-title career">💻 The Journey</div>
        <span>Present</span>
        <ul class="current-projects">
            <li>🕹 Working at <strong>Sony</strong> since November of 2017.</li>
            <li>Senior Software Engineer <em class="year-date">(Oct 2019 – present)</em>, Software Engineer <em class="year-date">(Nov 2017 – Oct 2019)</em></li>
        </ul>
        <span>Past</span>
        <ul class="past-projects">
            <li>🚞 Took a gap year after graduation before starting my professional career.</li>
            <li>🎓 Graduated from <strong>Istanbul University</strong> with a degree in Computer Engineering. <em class="year-date">(2016)</em></li>
            <li>🇪🇪 Exchange Student at <strong>Tallinn University</strong> in Estonia. <em class="year-date">(2015)</em></li>
            <li>🐴 Graduated from <strong>Nişantaşı Anadolu Lisesi</strong> with high school diploma. <em class="year-date">(2012)</em></li>
            <li>🐣 My interest in software development has started in my early ages while trying to design a website from free providers and I've built many, many others later on.</li>
        </ul>
    </div>
    <div class="section">
        <div class="section-title tech-stack">🛠 Technology Stack</div>
        <ul class="skills" style="list-style: square inside">
            <li>I'm currently focused on <tech style="border-bottom: 3px solid #F0DB4F">JavaScript</tech> with <tech>React</tech>, <tech style="border-bottom: 3px solid #83BA63">Node.js</tech> with <tech>Express</tech>, <tech style="border-bottom: 3px solid #0db7ed">Docker</tech> for containerization and <tech style="border-bottom: 3px solid #FF9900">AWS</tech> services to build full-stack applications.</li>
            <li>My main technology stack has been <tech style="border-bottom: 3px solid #474A8A">PHP</tech>, <tech>MySQL</tech>, <tech>HTML</tech> and <tech>CSS</tech> so far.</li>
            <li>I have also worked with <tech style="border-bottom: 3px solid #306998">Python</tech> and <tech>AWS Serverless</tech> to build some projects.</li>
            <li>I have some knowledge on <tech>CI/CD</tech> with <tech style="border-bottom: 3px solid #d24939">Jenkins</tech></li>
            <li>I use <tech>Git</tech> and <tech>Terminal</tech></li>
            <li>I try to do <tech>Test-Driven Development</tech> if there is an efficient case to use.</li>
            <li>I'm familiar with <tech>Agile Methodologies</tech> using <tech>Scrum</tech> and <tech>Kanban</tech></li>
            <li>I have some experience on building, publishing an iOS app using <tech style="border-bottom: 3px solid #fd9426">Swift</tech> and <tech>Firebase</tech></li>
            <div class="to-learn-list">
                <strong>Currently learning</strong>
                <br />
                MongoDB, GraphQL
            </div>
        </ul>
    </div>
    <div class="section">
        <div class="section-title personal">🌄 Personal</div>
        <p class="quote">
            "It doesn’t interest me what you do for a living. I want to know what you ache for – and if you dare to dream of meeting your heart’s longing. It doesn’t interest me how old you are. I want to know if you will risk looking like a fool – for love – for your dreams – for the adventure of being alive."
            <p style="text-align: right; font-style: italic">– Oriah Mountain Dreamer</p>
        </p>
        <?php foreach ($pageData['fields']['personal']['chapters'] as $chapter) : ?>
            <strong><?= $chapter['title'] ?>:</strong> <?= $chapter['value'] ?>
            <br>
        <?php endforeach; ?>
    </div>
    <?php include('footer.php'); ?>
</div>
