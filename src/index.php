<?php 
if (1 == $_GET['json']) {
    header('Content-Type: application/json');

    $pageJson = file_get_contents('index.json', 1);
    die($pageJson);
}
include('header.php');

$pageData = json_decode(file_get_contents('index.json', 1), 1);
?>
    
<!-- Language selection -->
<div class="container">
    <div class="row" id="language">
        <div class="twelve columns"><a href="/tr">/tr</a></div>
    </div>
</div>
<div class="container">
    <div class="row">
        <!-- Intro section -->
        <div class="seven columns">
            <h3><b><?= $pageData['title'] ?></b></h3>
            <h5><?= $pageData['snippet'] ?></h5>
            <?= $pageData['description'] ?>
            <p>
                <a href="<?= $pageData['social']['linkedin']['url'] ?>" target="_blank"><img src="<?= $pageData['social']['linkedin']['icon'] ?>" style="width: 30px; padding-right: 9px" /></a><a href="<?= $pageData['social']['github']['url'] ?>" target="_blank"><img src="<?= $pageData['social']['github']['icon'] ?>" style="width: 28px" /></a> <a href="<?= $pageData['social']['medium']['url'] ?>" target="_blank"><img src="<?= $pageData['social']['medium']['icon'] ?>" style="width: 30px; padding-left: 6px;" /></a>
            </p>
        </div>
        <div class="five columns">
            <img src="<?= $pageData['pp'] ?>" width="100%" />
        </div>
        <!-- Menu section -->
        <div class="twelve columns">
            <div class="navbar-spacer"></div>
            <nav class="navbar">
                <div class="container">
                    <ul class="navbar-list">
                    <?php foreach ($pageData['fields'] as $field) : ?>
                        <li class="navbar-item"><a class="navbar-link" href="#<?= $field['slug']; ?>"><?= $field['title']; ?></a></li>
                    <?php endforeach; ?>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <div class="row">
        <!-- Experience section -->
        <div class="docs-section" id="<?= $pageData['fields']['experience']['slug'] ?>">
            <h3 class="docs-header"><?= $pageData['fields']['experience']['title'] ?></h3>
            <div class="docs-example">
                <table class="u-full-width">
                    <?php foreach ($pageData['fields']['experience']['items'] as $experience) : ?>
                    <tr>
                        <td>
                            <span style="font-size: 17px"><b><?= $experience['title'] ?></b></span>
                            <br> <?= $experience['company'] ?>
                            <br>
                            <?= $experience['description'] ?>
                        </td>
                        <td><?= $experience['start_date'] ?> – <?= $experience['end_date'] ?></td>
                    </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        </div>
        <!-- Education section -->
        <div class="docs-section" id="<?= $pageData['fields']['education']['slug'] ?>">
            <h3 class="docs-header"><?= $pageData['fields']['education']['title'] ?></h3>
            <div class="docs-example">
                <table class="u-full-width">
                    <?php foreach ($pageData['fields']['education']['items'] as $education) : ?>
                    <tr>
                        <td>
                            <span style="font-size: 17px"><b><?= $education['school'] ?></b></span>
                            <br><?= $education['degree'] ?>, <?= $education['field_of_study'] ?>
                        </td>
                        <td><?= $education['start_year'] ?> – <?= $education['end_year'] ?></td>
                    </tr>
                    <?php endforeach; ?>
                </table>
            </div>
        </div>
        <!-- Skills section -->
        <div class="docs-section" id="<?= $pageData['fields']['skills']['slug'] ?>">
            <h3 class="docs-header"><?= $pageData['fields']['skills']['title'] ?></h3>
            <?= $pageData['fields']['skills']['description'] ?>
            <table class="u-full-width" style="margin-top:15px;">
                <?php foreach ($pageData['fields']['skills']['items'] as $skill) : ?>
                <tr>
                    <td>
                        <?= $skill['title'] ?>
                    </td>
                    <td>
                        <span style="font-size: 29px">
                        <?php 
                        for ($i = 0; $i < 10; $i++) {
                            if ($i < $skill['level']) {
                                echo "<b>+</b>";
                            } else {
                                echo "<span style='color: #ccc'>+</span>";
                            }
                        }
                        ?>
                        </span>
                    </td>
                </tr>
                <?php endforeach; ?>
            </table>
            <br />
            <em><b><?= $pageData['fields']['skills']['to_learn']['title'] ?>:</b> <?= implode(", ", $pageData['fields']['skills']['to_learn']['items']) ?></em>
        </div>
        <!-- Projects section -->
        <div class="docs-section" id="<?= $pageData['fields']['projects']['slug'] ?>" style="margin-top: 20px">
            <h3 class="docs-header"><?= $pageData['fields']['projects']['title'] ?></h3>
            <table class="u-full-width">
                <?php foreach ($pageData['fields']['projects']['items'] as $project) : ?>
                <tr>
                    <td>
                        <span style="font-size: 17px;"><b><?= $project['title'] ?></b></span>
                        <br> <?= $project['type'] ?>, <?= $project['start_date'] ?> – <?= $project['end_date'] ?>
                        <br>
                        <br>
                        <?= $project['description'] ?>
                        <br>
                        <br>
                        <a class="button button-primary" href="<?= $project['url'] ?>" target="_blank">Go to Project</a>
                    </td>
                    <td>
                        <a href="<?= $project['url'] ?>" target="_blank"><img src="<?= $project['image'] ?>" width="100px" /></a>
                    </td>
                </tr>
                <?php endforeach; ?>
                <tr>
            </table>
        </div>
        <!-- Personal section -->
        <div class="docs-section" id="<?= $pageData['fields']['personal']['slug'] ?>">
            <h3 class="docs-header"><?= $pageData['fields']['personal']['title'] ?></h3>
            <?= $pageData['fields']['personal']['description'] ?>
            <p>
            <?php foreach ($pageData['fields']['personal']['chapters'] as $chapter) : ?>
            <b><?= $chapter['title'] ?>:</b> <?= $chapter['value'] ?>
            <br>
            <?php endforeach; ?>
        </div>
        <div class="divider"></div>
    </div>
</div>

<?php include('footer.php'); ?>