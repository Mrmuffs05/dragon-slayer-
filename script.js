let playerChoices = [];

// This function switches the visible section
function nextScene(sceneId) {
    // Hide all scenes
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    // Show the targeted scene
    document.getElementById(sceneId).classList.add('active');
}

// Logic: Store choice and move forward
function recordChoice(val, nextId) {
    playerChoices.push(val);
    
    if (nextId === 'ending') {
        showResult();
    } else {
        nextScene(nextId);
    }
}

function showResult() {
    const allGood = playerChoices.every(choice => choice === 1);
    const allBad = playerChoices.every(choice => choice === 3);
    
    let title = "";
    let desc = "";

    if (allGood) {
        title = "Happy Ever After";
        desc = "The princess smiles, seeing her pet fox alive again... she takes you on her back and you fly away together!";
        document.body.style.background = "#2d5a27"; // Green for good ending
    } else if (allBad) {
        title = "Bad Ending";
        desc = "The dragon-princess laughs, devouring you with a dramatic explosion of sparks!";
        document.body.style.background = "#5a1a1a"; // Red for bad ending
    } else {
        title = "Neutral Ending";
        desc = "You slay the dragon, but it feels hollow. She whispers: 'Next time, choose carefully. Courage alone is not enough.'";
        document.body.style.background = "#333"; // Grey for neutral
    }

    document.getElementById('ending-title').innerText = title;
    document.getElementById('ending-desc').innerText = desc;
    nextScene('ending');
}