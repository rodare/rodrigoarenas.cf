stickybits('header', {
    useStickyClasses: true
});

const headerHeight = document.querySelector('header').offsetHeight;

stickybits('.menulateral', {
    stickyBitStickyOffset: headerHeight
})
