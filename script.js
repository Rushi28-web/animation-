const modal = document.querySelector('.modal');
const codeElement = document.querySelector('.modal-content code');
const copyBtn = document.querySelector('.copy-btn');

const animationCode = {
    spinner: `
.spinner {
width: 50px;
height: 50px;
border: 5px solid #f3f3f3;
border-top: 5px solid #3498db;
border-radius: 50%;
animation: spin 1s linear infinite;
}

@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}`,
    pulse: `
.pulse {
width: 50px;
height: 50px;
background: #3498db;
border-radius: 50%;
animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
0% { transform: scale(1); }
50% { transform: scale(1.2); }
100% { transform: scale(1); }
}`,
    fade: `
.fade {
width: 100px;
height: 100px;
background: #3498db;
animation: fade 2s ease-in-out infinite;
}

@keyframes fade {
0% { opacity: 1; }
50% { opacity: 0.3; }
100% { opacity: 1; }
}`,
    bounce: `
.bounce {
width: 50px;
height: 50px;
background: #3498db;
border-radius: 50%;
animation: bounce 1s ease infinite;
}

@keyframes bounce {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-20px); }
}`,
    wave: `
.wave {
display: flex;
gap: 5px;
}

.wave-bar {
width: 5px;
height: 40px;
background: #3498db;
animation: wave 1s ease-in-out infinite;
}

.wave-bar:nth-child(2) { animation-delay: 0.1s; }
.wave-bar:nth-child(3) { animation-delay: 0.2s; }
.wave-bar:nth-child(4) { animation-delay: 0.3s; }
.wave-bar:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave {
0%, 100% { transform: scaleY(1); }
50% { transform: scaleY(2); }
}`,
slide_in:`
.slide-in {
    width: 100px;
    height: 50px;
    background-color: #e74c3c; /* Example color */
    animation: slideIn 1s ease-in-out forwards; /* forwards keeps the final state */
    }
    
    @keyframes slideIn {
    0% {
    transform: translateX(-100%); /* Start off-screen to the left */
    opacity: 0;
    }
    100% {
    transform: translateX(0); /* Slide to the original position */
    opacity: 1;
    }
    }`,
    scale: `
    .scale {
width: 80px;
height: 80px;
background-color: #f39c12; /* Example color */
border-radius: 50%;
animation: scaleUpDown 1.5s ease-in-out infinite alternate; /* alternate reverses the animation */
}

@keyframes scaleUpDown {
0% { transform: scale(0.8); }
100% { transform: scale(1.2); }
}`,
rotate_fade:`
.rotate-fade {
width: 60px;
height: 60px;
background-color: #2ecc71; /* Example color */
animation: rotateFade 2s linear infinite;
}

@keyframes rotateFade {
0% {
transform: rotate(0deg);
opacity: 1;
}
50% {
transform: rotate(180deg);
opacity: 0.5;
}
100% {
transform: rotate(360deg);
opacity: 1;
}
}`,
color_change:`
.color-change {
width: 100px;
height: 50px;
background-color: #3498db;
animation: changeColor 3s ease-in-out infinite alternate;
}

@keyframes changeColor {
0% { background-color: #3498db; } /* Initial color */
50% { background-color: #9b59b6; } /* Transition color */
100% { background-color: #e74c3c; } /* Final color */
}`,   
flip: `
.flip-card {
    width: 100px;
    height: 100px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transform-style: preserve-3d;
    animation: flip 3s linear infinite;
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.flip-card-front {
    background-color: #3498db;
    color: white;
}

.flip-card-back {
    background-color: #2ecc71;
    color: white;
    transform: rotateY(180deg);
}

@keyframes flip {
    0%, 45% { transform: rotateY(0); }
    50%, 95% { transform: rotateY(180deg); }
    100% { transform: rotateY(360deg); }
}`,
            typewriter: `
.typewriter {
    width: 200px;
    background: #333;
    padding: 20px;
    border-radius: 4px;
    color: #fff;
}

.typewriter-text {
    overflow: hidden;
    border-right: 3px solid #fff;
    white-space: nowrap;
    margin: 0 auto;
    animation: typing 3.5s steps(30, end) infinite,
               blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    0%, 100% { width: 0 }
    50%, 70% { width: 100% }
}

@keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #fff }
}`,
            floating: `
.floating {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #3498db, #2ecc71);
    border-radius: 50%;
    animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, -10px) rotate(5deg); }
    50% { transform: translate(-5px, -15px) rotate(-5deg); }
    75% { transform: translate(-10px, -5px) rotate(5deg); }
}`,
            shake: `
.shake {
    width: 60px;
    height: 60px;
    background: #e74c3c;
    animation: shake 0.5s ease-in-out infinite;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px) rotate(-5deg); }
    75% { transform: translateX(10px) rotate(5deg); }
}`,
            progress: `
.progress-bar {
    width: 200px;
    height: 20px;
    background: #f1f1f1;
    border-radius: 10px;
    overflow: hidden;
}

.progress {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    animation: progress 3s ease-in-out infinite;
}

@keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
}`,
            heartbeat: `
.heartbeat {
    width: 50px;
    height: 50px;
    background-color: #e74c3c;
    clip-path: path('M25,39.7l-6.47-6.47C7.79,22.89,0,16.54,0,8.59C0,3.8,3.8,0,8.59,0c2.69,0,5.27,1.25,6.93,3.23L25,13.47l9.48-10.24C36.14,1.25,38.72,0,41.41,0C46.2,0,50,3.8,50,8.59c0,7.95-7.79,14.3-18.53,24.64L25,39.7z');
    animation: heartbeat 1.5s ease-in-out infinite;
}

 @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.1); }
            50% { transform: scale(1); }
            75% { transform: scale(1.2); }
        }`,
        'glowing-ring': `
        .glowing-ring {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            position: relative;
            animation: glow 2s ease-in-out infinite;
        }
        
        .glowing-ring::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border-radius: 50%;
            border: 3px solid #3498db;
            animation: glowRing 2s ease-in-out infinite;
        }
        
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px #3498db; }
            50% { box-shadow: 0 0 40px #3498db; }
        }
        
        @keyframes glowRing {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
        }`,
                    'rainbow-text': `
        .rainbow-text {
            font-size: 24px;
            font-weight: bold;
            background: linear-gradient(
                to right,
                #ff0000,
                #ff7f00,
                #ffff00,
                #00ff00,
                #0000ff,
                #4b0082,
                #8b00ff
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: rainbow 5s linear infinite;
        }
        
        @keyframes rainbow {
            0% { background-position: 0% 50%; }
            100% { background-position: 400% 50%; }
        }`,
                    'pendulum': `
        .pendulum-container {
            perspective: 1000px;
        }
        
        .pendulum {
            width: 10px;
            height: 100px;
            background: linear-gradient(#3498db, #2980b9);
            transform-origin: top center;
            animation: swing 2s ease-in-out infinite;
        }
        
        @keyframes swing {
            0%, 100% { transform: rotate(45deg); }
            50% { transform: rotate(-45deg); }
        }`,
                    'circle-loader': `
        .circle-loader {
            width: 80px;
            height: 80px;
            position: relative;
        }
        
        .circle-loader::before,
        .circle-loader::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid transparent;
            animation: circleLoader 2s linear infinite;
        }
        
        .circle-loader::before {
            border-top-color: #3498db;
            animation-delay: -0.5s;
        }
        
        .circle-loader::after {
            border-bottom-color: #e74c3c;
        }
        
        @keyframes circleLoader {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }`,
                    'dna': `
        .dna-container {
            width: 60px;
            height: 100px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateDNA 4s linear infinite;
        }
        
        .dna-strand {
            position: absolute;
            width: 100%;
            height: 10px;
            background: #3498db;
            transform-origin: center;
        }
        
        @keyframes rotateDNA {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
        }`,
                    'bouncing-dots': `
        .bouncing-dots {
            display: flex;
            gap: 8px;
        }
        
        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #3498db;
            animation: bounceDot 0.5s ease-in-out infinite;
        }
        
        .dot:nth-child(2) { animation-delay: 0.1s; }
        .dot:nth-child(3) { animation-delay: 0.2s; }
        .dot:nth-child(4) { animation-delay: 0.3s; }
        
        @keyframes bounceDot {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }`,
        magnetic_button:`

.magnetic-button {
    background: #3498db;
    padding: 15px 30px;
    border-radius: 5px;
    transition: transform 0.3s;
    animation: magnetic 3s ease-in-out infinite;
}

@keyframes magnetic {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-5px) translateY(-2px); }
    20% { transform: translateX(5px) translateY(2px); }
    30% { transform: translateX(-3px) translateY(-1px); }
    40% { transform: translateX(3px) translateY(1px); }
    50% { transform: translateX(0); }
}`,

liquid_fill:`
.liquid-fill {
    width: 100px;
    height: 100px;
    border: 3px solid #3498db;
    position: relative;
    overflow: hidden;
}

.liquid-fill::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3498db;
    animation: fill 4s ease-in-out infinite;
}

@keyframes fill {
    0% { top: 100%; }
    50% { top: 0; }
    100% { top: 100%; }
}`,
neon_text:`
.neon-text {
    color: #fff;
    text-shadow: 
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #3498db,
        0 0 82px #3498db,
        0 0 92px #3498db,
        0 0 102px #3498db,
        0 0 151px #3498db;
    animation: neon 1.5s ease-in-out infinite alternate;
}

@keyframes neon {
    0% { 
        text-shadow: 
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #3498db,
            0 0 82px #3498db,
            0 0 92px #3498db,
            0 0 102px #3498db,
            0 0 151px #3498db;
    }
    100% {
        text-shadow: 
            0 0 4px #fff,
            0 0 7px #fff,
            0 0 13px #fff,
            0 0 25px #3498db,
            0 0 50px #3498db,
            0 0 60px #3498db,
            0 0 70px #3498db,
            0 0 100px #3498db;
    }
}`,


card_3d:`
.card-3d {
    width: 200px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s;
}

.card-3d:hover {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-back {
    transform: rotateY(180deg);
}`,

morphing_shape:`
.morph {
    width: 100px;
    height: 100px;
    background: #3498db;
    animation: morph 8s infinite;
}

@keyframes morph {
    0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
    25% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
    50% { border-radius: 50% 60% 30% 70%/40% 60% 70% 40%; }
    75% { border-radius: 60% 40% 70% 30%/60% 30% 60% 40%; }
    100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
}`,

typing_cursor:`
.typing-cursor {
    border-right: 2px solid #000;
    animation: cursor 1s infinite;
    padding-right: 2px;
}

@keyframes cursor {
    0%, 100% { border-color: transparent; }
    50% { border-color: #000; }
}`,

equalizer:`
.equalizer {
    display: flex;
    gap: 3px;
    height: 50px;
    align-items: flex-end;
}

.bar {
    width: 10px;
    background: #3498db;
    animation: equalize 1s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: 0.1s; }
.bar:nth-child(2) { animation-delay: 0.2s; }
.bar:nth-child(3) { animation-delay: 0.3s; }
.bar:nth-child(4) { animation-delay: 0.4s; }

@keyframes equalize {
    0%, 100% { height: 10px; }
    50% { height: 50px; }
}`,

ripple:`
.ripple {
    position: relative;
    width: 100px;
    height: 100px;
}

.ripple::before,
.ripple::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 2px solid #3498db;
    border-radius: 50%;
    animation: ripple 2s linear infinite;
}

.ripple::after {
    animation-delay: 0.5s;
}

@keyframes ripple {
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        width: 100%;
        height: 100%;
        opacity: 0;
    }
}
`,

shimmer:`
.shimmer {
    background: linear-gradient(
        90deg,
        #000 0%,
        #fff 50%,
        #000 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 2s linear infinite;
}

@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}`,

radar:`
.radar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #3498db;
    position: relative;
    overflow: hidden;
}

.radar::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 100% 0 0 0;
    background: rgba(52, 152, 219, 0.4);
    top: 0;
    left: 0;
    transform-origin: 100% 100%;
    animation: scan 4s linear infinite;
}

@keyframes scan {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`,
floating_islands:`
.floating-islands {
    width: 120px;
    height: 120px;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
}

.island {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #2ecc71, #27ae60);
    border-radius: 10px;
    animation: floatIsland 4s ease-in-out infinite;
}

.island:nth-child(2) {
    transform: translateZ(-20px);
    animation-delay: -2s;
    opacity: 0.8;
}

.island:nth-child(3) {
    transform: translateZ(-40px);
    animation-delay: -4s;
    opacity: 0.6;
}

@keyframes floatIsland {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, -15px) rotate(3deg); }
    50% { transform: translate(-5px, -25px) rotate(-2deg); }
    75% { transform: translate(-15px, -15px) rotate(1deg); }
}`,

geo_morph:`
.geo-morph {
    width: 100px;
    height: 100px;
    position: relative;
    animation: geoMorph 6s linear infinite;
    background: #e74c3c;
}

@keyframes geoMorph {
    0% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
    25% { clip-path: polygon(50% 0%, 100% 100%, 50% 100%, 0% 100%); }
    50% { clip-path: circle(50% at 50% 50%); }
    75% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
    100% { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
}`,

split_text:`
.split-text {
    position: relative;
    font-size: 24px;
    font-weight: bold;
    overflow: hidden;
}

.split-text::before,
.split-text::after {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
}

.split-text::before {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
    animation: splitLeft 2s infinite;
}

.split-text::after {
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
    animation: splitRight 2s infinite;
}

@keyframes splitLeft {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-20px); }
}

@keyframes splitRight {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(20px); }
}`,

portal:`
.portal {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #9b59b6, #3498db, #2ecc71, #9b59b6);
    position: relative;
    animation: portalSpin 3s linear infinite;
}

.portal::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    background: white;
    border-radius: 50%;
    animation: portalPulse 2s ease-in-out infinite;
}

@keyframes portalSpin {
    100% { transform: rotate(360deg); }
}

@keyframes portalPulse {
    50% { transform: scale(0.8); }
}`,

energy_ball:`
.energy-ball {
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, #f1c40f 30%, transparent 70%);
    border-radius: 50%;
    position: relative;
    animation: energyPulse 2s ease-in-out infinite;
}

.energy-ball::before,
.energy-ball::after {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    right: -10%;
    bottom: -10%;
    border: 2px solid #f1c40f;
    border-radius: 50%;
    animation: energyWave 2s linear infinite;
}

.energy-ball::after {
    animation-delay: -1s;
}

@keyframes energyPulse {
    50% { transform: scale(1.2); background: radial-gradient(circle, #e67e22 30%, transparent 70%); }
}

@keyframes energyWave {
    100% { transform: scale(2); opacity: 0; }
}`,

glitch:`
.glitch-text {
    position: relative;
    font-size: 32px;
    font-weight: bold;
    color: #2c3e50;
    text-transform: uppercase;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch-text::before {
    animation: glitch-top 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

.glitch-text::after {
    animation: glitch-bottom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitch-top {
    0% {
        transform: translate(0);
        color: #ff0000;
    }
    20% {
        transform: translate(-2px, 2px);
        color: #00ff00;
    }
    40% {
        transform: translate(-2px, -2px);
        color: #0000ff;
    }
    60% {
        transform: translate(2px, 2px);
        color: #ff00ff;
    }
    80% {
        transform: translate(2px, -2px);
        color: #00ffff;
    }
    100% {
        transform: translate(0);
        color: #ff0000;
    }
}

@keyframes glitch-bottom {
    0% {
        transform: translate(0);
        color: #00ffff;
    }
    20% {
        transform: translate(-1px, -1px);
        color: #ff00ff;
    }
    40% {
        transform: translate(1px, 1px);
        color: #0000ff;
    }
    60% {
        transform: translate(-1px, 1px);
        color: #00ff00;
    }
    80% {
        transform: translate(1px, -1px);
        color: #ff0000;
    }
    100% {
        transform: translate(0);
        color: #00ffff;
    }
}
`,

spiral:`
.spiral-loader {
    width: 80px;
    height: 80px;
    position: relative;
}

.spiral {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top-color: #3498db;
    animation: spiral 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spiral:nth-child(2) { animation-delay: -0.3s; }
.spiral:nth-child(3) { animation-delay: -0.6s; }
.spiral:nth-child(4) { animation-delay: -0.9s; }

@keyframes spiral {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.8); }
    100% { transform: rotate(360deg) scale(1); }
}`,

crystal:`
.crystal {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 86.6px solid #9b59b6;
    position: relative;
    animation: crystalGrow 3s ease-in-out infinite;
}

.crystal::before,
.crystal::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 43.3px solid #8e44ad;
}

@keyframes crystalGrow {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
}`,

liquid_button:`
.liquid-button {
    position: relative;
    padding: 15px 30px;
    background: #3498db;
    border-radius: 4px;
    color: white;
    overflow: hidden;
}

.liquid-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-100%, -50%) skewX(-15deg);
    animation: liquidFlow 2s ease-in-out infinite;
}

@keyframes liquidFlow {
    100% { transform: translate(100%, -50%) skewX(-15deg); }
}`,

matrix:`
.matrix-container {
    width: 100px;
    height: 150px;
    background: #000;
    position: relative;
    overflow: hidden;
}

.matrix-column {
    position: absolute;
    top: -100%;
    color: #0f0;
    font-family: monospace;
    font-size: 12px;
    line-height: 1.2;
    white-space: nowrap;
}

.matrix-column span {
    display: block;
    animation: fadeInOut 0.5s infinite alternate;
}

.matrix-column:nth-child(1) { left: 20%; animation: matrixRain 3s linear infinite; animation-delay: 0s; }
.matrix-column:nth-child(2) { left: 40%; animation: matrixRain 2.5s linear infinite; animation-delay: -0.5s; }
.matrix-column:nth-child(3) { left: 60%; animation: matrixRain 3s linear infinite; animation-delay: -1s; }
.matrix-column:nth-child(4) { left: 80%; animation: matrixRain 2.5s linear infinite; animation-delay: -1.5s; }

@keyframes matrixRain {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(500%); }
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}`,
lightning:`
.lightning {
    width: 4px;
    height: 100px;
    background: #f1c40f;
    position: relative;
    transform-origin: top;
    animation: lightning 1.5s ease-out infinite;
}

@keyframes lightning {
    0% { 
        transform: scaleY(0) translateX(0);
        opacity: 0;
    }
    5% {
        transform: scaleY(1) translateX(10px);
        opacity: 1;
    }
    10% {
        transform: scaleY(1) translateX(-8px);
        opacity: 1;
    }
    15% {
        transform: scaleY(1) translateX(5px);
        opacity: 0.8;
    }
    20%, 100% {
        transform: scaleY(0) translateX(0);
        opacity: 0;
    }
}`,

black_hole:`
.black-hole {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #000 40%, transparent 70%);
    position: relative;
    animation: blackHolePulse 3s ease-in-out infinite;
}

.black-hole::before {
    content: '';
    position: absolute;
    inset: -20px;
    border: 2px solid #444;
    border-radius: 50%;
    animation: blackHoleOrbit 2s linear infinite;
}

@keyframes blackHolePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

@keyframes blackHoleOrbit {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.5); }
    100% { transform: rotate(360deg) scale(1); }
}`,

dna_helix:`
.dna-helix {
    width: 60px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
}

.strand-1, .strand-2 {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: rotate 4s linear infinite;
}

.base {
    position: absolute;
    width: 10px;
    height: 4px;
    background: #3498db;
    left: 25px;
}

.strand-2 .base {
    background: #e74c3c;
}

@keyframes rotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}`,

firework:`
.firework {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: relative;
    animation: launch 2s ease-out infinite;
}

.spark {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: explode 0.5s ease-out forwards;
}

@keyframes launch {
    0% { 
        transform: translateY(200px);
        background: #f1c40f;
    }
    50% { 
        transform: translateY(0);
        background: #e74c3c;
    }
    55% {
        transform: translateY(0);
        opacity: 1;
    }
    60%, 100% {
        transform: translateY(0);
        opacity: 0;
    }
}`,

quantum_particle:`
.quantum-particle {
    width: 20px;
    height: 20px;
    background: #9b59b6;
    border-radius: 50%;
    position: relative;
    animation: quantum 4s linear infinite;
}

.probability-cloud {
    position: absolute;
    inset: -10px;
    border: 2px solid rgba(155, 89, 182, 0.3);
    border-radius: 50%;
    animation: probabilityWave 2s ease-in-out infinite;
}

@keyframes quantum {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(0.5) rotate(90deg); opacity: 0.5; }
    50% { transform: scale(1.5) rotate(180deg); }
    75% { transform: scale(0.8) rotate(270deg); opacity: 0.8; }
}

@keyframes probabilityWave {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(2); opacity: 0; }
}`,

weather_system:`
.weather-system {
    width: 100px;
    height: 100px;
    position: relative;
}

.cloud {
    position: absolute;
    width: 60px;
    height: 20px;
    background: #ecf0f1;
    border-radius: 20px;
    animation: cloudFloat 4s ease-in-out infinite;
}

.rain {
    position: absolute;
    width: 2px;
    height: 20px;
    background: #3498db;
    animation: rainfall 1s linear infinite;
}

@keyframes cloudFloat {
    0%, 100% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(20px) translateY(-10px); }
}

@keyframes rainfall {
    0% { transform: translateY(-20px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(80px); opacity: 0; }
}`,

cellular_automation:`
.cell-grid {
    display: grid;
    grid-template-columns: repeat(5, 20px);
    gap: 2px;
}

.cell {
    width: 20px;
    height: 20px;
    background: #2ecc71;
    animation: cellulate 2s linear infinite;
}

.cell:nth-child(2n) {
    animation-delay: 0.5s;
}

.cell:nth-child(3n) {
    animation-delay: 1s;
}

@keyframes cellulate {
    0%, 100% { transform: scale(1); background: #2ecc71; }
    50% { transform: scale(0.8); background: #27ae60; }
}`,
magnetic_field:`
.magnetic-field {
    width: 150px;
    height: 150px;
    position: relative;
}

.field-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3498db, transparent);
    animation: fieldFlow 3s ease-in-out infinite;
}

@keyframes fieldFlow {
    0% { transform: rotate(0deg) translateY(0) scaleX(0.8); opacity: 0; }
    50% { transform: rotate(180deg) translateY(20px) scaleX(1.2); opacity: 1; }
    100% { transform: rotate(360deg) translateY(0) scaleX(0.8); opacity: 0; }
}`,

supernova:`
.supernova {
    width: 10px;
    height: 10px;
    background: #f1c40f;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: supernovaCore 4s ease-out infinite;
    transform-origin: center;
}

.shockwave {
    position: absolute;
    inset: -10px;
    border: 2px solid #e74c3c;
    border-radius: 50%;
    animation: shockwaveExpand 4s ease-out infinite;
}

@keyframes supernovaCore {
    0% { transform: translate(-50%, -50%) scale(1); background: #f1c40f; }
    40% { transform: translate(-50%, -50%) scale(1.5); background: #e74c3c; }
    50% { transform: translate(-50%, -50%) scale(2); background: #fff; opacity: 1; }
    60% { transform: translate(-50%, -50%) scale(0.1); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
}

@keyframes shockwaveExpand {
    0% { 
        transform: scale(1); 
        opacity: 1; 
    }
    100% { 
        transform: scale(8); 
        opacity: 0; 
    }
}
`,

time_dilation:`
.time-warp {
    width: 100px;
    height: 100px;
    background: conic-gradient(from 0deg, #3498db, #2ecc71, #e74c3c, #3498db);
    border-radius: 50%;
    position: relative;
    animation: timeWarp 3s linear infinite;
}

.time-marker {
    position: absolute;
    width: 4px;
    height: 50%;
    background: #fff;
    left: 50%;
    transform-origin: bottom;
    animation: timeDilation 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes timeWarp {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes timeDilation {
    0%, 100% { transform: rotate(0deg) scaleY(1); }
    50% { transform: rotate(180deg) scaleY(0.5); }
}`,
};

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const animationType = card.dataset.animation;
        codeElement.textContent = animationCode[animationType];
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(codeElement.textContent);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy Code';
    }, 2000);
});

 