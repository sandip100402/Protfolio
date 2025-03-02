function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
    document.querySelector(".hamburger").classList.toggle("active");
}

    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,  // Show navigation dots
        anchors: ['firstPage', 'secondPage', 'thirdPage'], // Custom section links
        scrollOverflow: true // Enable scrolling inside sections
    });