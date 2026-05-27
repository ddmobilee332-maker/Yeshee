import readline from 'readline';
import si from 'systeminformation';
import chalk from 'chalk';
import gradient from 'gradient-string';
import Table from 'cli-table3';
import { simulateIGCreation, simulateIGFollow } from './utils.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const redDarkGrad = gradient(['#ff0000', '#990000', '#220000', '#111111']);
const bloodRed = chalk.hex('#ff0000');
const darkGray = chalk.hex('#555555');

async function showDashboard() {
    console.clear();
    
    const logo = `
    ██████╗ ██╗   ██╗███████╗███╗   ██╗██╗   ██╗ █████╗ ██╗    ██╗  ██╗██╗   ██╗██████╗ 
    ██╔══██╗██║   ██║██╔════╝████╗  ██║╚██╗ ██╔╝██╔══██╗██║    ██║  ██║██║   ██║██╔══██╗
    ██████╔╝██║   ██║█████╗  ██╔██╗ ██║ ╚████╔╝ ███████║██║    ███████║██║   ██║██████╔╝
    ██╔══██╗██║   ██║██╔══╝  ██║╚██╗██║  ╚██╔╝  ██╔══██║██║    ██╔══██║██║   ██║██╔══██╗
    ██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██║██║    ██║  ██║╚██████╔╝██████╔╝
    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ 
                      [ INSTAGRAM BLACK-MATRIX PANEL V3.0 ]
    `;
    
    console.log(redDarkGrad(logo));
    console.log(bloodRed(` ╔════════════════════════════════════════════════════════════════════════════════╗`));
    console.log(` ║ ${bloodRed(' [!] WARNING: SYSTEM LOADS INSTAGRAM AUTOMATION BINDINGS (SIMULATION NODE)')}  ║`);
    console.log(bloodRed(` ╚════════════════════════════════════════════════════════════════════════════════╝\n`));

    const osInfo = await si.osInfo();
    const cpu = await si.cpu();
    const mem = await si.mem();
    
    const sysTable = new Table({
        chars: { 'top': '═' , 'top-mid': '┯' , 'top-left': '┏' , 'top-right': '┓'
               , 'bottom': '═' , 'bottom-mid': '┷' , 'bottom-left': '┗' , 'bottom-right': '┛'
               , 'left': '┃' , 'left-mid': '┠' , 'mid': '─' , 'mid-mid': '┼'
               , 'right': '┃' , 'right-mid': '┨' , 'middle': '│' },
        head: [bloodRed('🟥 SYSTEM NODE'), bloodRed('🚨 HARDWARE LOG MATRIX')],
        colWidths: [25, 55]
    });

    sysTable.push(
        [bloodRed(' OS Platform'), chalk.white(`${osInfo.distro} (${osInfo.arch})`)],
        [bloodRed(' CPU Processor'), chalk.white(`${cpu.brand} @ ${cpu.speed}GHz`)],
        [bloodRed(' Memory Pool'), chalk.white(`${(mem.active / 1024 / 1024 / 1024).toFixed(2)} GB / ${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`)]
    );
    console.log(sysTable.toString() + '\n');

    const cmdTable = new Table({
        head: [bloodRed('⌨️ COMMAND'), bloodRed('📝 INSTAGRAM FUNCTION (ฟังก์ชันออโต้)')],
        colWidths: [20, 60]
    });
    cmdTable.push(
        [chalk.white('OOPP'), chalk.gray('สั่งสร้างบัญชี Instagram อัตโนมัติระบุจำนวนได้ (โชว์รหัสเรียงเลข)')],
        [chalk.white('OOPP2'), chalk.gray('สั่งระดมบอทติดตามลิงก์โปรไฟล์ Instagram เป้าหมายระบุจำนวนได้')],
        [chalk.white('exit'), chalk.gray('สั่งตัดการเชื่อมต่อระบบเซิฟเวอร์ปิดสคริปต์')]
    );
    console.log(bloodRed(' [ แผงควบคุมคำสั่งหลัก ]'));
    console.log(cmdTable.toString() + '\n');
    
    startCommandPrompt();
}

