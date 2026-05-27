#!/bin/bash
clear

RED='\033[1;31m'
NC='\033[0m'

echo -e "${RED}=======================================================${NC}"
echo -e "${RED}    🔥 RUENYAI HUB INSTAGRAM MATRIX MASTER TOOL 🔥    ${NC}"
echo -e "${RED}=======================================================${NC}"
sleep 0.5
echo -e "${RED}[*] อัปเดต Core Package และตรวจเซ็ต Node.js...${NC}"

if [ -f /data/data/com.termux/files/usr/bin/pkg ]; then
    pkg update -y && pkg install nodejs -y
    BIN_DIR="/data/data/com.termux/files/usr/bin"
else
    sudo apt update && sudo apt install -y nodejs npm
    BIN_DIR="/usr/local/bin"
fi

echo -e "\n${RED}[*] กำลังลง Library สีสัน แดง-ดำ สไตล์แฮกเกอร์ดาร์กเว็บ...${NC}"
npm install

# ผูกคำสั่งควบคุมระบบลัด
echo -e "#!/bin/sh\nnode $(pwd)/exe.js \"\$@\"" > "$BIN_DIR/exe.js"
chmod +x "$BIN_DIR/exe.js"
echo -e "#!/bin/sh\nnode $(pwd)/exe.js \"\$@\"" > "$BIN_DIR/OOPP"
chmod +x "$BIN_DIR/OOPP"
echo -e "#!/bin/sh\nnode $(pwd)/exe.js \"\$@\"" > "$BIN_DIR/OOPP2"
chmod +x "$BIN_DIR/OOPP2"

echo -e "\n${RED}[✓] SUCCESS: อัพเกรดระบบ Ruenyai-IG-Automation สู่ระดับสูงสุดเรียบร้อย!${NC}"
