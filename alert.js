
  // ===== CTF-THEMED DISCORD INVITE ===== //
  document.body.insertAdjacentHTML('beforeend', `
    <div id="ctfModal" style="
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(10,15,10,0.95);
      display:none;justify-content:center;align-items:center;
      z-index:9999;font-family:'Courier New', monospace;
    ">
      <!-- Main Terminal Container -->
      <div style="
        background:rgba(16, 16, 16, 0.9);color:#e0e0e0;
        border:1px solid rgba(42, 42, 42, 0.8);width:90%;
        max-width:600px;border-radius:6px;box-shadow:0 10px 20px rgba(0,0,0,0.3);
        overflow:hidden;
      ">
        <!-- Terminal Header -->
        <div style="
          background-color:#2d2d2d;padding:0.5rem 1rem;
          display:flex;align-items:center;
        ">
          <div style="display:flex;gap:8px;margin-right:1rem;">
            <span style="width:12px;height:12px;border-radius:50%;background-color:#ff5f56;"></span>
            <span style="width:12px;height:12px;border-radius:50%;background-color:#ffbd2e;"></span>
            <span style="width:12px;height:12px;border-radius:50%;background-color:#27c93f;"></span>
          </div>
          <div style="color:#a0a0a0;font-size:0.9rem;">terminal@ctf:~</div>
        </div>
        
        <!-- Terminal Content -->
        <div style="padding:1.5rem;">
          <div style="margin-bottom:1rem;">
            <span style="color:#33ff33;margin-right:0.5rem;">$</span>
            <span id="typingCmd"></span>
            <span id="blinkingCursor" style="display:inline-block;width:0.6rem;height:1rem;background-color:#33ff33;margin-left:1px;animation:blink 1s step-end infinite;"></span>
          </div>
          
          <div id="commandOutput" style="margin:0.5rem 0 1rem 1.5rem;">
            <div>Initializing Discord connection protocol...</div>
          </div>
          
          <!-- Feature List -->
          <div style="
            display:grid;grid-template-columns:1fr 1fr;gap:15px;
            margin:2rem 0;padding:1rem;background:rgba(18, 18, 18, 0.8);
            border:1px solid rgba(42, 42, 42, 0.8);border-radius:4px;
          ">
            <div style="display:flex;align-items:center;">
              <span style="color:#33ff33;margin-right:10px;">•</span>
              <span>Daily CTF challenges</span>
            </div>
            <div style="display:flex;align-items:center;">
              <span style="color:#33ff33;margin-right:10px;">•</span>
              <span>Expert discussions</span>
            </div>
            <div style="display:flex;align-items:center;">
              <span style="color:#33ff33;margin-right:10px;">•</span>
              <span>Flag submission</span>
            </div>
            <div style="display:flex;align-items:center;">
              <span style="color:#33ff33;margin-right:10px;">•</span>
              <span>Beginner resources</span>
            </div>
          </div>
          
          <!-- Discord Invite -->
          <div style="
            background:#121212;border:1px solid #2a2a2a;
            padding:1.5rem;margin-bottom:1.5rem;text-align:center;
            border-radius:4px;position:relative;overflow:hidden;
          ">
            <div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, transparent, rgba(0,255,65,0.05));pointer-events:none;"></div>
            <div style="font-size:0.9rem;color:#33ff33;margin-bottom:0.5rem;">DISCORD INVITE CODE</div>
            <div id="typingCode" style="font-size:1.5rem;font-weight:bold;letter-spacing:1px;color:#e0e0e0;">discord.gg/</div>
          </div>
          
          <!-- Buttons -->
          <div style="display:flex;justify-content:center;gap:15px;margin-top:1rem;">
            <button id="ctfJoinBtn" style="
              position:relative;display:inline-block;padding:10px 30px;
              color:#e0e0e0;text-transform:uppercase;letter-spacing:2px;
              text-decoration:none;font-size:1rem;overflow:hidden;
              transition:0.2s;background-color:transparent;border:none;
              font-family:'Courier New';cursor:pointer;
            ">
              <span style="position:absolute;display:block;"></span>
              <span style="position:absolute;display:block;"></span>
              <span style="position:absolute;display:block;"></span>
              <span style="position:absolute;display:block;"></span>
              Join Server
            </button>
            <button id="ctfCloseBtn" style="
              position:relative;display:inline-block;padding:10px 30px;
              color:#e0e0e0;text-transform:uppercase;letter-spacing:2px;
              text-decoration:none;font-size:1rem;overflow:hidden;
              transition:0.2s;background-color:transparent;border:none;
              font-family:'Courier New';cursor:pointer;
            ">
              <span style="position:absolute;display:block;"></span>
              <span style="position:absolute;display:block;"></span>
              <span style="position:absolute;display:block;"></span>
              <span style="position:absolute;display:block;"></span>
              Close
            </button>
          </div>
        </div>
      </div>
      
      <!-- Style Block -->
      <style>
        @keyframes blink { 0%, 50% { opacity:1; } 51%, 100% { opacity:0; } }
        
        #ctfJoinBtn:hover { color:#0a0a0a; background:#00ff41; box-shadow:0 0 10px #00ff41, 0 0 40px #00ff41, 0 0 80px #00ff41; transition-delay:0.1s; }
        #ctfJoinBtn span:nth-child(1) { top:0; left:-100%; width:100%; height:2px; background:linear-gradient(90deg,transparent,#00ff41); }
        #ctfJoinBtn:hover span:nth-child(1) { left:100%; transition:0.5s; }
        #ctfJoinBtn span:nth-child(2) { top:-100%; right:0; width:2px; height:100%; background:linear-gradient(180deg,transparent,#00ff41); }
        #ctfJoinBtn:hover span:nth-child(2) { top:100%; transition:0.5s; transition-delay:0.125s; }
        #ctfJoinBtn span:nth-child(3) { bottom:0; right:-100%; width:100%; height:2px; background:linear-gradient(270deg,transparent,#00ff41); }
        #ctfJoinBtn:hover span:nth-child(3) { right:100%; transition:0.5s; transition-delay:0.25s; }
        #ctfJoinBtn span:nth-child(4) { bottom:-100%; left:0; width:2px; height:100%; background:linear-gradient(360deg,transparent,#00ff41); }
        #ctfJoinBtn:hover span:nth-child(4) { bottom:100%; transition:0.5s; transition-delay:0.375s; }
        
        #ctfCloseBtn:hover { color:#0a0a0a; background:#0084ff; box-shadow:0 0 10px #0084ff, 0 0 40px #0084ff, 0 0 80px #0084ff; transition-delay:0.1s; }
        #ctfCloseBtn span:nth-child(1) { top:0; left:-100%; width:100%; height:2px; background:linear-gradient(90deg,transparent,#0084ff); }
        #ctfCloseBtn:hover span:nth-child(1) { left:100%; transition:0.5s; }
        #ctfCloseBtn span:nth-child(2) { top:-100%; right:0; width:2px; height:100%; background:linear-gradient(180deg,transparent,#0084ff); }
        #ctfCloseBtn:hover span:nth-child(2) { top:100%; transition:0.5s; transition-delay:0.125s; }
        #ctfCloseBtn span:nth-child(3) { bottom:0; right:-100%; width:100%; height:2px; background:linear-gradient(270deg,transparent,#0084ff); }
        #ctfCloseBtn:hover span:nth-child(3) { right:100%; transition:0.5s; transition-delay:0.25s; }
        #ctfCloseBtn span:nth-child(4) { bottom:-100%; left:0; width:2px; height:100%; background:linear-gradient(360deg,transparent,#0084ff); }
        #ctfCloseBtn:hover span:nth-child(4) { bottom:100%; transition:0.5s; transition-delay:0.375s; }
      </style>
    </div>
  `);

  // ===== TYPING ANIMATIONS ===== //
  const typeText = (element, text, speed, callback) => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        if (callback) callback();
      }
    }, speed);
  };

  // ===== BUTTON FUNCTIONALITY ===== //
  document.getElementById('ctfJoinBtn').onclick = function() {
    const cmdElement = document.getElementById('typingCmd');
    const outputElement = document.getElementById('commandOutput');
    
    cmdElement.textContent = '';
    outputElement.innerHTML = '<div>Establishing secure connection to Discord...</div>';
    
    typeText(cmdElement, './connect --protocol=discord --security=aes256', 50, () => {
      setTimeout(() => {
        outputElement.innerHTML += '<div style="color:#33ff33">Connection successful! Redirecting...</div>';
        setTimeout(() => {
          window.open('https://discord.gg/ysSyBeqVcW', '_blank');
          document.getElementById('ctfModal').style.display = 'none';
        }, 1000);
      }, 1000);
    });
  };

  document.getElementById('ctfCloseBtn').onclick = function() {
    const cmdElement = document.getElementById('typingCmd');
    const outputElement = document.getElementById('commandOutput');
    
    cmdElement.textContent = '';
    outputElement.innerHTML = '<div>Terminating connection sequence...</div>';
    
    typeText(cmdElement, './shutdown --abort', 50, () => {
      setTimeout(() => {
        outputElement.innerHTML += '<div style="color:#ff003c">Connection terminated by user</div>';
        setTimeout(() => {
          document.getElementById('ctfModal').style.display = 'none';
        }, 800);
      }, 800);
    });
  };

  // ===== SHOW MODAL ===== //
  setTimeout(() => {
    document.getElementById('ctfModal').style.display = 'flex';
    
    // Start typing animations
    typeText(document.getElementById('typingCmd'), './init_discord_invite', 50, () => {
      typeText(document.getElementById('typingCode'), 'ysSyBeqVcW', 100);
    });
  }, 1500);