function startCommandPrompt() {
    rl.question(bloodRed('Ruenyai@IG-Matrix> '), async (input) => {
        const command = input.trim();

        if (command === 'OOPP' || command === 'oopp') {
            triggerAccountGenerator();
        } else if (command === 'OOPP2' || command === 'oopp2') {
            triggerFollowerInjector();
        } else if (command === 'exit') {
            console.log(bloodRed('\n🔌 [!] DISCONNECTED. TERMINATED ALL PROXIES.'));
            process.exit(0);
        } else {
            console.log(chalk.red(`❌ [ERROR] ไม่พบคำสั่งนี้! กรุณาพิมพ์ OOPP หรือ OOPP2 ตามตารางด้านบน`));
            startCommandPrompt();
        }
    });
}

function triggerAccountGenerator() {
    console.log(bloodRed('\n 🤖 [ MODE 1: INSTAGRAM AUTOMATION CREATOR ]'));
    rl.question(chalk.white(' 📊 ระบุจำนวนบัญชีไอจีที่ต้องการสร้าง -> '), async (countInput) => {
        const amount = parseInt(countInput.trim());
        if (isNaN(amount) || amount <= 0) {
            console.log(chalk.red(' ⚠️ กรุณากรอกจำนวนเป็นตัวเลขมากกว่า 0!'));
            return startCommandPrompt();
        }

        console.log(bloodRed(`\n ⚡ เริ่มการแฮกเกอร์ระบบสร้างไอจีจำนวน [ ${amount} บัญชี ] ผ่าน Virtual Gateway...`));
        console.log(darkGray(' -------------------------------------------------------------'));

        await simulateIGCreation(amount, (progress) => {
            console.log(
                ` [${bloodRed(progress.current)}/${progress.total}] ` +
                `${chalk.green('🟢 สร้างสำเร็จ')} -> ` +
                `ID: ${chalk.cyan(progress.username.padEnd(25))} | ` +
                `PASS: ${chalk.yellow(progress.password)}`
            );
        });

        console.log(darkGray(' -------------------------------------------------------------'));
        console.log(chalk.green(`\n [✓] SUCCESS: สร้างบัญชีและเก็บบันทึกข้อมูลลงฐานข้อมูลชั่วคราวครบถ้วน!`));
        startCommandPrompt();
    });
}

function triggerFollowerInjector() {
    console.log(bloodRed('\n 🚀 [ MODE 2: INSTAGRAM FOLLOWER INJECTOR (BOT NET) ]'));
    rl.question(chalk.white(' 🔗 วางลิงก์โปรไฟล์ไอจีเป้าหมาย -> '), (urlInput) => {
        const profileUrl = urlInput.trim();
        if (!profileUrl) {
            console.log(chalk.red(' ⚠️ ลิงก์ห้ามว่าง!'));
            return startCommandPrompt();
        }

        rl.question(chalk.white(' 📊 ต้องการยอดผู้ติดตามจำนวนเท่าไหร่ -> '), async (countInput) => {
            const amount = parseInt(countInput.trim());
            if (isNaN(amount) || amount <= 0) {
                console.log(chalk.red(' ⚠️ กรุณากรอกจำนวนเป็นตัวเลขมากกว่า 0!'));
                return startCommandPrompt();
            }

            console.log(bloodRed(`\n ⚡ กำลังระดมพลสคริปต์บอทเน็ตแฝงตัวกดติดตามเป้าหมาย [ ${amount} followers ]...`));
            
            await simulateIGFollow(profileUrl, amount, (progress) => {
                process.stdout.write(
                    `\r [${bloodRed(progress.current)}/${progress.total}] ` +
                    `${chalk.cyan('🛸 บอทยิงติดตาม ->')} ` +
                    `ไอดี @${chalk.gray(progress.botUser.padEnd(24))} เข้าสู่เป้าหมาย [@${chalk.yellow(progress.target)}]`
                );
            });

            console.log(chalk.green(`\n\n [✓] SUCCESS: ส่งยอดบอทติดตามไปยังผู้ใช้ [@${profileUrl}] ครบจำนวนเรียบร้อย!`));
            startCommandPrompt();
        });
    });
}

showDashboard();
