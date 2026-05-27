import { URL } from 'url';

const firstNames = ['shadow', 'ghost', 'cyber', 'phantom', 'dark', 'alpha', 'viper', 'neon', 'matrix', 'delta', 'omega', 'rebel', 'ruenyai'];
const lastNames = ['hacker', 'hunter', 'zero', 'void', 'strike', 'shade', 'glitch', 'overdrive', 'core', 'hub', 'x', '99', '2026'];

function generateRandomUsername() {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const num = Math.floor(Math.random() * 899 + 100);
    return `${first}_${last}${num}`;
}

// โหมด 1: ค่อยๆ สร้าง พร้อมสุ่มชื่อ และส่งรหัสผ่านเรียงเลข 1 2 3
export async function simulateIGCreation(amount, onProgress) {
    for (let i = 1; i <= amount; i++) {
        await new Promise(resolve => setTimeout(resolve, 1500)); // หน่วงเวลาเท่ๆ สมจริง
        const username = generateRandomUsername();
        const password = `Ruenyai${i.toString().padStart(3, '0')}`; // รหัสเรียงลำดับ Ruenyai001, Ruenyai002...
        
        onProgress({
            current: i,
            total: amount,
            username: username,
            password: password
        });
    }
}

// โหมด 2: สั่งบอทถล่มปั๊มยอดผู้ติดตามเข้าลิงก์โปรไฟล์
export async function simulateIGFollow(profileUrl, amount, onProgress) {
    let targetUser = 'UnknownTarget';
    try {
        if (!profileUrl.startsWith('http')) profileUrl = 'https://' + profileUrl;
        const parsed = new URL(profileUrl);
        const pathParts = parsed.pathname.split('/').filter(p => p.length > 0);
        if (pathParts.length > 0) targetUser = pathParts[0];
    } catch (e) {
        targetUser = profileUrl;
    }

    for (let i = 1; i <= amount; i++) {
        await new Promise(resolve => setTimeout(resolve, 100)); // ยิงตามรัวๆ ดุดัน
        onProgress({
            current: i,
            total: amount,
            target: targetUser,
            botUser: generateRandomUsername()
        });
    }
}
