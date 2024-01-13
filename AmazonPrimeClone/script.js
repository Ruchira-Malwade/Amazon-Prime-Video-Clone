var favChannels = [
    {img_url:"favChannels/LionsgatePlay.png" },
    {img_url:"favChannels/Discovery.png" },
    {img_url:"favChannels/BBC_PLAYER.png" },
    {img_url:"favChannels/MANORAMAMAX.png" },
    {img_url:"favChannels/hoichoi.png" },
    {img_url:"favChannels/Chaupal.png" },
    {img_url:"favChannels/Amc.png" },
    {img_url:"favChannels/Erosnow.png" },
    {img_url:"favChannels/Mubi.png" },
    {img_url:"favChannels/Vrott.png" },
    {img_url:"favChannels/Stingray.png" },
    {img_url:"favChannels/Docubay.png" },
];

favChannels.map(function(elem){
    var div = document.createElement('div');
    div.setAttribute("class", "channelDiv");

    var image = document.createElement('img');
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels", JSON.stringify(favChannels));