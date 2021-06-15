function deSkim(locator)
{
    let to_clean = document.querySelectorAll(locator);

    for(let i = 0; i< to_clean.length; i++) {
        let e = to_clean[i];
        let clone = e.cloneNode(true);

        removeDirtyClass(clone);
        clone.search = removeUtm(clone);

        e.replaceWith(clone);
    }
}

function removeDirtyClass(node)
{
    node.classList.remove('ext');
    node.classList.add('noskim');
}

function removeUtm(node)
{
    return node.search.replaceAll(/utm_\w+=[\w-]+&?/ig, '');
}

(function () {

    if (typeof window !== "object" || window.deskimmed) {
        return;
    }
    window.deskimmed = true;
    deSkim('a.ext');
})();
