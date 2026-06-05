const moods = {
    focused: {
        title: "Deep Focus",
        desc: "Blocking out the noise.",
        url: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKzbqS3oYq" // Lofi Beats
    },
    hype: {
        title: "Maximum Power",
        desc: "Let's go. No limits.",
        url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX0pHun7V3cqD" // Phonk
    },
    chill: {
        title: "Pure Calm",
        desc: "Take a breath. Relax.",
        url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcnC" // Chill Vibes
    },
    sad: {
        title: "Midnight Reflections",
        desc: "It's okay to feel.",
        url: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1" // Sad Indie
    }
};

function setMood(moodKey) {
    const data = moods[moodKey];
    
    // Change body class for CSS transitions
    document.body.className = `mood-${moodKey}`;
    
    // Update Text
    document.getElementById('mood-title').innerText = data.title;
    document.getElementById('mood-desc').innerText = data.desc;
    
    // Update Iframe Playlist
    document.getElementById('playlist').src = data.url;
}

// Set default mood on load
window.onload = () => setMood('focused');
